"use client"

import styled from 'styled-components';

import { typography } from '@lacrei/marsha';

const Title = styled.h1`
  font-family: sans-serif;
  font-size: ${typography['headline-xl']['font-size']}
`

export default function Home() {
  return (
    <Title>Hello Lacrei</Title>
  );
}
