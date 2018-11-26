import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Detail from './pages/detail';
import { Home } from './pages/home';
import { store } from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
            <Header />
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <Route path='/' exact={true} component={Home} />
              <Route path='/detail' exact={true} component={Detail} />
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
