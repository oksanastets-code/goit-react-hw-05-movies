import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const TrendMoviesList = styled.ol`
  list-style-type: decimal;
  list-style-position: inside;
`;
export const MovieItem = styled.li`
  padding-bottom: 8px;
  &::marker {
    color: #2a363b;
    font-size: 30px;
    font-weight: 500;
  }
  &:hover {
    color: #dc6300;
  }
`;
export const LinkStyle = styled(Link)`
  color: #2a363b;
  font-size: 30px;
  font-weight: 500;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #dc6300;
  }
  /* &:visited {
    color: #634688;
  } */
`;
