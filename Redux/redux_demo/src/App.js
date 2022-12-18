import './App.css';
import store from './redux/store';
import {Provider} from 'react-redux';
import BallContainer from './BallContainer';
import BatContainer from './BatContainer';
import BatContainer from './BatContainer'
function App() {
  return (
   <Provider store={store} >
     <div className='App'>
       <BallContainer/>
       <BatContainer/>
     </div>

   </Provider>
  );
    <Provider store={store}>
      <BallContainer/>
      <BatContainer/>
    </Provider>
    );
}

export default App;
