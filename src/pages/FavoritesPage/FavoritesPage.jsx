import React, { useState } from "react";
import Header from "../../components/header/Header";
import Pagination from "../../components/pagination/Pagination";
import BoxCompany from "../../components/boxCompany/BoxCompany";
import { Container } from "../../assets/style/Container";
import { Main, EmptyFavorites } from "./styled";
import { connect } from "react-redux";

const FavoritesPage = (props) => {

    const { favorites } = props;
    const total = favorites.length;
    const [page, setPage] = useState(0);

    return(
        <>
        <Header/>
        <Container>
            <Main>
                {favorites.length === 0 && <EmptyFavorites>Você ainda não adicionou nenhum favorito!</EmptyFavorites>}
                { favorites.slice(Number(page.selected || 0) * 10, (Number(page.selected || 0) + 1) * 10).map((item) =>{
                    console.log(page.selected)
                    return (
                        <BoxCompany
                            cod={item.cod}
                            name={item.name}
                            description={item.description}
                            vigSanitaria={item.vigSanitaria}
                        />
                    )
                })}
            </Main>
            {favorites.length > 0 && <Pagination setPage={setPage} page={page} total={total}/>}
        </Container>
        </>
    )
}

export default connect((state) => state.FavoritesReducers)(FavoritesPage);