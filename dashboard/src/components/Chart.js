import React, {useEffect, useState} from 'react';
import ChartRow from './ChartRow';

// Importar todos los productos de la API.
function Chart (){
    const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('/api/product')
            .then( r => r.json())
            .then( data => {
                setProducts(data.data);
		    })
            .catch(error => console.log(error));
	}, [])

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Categoria</th>
                                <th>Colores</th>
                                <th>Talles</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 && products.map((product, i) => {
                                    return <ChartRow { ...product} key={i}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;