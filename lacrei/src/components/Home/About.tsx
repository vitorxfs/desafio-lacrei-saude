import { breakpoints, gradients, primitiveColors, spacingPrimitives } from '@lacrei/marsha-core';
import { Typography, Button, Grid, Icon, Heading } from '@lacrei/marsha-react';
import styled from 'styled-components';

const Container = styled.section`
  background-image: url('assets/home-about-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacingPrimitives['spacing-layout-2xl']};
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  grid-column: span 12;
  margin-top: ${spacingPrimitives['spacing-xl']};

  @media(min-width: ${breakpoints.sm}) {
    grid-column: span 6;
  };
  @media(min-width: ${breakpoints.md}) {
    grid-column: span 4;
  };
`;

const CTA = styled(Button)`
  margin-top: ${spacingPrimitives['spacing-layout-lg']};
  background: linear-gradient(90deg, ${gradients['gradient-lacrei'].join(', ')});
  grid-column: span 12;
  width: 100%;
  display: flex;
  justify-content: center;

  @media(min-width: ${breakpoints.sm}) {
    grid-column: 2 / 12;
  };
  @media(min-width: ${breakpoints.md}) {
    grid-column: 4 / 10;
  };
`;

const CardIcon = styled(Icon)`
  color: ${primitiveColors['emerald-50']};
  margin-bottom: ${spacingPrimitives['spacing-lg']};
`;

const CardTitle = styled(Typography)`
  margin-bottom: ${spacingPrimitives['spacing-sm']};
`

export function About() {
  const cards = [
    {
      icon: 'relax',
      title: 'Cuidado Personalizado',
      description: 'Profissionais preparados para ouvir, entender e atender com respeito e atenção a cada necessidade individual da comunidade LGBTQIAPN+.'
    },
    {
      icon: 'diversity_1',
      title: 'Diversidade é o nosso foco',
      description: 'Criamos uma plataforma acessível, promovendo um atendimento acolhedor para todas as pessoas, independentemente de sua identidade.'
    },
    {
      icon: 'encrypted',
      title: 'Segurança a cada passo',
      description: 'Seu bem-estar é nossa prioridade. Protegemos seus dados com rigor e garantimos que todos os profissionais sejam validados para oferecer um atendimento seguro.'
    },
  ];

  return (
    <Container id="about">
      <Heading as="h2" variant="headline-base" alignment='center'>O que torna a Lacrei Saúde única?</Heading>
      <Grid cols="12">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardIcon>{card.icon}</CardIcon>
            <CardTitle as="h3" variant="headline-sm-highlight" color="text-heading">{card.title}</CardTitle>
            <Typography variant="text-base" color="text-body">{card.description}</Typography>
          </Card>
        ))}
        <CTA>Buscar Atendimento</CTA>
      </Grid>
    </Container>
  )
}
