import * as React from "react";

export interface TextProps {
  children: React.ReactNode;
}

export function Text(props: TextProps) {
  return <div>{props.children}</div>;
}

Text.displayName = "Button";
