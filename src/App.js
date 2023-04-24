import './App.css';
import MainContent from './components/MainContent';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainBody from './components/MainBody';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody />,
    children: [
      {
        path: "",
        element: <MainContent />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <MainBody />
      </RouterProvider>
    </Provider>
  );
}

export default App;
