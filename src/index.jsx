import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import './index.css';
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'draft-js/dist/Draft.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import * as serviceWorker from './serviceWorker';
import './languages';
import Router from './router';
import store from './redux/store';
import theme from './theme';
import 'react-toastify/dist/ReactToastify.css';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Provider store={store()}>
          <ToastContainer />
          <Router history={history} />
        </Provider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
