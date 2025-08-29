import { Link } from 'react-router-dom';
import * as S from '../index.styled';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { PokemonListSlice } from '../redux/redux';

const PoketmonItem = memo((pr) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(PokemonListSlice.actions.favoritesList(pr.item.name));
  };
  return (
    <S.Item>
      <Link to={`/${pr.index + 1}`}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pr.index + 1}.png`} />
      </Link>
      {pr.item?.name ? <div>{pr.item.name}</div> : <div>Loading...</div>}

      {pr.item?.select ? <div onClick={() => handleClick()}>✅</div> : <div onClick={() => handleClick()}>☑️</div>}
    </S.Item>
  );
});

export default PoketmonItem;
