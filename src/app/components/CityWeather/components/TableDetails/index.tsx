import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import moment from "moment-timezone";
import { app } from "~/app/lib/common";
import { WeatherSuccess } from "~/app/lib/services/weather/types";
import { WeatherUtils } from "~/app/lib/utils/weather";

type Props = {
  data: WeatherSuccess;
};

export const TableDetails = ({ data }: Props) => {
  return (
    <TableContainer>
      <Table size="small" aria-label="a dense table">
        <TableBody>
          <TableRow>
            <TableCell component="th">Temperatura</TableCell>
            <TableCell>
              {WeatherUtils.kelvinToCelsius(data.main.temp)}º C
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">Sensación térmica</TableCell>
            <TableCell>
              {WeatherUtils.kelvinToCelsius(data.main.feels_like)}º C
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">Máxima ~ Mínima</TableCell>
            <TableCell>
              {WeatherUtils.kelvinToCelsius(data.main.temp_max)}º C ~{" "}
              {WeatherUtils.kelvinToCelsius(data.main.temp_min)}º C
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">Velocidad del viento</TableCell>
            <TableCell>{WeatherUtils.mtsToKmh(data.wind.speed)} Km/h</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">Humedad</TableCell>
            <TableCell>{data.main.humidity}%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">Amanecer</TableCell>
            <TableCell>
              {moment(data.sys.sunrise * 1000)
                .tz(app.timezone)
                .format("HH:mm:ss")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">Atardecer</TableCell>
            <TableCell>
              {moment(data.sys.sunset * 1000)
                .tz(app.timezone)
                .format("HH:mm:ss")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
