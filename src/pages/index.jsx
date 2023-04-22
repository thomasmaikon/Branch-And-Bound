import AdicionaItem from '@/components/AdicionarItem'
import { createContext, useState } from 'react'
import ExibirItensAdicionados from '@/components/ExibirItensAdicionados'
import ExibirArvore from '@/components/ExibirArvore'
import { Mochila } from '@/entidades/No'

export const MyContext = createContext()

export default function Home() {
  const [mochila, setMochila] = useState(new Mochila())
  const [itens, setItens] = useState([])
  const [exibeResultado, setExibeResultado] = useState(false)
  return (
    <MyContext.Provider value={{ itens, setItens, 
      mochila, setMochila, 
      exibeResultado, setExibeResultado }} >
        
      <title>Branch and Bound</title>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <div>
          <p> <b> Problema da Mochila </b> </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'col' }}>

          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px' }}>
            <div>
              <AdicionaItem />
            </div>

            <div>
              <ExibirItensAdicionados itens={itens} />
            </div>
          </div>

          <div style={{width:'100%', marginLeft:'15px' }}>
            <ExibirArvore />
          </div>

        </div>



      </main>
    </MyContext.Provider>

  )
}
