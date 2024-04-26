import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { weatherTranslates } from "~/app/lib/common";
import {
  WeatherItem as WeatherItemType,
  WeatherSuccess,
} from "~/app/lib/services/weather/types";
import { WeatherUtils } from "~/app/lib/utils/weather";

type Props = {
  item: WeatherItemType;
  data: WeatherSuccess;
};
export const WeatherItem = ({
  item: { id, main, description, icon },
  data,
}: Props) => {
  return (
    <Box
      key={id}
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
    >
      <Image
        width={176}
        height={176}
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt={description}
      />
      <Box>
        <Typography component="span" variant="h4" color="warning.main">
          {WeatherUtils.kelvinToCelsius(data.main.temp)}º C
        </Typography>
        <Typography component="h3" variant="h4">
          {weatherTranslates[main] ?? main}
        </Typography>
        <Typography variant="body1">
          {weatherTranslates[description] ?? description}
        </Typography>
      </Box>
    </Box>
  );
};
