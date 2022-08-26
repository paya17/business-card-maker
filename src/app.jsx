import './app.css'; 
import Login from './components/login/login';

function App({authService}) { //3.부모로부터 받으므로, 인자에 {authService}
  return (
    <Login authService={authService} /> 
  );
}

export default App;
