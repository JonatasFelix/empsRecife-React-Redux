import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCategoryItens from "../../services/getCategoryItens";
import Header from "../../components/header/Header";
import Pagination from "../../components/pagination/Pagination";
import BoxCompany from "../../components/boxCompany/BoxCompany";
import { Container } from "../../global/style/Container";
import { Main } from "./styled";

const GroupPage = () => {

    const { name } = useParams();
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getCategoryItens(name, page, setList, setLoading, setTotal);
    }, [page, name]);

    return(
        <>
        <Header/>

        <Container>
        <Main>
            {loading ? <p>Carregando...</p> : list.map((item) =>{
                return (
                    <BoxCompany
                        cod={item.cod_empresa}
                        name={item.razao_social}
                        description={item.desc_atividade}
                        vigSanitaria={item.atividade_vig_sanitaria}
                    />
                )
            })}
        </Main>
        <Pagination setPage={setPage} page={page} loading={loading} total={total}/>
        </Container>
        </>
    )

}


export default GroupPage;