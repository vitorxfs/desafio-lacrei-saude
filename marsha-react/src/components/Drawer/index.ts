import { Drawer as Root } from './Drawer';
import { Close } from './Close';
import { Content } from './Content';
import { Trigger } from './Trigger';
import { Title } from '@radix-ui/react-dialog';

export const Drawer = {
  Root,
  Close,
  Content,
  Trigger,
  Title
}

export type { CloseProps as DrawerCloseProps } from './Close';
export type { ContentProps as DrawerContentProps } from './Content';
export type { DrawerProps as DrawerRootProps } from './Drawer';
export type { TriggerProps as DrawerTriggerProps } from './Trigger';
