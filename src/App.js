import { Provider } from 'react-redux';
import Main from './components/MainComponent';
import './App.css';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <Main/>
      </div>
    </Provider>
  );
}
export default App;