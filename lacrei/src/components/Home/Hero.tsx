import { breakpoints, gradients, spacingInline, spacingPrimitives } from '@lacrei/marsha-core';
import { Typography, Button, Grid } from '@lacrei/marsha-react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled(Grid)`
  margin-top: ${spacingPrimitives['spacing-layout-lg']};
`

const HeroImage = styled(Image)`
  display: flex;
  width: 100%;
  height: auto;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 12;
  @media(min-width: ${breakpoints.md}) {
    grid-column: span 6;
    order: -1;
    justify-content: center;
  };
`;

const ImageContainer = styled.div`
  grid-column: 2/11;

  @media(min-width: ${breakpoints.sm}) {
    grid-column: 3/10;
  };
  @media(min-width: ${breakpoints.md}) {
    grid-column: 4/9;
  };
  @media(min-width: ${breakpoints.md}) {
    grid-column: span 6;
  };
`;

const CTAContainer = styled.div`
  display: flex;
  gap: ${spacingInline.xs};
  margin-top: ${spacingPrimitives['spacing-layout-lg']};
`;

const CTAPaciente = styled(Button)`
  background: linear-gradient(90deg, ${gradients['gradient-lacrei'].join(', ')});
`;

const LGBTGradientColors = ['#FA0000', '#FF9101', '#A79602', '#008A17', '#00776F', '#0D00FF'];

const CTAProfissionalText = styled.span`
  background: linear-gradient(90deg, ${gradients['gradient-lacrei'].join(', ')});
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LGBTGradient = styled.span`
  background: linear-gradient(90deg, ${LGBTGradientColors.join(', ')});
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

export function Hero() {
  return (
    <Container id="hero" as="section" cols="12">
      <ImageContainer>
        <HeroImage
          src="/assets/home-hero-image.png"
          width="564"
          height="455"
          alt="Pessoa com cabelo longo lilás, macacão verde e de pele negra se movendo livremente. Há plantas ao redor."
        />
      </ImageContainer>
      <TextContainer>
        <Typography
          as="h1"
          variant="headline-xl"
          color="text-accent"
        >
          Boas-vindas à Lacrei Saúde!
        </Typography>

        <Typography>
          Conectamos a comunidade <LGBTGradient>LGBTQIAPN+</LGBTGradient> com profissionais de saúde que
          entendem suas necessidades, oferecendo atendimento inclusivo, seguro
          e acolhedor.
        </Typography>

        <CTAContainer>
          <CTAPaciente
            as="a"
            href="https://paciente.lacreisaude.com.br/"
            variant="primary"
          >
            Para Pacientes
          </CTAPaciente>

          <Button
            as="a"
            href="https://profissional.lacreisaude.com.br/"
            variant="link"
          >
            <CTAProfissionalText>Para Profissionais</CTAProfissionalText>
          </Button>
        </CTAContainer>
      </TextContainer>
    </Container>
  )
}
