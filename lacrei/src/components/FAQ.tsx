import { faqItems } from '@/content/faq';
import { Accordion, Heading } from '@lacrei/marsha-react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export function FAQ() {
  return (
    <Container>
      <Image src="/assets/faq-image.png" alt="" width="442" height="312" />
      <Heading as='h1' alignment='center'>Perguntas Frequentes (FAQ)</Heading>
      <Accordion items={faqItems}/>
    </Container>
  )
}
