import { Box, Typography } from "@mui/material";

import { Suspense } from "react";
import { CityWeather, CityWeatherSkeleton } from "~/app/components/CityWeather";
import { PageProps } from "~/app/lib/types/utils";
import { ImageStatus } from "../components/ImageStatus";
import { app } from "../lib/common";

type Props = PageProps<{}, { search: string }>;

export default async function Page({ searchParams: { search } }: Props) {
  return (
    <Box component="main">
      {search ? (
        <Suspense fallback={<CityWeatherSkeleton />}>
          <CityWeather cityName={search} />
        </Suspense>
      ) : (
        <Box>
          <Typography
            component="h1"
            variant="h3"
            textTransform="uppercase"
            mb={2}
          >
            {app.name}: Información del clima
          </Typography>
          <Typography variant="h5" mb={4}>
            Obtén información actualizada sobre el clima de cualquier ciudad.
            ¡Simplemente escribe el nombre de la ciudad y descubre cómo está el
            clima en este momento! Además, puedes guardar tus ciudades favoritas
            para acceder fácilmente a su pronóstico en cualquier momento.
          </Typography>
          <ImageStatus status="start" />
        </Box>
      )}
    </Box>
  );
}
