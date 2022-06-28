import * as React from "react";

export interface Button3Props {
  children: React.ReactNode;
}

export function Button3(props: Button3Props) {
  return <button>{props.children}</button>;
}

Button3.displayName = "Button3";
