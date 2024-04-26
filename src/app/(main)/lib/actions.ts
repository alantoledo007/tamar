"use server";

import { cookies } from "next/headers";
import { Favorite } from "~/app/lib/types/favoriteFeature";
import { COOKIE_NAME } from "./common";
import { OnIsValidProps } from "./types";

const getCookie = () => {
  return JSON.parse(cookies().get(COOKIE_NAME)?.value ?? "[]") as Favorite[];
};

const isValidString = (value: string) => {
  return value.replace(/ /g, "").length > 0;
};

const resolver = (
  formData: FormData,
  onIsValid: (props: OnIsValidProps) => void
) => {
  const name = formData.get("name")?.toString() ?? "";
  const country = formData.get("country")?.toString() ?? "";
  const id = parseInt(formData.get("id")?.toString() ?? "");

  if (isValidString(name) && isValidString(country) && !isNaN(id)) {
    onIsValid({ data: { name, id, country }, favorites: getCookie() });
  }
};

export async function create(formData: FormData) {
  resolver(formData, ({ data, favorites }) => {
    if (!favorites.some((item) => item.id === data.id)) {
      cookies().set({
        name: COOKIE_NAME,
        value: JSON.stringify([...favorites, data]),
        httpOnly: true,
        path: "/",
      });
    }
  });
}

export async function destroy(formData: FormData) {
  resolver(formData, ({ data, favorites }) => {
    console.log(favorites);
    cookies().delete(COOKIE_NAME);
    cookies().set({
      name: COOKIE_NAME,
      value: JSON.stringify(favorites.filter((city) => city.id !== data.id)),
      httpOnly: true,
      path: "/",
    });
  });
}
