import { spacingPrimitives, breakpoints, gradients, primitiveColors } from '@lacrei/marsha-core';
import { Button, Icon, Typography } from '@lacrei/marsha-react';
import styled from 'styled-components';

export const Container = styled.section`
  background-image: url('assets/home-about-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacingPrimitives['spacing-layout-2xl']};
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  grid-column: span 12;
  margin-top: ${spacingPrimitives['spacing-xl']};

  @media(min-width: ${breakpoints.sm}) {
    grid-column: span 6;
  };
  @media(min-width: ${breakpoints.md}) {
    grid-column: span 4;
  };
`;

export const CTA = styled(Button)`
  margin-top: ${spacingPrimitives['spacing-layout-lg']};
  background: linear-gradient(90deg, ${gradients['gradient-lacrei'].join(', ')});
  grid-column: span 12;
  width: 100%;
  display: flex;
  justify-content: center;

  @media(min-width: ${breakpoints.sm}) {
    grid-column: 2 / 12;
  };
  @media(min-width: ${breakpoints.md}) {
    grid-column: 4 / 10;
  };
`;

export const CardIcon = styled(Icon)`
  color: ${primitiveColors['emerald-50']};
  margin-bottom: ${spacingPrimitives['spacing-lg']};
`;

export const CardTitle = styled(Typography)`
  margin-bottom: ${spacingPrimitives['spacing-sm']};
`
