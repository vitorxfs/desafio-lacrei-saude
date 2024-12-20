import Image from 'next/image';
import styled from 'styled-components';

import {
  spacingPrimitives,
  breakpoints,
  spacingInline,
  gradients,
} from '@lacrei/marsha-core';
import { Grid, Button } from '@lacrei/marsha-react';

export const ContainerGrid = styled(Grid)`
  margin-top: ${spacingPrimitives['spacing-layout-lg']};
`

export const HeroImage = styled(Image)`
  display: flex;
  width: 100%;
  height: auto;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 12;
  @media(min-width: ${breakpoints.md}) {
    grid-column: span 6;
    order: -1;
    justify-content: center;
  };
`;

export const ImageContainer = styled.div`
  grid-column: 2/11;

  @media(min-width: ${breakpoints.sm}) {
    grid-column: 3/10;
  };
  @media(min-width: ${breakpoints.md}) {
    grid-column: 4/9;
  };
  @media(min-width: ${breakpoints.md}) {
    grid-column: span 6;
  };
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: ${spacingInline.xs};
  margin-top: ${spacingPrimitives['spacing-layout-lg']};

  @media(min-width: ${breakpoints.sm}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const CTAPaciente = styled(Button)`
  background: linear-gradient(90deg, ${gradients['gradient-lacrei'].join(', ')});
  width: 100%;
`;

export const CTAProfissional = styled(Button)`
  width: 100%;
`;

export const CTAProfissionalText = styled.span`
  background: linear-gradient(90deg, ${gradients['gradient-lacrei'].join(', ')});
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LGBTGradientColors = ['#FA0000', '#FF9101', '#A79602', '#008A17', '#00776F', '#0D00FF'];
export const LGBTGradient = styled.span`
  background: linear-gradient(90deg, ${LGBTGradientColors.join(', ')});
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;
