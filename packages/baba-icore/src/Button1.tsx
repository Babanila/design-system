import * as React from "react";

export interface Button1Props {
  children: React.ReactNode;
}

export function Button1(props: Button1Props) {
  return <button>{props.children}</button>;
}

Button1.displayName = "Button1";
