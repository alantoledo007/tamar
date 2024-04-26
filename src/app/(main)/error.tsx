"use client"; // Error components must be Client Components

import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { ImageStatus } from "../components/ImageStatus";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h4" mb={2}>
        Lo siento, parece que ha ocurrido un error. Por favor, inténtalo de
        nuevo más tarde.
      </Typography>
      <ImageStatus status="error" />
      <Button variant="contained" onClick={() => reset()}>
        Reintentar
      </Button>
    </Box>
  );
}
