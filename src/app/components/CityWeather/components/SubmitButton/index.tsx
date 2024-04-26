"use client";

import { Star, StarBorderOutlined } from "@mui/icons-material";

import { ToggleButton } from "@mui/material";
import { useFormStatus } from "react-dom";

type Props = { isFavorite: boolean };

export function SubmitButton({ isFavorite }: Props) {
  const { pending } = useFormStatus();

  const text = isFavorite ? "Quitar de favoritos" : "Agregar a favoritos";

  return (
    <ToggleButton
      value={text}
      type="submit"
      aria-label={text}
      disabled={pending}
    >
      {isFavorite ? <Star color="warning" /> : <StarBorderOutlined />}
    </ToggleButton>
  );
}
