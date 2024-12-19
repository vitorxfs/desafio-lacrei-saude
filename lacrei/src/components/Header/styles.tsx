import { breakpoints, foregroundColors, spacingInline, spacingPrimitives, textColors } from '@lacrei/marsha-core';
import { Button, Drawer } from '@lacrei/marsha-react';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spacingPrimitives['spacing-md']};
  margin-bottom: ${spacingPrimitives['spacing-md']};

  @media(max-width: ${breakpoints.sm}) {
    & > .lg {
      display: none;
    }
  }
`

export const Nav = styled.nav`
  & > ul {
    display: flex;
    gap: ${spacingInline.m}
  }
`

export const HamburguerButton = styled.button`
  cursor: pointer;
  padding: 4px;
  font-size: 40px;
  color: ${textColors['text-accent']};
  display: none;

  @media(max-width: ${breakpoints.sm}) {
    & {
      display: block;
    }
  }
`

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 4px;
  font-size: 40px;
  color: ${textColors['text-accent']};
`

export const DrawerNav = styled.nav`
  margin-top: ${spacingPrimitives['spacing-md']};

  a {
    padding: 8px;
    display: block;
    text-align: center;
    &:hover {
      background-color: ${foregroundColors['foreground-accent-medium']};
    }
  }
`
export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DrawerButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${spacingPrimitives['spacing-layout-xl']}
`;

