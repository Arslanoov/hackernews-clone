import React, { createContext, ReactNode, ReactElement } from 'react';

import { RootStore } from 'store/root';

export const StoreContext = createContext<RootStore>({} as RootStore);

export const StoreProvider: React.FC<{
  store: RootStore;
  children: ReactNode;
}> = ({ store, children }): ReactElement => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);
