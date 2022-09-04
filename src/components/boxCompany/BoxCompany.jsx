import * as s from './styled';
import FavoriteButton from '../favoriteButton/FavoriteButton';

const BoxCompany = (props) => {
    const { name, description, vigSanitaria, cod } = props;
    return (
        <s.BoxCompany key={cod}>
            <s.Title>{name}</s.Title>
            <s.Subtitle>{description}</s.Subtitle>
            <p><span>Vig. Sanitária: </span>{vigSanitaria}</p>
            <p><span>Cod. Empresa: </span>{cod}</p>
            <FavoriteButton name={name} description={description} vigSanitaria={vigSanitaria} cod={cod} />
        </s.BoxCompany>
    )
};

export default BoxCompany;