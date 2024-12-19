import { Drawer, Icon, Typography } from '@lacrei/marsha-react';
import Link from 'next/link';
import { HamburguerButton, DrawerHeader, CloseButton, DrawerNav, DrawerButton } from './styles';

interface Props {
  links: { label: string; url: string; }[]
}

export function MenuDrawer({ links }: Props) {
  return (
    <Drawer.Root>
        <Drawer.Trigger>
          <HamburguerButton>
            <Icon>menu</Icon>
          </HamburguerButton>
        </Drawer.Trigger>
        <Drawer.Content side="right">
          <DrawerHeader>
            <Drawer.Title>
              <Typography variant="headline-base" color="text-accent">Menu</Typography>
            </Drawer.Title>
            <Drawer.Close>
              <CloseButton>
                <Icon>close</Icon>
              </CloseButton>
            </Drawer.Close>
          </DrawerHeader>
          <DrawerNav>
            {links.map((link) => (
              <Link href={link.url} key={link.label}>
                <Typography variant="headline-sm" color="text-body">
                  {link.label}
                </Typography>
              </Link>
            ))}
          </DrawerNav>
          <DrawerButton className="lg" variant="primary" as="a" href="https://paciente.lacreisaude.com.br/">Entrar</DrawerButton>
        </Drawer.Content>
      </Drawer.Root>
  )
}
