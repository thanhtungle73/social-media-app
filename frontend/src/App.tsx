import { RouterProvider } from 'react-router-dom';
import './App.css';
import { rootRouter } from './components/layouts/root-router';

function App() {
  return <RouterProvider router={rootRouter} />;
}

export default App;
