import styled from 'styled-components';
import * as RadixAccordion from "@radix-ui/react-accordion";
import { foregroundColors, radii, textColors, typography } from '@lacrei/marsha-core';
import { Icon } from '../Icon';

export const AccordionRoot = styled(RadixAccordion.Root)`
  width: 100%;
  font-family: 'Nunito';
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AccordionItem = styled(RadixAccordion.Item)`
  border: 1px solid ${textColors['text-body']};
  border-radius: ${radii['border-radius-sm']};
`

export const AccordionTrigger = styled(RadixAccordion.Trigger)`
  width: 100%;
  padding: 1rem 0.75rem;
  cursor: pointer;
`

export const AccordionHeader = styled.div`
  width: 100%;
  height: 20px;
  font-size: ${typography['text-base']['font-size']};
  line-height: ${typography['text-base']['line-height']};
  font-weight: ${typography['text-base']['font-weight']};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AccordionContentContainer = styled.div`
  padding-top: 0.375rem;
  margin: 0 1rem 0.75rem 1rem;
  border-top: 1px solid ${foregroundColors['foreground-default']};
  font-size: ${typography['text-base']['font-size']};
  line-height: ${typography['text-base']['line-height']};
  font-weight: ${typography['text-base']['font-weight']};
`;

export const AccordionIcon = styled(Icon)`
  font-size: 24px;
`
