import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <main className='grid grid-cols-[200px_calc(100vw-200px)] h-[calc(100vh-50px)]'>
          <Sidebar />
          <MainContent />
        </main>
      </Provider>
    </div>
  );
}

export default App;
