import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTX/thunk';
const Main = lazy(() => import('./pages/Main'));
const Detail = lazy(() => import('./pages/Detail'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Search = lazy(() => import('./pages/Search'));
import * as S from './index.styled';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>포켓몬 도감</S.Title>
      </S.Header>
      <S.Nav>
        <S.Box>
          <S.Menu to={'/'}>메인페이지</S.Menu>
          <S.Menu to={'/favorite'}>찜</S.Menu>
          <input onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)} />
        </S.Box>
      </S.Nav>

      <S.MainBox>
        <Suspense fallback={<>loading...</>}>
          <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/detail/:pokemonId'} element={<Detail />} />
            <Route path={'/favorite'} element={<Favorites />} />
            <Route path={'/search'} element={<Search />} />
          </Routes>
        </Suspense>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default App;
