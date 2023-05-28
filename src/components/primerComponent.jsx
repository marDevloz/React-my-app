import React from "react";
import { createRoot } from "react-dom/client";

class MiComponente extends React.Component{
    render(){
        return <h1>Hola, REact.. :), mi nombre es: { this.props.nombre}</h1>;
    }
}

export default MiComponente;