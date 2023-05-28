import React from 'react';
import { Provider } from 'react-redux';
import { NativeRedux } from './native-redux';
import ReactRedux, { ReactReduxHooks, ReduxRequestToStore } from './ReactRedux';
import { store } from './Store';
import { ReduxRtk } from './rtk';

// https://cn.redux.js.org
export const ReduxComp = () => (
  <>
    <h1>Redux</h1>
    <ReduxRtk />
    <NativeRedux />
    <Provider store={store}> {/* 为redux 提供 store */}
      <ReactRedux />
      <ReactReduxHooks />
      <ReduxRequestToStore />
    </Provider>
  </>
);
