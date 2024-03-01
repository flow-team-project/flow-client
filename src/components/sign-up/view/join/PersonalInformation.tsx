import { useMutation } from "@tanstack/react-query";
import SignUpLayout from "design/template/SignUpLayout";
import Input from "design/input/Input";
import { useSignUpStore } from "shared/sign-up/store";
import { useWidgetStore } from "shared/store";
import { users } from "connection/api/users";
import useNavigation from "hook/useNavigation";
import { useState } from "react";

export default function PersonalInformation() {
  const [nickname, setNickname] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");
  const [occupationId, setOccupationId] = useState<number>(4);
  const { email, password, selectedSkills, profileImageUrl, provider } = useSignUpStore();
  const navigate = useNavigation();

  const data = {
    email: "test13512137@test.com",
    password: "asdf1234",
    provider: "normal",
    nickname: "test1231412",
    introduction: "안녕하세요개발자입니다",
    skillIds: [1, 2, 3],
    occupationId: 2,
  };

  const formData = new FormData();
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  if (profileImageUrl) {
    formData.append("image", profileImageUrl); // profileImageUrl이 string형식이 아닌 File형식 이어야 함.
  } else {
    const file = new File([""], "/images/default.png");
    formData.append("image", file);
  }

  formData.append("member", blob);

  const { mutate, error, isError, isSuccess } = useMutation({
    mutationKey: ["user"],
    mutationFn: () => users.post(formData),
  });

  if (isError) {
    console.log("email", email, "password", password, "provider", provider, "nickname", nickname);
    console.log(error);
  }
  if (isSuccess) navigate("/sign-up/success");

  return (
    <SignUpLayout titles={["개인정보 입력"]} buttons={[["확인", mutate]]}>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="h-25 w-25 rounded-full bg-gray-400 " />
        <Input title="닉네임" onChange={[nickname, setNickname]} />
        <Input title="자기소개" onChange={[introduction, setIntroduction]} />
        {/* <Input title="직군선택" onChange={[occupationId, setOccupationId]} /> */}
      </div>
    </SignUpLayout>
  );
}
