import { memo } from 'react';
import * as S from '../index.styled';
import { useSelector } from 'react-redux';

const Favorites = memo(() => {
  const item = useSelector((state) => state.ItemListData).filter((el) => el.select === true);

  return (
    <>
      {item.map((el) => (
        <S.Item key={el.name}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.id}.png`} alt={el.name} />
          <div>{el.name}</div>

          {el.select && <div>✅</div>}
        </S.Item>
      ))}
    </>
  );
});

export default Favorites;
