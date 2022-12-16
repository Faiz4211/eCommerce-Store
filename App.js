import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import AppRoute from './src/AppRoute';
import { store } from './src/redux/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  )
}

export default App;