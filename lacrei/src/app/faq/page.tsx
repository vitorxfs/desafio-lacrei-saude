"use client"

import React from 'react';
import styled from 'styled-components';

import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Container = styled.div`
  max-width: 1200px;
  padding: 0 24px;
  margin: 0 auto;
`

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <FAQ />
      </Container>
      <Footer />
    </>
  );
}
