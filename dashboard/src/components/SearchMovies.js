import React,{useState, useEffect, useRef} from 'react';

/* Buscar productos */

function SearchMovies(){
	
	const [product, setProduct] = useState([]);
	
	const [keyword,setKeyword] = useState('');
	
	let inputSearch = useRef();

	useEffect(() => {
		fetch('/api/product')
            .then( r => r.json())
            .then( data => {
                setProduct(data.data);
		    })
            .catch(error => console.log(error));
	}, [keyword])

	const buscarProducto = e => {
		e.preventDefault();
		setKeyword(inputSearch.current.value)
	}
	return(
		<div className="container-fluid">
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={ buscarProducto }>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input ref={inputSearch} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							product.length > 0 && product.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.img}
														alt={product.name} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{'$' + product.price}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ product.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
		</div>
	)
}

export default SearchMovies;
