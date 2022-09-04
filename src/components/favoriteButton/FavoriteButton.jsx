import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import {addFavoriteList, removeFavoriteList } from "../../store/action/changeFavoriteList";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Container, Button } from "./styled"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FavoriteButton = (props) => {
  const { name, description, vigSanitaria, cod, favorites } = props;
  const inFavorites = favorites.some((fav) => Number(fav.cod) === Number(cod));
  const dispatch = useDispatch();


  const toastAlert = (message) => {
    toast.info(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const add = () => {
    dispatch(addFavoriteList({ name, description, vigSanitaria, cod }));
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, { name, description, vigSanitaria, cod }])
    );
    toastAlert("Adicionado aos favoritos");
  };

  const remove = () => {
    dispatch(removeFavoriteList({ cod }));
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites.filter((fav) => Number(fav.cod) !== Number(cod)))
    );
    toastAlert("Empresa removida dos favoritos");
  };

  return (
    <Container>
      <ToastContainer/>
      {inFavorites ? (
        <Button onClick={remove}><AiFillHeart color="red"/></Button>
      ) : (
        <Button onClick={add}><AiOutlineHeart color="red"/></Button>
      )}
    </Container>
  );
};

export default connect((state) => state.FavoritesReducers)(FavoriteButton);
