import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL'
import changeStateGroups from '../store/action/changeStateGroups';


export const getAllCategorys = async (dispatch) => {
    let groups = [];
    let loading = true;

    await axios
        .get(`${BASE_URL}=SELECT COUNT(*) AS quantidade, nome_grupo FROM "5b2ffd31-2829-4347-adb5-5de43e53cb57" GROUP BY nome_grupo`)
        .then((response) => {
            groups = response.data.result.records;
            loading = false;
        })
        .catch((err) => {
            loading = false;
        });

    dispatch(changeStateGroups({ groups, loading }));
};
