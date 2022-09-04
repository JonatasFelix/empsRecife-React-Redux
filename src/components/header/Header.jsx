import * as s from "./styled";
import { Container } from "../../assets/style/Container";
import SearchBar from "../searchBar/SearchBar";
import { useNavigate, useLocation } from "react-router-dom";
import { goHomePage, goToFavoritesPage } from "../../routes/coordinator";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <s.Header>
      <Container>
        <s.Box>
          <s.Logo onClick={() => goHomePage(navigate)}>
            <h1>empsRecife</h1>
            <h2>Encontre empresas registradas em Recife.</h2>
          </s.Logo>
          <s.BoxAux>
            <s.NavBar>
              <s.ButtonMenu
                active={location === "/"}
                onClick={() => goHomePage(navigate)}
              >
                Inicio
              </s.ButtonMenu>
              <s.ButtonMenu
                active={location === "/favorites"}
                onClick={() => goToFavoritesPage(navigate)}
              >
                Favoritos
              </s.ButtonMenu>
            </s.NavBar>
            <SearchBar />
          </s.BoxAux>
        </s.Box>
      </Container>
    </s.Header>
  );
};

export default Header;
