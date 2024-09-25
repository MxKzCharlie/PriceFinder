import Header from './Header';
import { useState } from 'react';
import { useEffect } from 'react';

function Layout() {
    const [home, setHome] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://mxcharlie.pythonanywhere.com/start/', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.info)
            })
    },[])

    if(loading){
        return (
            <>
                <Header setHome={setHome} setLoading={setLoading}/>
                <div className="flex justify-center items-center gap-10 flex-col w-full h-full">
                    <h2 className="text-gray-400 text-xl">Searching...</h2>
                    <span className="loading loading-bars loading-lg text-primary"></span>
                </div>
            </>
        );
    }else if(!loading && !home){
        return(
            <Header setHome={setHome} setLoading={setLoading}/>
        );
    }

    if (home) {
        return ( 
            <>
                <Header setHome={setHome} setLoading={setLoading}/>
                <div className="flex justify-center items-center gap-10 flex-col w-full h-full">
                    <h2 className="text-gray-400 text-xl">Search to view products...</h2>
                </div>
            </>
        );
    }
}

export default Layout;