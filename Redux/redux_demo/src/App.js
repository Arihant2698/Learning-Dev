import './App.css';
import store from './Redux/store';
import { Provider } from 'react-redux';
import BallContainer from './BallContainer';
import BatContainer from './BatContainer'
function App() {
  return (
    <Provider store={store}>
      <BallContainer/>
      <BatContainer/>
    </Provider>
    );
}

export default App;
