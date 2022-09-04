import React from "react";
import { connect } from "react-redux";
import Header from "../../components/header/Header";
import BoxGroup from "../../components/boxGroup/BoxGroup";
import { Container } from "../../assets/style/Container";
import * as s from "./styled";

const HomePage = (props) => {
  const { loading, groups } = props;

  return (
    <>
      <Header />
      <div>
        <Container>
          <s.Main>
            {!loading &&
              groups.map((cat, index) => {
                return BoxGroup(index, cat.nome_grupo);
              })}
          </s.Main>
        </Container>
      </div>
    </>
  );
};

export default connect((state) => state.GroupReducers)(HomePage);
