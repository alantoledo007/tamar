import { Box, Typography } from "@mui/material";
import { Metadata } from "next";
import { Suspense } from "react";
import { FavoritesGrid } from "./components/FavoritesGrid";

export const metadata: Metadata = {
  title: "Favoritos",
};

export default function Page() {
  return (
    <Box component="main">
      <Typography component="h1" variant="h3" textTransform="uppercase" mb={2}>
        Favoritos
      </Typography>
      <Suspense>
        <FavoritesGrid />
      </Suspense>
    </Box>
  );
}
