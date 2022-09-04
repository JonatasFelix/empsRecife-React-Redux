import * as s from "./styled";
import { Container } from "../../global/style/Container";
import SearchBar from "../searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { goHomePage } from "../../routes/coordinator";

const Header = () => {

  const navigate = useNavigate();



  return (
    <s.Header>
      <Container>
        <s.Box>
          <s.Logo onClick={() => goHomePage(navigate)}>
            <h1>empsRecife</h1>
            <h2>Encontre empresas registradas em Recife.</h2>
          </s.Logo>
          <SearchBar />
        </s.Box>
      </Container>
    </s.Header>
  );
};

export default Header;
