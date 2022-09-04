import axios from 'axios'
import { BASE_URL_DIRETO } from '../constants/BASE_URL'


const getAllCategorys = async (name, page, setList, setLoading, setTotal) => {
    page = page.selected * 10 || 0
    await axios
        .get(`${BASE_URL_DIRETO}?resource_id=5b2ffd31-2829-4347-adb5-5de43e53cb57&filters={"nome_grupo":"${name}"}&limit=10&offset=${page}`)
        .then((response) => {
            setList(response.data.result.records)
            setLoading(false)
            setTotal(response.data.result.total)
        })
        .catch((err) => {
            setList([])
            setLoading(false)
        });

};

export default getAllCategorys;

