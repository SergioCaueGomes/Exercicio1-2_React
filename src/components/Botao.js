import React from "react";

export default props => {
    function cadastrar(){
        console.log('Cadastrou');
    }
    return (
        <button onClick={cadastrar}>Cadastrar</button>
    )
}