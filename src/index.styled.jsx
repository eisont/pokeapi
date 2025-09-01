import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100vw;
`;
export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: black;
`;

export const Title = styled.div`
  font-size: 40px;
  color: #fff;
  font-weight: 600;
`;

export const Nav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: red;
`;
export const Box = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Menu = styled(Link)`
  padding: 10px 20px;
  border-radius: 20px;
  background: #fff;
  color: #000;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;

  :hover {
    cursor: pointer;
  }
`;

export const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  div {
    background: #fff;
    transition: 0.3s;
  }

  :hover {
    transform: scale(1.1);
    transition: 0.3s;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  }
`;

export const Item = styled.div`
  width: 100px;
  height: 150px;

  border: 1px solid #aeaeae;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  color: #000;

  :hover {
    cursor: pointer;
  }
`;

export const DetailSt = styled(Item)`
  width: 200px;
  height: 400px;
  text-align: center;
`;
