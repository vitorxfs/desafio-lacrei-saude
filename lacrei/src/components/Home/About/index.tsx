import { Typography, Grid, Heading } from '@lacrei/marsha-react';
import { Container, Card, CardIcon, CardTitle, CTA } from './styles';

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
