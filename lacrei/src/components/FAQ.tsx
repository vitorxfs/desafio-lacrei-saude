import { faqItems } from '@/content/faq';
import { Accordion, AccordionItem, Heading } from '@lacrei/marsha-react';
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
      <img src="assets/faq-image.png" alt="" width="442" height="auto" />
      <Heading as='h1' alignment='center'>Perguntas Frequentes (FAQ)</Heading>
      <Accordion items={faqItems}/>
    </Container>
  )
}
