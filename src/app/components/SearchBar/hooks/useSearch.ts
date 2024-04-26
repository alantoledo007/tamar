import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FocusEventHandler, useEffect, useState } from "react";

export const useSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [value, setValue] = useState<string>();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value !== undefined) {
        search(value);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  useEffect(() => {
    setValue(undefined);
  }, [pathname]);

  const onFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    e.target.select();
  };

  const search = (value?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value && value.length > 0) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/?${params.toString()}`);
  };
  return {
    defaultValue: searchParams.get("search")?.toString() ?? "",
    onFocus,
    value,
    setValue,
  };
};
