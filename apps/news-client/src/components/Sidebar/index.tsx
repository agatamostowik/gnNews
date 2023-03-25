import { useLocation, useMatch } from "react-router-dom";
import { countries } from "../../types";
import * as Styled from "./styles";

const Country = (props: { country: (typeof countries)[number] }) => {
  const { country } = props;
  const { search } = useLocation();
  const match = useMatch(`/country/${country.id}`);

  return (
    <Styled.Country
      to={`/country/${country.id}` + search}
      isActive={Boolean(match)}
    >
      <div>{country.flag}</div>
      <Styled.Label>{country.name}</Styled.Label>
    </Styled.Country>
  );
};

export const Sidebar = () => {
  return (
    <Styled.Container>
      <Styled.List>
        {countries.map((country, index) => {
          return <Country key={index} country={country} />;
        })}
      </Styled.List>
    </Styled.Container>
  );
};
