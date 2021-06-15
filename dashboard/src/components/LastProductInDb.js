import React, {useEffect, useState} from "react";

/* Ver para que lo podemos utilizar */

function LastProductInDb() {
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
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Products in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          {
            products.length > 0 && products.map((product, i) => {
                return (
                    <div className="col-lg-6 mb-4" key={i}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{product.name}</div>
                    </div>
                  </div>
                )
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastProductInDb;