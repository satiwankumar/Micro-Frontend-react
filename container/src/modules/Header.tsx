import React, { useEffect, useRef } from "react";
import { mount } from "header/HeaderComponent";
import useRouter from "../hooks/useRouter";
import { Observable } from "rxjs";

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    mount(ref.current, { navigate });
  }, []);

  return <div ref={ref} />;
};
