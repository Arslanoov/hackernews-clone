import { useContext } from 'react';

import { RootStore } from 'store/root';
import { StoreContext } from 'contexts/storeContext';

export const useStores = (): RootStore => useContext(StoreContext);
