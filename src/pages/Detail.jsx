import { useParams } from 'react-router-dom';
import * as S from '../index.styled';
import { useSelector } from 'react-redux';
import { selectPokemonById } from '../RTX/selector';
import FavoriteButton from './../components/FavoriteButton';
import FlipCard from './../components/FlipCard';

const Detail = () => {
  const { pokemonId } = useParams();

  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  return (
    <S.DetailSt>
      <FlipCard front={pokemon.front} back={pokemon.back} />
      <div>
        {pokemon.name} <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      {!pokemon ? <div>Loading...</div> : <div>{pokemon.description}</div>}
    </S.DetailSt>
  );
};

export default Detail;
