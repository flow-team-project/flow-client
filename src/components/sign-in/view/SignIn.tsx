import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { center, col, row } from "style/display";
import { contents } from "document/sign-up/platform";
import { login } from "api/sign-in/loginService";

import Input from "../../common/input";
import Button from "../../common/button";

export default function SignIn() {
  const [info, setInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { email, password } = info;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const onSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const status = await login({ email, password });
    if (status === 200) {
      alert("로그인 되었습니다.");
      navigate("/");
    } else if (status === 400) {
      alert("이메일 또는 비밀번호가 틀렸습니다.");
    } else if (status === 401) {
      alert("이 사이트의 회원이 아닙니다.");
    }
    setInfo({ email: "", password: "" });
  };
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <form className={`${col(2)} w-80`} onSubmit={onSubmitHandler}>
        <div className="text-2xl font-bold text-blue-600">로그인</div>
        <Input
          className="mt-2.5 block h-14 w-80 border"
          type="text"
          name="email"
          value={email}
          placeholder="이메일을 입력해주세요"
          onChange={onChange}
        />
        <Input
          className="mt-2.5 block h-14 w-80 border"
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력해주세요"
          onChange={onChange}
        />
        <Button className="mt-5 h-14 w-80  bg-black text-white" type="submit">
          로그인
        </Button>
      </form>
      <div className={`mt-10 ${center.colO(0)}`}>다른 계정으로 로그인하기</div>
      <div className={`mx-8 mt-2 ${row(5)}`}>
        {contents.map(({ image, title, bgColor, textColor }) => (
          <div className={`bg-${bgColor} ${textColor}`} key={title}>
            <img src={`/images/icons/${image}.png`} alt="sign-in" className="h-12 w-12" />
          </div>
        ))}
      </div>
      <div className={`mx-8 mt-5 ${row(2)}`}>
        <div>아직 계정이 없으신가요?</div>
        <a href="./sign-up" className="text-blue-600">
          가입하러 가기
        </a>
      </div>
    </div>
  );
}
