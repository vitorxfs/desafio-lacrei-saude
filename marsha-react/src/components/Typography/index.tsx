import styled from 'styled-components';

import {
  TextColor,
  TypographyVariant,
  textColors,
  typography,
} from '@lacrei/marsha-core';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface Props {
  variant?: TypographyVariant;
  as?: Tag;
  color?: TextColor,
}

export const Typography = styled.p<Props>`
  font-size: ${({ variant = 'text-base' }) => typography[variant]['font-size']};
  font-weight: ${({ variant = 'text-base' }) => typography[variant]['font-weight']};
  line-height: ${({ variant = 'text-base' }) => typography[variant]['line-height']};
  color: ${({ color = 'text-body'}) => textColors[color]}
`
