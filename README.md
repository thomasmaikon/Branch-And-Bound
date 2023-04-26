This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Algumas observacoes importantes  

* O unico valor importante para a mochila e o peso dela, o outro atributo (valor) seria implementado para validacao tambem, mas com fins de facilitar o entendimento e para validacao apenas o campo (peso) esta sendo considerado no algoritmo.

* A arvore gerada exibe apenas os casos possiveis mediante a limitacao do peso da mochila.

* Alem de considerar apenas o peso para a mochila o algoritmo busca a melhor sequencia em que o maximo de itens pode ser levado, dessa forma, tendo a funcao objetivo de maximizar a quantidade de itens mediante a restricao peso

* O resultado exibido a cima da arvore mostra um dos possiveis melhores casos, visto que haverao casos em que a quantidade de itens mediante a limitacao do peso da mochila sejam iguais pode existir, ou seja, para os mesmos itens inseridos porem em ordens diferentes o algoritmo pode gerar um resultado com diferentes itens mas que atende aos requisitos tanto em peso quanto quantidade, satisfazendo igualmente ao primeiro caso.

# Muito Importante
Ao inserir os valores e gerar a arvore juntamente aos resultados, CASO queira adicionar mais dados é fundamental que a tela seja recarregada e os valores sejam atualizados se nao os dados atuais gerados na arvore sobrescrevem os anteriores, 
impossibilitando o entendimento do resultado final.
