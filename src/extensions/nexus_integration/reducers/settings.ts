import { IReducerSpec } from '../../../types/IExtensionContext';
import { setSafe } from '../../../util/storeHelper';

import { setAssociatedWithNXMURLs } from '../actions/settings';

/**
 * reducer for changes to the authentication
 */
export const settingsReducer: IReducerSpec = {
  reducers: {
    [setAssociatedWithNXMURLs]: (state, payload) => setSafe(state, [ 'associateNXM' ], payload),
  },
  defaults: {
    associateNXM: false,
  },
};
