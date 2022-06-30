import AxiosClient from "../config/axiosClient";
import { FetchClient } from "../config/fetchClient";

export async function FetchPlanets(planet: number) {
  return FetchClient(`/planets/${planet}`);
}

export async function AxiosPlanets(planet: number) {
  return AxiosClient.get(`/planets/${planet}`);
}
