import { center, col, row } from "style/display";
import { useSignUpStore } from "shared/sign-up/store";
import { useState } from "react";
import { deleteAccount } from "connection/api/login";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Button } from "design";
import { removeCookie } from "util/cookies";
import Input from "components/common/input";

export default function DeleteAccount() {
  const {
    setAuthToken,
    signUpData: { nickname },
  } = useSignUpStore();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };
  const { mutate } = useMutation({
    mutationFn: () => deleteAccount(password),
    onSuccess: () => {
      alert("회원 탈퇴 되었습니다.");
      setAuthToken("");
      removeCookie("accessToken");
      navigate("/");
    },
  });

  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className={`${col(2, 80)}`}>
        <div>회원탈퇴</div>
        <div>{nickname}님 정말 탈퇴하시겠습니까?</div>
        <Input
          className="mt-2.5 block h-14 w-80 border"
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력해주세요"
          onChange={onChange}
        />
        <Button title="탈퇴하기" onClick={mutate} options={{ size: "full" }} />
      </div>
    </div>
  );
}
