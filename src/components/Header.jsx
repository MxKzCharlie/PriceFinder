import lupa from '../assets/lupa.png';
import { useState } from 'react';

function Header() {
    const [dataState, setDataState] = useState({
        "title": '',
        "quantity": 0,
    })

    const handleChange = () => {

    };
    
    const handleSubmit = (e) => {
        e.preventDefault()

    };

    return ( 
        <div className="w-full h-full flex justify-center ">
            <h1 className="italic text-5xl font-extrabold left-4 top-4 absolute">PriceFinder</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <label className="input input-bordered flex items-center pr-0 w-96 mt-8">
                    <input type="text" className="grow" placeholder="Search..." onChange={handleChange} name="title" />
                    <button type="submit" className="btn btn-ghost">
                        <img className="h-6 w-6" src={lupa} alt="buscar"/>
                    </button>
                </label>
                <p className="mt-4">How many products per store?</p>
                <input type="range" min="1" max="10" className="range w-96 my-5" onChange={handleChange} />
                <div className="flex justify-between px-2 text-xs w-96">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
            </form>
        </div>
    );
}

export default Header;