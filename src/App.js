import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Store';
import Router from './components/config/router'
import './App.css';

function App() {
  return (
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

    <div className="App">
      <Router/>
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
