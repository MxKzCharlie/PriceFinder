function Card({url, urlImg, precio, titulo, logo}) {
    return ( 
        <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
                <img
                src={urlImg}
                alt="imagen" 
                className="w-1/2 h-1/2"/>
            </figure>
            <div className="card-body">
                <div className="flex flex-row justify-between">
                    <h2 className="card-title text-3xl">${precio}</h2>
                    <img src={logo} className="w-24 h-24"/>
                </div>
                <p>{titulo}</p>
                <div className="card-actions justify-end">
                <a href={url} target="_blank" className="btn btn-primary">Go to see it</a>
                </div>
            </div>
        </div>
     );
}

export default Card;