import { DateField } from "@prismicio/client";

export const formatDate = (date: DateField) => {
  const dateCut = date?.split("-");

  const year = (dateCut && dateCut[0]) || new Date().getFullYear();
  const month = (dateCut && `${dateCut[1]}/`) || "";
  const day = (dateCut && `${dateCut[2]}/`) || "";

  return day + month + year;
};
