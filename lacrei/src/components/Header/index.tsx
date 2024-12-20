import Link from 'next/link';
import { Button, Typography } from '@lacrei/marsha-react';

import { Container, Nav } from './styles';
import { MenuDrawer } from './MenuDrawer';
import Image from 'next/image';

export function Header() {
  const links = [
    { label: 'Início', url: '/' },
    { label: 'Sobre', url: '/#about' },
    { label: 'FAQ', url: '/faq' },
  ];

  return (
    <Container>
      <Link href="/" aria-label="Início">
        <Image src="/assets/logo.svg" alt="Logo da Lacrei Saúde" width="114" height="32" />
      </Link>
      <Nav className="lg">
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.url}>
                <Typography variant="text-base" color="text-body">
                  {link.label}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
      <Button className="lg" variant="secondary" as="a" href="https://paciente.lacreisaude.com.br/">Entrar</Button>

      <MenuDrawer links={links} />
    </Container>

  )
}
