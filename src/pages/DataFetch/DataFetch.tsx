import { useState, useEffect } from "react";
import { Container } from "../../components/Layout/Container";
import { Text } from "../../components/Layout/Text";
import { Title } from "../../components/Layout/Title";
import { AxiosPeople, FetchPeople } from "../../services/PeopleService";
import { AxiosPlanets, FetchPlanets } from "../../services/PlanetService";

export function DataFetch() {
  const [fetchBtn, setFetchBtn] = useState("");
  const [axiosBtn, setAxiosBtn] = useState("");
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [loadingAxios, setLoadingAxios] = useState(false);
  const [fetchEffect, setFetchEffect] = useState("");
  const [axiosEffect, setAxiosEffect] = useState("");

  useEffect(() => {
    Promise.all([FetchPeople(1), AxiosPeople(2)]).then((res) => {
      const [fetchRes, axiosRes] = res;
      setFetchEffect(fetchRes.name);
      setAxiosEffect(axiosRes.data.name);
    });
  }, []);

  return (
    <Container>
      <section className="fetch-useeffect">
        <Title>Data from initial loading:</Title>
        <div className="columns">
          <div className="fetch">
            <Text>FetchCLient data</Text>
            <pre>{JSON.stringify(fetchEffect)}</pre>
          </div>
          <div className="axios">
            <Text>AxiosClient data</Text>
            <pre>{JSON.stringify(axiosEffect)}</pre>
          </div>
        </div>
      </section>

      <section className="fetch-content">
        <div className="buttons">
          <button
            onClick={() => {
              setLoadingFetch(true);
              FetchPlanets(1)
                .then((res) => setFetchBtn(res.name))
                .catch((err) => console.log(err?.status))
                .finally(() => setLoadingFetch(false));
            }}
          >
            FetchClient
          </button>
          <button
            onClick={() => {
              setLoadingAxios(true);
              AxiosPlanets(1)
                .then((res) => setAxiosBtn(res.data.name))
                .catch((err) => console.log(err?.response?.status))
                .finally(() => setLoadingAxios(false));
            }}
          >
            AxiosClient
          </button>
        </div>
        <Title>Data from button press:</Title>
        <div className="columns">
          <div className="fetch">
            <Text>FetchCLient data</Text>
            {loadingFetch ? (
              <h3>Loading. . .</h3>
            ) : (
              <pre>{JSON.stringify(fetchBtn)}</pre>
            )}
          </div>
          <div className="axios">
            <Text>AxiosClient data</Text>
            {loadingAxios ? (
              <h3>Loading. . .</h3>
            ) : (
              <pre>{JSON.stringify(axiosBtn)}</pre>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}
