import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { goSearchPage } from "../../routes/coordinator";
import * as s from "./styled";
import qs from "query-string";

const SearchBar = () => {
  const location = useLocation();
  const parsed = qs.parse(location.search);
  const { q } = parsed;

  const navigate = useNavigate();
  const [search, setSearch] = useState(q || "");

  const onSearch = (e) => {
    e.preventDefault();
    goSearchPage(navigate, search);
  };

  return (
    <s.Search onSubmit={onSearch}>
      <BiSearch color="var(--gray)" />
      <s.Input
        type="text"
        placeholder="Pesquisar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <s.Button>Buscar</s.Button>
    </s.Search>
  );
};

export default SearchBar;
