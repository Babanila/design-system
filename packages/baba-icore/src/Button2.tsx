import * as React from "react";

export interface Button2Props {
  children: React.ReactNode;
}

export function Button2(props: Button2Props) {
  return <button>{props.children}</button>;
}

Button2.displayName = "Button2";
