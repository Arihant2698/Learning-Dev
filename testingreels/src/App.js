import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import AuthProvider from './Context/AuthProvider';
import Main from './MaterialUI/Main'
import Login from './Components/Login';
function App() {
  return (
    <AuthProvider>
      {/* <Signup/> */}
      <Login/>
   </AuthProvider>
    // <Main/>
  );
}

export default App;
