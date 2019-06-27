import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import {
  connectRouter,
  LocationChangeAction,
  routerMiddleware,
  RouterState,
} from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export interface AppState {
  router: RouterState;
}

const store = configureStore<AppState, LocationChangeAction>({
  reducer: {
    router: connectRouter(history),
  },
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)],
});

export default store;
