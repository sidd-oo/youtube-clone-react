import './App.css';
import MainContent from './components/MainContent';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage/WatchPage';
import MainBody from './components/MainBody';
import SearchResultsPage from './components/SuggestiveSearch/SearchResultsPage';

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
      {
        path: "searchResults",
        element: <SearchResultsPage />,
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
