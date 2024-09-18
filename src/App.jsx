import Header from './components/Header';
import ProductsView from './components/ProductsView';

function App() {
  return (
    <div className="h-screen w-screen grid grid-rows-custom">
      <Header />
      <div className="flex justify-center items-center w-full h-full">
        <h2 className="text-gray-400 text-xl">Search to view products...</h2>
      </div>
    </div>
  );
}

export default App
