"use client";
import { RecoilRoot } from "recoil";
import Compo1 from "./Compo1";
import Compo2 from "./Compo2";

export default function userName() {
  return (
    <RecoilRoot>
      <Compo1 />
      <Compo2 />
    </RecoilRoot>
  );
}
