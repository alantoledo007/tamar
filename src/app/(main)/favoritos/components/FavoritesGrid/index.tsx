import { Box, Grid, Typography } from "@mui/material";
import { cookies } from "next/headers";
import { COOKIE_NAME } from "~/app/(main)/lib/common";
import { ImageStatus } from "~/app/components/ImageStatus";
import { Favorite } from "~/app/lib/types/favoriteFeature";
import { FavoriteItem } from "../FavoriteItem";

export const FavoritesGrid = () => {
  const favorites: Favorite[] = JSON.parse(
    cookies().get(COOKIE_NAME)?.value ?? "[]"
  );

  return (
    <Box>
      {favorites.length === 0 && (
        <>
          <Typography variant="h5" mb={4}>
            Aquí encontrarás tus ciudades favoritas. ¿Qué estás esperando para
            buscar una ciudad y guardarla en tus favoritos?
          </Typography>
          <ImageStatus status="empty" />
        </>
      )}
      <Grid container spacing={4}>
        {favorites.map((data) => (
          <Grid item xs={12} md={6} xl={4} key={String(data.id)}>
            <FavoriteItem data={data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
