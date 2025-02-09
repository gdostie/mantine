import { createSafeContext } from '@mantine/utils';
import { MantineColor, MantineNumberSize } from '@mantine/styles';
import { TabsOrientation, TabsPlacement, TabsValue, TabsVariant } from './Tabs.types';
import { TABS_ERRORS } from './Tabs.errors';

interface TabsContext {
  id: string;
  value: TabsValue;
  orientation: TabsOrientation;
  loop: boolean;
  activateTabWithKeyboard: boolean;
  allowTabDeactivation: boolean;
  onTabChange(value: TabsValue): void;
  getTabId(value: string): string;
  getPanelId(value: string): string;
  variant: TabsVariant;
  color: MantineColor;
  radius: MantineNumberSize;
  inverted: boolean;
  keepMounted: boolean;
  placement: TabsPlacement;
}

export const [TabsContextProvider, useTabsContext] = createSafeContext<TabsContext>(
  TABS_ERRORS.context
);
