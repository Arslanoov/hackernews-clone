import React, { createContext, ReactNode, ReactElement } from 'react';

import { store, RootStore } from 'store/root';

export const StoreContext = createContext<RootStore>({} as RootStore);

export const StoreProvider: React.FC<{
  children: ReactNode;
}> = ({ children }): ReactElement => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);
