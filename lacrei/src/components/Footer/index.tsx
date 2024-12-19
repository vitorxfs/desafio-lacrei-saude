import { Grid, Typography } from '@lacrei/marsha-react';
import Link from 'next/link';

import {
  FooterContainer,
  Ornament,
  BlockContainer,
  ContentContainer,
  Column,
  Flag,
  BottomContainer,
} from './styles';

export const Footer = () => {
  const year = (new Date()).getFullYear();
  const lacreiLinks = [
    { label: 'Quem Somos', url: 'https://lacreisaude.com.br/quem-somos/'},
    { label: 'Nosso propósito', url: 'https://lacreisaude.com.br/quem-somos/#proposito'},
    { label: 'Missão, Visão e Valor', url: 'https://lacreisaude.com.br/quem-somos/#missao-visao-valores'},
    { label: 'Acessibilidade', url: 'https://lacreisaude.com.br/acessibilidade/'},
  ];

  const platformLinks = [
    { label: 'Buscar atendimento', url: 'https://paciente.lacreisaude.com.br/'},
    { label: 'Oferecer atendimento', url: 'https://profissional.lacreisaude.com.br/'},
  ];

  const privacyLinks = [
    { label: 'Política de privacidade', url: 'https://lacreisaude.com.br/politica-de-privacidade/'},
    { label: 'Termos de uso', url: 'https://lacreisaude.com.br/direitos-de-titular/'},
    { label: 'Direitos do Titular', url: 'https://lacreisaude.com.br/direitos-de-titular/'},
  ];

  return (
    <FooterContainer>
      <Ornament width="100%" height="44" viewBox="0 0 1366 44" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden>
        <path d="M0 44C0 44 306.5 0.5 683 0.5C1059.5 0.5 1366 44 1366 44H0Z" fill="inherit" />
      </Ornament>
      <BlockContainer>
        <ContentContainer>
          <img src="assets/logo-invert.svg" alt="Lacrei Saúde" />
          <Grid cols="12">
            <Column>
              <ul>
                {lacreiLinks.map((link) => (
                  <li>
                    <Link key={link.label} href={link.url}>
                      <Typography color="text-invert"  variant="text-xl">{link.label}</Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </Column>
            <Column>
              <ul>
                {platformLinks.map((link) => (
                  <li>
                    <Link key={link.label} href={link.url}>
                      <Typography color="text-invert" variant="text-xl">{link.label}</Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </Column>
            <Column>
              <ul>
                {privacyLinks.map((link) => (
                  <li>
                    <Link key={link.label} href={link.url}>
                      <Typography color="text-invert" variant="text-xl">{link.label}</Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </Column>
            <Column>
              <Flag src="assets/lgbtqiapn_plus-flag.png" width="100" alt="Bandeira LGBTQIAPN+" />
            </Column>
          </Grid>
          <BottomContainer>
            <Typography color="text-invert">
              Lacrei Saúde {year} - © Todos os direitos reservados - {' '}
              <Link
                href="https://lacreisaude.com.br/politica-de-privacidade/"
                style={{ textDecoration: 'underline' }}
              >
                Política de Privacidade
              </Link>
            </Typography>
          </BottomContainer>
        </ContentContainer>
      </BlockContainer>
    </FooterContainer>
  );
}
