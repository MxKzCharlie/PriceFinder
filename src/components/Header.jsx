import lupa from '../assets/lupa.png';
import { useState } from 'react';
import fetchCustom from './functions/fetchCustom';
import { useNavigate } from 'react-router-dom';

function Header({setLoading, setHome}) {
    const [dataState, setDataState] = useState({
        "title": '',
        "quantity": 0,
    })

    const [value, setValue] = useState(1)
    const handleValue = (value) => {
        setValue(value);
    }

    const handleChange = (e) => {
        if (e.target.name === 'quantity'){
            setValue(e.target.value);
        }
        setDataState({
            ...dataState,
            [e.target.name]: e.target.value,
        });
    }

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const info = await fetchCustom('POST', 'get/', dataState);
        console.log(info);
    }

    return ( 
        <>  
            <div className="w-full h-full flex justify-center ">
                <h1 className="italic text-5xl font-extrabold left-4 top-4 absolute">PriceFinder</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <label className="input input-bordered flex items-center pr-0 w-96 mt-8">
                        <input type="text" className="grow" placeholder="Search..."  
                        onChange={handleChange} name="title" />
                        <button type="submit" className="btn btn-ghost">
                            <img className="h-6 w-6" src={lupa} alt="buscar"/>
                        </button>
                    </label>
                    <p className="mt-4">How many products per store?</p>
                    <input type="range" min="1" max="10" value={value} onChange={handleChange} 
                    className="range w-96 my-5" name="quantity" />
                    <div className="flex justify-between text-xs w-96">
                        <span className="cursor-pointer w-[10%] text-center" onClick={() => handleValue(1)} >1</span>
                        <span className="cursor-pointer w-[10%] text-center" onClick={() => handleValue(2)} >2</span>
                        <span className="cursor-pointer w-[10%] text-center" onClick={() => handleValue(3)} >3</span>
                        <span className="cursor-pointer w-[10%] text-center" onClick={() => handleValue(4)} >4</span>
                        <span className="cursor-pointer w-[10%] text-center" onClick={() => handleValue(5)} >5</span>
                        <span className="cursor-pointer w-[10%] text-center" onClick={() => handleValue(6)} >6</span>
                        <span className="cursor-pointer w-[10%] text-center" onClick={() => handleValue(7)} >7</span>
                        <span className="cursor-pointer w-[10%] text-center" onClick={() => handleValue(8)} >8</span>
                        <span className="cursor-pointer w-[10%] text-center" onClick={() => handleValue(9)} >9</span>
                        <span className="cursor-pointer w-[10%] text-center" onClick={() => handleValue(10)} >10</span>
                    </div>
                </form>
            </div>
        </>
     );
}

export default Header;