import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app'; 
import AuthService from './service/auth_service';


const authService = new AuthService(); //1.*AuthService를 주입

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />  {/* 2.App컴포넌트에 authService를 props로 전달 */}
  </React.StrictMode>,
  document.getElementById('root')
);

