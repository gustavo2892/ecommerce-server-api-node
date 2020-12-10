<h1 align="center">
  Ecommerce Server
  <div>
    <img src="https://img.shields.io/badge/-Node.js-green" />
    <img src="https://img.shields.io/badge/-MongoDB-blue" />
    <img src="https://img.shields.io/badge/-Express-yellow" />
  </div>
</h1>

## Descrição

Backend de um Ecommerce, desenvolvido durante o curso 'Criando um Ecommerce do Zero com NodeJS, React e MongoDB'.

## Instações Globais

`npm install --global mocha`

## Casos de Uso

Administrador

- Ter acesso a todos os pedidos feitos dentro da loja
- Conseguir alterar os status de pedidos e avisar os clientes dessa alteração pelo e-mail
- Conseguir colocar o código de rastreamento do pedido do cliente
- Conseguir alterar e excluir o pedido do cliente e avisar o cliente dessa alteração pelo e-mail
- Ter acesso a todos os clientes que já pediram na loja
- Pesquisar por nome ou telefone na listagem de clientes
- Conseguir alterar os dados ou remover um cliente da loja
- Ter acesso a todos os pedidos feitos por um cliente específico
- Ter acesso a uma lista com todos os produtos que estão disponíveis e indisponíveis
- Conseguir alterar os dados de um produto - disponibilidade e preço
- Conseguir adicionar fotos para um produto específico
- Conseguir excluir produtos do sistema
- Ter acesso a uma lista com todas as categorias que estão disponíveis e indisponíveis
- Conseguir alterar os dados de uma categoria, deixar indisponível e excluir a categoria
- Ter acesso a uma lista com variações de um determinado produto
- Conseguir deixar indisponível determinada variação
- Conseguir enviar fotos exclusivas para uma variação
- Conseguir alterar dados da variação - colocar desconto e alterar preço base
- Ter acesso a uma lista com todas as avaliações de um determinado produto
- Conseguir responder às avaliações ou excluir elas
- Conseguir alterar os próprios dados de usuário
- Conseguir fazer login com administrador no site
- Conseguir recuperar a senha do seu cadastro direto pelo e-mail
- Conseguir alterar os dados relacionados a loja
- Colocar loja em manutenção
- Alterar dados de telefone, e-mail e endereço

Cliente

- Consegue deixar avaliações em produtos
- Alterar e excluir avaliações deixadas em produtos
- Fechar um pedido completo com meio de pagamento
- Realizar o pagamento diretamente pela loja, utilizando cartão de crédito ou boleto
- Ver todos os pedidos que fez no seu nome
- Ver detalhes de um pedido feito - pagamento, entrega e dados da loja
- Conseguir cancelar o seu pedido
- Alterar seus dados pessoais e de entrega online
- Possui também todos os casos de uso do visitante

Visitante

- Ver todas as categorias disponíveis no site
- Ver todos os produtos de uma determinada categoria
- Ver todos os detalhes de um determinado produto
- Ver cada variação disponível para determinado produto
- Ver avaliações deixadas para produto selecionado
- Ver valores e descontos para cada produto na listagem
- Conseguir pesquisar um produto pelo nome, descrição ou categoria
- Ver uma lista com vários produtos sortidos
- Conseguir alterar a ordem dos produtos - ordem alfabética, ordem de preço e ordem aleatória
- Conseguir calcular o valor de entrega em determinado produto e do carrinho completo
- Conseguir também se cadastrar no sistema - fazer login e se cadastrar
Ver as páginas institucionais da loja
