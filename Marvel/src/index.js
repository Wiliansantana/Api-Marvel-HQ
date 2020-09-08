import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//Se você deseja que seu aplicativo funcione offline e carregue mais rápido, você pode alterar
// cancele o registro () para registrar () abaixo. Observe que isso traz algumas armadilhas.
// Saiba mais sobre service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
