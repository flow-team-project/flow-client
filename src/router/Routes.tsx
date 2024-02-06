import { Home, Join, Layout, Qna, SignIn, SignUp, Success } from "components";
import { Route, Routes } from "react-router-dom";

import HelpPwPage from "components/help-pw/HelpPwPage";
import EmailAuthPage from "components/help-pw/EmailAuthPage";
import MyAccountPage from "components/myAccount/myAccountPage";
import DeleteAccountPage from "components/myAccount/deleteAccountPage";
import UpdateAccountPage from "components/myAccount/updateAccountPage";
import ChangePasswordPage from "components/myAccount/changePasswordPage";
import QuestionPage from "components/myAccount/questionPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/help-pw">
          <Route index element={<HelpPwPage />} />
          <Route path="email-auth" element={<EmailAuthPage />} />
        </Route>
        <Route path="/mypage" element={<MyAccountPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
        <Route path="/update-account" element={<UpdateAccountPage />} />
        <Route path="/change-pw" element={<ChangePasswordPage />} />
        <Route path="/ask" element={<QuestionPage />} />
        <Route path="/sign-up">
          <Route index element={<SignUp />} />
          <Route path="join" element={<Join />} />
          <Route path="success" element={<Success />} />
        </Route>
        <Route path="qna" element={<Qna />} />
      </Route>
    </Routes>
  );
}
