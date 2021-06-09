import React, {useState, useEffect} from 'react';
import SmallCard from './SmallCard';

function ContentRowMovies(){
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('/api/product')
            .then( r => r.json())
            .then( data => {
                setProducts(data.data);
		    })
            .catch(error => console.log(error));
	}, [])

    useEffect(() => {
		fetch('/api/user')
            .then( r => r.json())
            .then( data => {
                setUsers(data.data);
		    })
            .catch(error => console.log(error));
	}, [])


    let productsInDB = {
        title: 'Products in Database',
        color: 'primary', 
        cuantity: products.length,
        icon: 'fa-clipboard-list'
    }
    
    let usersInDB = {
        title: 'Users in Database',
        color: 'secondary', 
        cuantity: users.length,
        icon: 'fa-clipboard-list'
    }

    let cartProps = [productsInDB, usersInDb];

    return (
    
        <div className="row">
            
            {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;