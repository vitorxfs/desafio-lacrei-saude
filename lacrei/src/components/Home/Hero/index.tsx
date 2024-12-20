import { Typography } from '@lacrei/marsha-react';
import {
  ContainerGrid,
  TextContainer,
  LGBTGradient,
  CTAContainer,
  CTAProfissional,
  ImageContainer,
  CTAPaciente,
  CTAProfissionalText,
  HeroImage,
} from './styles';

export function Hero() {
  return (
    <ContainerGrid id="hero" as="section" cols="12">
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

          <CTAProfissional
            as="a"
            href="https://profissional.lacreisaude.com.br/"
            variant="link"
          >
            <CTAProfissionalText>Para Profissionais</CTAProfissionalText>
          </CTAProfissional>
        </CTAContainer>
      </TextContainer>
    </ContainerGrid>
  )
}
