import { Box, Typography } from "@mui/material";
import { ImageStatus } from "~/app/components/ImageStatus";

export const NotFound = () => {
  return (
    <Box>
      <Typography component="h1" variant="h4" mb={2}>
        Ciudad no encontrada
      </Typography>
      <Typography variant="h5" mb={4}>
        Por favor, verifica que hayas escrito correctamente el nombre de la
        ciudad.
      </Typography>
      <ImageStatus status="not-found" />
    </Box>
  );
};
