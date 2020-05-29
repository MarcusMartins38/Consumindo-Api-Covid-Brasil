import React, { useState, useEffect, useCallback } from "react";

import { Header, BoxInfo, Body, Container } from "./style";
import api from "../../services/api";

const Home = () => {
  const [selectChange, setSelectChange] = useState("Sao Paulo");
  const [country, setCountry] = useState([]);
  const [countrySelect, setCountrySelect] = useState({});

  const [brazilConfirmation, setBrazilConfirmation] = useState();
  const [brazilRecovered, setBrazilRecovered] = useState();
  const [brazilDeath, setBrazilDeaths] = useState();

  useEffect(() => {
    api.get("confirmed").then((response) => {
      const onlyBrazil = response.data.filter(
        (data) => data.countryRegion == "Brazil"
      );

      const totalConfirmed = onlyBrazil.reduce(
        (t, data) => data.confirmed + t,
        0
      );

      const totalDeaths = onlyBrazil.reduce((t, data) => data.deaths + t, 0);

      setBrazilConfirmation(totalConfirmed);
      setBrazilDeaths(totalDeaths);

      const attibutesFiltred = onlyBrazil.map((state) => {
        const fewAttributes = {
          provinceState: state.provinceState,
          confirmed: state.confirmed,
          recovered: state.recovered,
          deaths: state.deaths,
          lastUpdate: state.lastUpdate,
        };

        return fewAttributes;
      });

      setCountry(attibutesFiltred);
    });
  }, []);

  useEffect(() => {
    api.get("recovered").then((response) => {
      const total = response.data.filter(
        (data) => data.countryRegion == "Brazil"
      );

      setBrazilRecovered(total[0].recovered);
    });
  }, []);

  useEffect(() => {
    setCountrySelect(
      country.find((state) => state.provinceState === selectChange)
    );
  }, [country, selectChange]);

  const handleSelect = useCallback((e) => {
    setSelectChange(e.target.value);
  }, []);

  return (
    <>
      <Header>
        <BoxInfo>
          <p>Casos Confirmados:</p>
          <p>{countrySelect && countrySelect.confirmed}</p>
        </BoxInfo>
        {/* <BoxInfo>
          <p>Casos Curados:</p>
          <p>{recovered}</p>
        </BoxInfo> */}
        <BoxInfo>
          <p>Casos de Obitos:</p>
          <p>{countrySelect && countrySelect.deaths}</p>
        </BoxInfo>
      </Header>
      <Body>
        <select value={selectChange} onChange={handleSelect} name="example">
          {country.map((state) => (
            <option key={state.provinceState} value={state.provinceState}>
              {state.provinceState}
            </option>
          ))}
        </select>

        <h1>Total de Casos no Brasil:</h1>
        <Container>
          <BoxInfo>
            <p>Casos Confirmados:</p>
            <p>{brazilConfirmation && brazilConfirmation}</p>
          </BoxInfo>
          <BoxInfo>
            <p>Casos Curados:</p>
            <p>{brazilRecovered && brazilRecovered}</p>
          </BoxInfo>
          <BoxInfo>
            <p>Casos de Obitos:</p>
            <p>{brazilDeath && brazilDeath}</p>
          </BoxInfo>
        </Container>
      </Body>
    </>
  );
};

export default Home;
