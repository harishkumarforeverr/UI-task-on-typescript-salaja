import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { history, store } from "./store";
import {  ReduxRouter,ReduxRouterSelector } from '@lagunovsky/redux-react-router';
import "./components/Drawer/constants/Algorithm"

type State = ReturnType<typeof store.getState>
const routerSelector: ReduxRouterSelector<State> = (state) => state.navigator

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
     <ReduxRouter history={history} routerSelector={routerSelector}>
          <App />
        </ReduxRouter>
      </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
