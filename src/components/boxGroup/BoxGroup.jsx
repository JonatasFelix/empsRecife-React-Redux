import * as s from "./styled";
import { icons } from "../../utils/icons";
import { useNavigate } from "react-router-dom";
import { goToGroupPage } from "../../routes/coordinator";

const BoxGroup = (index, name) => {
  const navigate = useNavigate();
  return (
    <s.Container key={index} onClick={() => goToGroupPage(navigate, name)}>
      <s.Box>
        <s.Image src={icons(name)} alt={name} />
        <s.Tittle>{name}</s.Tittle>
      </s.Box>
      <s.Text>Ver mais </s.Text>
    </s.Container>
  );
};

export default BoxGroup;
