import React, {useState, useEffect} from 'react';
import SmallCard from './SmallCard';

function ContentRowMovies(){
    const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('/api/product')
            .then( r => r.json())
            .then( data => {
                setProducts(data.data);
		    })
            .catch(error => console.log(error));
	}, [])

    // Traer tambien usuarios

    let productsInDB = {
        title: 'Products in Database',
        color: 'primary', 
        cuantity: products.length,
        icon: 'fa-clipboard-list'
    }
    
    let cartProps = [productsInDB];

    return (
    
        <div className="row">
            
            {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;