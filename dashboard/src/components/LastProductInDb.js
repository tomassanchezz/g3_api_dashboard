import React, {useEffect, useState} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';

/* Traer el ultimo producto o usuario */

function LastProductInDb(){

    const [product, setProducts] = useState([]);

	useEffect(() => {
		fetch('/api/product')
            .then( r => r.json())
            .then( data => {
                setProducts(data.data.pop());
		    })
            .catch(error => console.log(error));
	}, [])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last Product in Db <span className="badge bg-secondary">New</span></h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <h5 className="font-weight-bold text-gray-800">{product.name}</h5>
                    <p>{product.description}</p>
                    <p>{'$' + product.price}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
