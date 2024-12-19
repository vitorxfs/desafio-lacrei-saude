"use client"

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Home/Hero';
import { About } from '@/components/Home/About';
import { Footer } from '@/components/Footer';
import styled from 'styled-components';

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
        <Hero />
        <About />
      </Container>
      <Footer />
    </>
  );
}
