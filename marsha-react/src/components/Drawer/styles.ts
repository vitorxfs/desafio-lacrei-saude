import { foregroundColors } from '@lacrei/marsha-core';
import {
  Portal,
  Content as RadixDialogContent,
  Overlay as RadixDialogOverlay,
} from '@radix-ui/react-dialog';
import styled, { css } from 'styled-components';

interface DialogContentProps {
  side: 'left' | 'right';
}

const leftAnimation = css`
  &[data-state="closed"] {
    animation: leaveLeft 200ms normal;
  }
  &[data-state="open"] {
    animation: enterLeft 200ms normal;
  }
  @keyframes enterLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes leaveLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const rightAnimation = css`
  &[data-state="closed"] {
    animation: leaveRight 200ms normal;
  }
  &[data-state="open"] {
    animation: enterRight 200ms normal;
  }
  @keyframes enterRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes leaveRight {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

export const DialogContent = styled(RadixDialogContent)<DialogContentProps>`
  ${({ side }) => side === 'left' ? 'left: 0' : 'right: 0'};
  position: fixed;
  bottom: 0;
  top: 0;
  width: 100%;
  padding: 2rem;
  background-color: ${foregroundColors['foreground-default']};
  overflow-x: auto;
  z-index: 10;

  ${({ side }) => side === 'left' ? leftAnimation : rightAnimation}
`;

export const DialogOverlay = styled(RadixDialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.3);
`;


