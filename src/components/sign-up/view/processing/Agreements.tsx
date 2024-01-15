import { useState } from "react";
import LineBreak from "design/LineBreak";
import { agreements } from "asset/sign-up/agreements";
import { between, col, row } from "style/display";
import Button from "design/widget/Button";
import { useWidgetStore } from "shared/store";
import SignUpLayout from "design/layout/sign-up/SignUpLayout";

export default function Agreements() {
  const { setView } = useWidgetStore();
  return (
    <SignUpLayout titles={["약관 동의가", "필요해요"]}>
      <div className={col(5)}>
        {agreements.map(({ title, contents }) => (
          <Agreement title={title} contents={contents} key={title} />
        ))}
      </div>
      <div className={`${col(5)} w-full `}>
        <div className={`${row(4)} rounded-md border-2 px-6 py-3`}>
          <button className="h-6 w-6 border-2" />
          <div>만 14세 이상입니다.</div>
        </div>
        <Button
          title="다음으로"
          onClick={() => {
            setView("join");
          }}
        />
      </div>
    </SignUpLayout>
  );
}

function Agreement({ title, contents }: { title: string; contents: string[] | null }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={`${between.row} text-lg`}>
        <div className={`${row(2)} items-center`}>
          <button className="h-6 w-6 border-2" />
          <div>{title}</div>
        </div>
        {contents ? <button onClick={() => setOpen(!open)}>{">"}</button> : null}
      </div>
      {contents ? (
        <div
          className={`${
            open ? "h-12 border-2 p-2 " : "h-0"
          } overflow-y-scroll text-xs duration-500`}
        >
          <LineBreak contents={contents} />
        </div>
      ) : null}
      {contents === null ? <hr className="mt-5 h-px w-full bg-black/50" /> : null}
    </div>
  );
}
