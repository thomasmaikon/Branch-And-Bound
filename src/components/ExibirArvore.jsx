import { CalcularMelhorRespostaDoBranchAndBound, No } from '@/entidades/No';
import { MyContext } from '@/pages';
import React, { useContext } from 'react';
import { Tree } from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

export default function ExibirArvore(props) {
    const { itens, mochila, exibeResultado } = useContext(MyContext);



    const resultado = itens.length > 0
        ? exibeResultado
            ? new No().gerarArvore(itens, mochila)
            : {}
        : {};

    const arvore = itens.length > 0
        ? exibeResultado
            ? resultado.converterEmArvore()
            : {}
        : {};

    function exibirResultadoEsperado() {
        debugger
        const result = new CalcularMelhorRespostaDoBranchAndBound().MelhorResposta(itens, mochila);
        if (result.resultadoItens != undefined) {
            return result.resultadoItens.map((item) => {
                return ` [${item.nome}] `
            })
        }
    }

    return (
        <div>
            {exibeResultado ? <div> Resultado: <span> { exibirResultadoEsperado() } </span> </div> : <></> }

            <Tree
                data={arvore}
                height={1000}
                width={800}
                svgProps={{
                    strokeWidth: 0.1,
                }}
            />
        </div>

    );

}