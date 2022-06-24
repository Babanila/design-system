import * as React  from "react";

export type DropdownProps = {
  value: Record<any, any>;
  label?: string;
  options: Record<any, any>[] | [];
  onChange?: () => void;
}

export const Dropdown = ({
  label,
  value,
  options,
  onChange,
}: DropdownProps) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options?.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}