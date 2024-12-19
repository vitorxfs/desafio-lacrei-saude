import styled, { css } from 'styled-components';

import {
  backgroundColors,
  borderColors,
  radii,
  shadows,
  spacingInline,
  textColors,
  typography,
} from '@lacrei/marsha-core';

const variants = {
  primary: css`
    border: none;
    background-color: ${backgroundColors['background-accent-base']};
    color: ${textColors['text-invert']};
    &:hover {
      background-color: ${backgroundColors['background-accent-dark']};
    }
    &:active {
      background-color: ${backgroundColors['background-accent-darker']};
    }
  `,
  secondary: css`
    background-color: ${backgroundColors['background-default']};;
    border: 1px solid ${borderColors['border-accent']};
    color: ${textColors['text-accent']};
    &:hover {
      background-color: ${backgroundColors['background-accent-lighter']};
      border: 1px solid ${borderColors['border-accent-dark']};
      color: ${textColors['text-hover']}
    }
    &:active {
      background-color: ${backgroundColors['background-accent-lighter']};
      border: 1px solid ${borderColors['border-accent-darker']};
      color: ${textColors['text-pressed']}
    }
  `,
}

interface Props {
  variant?: 'primary' | 'secondary';
}

export const Button = styled.button<Props>`
  border-radius: ${radii['border-radius-sm']};
  box-shadow: ${shadows.md};
  cursor: pointer;
  display: flex;
  font-family: 'Nunito';
  font-size: ${typography['text-xl']['font-size']};
  font-weight: ${typography['text-xl']['font-weight']};
  height: 48px;
  line-height: 48px;
  padding: 0 ${spacingInline.xxm};
  width: fit-content;
  &:hover, &:active, &:disabled {
    box-shadow: none;
  }
  ${({ variant = 'primary' }) => variants[variant]};
  transition: all 150ms;
`;
