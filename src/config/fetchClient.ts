import { BASE_URL } from "../constants/api";

export async function FetchClient(
  endpoint: string,
  userConfigs: RequestInit = {}
) {
  const config: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...userConfigs,
  };

  return fetch(BASE_URL + endpoint, config).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject({ status: response.status });
    }
  });
}
