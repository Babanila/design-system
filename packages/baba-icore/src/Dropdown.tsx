import * as React  from "react";

export type DropdownProps = {
  value: string;
  label?: string;
  options: [];
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
        {options?.map((option: any) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}