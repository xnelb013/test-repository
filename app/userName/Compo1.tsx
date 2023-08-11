import { useRecoilValue } from "recoil";
import { usernameState } from "../../states/states";

export default function Compo1() {
  const username = useRecoilValue(usernameState);

  return (
    <div>
      <h1>Hello, {username}!</h1>
    </div>
  );
}
