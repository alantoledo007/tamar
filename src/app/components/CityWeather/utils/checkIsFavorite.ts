import { cookies } from "next/headers";
import { COOKIE_NAME } from "~/app/(main)/lib/common";
import type { Favorite } from "~/app/lib/types/favoriteFeature";

export const checkIsFavorite = (cityId: number) =>
  JSON.parse(cookies().get(COOKIE_NAME)?.value ?? "[]").some(
    (item: Favorite) => item.id === cityId
  );
