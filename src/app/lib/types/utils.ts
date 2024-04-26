export type PageSearchParams = Record<string, string | string[]>;

export type PageProps<PARAMS = {}, SEARCH_PARAMS = PageSearchParams> = {
  params: PARAMS;
  searchParams: Partial<SEARCH_PARAMS>;
};
