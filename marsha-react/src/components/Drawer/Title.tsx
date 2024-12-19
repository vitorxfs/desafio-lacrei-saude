import React from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';

export interface ContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return (
    <DialogTitle>
      {children}
    </DialogTitle>
  )
}
