import {
  Box,
  Card,
  CardContent,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import { create, destroy } from "~/app/(main)/lib/actions";
import { WeatherService } from "~/app/lib/services/weather";
import { NotFound } from "./components/NotFound";
import { SubmitButton } from "./components/SubmitButton";
import { TableDetails } from "./components/TableDetails";
import { WeatherItem } from "./components/WeatherItem";
import { checkIsFavorite } from "./utils/checkIsFavorite";

export type Props = {
  cityName: string;
};

export const CityWeather = async ({ cityName }: Props) => {
  const { data } = await WeatherService.getByCityName(cityName);

  if (data.cod === "404") {
    return <NotFound />;
  }

  if (data.cod !== 200) {
    throw "Error inesperado";
  }

  const isFavorite = checkIsFavorite(data.id);

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: "column", md: "row-reverse" }}
        >
          <Box
            component="form"
            action={isFavorite ? destroy : create}
            sx={{ ml: "auto" }}
          >
            <input type="hidden" name="id" value={data.id} />
            <input type="hidden" name="name" value={data.name} />
            <input type="hidden" name="country" value={data.sys.country} />
            <SubmitButton isFavorite={isFavorite} />
          </Box>

          <Typography component="h2" variant="h3" gutterBottom>
            {data.name} {data.sys.country}
          </Typography>
        </Box>

        <Divider />

        {data.weather.map((item) => (
          <WeatherItem item={item} key={item.id} data={data} />
        ))}
      </CardContent>
      <TableDetails data={data} />
    </Card>
  );
};

export const CityWeatherSkeleton = () => {
  return (
    <Box>
      <Skeleton animation="wave" sx={{ mb: 2 }} variant="rounded" height={70} />
      <Box
        display="flex"
        gap={2}
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
      >
        <Skeleton animation="wave" variant="rounded" width={200} height={120} />
        <Box width={200}>
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "3rem" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
        </Box>
      </Box>
      <Skeleton
        animation="wave"
        sx={{ mt: 2 }}
        variant="rounded"
        height={120}
      />
    </Box>
  );
};
