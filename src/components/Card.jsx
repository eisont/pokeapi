import { useNavigate } from 'react-router-dom';
import * as S from './../index.styled';
import FavoriteButton from './FavoriteButton';
import { memo, useState } from 'react';

const Card = memo((pr) => {
  const navigate = useNavigate();

  const [isImageLoading, setIsImageLoading] = useState(true);
  return (
    <S.Item onClick={() => navigate(`/detail/${pr.el.id}`)}>
      {isImageLoading ? <div className='w-[120px] h-[120px] leading-[120px] text-center'>loading...</div> : null}
      <img onLoad={() => setIsImageLoading(false)} src={pr.el.front} style={{ display: isImageLoading ? 'none' : 'block' }} />
      <div>
        {pr.el.name}
        <FavoriteButton pokemonId={pr.el.id} />
      </div>
    </S.Item>
  );
});

export default Card;
