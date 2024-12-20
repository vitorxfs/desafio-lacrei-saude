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
  link: css`
    border: none;
    background-color: none;
    color: ${textColors['text-accent']};
    box-shadow: none;
    font-weight: bold;
    &:hover {
      background-color: ${backgroundColors['background-accent-lighter']};
    }
    &:active {
      background-color: ${backgroundColors['background-accent-light']};
    }
  `,
}

interface Props {
  variant?: 'primary' | 'secondary' | 'link';
}

export const Button = styled.button<Props>`
  border-radius: ${radii['border-radius-sm']};
  box-shadow: ${shadows.md};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito';
  font-size: ${typography['text-xl']['font-size']};
  font-weight: ${typography['text-xl']['font-weight']};
  min-height: 48px;
  padding: ${spacingInline.xs} ${spacingInline.xxm};
  width: fit-content;
  &:hover, &:active, &:disabled {
    box-shadow: none;
  }
  ${({ variant = 'primary' }) => variants[variant]};
  transition: all 150ms;
`;
