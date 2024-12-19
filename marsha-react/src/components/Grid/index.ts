import { breakpoints } from '@lacrei/marsha-core';
import styled from 'styled-components';

export const Grid = styled.div<{ cols: string }>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  column-gap: 16px;

  @media(min-width: ${breakpoints.sm}) {
    column-gap: 24px;
  }
`;

