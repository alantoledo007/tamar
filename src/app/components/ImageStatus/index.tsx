import Image from "next/image";
import errorSvg from "~/app/assets/error.svg";
import favriteEmptySvg from "~/app/assets/favoriteEmpty.svg";
import notFoundSvg from "~/app/assets/notFound.svg";
import weaterSvg from "~/app/assets/weather.svg";

type Status = "not-found" | "start" | "empty" | "error";

type Props = {
  status: Status;
};

const imageForStatus: Record<Status, any> = {
  "not-found": notFoundSvg,
  start: weaterSvg,
  empty: favriteEmptySvg,
  error: errorSvg,
};

export const ImageStatus = ({ status }: Props) => {
  return (
    <Image
      alt="Icono"
      src={imageForStatus[status]}
      width={500}
      height={500}
      objectFit="center"
      objectPosition="center"
      style={{ width: "100%", maxWidth: "500px", height: "auto" }}
    />
  );
};
