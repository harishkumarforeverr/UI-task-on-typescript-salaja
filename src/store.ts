import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { createRouterMiddleware, createRouterReducer } from '@lagunovsky/redux-react-router'
import { createMemoryHistory } from "history";
// import thunk from 'redux-thunk'

export const history = createMemoryHistory();
const routerMiddleware = createRouterMiddleware(history)
//const initialState = {};

const rootReducer = combineReducers({
  navigator: createRouterReducer(history) 
  //reducer: combineRed
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).prepend(routerMiddleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
