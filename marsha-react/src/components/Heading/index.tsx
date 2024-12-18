import styled from 'styled-components'
import { Typography } from '../Typography'
import React from 'react'
import { foregroundColors, headingSpaces, HeadingVariant } from '@lacrei/marsha-core';

interface ContainerProps {
  variant: HeadingVariant;
  alignment: 'left' | 'right' | 'center';
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ variant }) => headingSpaces[variant].gap};
  margin-bottom: ${({ variant }) => headingSpaces[variant]['margin-bottom']};
  align-items: ${({ alignment }) => {
    if (alignment === 'left') return 'flex-start';
    if (alignment === 'right') return 'flex-end';
    return 'center';
  }};

  text-align: ${({ alignment }) => alignment};
`;

const Indicator = styled.span`
  background-color: ${foregroundColors['foreground-accent-base']};
  height: 2px;
  width: 160px;
  border-radius: 1px;
`

interface Props {
  alignment?: 'left' | 'right' | 'center';
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  variant?: HeadingVariant;
}

export function Heading({
  children,
  alignment = 'left',
  as,
  variant = 'headline-xl',
}: Props) {
  return (
    <Container variant={variant} alignment={alignment} as={as}>
      <Typography variant={variant} color="text-heading">{children}</Typography>
      <Indicator />
    </Container>
  )
}
