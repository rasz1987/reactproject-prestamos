/* Existen dos tipos de componentes:
.- Class Component, es una clase con distintos metos como Form.js.

.- StateLess functional component, en realidad son funciones normales, con una variables o como arrow function y este va a ser de ese tipo

Existen muchas diferencias:
1.- Cuanco es class component heredadn de componente, el stateless functional component no hereda de componente
2.- En class component se utiliza this.props en los stateless functional component no se puede utilizar this, se utiliza directamente props.
3.- En los class component se utilizan los states, en los stateless functional component no pueden tener state.
4.- El ciclo de vida del componente tampoco lo puede tener el stateless functional component.

Una de las ventajas es que son mas faciles de leer y mas faciles de leer.
*/

import React from 'react';

const Resultado = (props) => {
    return (  
        <div className="u-full-width resultado">
            <h2>Resultados</h2>
            <p>La cantidad solicitada fue: $ {props.cantidad}</p>
            <p>A pagar en: {props.plazo} meses </p>
            <p>Total a pagar: $ {props.total} </p>
            <p>Su pago mensual es de: $ { (props.total / props.plazo).toFixed(2) } </p>
        </div>
    );
}
 
export default Resultado;