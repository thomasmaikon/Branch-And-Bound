import { No } from '@/entidades/No';
import { MyContext } from '@/pages';
import React, { useContext } from 'react';
import { Tree } from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

export default function ExibirArvore(props) {
    const { itens, mochila, exibeResultado } = useContext(MyContext);

    const arvore = itens.length > 0 
        ? exibeResultado 
            ? new No().gerarArvore(itens, mochila).converterEmArvore() 
            : {} 
        : {} ;

    const data = {
        name: 'Parent',
        children: [{
            name: 'Child One'
        }, {
            name: 'Child Two'
        }]
    };
    return (
        <>
            <Tree
                data={arvore}
                height={1000}
                width={800}
                svgProps={{
                    strokeWidth: 0.1,
                }}
                />
        </>

    );

}