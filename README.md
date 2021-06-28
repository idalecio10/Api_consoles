Fazer o clone git clone git@github.com:idalecio10/Layout_cne.git

Instalar dependências : npm i

Iniciar : npm run dev

Criar o arquivo .env, fora da pasta src... Dentro do arquivo .env :
{
  COLLECTION_APP_MONGODB_HOST=localhost
  COLLECTION_APP_MONGODB_DATABASE=collection
}

Preparar todo o ambiente do MongoDB e iniciar o mongodb.

Rotas:
  - / (Rota Inicial)
  
  - /videogame (Rota de cadastro, e listagem de video games(consolas))
  - /videogame/:id (Rota de listagem de video game(consolas) por ID)
  
  - /jogo (Rota de cadastro, e listagem de jogo)
  - /jogo:id (Rota de listagem de jogo por ID)
  - /jogo/videogame:id (Rota de listagem de jogo por ID de video game)

