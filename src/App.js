import React, { Component, Fragment } from 'react';
import Form from './components/Form';
import { calcularTotal } from './helpers';
import './normalize.css';
import './skeleton.css';
import Resultado from './components/Resultado';
import Mensaje from './components/Mensaje';
import Spinner from './components/Spinner';

class App extends Component {
    state = {
        cantidad:'',
        plazo:'',
        total:'',
        cargando: false
    }

    datosPrestamos = (cantidad, plazo) => {
        const total = calcularTotal(cantidad, plazo);

        // Posee una funcion callback
        this.setState({
            cargando:true
        }, ()=>{
            setTimeout(() => {
                this.setState({
                    cantidad,
                    plazo,
                    total,
                    cargando:false
                })
            }, 2000);
        })
    }

    render() {
        const {cantidad, plazo, total, cargando} = this.state;

        //Cargar un componente condicionalmente
        let componente;
        if (total === '' && !cargando) {
            componente = <Mensaje />
        } else if(cargando) {
            componente = <Spinner />
        } else {
            componente = <Resultado 
                            cantidad={cantidad}
                            plazo={plazo}
                            total={total}
                        />
        }

        return (
            <Fragment>
                <h1 className="title">
                    Cotizador de Prestamos
                </h1>

                <div className="container">
                    <Form 
                        datosPrestamos={this.datosPrestamos}
                    />
                    <div className="mensajes">
                        {componente}
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default App;