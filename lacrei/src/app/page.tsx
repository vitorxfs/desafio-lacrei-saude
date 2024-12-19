"use client"

import React from 'react';
import { Button, Heading, Typography } from '@lacrei/marsha-react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Home/Hero';
import { About } from '@/components/Home/About';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  );
}
