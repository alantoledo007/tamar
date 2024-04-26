"use client";

import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import { Favorite } from "~/app/lib/types/favoriteFeature";

type Props = {
  data: Favorite;
};

export const FavoriteItem = ({ data: { id, name, country } }: Props) => {
  return (
    <Paper
      variant="elevation"
      elevation={1}
      component={Link}
      sx={(theme) => ({
        color: theme.palette.text.secondary,
        minHeight: 90,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        padding: 4,
        ":hover": {
          boxShadow: theme.shadows[4],
        },
      })}
      href={`/?search=${name}, ${country}`}
    >
      <Typography fontSize={20} component={"h4"}>
        {name} {country}
      </Typography>
    </Paper>
  );
};
