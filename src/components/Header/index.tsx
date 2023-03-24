import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { FaList } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";

export const Header = () => {
  const handleClick = () => {};

  return (
    <HeaderContainer>
      <Link to="/">gnNews</Link>
      <div onClick={handleClick}>
        <FaList />
        <FaThLarge />
      </div>

      {/* <PopupButton>POPUP</Button> */}
    </HeaderContainer>
  );
};
