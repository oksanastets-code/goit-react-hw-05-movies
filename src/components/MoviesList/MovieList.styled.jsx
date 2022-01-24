import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const TrendMoviesList = styled.ol`
  list-style-type: decimal;
`;
export const MovieItem = styled.li`
  padding-bottom: 8px;
`;
export const LinkStyle = styled(Link)`
  color: #2a363b;
  font-size: 20px;
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
