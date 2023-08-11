import { useRecoilState } from "recoil";
import { usernameState } from "../../states/states";

export default function Compo2() {
  const [username, setUsername] = useRecoilState(usernameState);

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
}
