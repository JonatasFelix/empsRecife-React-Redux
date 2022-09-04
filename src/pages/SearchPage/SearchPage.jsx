import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import Header from "../../components/header/Header";
import getSearchList from "../../services/getSearchList";
import BoxCompany from "../../components/boxCompany/BoxCompany";
import { Container } from "../../global/style/Container";
import { Main } from "./styled";
import Pagination from "../../components/pagination/Pagination";


const SearchPage = () => {

    const [searchList, setSearchList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    const location = useLocation();
    const parsed = qs.parse(location.search)
    const { q } = parsed;
    

    useEffect(() => {
        getSearchList(q, page, setSearchList, setLoading, setTotal);
    }, [q, page]);




    return (
        <>
        <Header />
       
        <Container>
                <Main>
                    {loading ? <p>Carregando...</p> : searchList.map((item, index) =>{
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

export default SearchPage;
