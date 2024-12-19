import { spacingPrimitives, backgroundColors, textColors, breakpoints, shadows, radii } from '@lacrei/marsha-core';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: ${spacingPrimitives['spacing-layout-2xl']};
`

export const BlockContainer = styled.div`
  background-color: ${backgroundColors['background-accent-base']};
`

export const ContentContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: ${spacingPrimitives['spacing-layout-lg']} 24px;
  margin: 0 auto;
  color: ${textColors['text-invert']};

  @media(min-width: ${breakpoints.md}) {
    display: block;
    align-items: flex-start;
  }
`

export const Column = styled.div`
  grid-column: span 12;
  margin-top: ${spacingPrimitives['spacing-lg']};
  text-align: center;
  @media(min-width: ${breakpoints.sm}) {
    grid-column: span 6;
    text-align: left;
  }
  @media(min-width: ${breakpoints.md}) {
    grid-column: span 3;
    text-align: left;
  }
`;

export const BottomContainer = styled.div`
  margin-top: ${spacingPrimitives['spacing-layout-lg']};
`;

export const Flag = styled.img`
  box-shadow: ${shadows.md};
  border-radius: ${radii['border-radius-sm']};
`

export const Ornament = styled.svg`
  width: 100%;
  display: block;
  fill: ${backgroundColors['background-accent-base']};
`;
