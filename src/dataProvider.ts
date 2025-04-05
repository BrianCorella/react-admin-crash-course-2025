/* eslint-disable prettier/prettier */
import jsonServerProvider from "ra-data-json-server";

export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL,
);
