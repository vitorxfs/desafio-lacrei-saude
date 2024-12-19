import React from 'react';
import { Portal } from '@radix-ui/react-dialog';

import { DialogContent, DialogOverlay } from './styles';

export interface ContentProps {
  children: React.ReactNode;
  side?: 'left' | 'right'
}

export const Content = ({ children, side='left' }: ContentProps) => {
  return (
    <Portal>
      <DialogOverlay className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-30"/>
      <DialogContent side={side}>
        {children}
      </DialogContent>
    </Portal>
  )
}
