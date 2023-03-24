import { SidebarContainer } from "./styles";
import { countries } from "../../helpers/helpers";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            <Link to={`/articles/country/${country.id}`}>{country.label}</Link>
          </li>
        ))}
      </ul>
    </SidebarContainer>
  );
};
