import AxiosClient from "../config/axiosClient";
import { FetchClient } from "../config/fetchClient";

export async function FetchPeople(person: number) {
  return FetchClient(`/people/${person}`);
}

export async function AxiosPeople(person: number) {
  return AxiosClient.get(`/people/${person}`);
}
