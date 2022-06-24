import * as React  from "react";

export type CheckboxProps = {
  value?: boolean;
  label?: string;
  onChange?: () => void;
}

export const Checkbox = ({
  label,
  value,
  onChange,
}: CheckboxProps) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
}