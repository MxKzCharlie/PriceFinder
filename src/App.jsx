import Layout from './components/Layout';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen w-screen grid grid-rows-custom">
      <Layout />
      <Outlet />
    </div>
  );
}

export default App
