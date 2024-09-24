import Card from './Card';
import logo_a from '../assets/amazon.png'
import logo_m from '../assets/mercado_libre.png'

function ProductsView() {
    return (  
        <div className="flex justify-center items-center gap-10 flex-col w-full h-full">
            <h2 className="text-gray-400 text-xl">Searching...</h2>
            <span className="loading loading-bars loading-lg text-primary"></span>
        </div>
    );
}
export default ProductsView;

{/* <div className="w-full h-full flex flex-row flex-wrap items-center gap-12 p-6">
    {mock.map(store => <Card url={store["url"]} 
    precio={store["precio"]} titulo={store["titulo"]} 
    logo={store["storeId"] === 1 ? logo_m : logo_a} 
    urlImg={store["urlImg"]} />)}
</div> */}

