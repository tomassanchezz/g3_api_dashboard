import React from 'react';

// A traves de las props seleccionar cada uno de los campos del producto.

function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.category}</td>
                    <td>{props.colors}</td>
                    <td>{props.sizes}</td>
                    <td>{'$' + props.price}</td>
                </tr>
            )
    }
    
export default ChartRow;