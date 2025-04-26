import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function useSetParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function setParams(params: Record<string, string | number | boolean>) {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value.toString());
      } else {
        newParams.delete(key);
      }
    });

    replace(`${pathname}?${newParams.toString()}`);
  }

  return { setParams };
}
