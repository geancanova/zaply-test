"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface SelectProps {
  label?: string;
  filter: string;
  options:
    | {
        value: string;
        label: string;
      }[]
    | string[];
  placeholder?: string;
}

export default function Select({
  label,
  filter,
  options,
  placeholder = "Selecione uma opção",
}: SelectProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(filter, value);
    } else {
      params.delete(filter);
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      {label && <label className="text-sm">{label}</label>}
      <select
        defaultValue={searchParams.get(filter)?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="bg-[#fefefe] border border-gray-200 text-sm rounded focus:ring-gray-300 focus:border-gray-300 block w-full p-2.5"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => {
          if (typeof option === "string") {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          } else {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
}
