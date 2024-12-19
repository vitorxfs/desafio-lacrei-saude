import * as RadixAccordion from "@radix-ui/react-accordion";
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AccordionHeader, AccordionRoot, AccordionItem, AccordionTrigger, AccordionContentContainer, AccordionIcon } from './styles';

export type AccordionItem = {
  value: string;
  title: string;
  description: string;
}

interface Props {
  items: AccordionItem[];
}

export function Accordion({ items }: Props) {
  const [open, setOpen] = useState('');

  const handleValueChange = (newValue: string) => {
    setOpen(newValue);
  };

  return (
    <AccordionRoot
      type="single"
      collapsible
      value={open}
      onValueChange={handleValueChange}
    >
      {items.map((item) => (
        <AccordionItem value={item.value} key={item.value}>
          <RadixAccordion.Header>
            <AccordionTrigger>
              <AccordionHeader>
                <span>{item.title}</span>
                {open === item.value ? (
                  <AccordionIcon className="chevron">keyboard_arrow_up</AccordionIcon>
                ) : (
                  <AccordionIcon className="chevron">keyboard_arrow_down</AccordionIcon>
                )}
              </AccordionHeader>
            </AccordionTrigger>
          </RadixAccordion.Header>
          <AnimatePresence>
            {open === item.value && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <RadixAccordion.Content forceMount>
                  <AccordionContentContainer>
                          {item.description}
                  </AccordionContentContainer>
                </RadixAccordion.Content>
              </motion.div>
            )}
          </AnimatePresence>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}
;
