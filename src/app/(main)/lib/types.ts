import type { Favorite } from "~/app/lib/types/favoriteFeature";

export type OnIsValidProps = {
  data: Favorite;
  favorites: Favorite[];
};
