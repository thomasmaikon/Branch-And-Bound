import { useEffect, useState } from "react"

export default function ExibirItensAdicionados(props) {

    useEffect(() => {
        console.log('atualizando itens na lista')
    })

    function exibirItens() {
        return props.itens.map((item, index) => {
            return (
                <div key={index} style={{ display:'flex', justifyContent:"space-between", marginBottom:'5px'}}>
                    <span>{item.nome}</span>
                    {/* <span>{item.valor}</span> */}
                    <span>{item.peso}</span>
                </div>)
        })
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span> <b>Nome</b> </span>
                {/* <span> <b>Valor</b> </span> */}
                <span> <b>Peso</b> </span>
            </div>
            { exibirItens() }
        </>
    )
}