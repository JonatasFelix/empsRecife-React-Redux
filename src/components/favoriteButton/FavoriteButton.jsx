import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import {
  addFavoriteList,
  removeFavoriteList,
} from "../../store/action/changeFavoriteList";

const FavoriteButton = (props) => {
  const { name, description, vigSanitaria, cod, favorites } = props;
  const inFavorites = favorites.some((fav) => Number(fav.cod) === Number(cod));
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addFavoriteList({ name, description, vigSanitaria, cod }));
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, { name, description, vigSanitaria, cod }])
    );
  };

  const remove = () => {
    dispatch(removeFavoriteList({ cod }));
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites.filter((fav) => Number(fav.cod) !== Number(cod)))
    );
  };

  return (
    <div>
      {inFavorites ? (
        <button onClick={remove}>Remover dos favoritos</button>
      ) : (
        <button onClick={add}>Adicionar aos favoritos</button>
      )}
    </div>
  );
};

export default connect((state) => state.FavoritesReducers)(FavoriteButton);
