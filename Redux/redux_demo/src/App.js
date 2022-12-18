import './App.css';
import store from './Redux/store';
import { Provider } from 'react-redux';
import BallContainer from './BallContainer';
function App() {
  return (
    <Provider store={store}>
      <BallContainer/>
    </Provider>
    );
}

export default App;
