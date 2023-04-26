import { Item } from "@/entidades/No";
import { MyContext } from "@/pages"
import { useContext, useState } from "react"

export default function AdicionaItem(props) {
    const { itens, setItens, mochila, setMochila, exibeResultado, setExibeResultado } = useContext(MyContext);

    const [nome, setNome] = useState("")
    const [valor, setValor] = useState(0)
    const [peso, setPeso] = useState(0)

    function atualizaNome(novoNome) {
        let copy = nome
        copy = novoNome
        setNome(copy)
    }

    function adicionaItem(item) {
        const newItem = new Item(item.nome, item.peso, item.valor);
        let itensAtualizados = [...itens, newItem];
        exibirResultado(false);
        setItens(itensAtualizados);
    }

    function ajustaMochila(peso, valor) {
        let copy = mochila;
        copy.limitePeso = peso;
        copy.limiteValor = valor;
        setMochila(copy);
    }

    function exibirResultado(exibir){
        let copy = exibeResultado;
        copy = exibir;
        setExibeResultado(copy);
    }
    return (<>
        <div className="mochila">
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <b>Mochila</b>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <input type="number"
                    placeholder="Peso Maximo"
                    onChange={e => ajustaMochila(e.target.value, mochila.limiteValor)} />

                {/* <input type="number"
                    placeholder="Valor Maximo"
                    onChange={e => ajustaMochila(mochila.limitePeso, e.target.value)} /> */}
            </div>
        </div>

        <div className="divItem">
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <b>Item</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <input type="text"
                    placeholder="Nome do Item"
                    onChange={e => atualizaNome(e.target.value)} />

                <input type="number"
                    placeholder="Peso"
                    onChange={e => setPeso(e.target.value)} />

                {/* <input type="number"
                    placeholder="Valor"
                    onChange={e => setValor(e.target.value)} /> */}
            </div>

            <div className="divButton">
                <button className="adicionarItem" onClick={() => adicionaItem({
                    nome: nome,
                    valor: valor,
                    peso: peso
                })}> <b> Adicionar item </b> </button>
            </div>

        </div>



        <div className="divButton">
            <button className="exibirResultado" onClick={() => exibirResultado(true)}> <b> Gerar Arvore </b> </button>
        </div>
    </>)
}
