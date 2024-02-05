# Projeto 4: Lista de Tarefas

Este projeto é parte do curso **Aplicativos Móveis com o React Native**.

[Clique aqui para acessar o curso](https://www.udemy.com/course/aplicativos-moveis-com-o-react-native/).

## Como Rodar

### Frontend

Instale as dependências:

```sh
yarn install
```

Rode:

```sh
yarn start
```

Existem várias maneiras de abrir o aplicativo. Por exemplo, para abrir o aplicativo no iPhone:

- Deixe o seu celular conectado na mesma rede de Internet do seu computador.
- Abra o app de Camera e aponte-a para o código QR do terminal.
- Ele abrirá o app do Expo Go e carregará o aplicativo. Se não tiver o app do Expo, baixe-o na loja de apps.

### Backend

Esse aplicativo depende de um backend simulado. Clone o repositório <https://github.com/nbkhope/backend-simulado-tarefas> e siga as suas instruções de instalação e como rodar. Note que o backend deve rodar em uma aba/janela separada do terminal, diferente da do frontend.

### Acesso do Backend pelo Expo

Se vós optastes por rodar o aplicativo diretamente no dispositivo móvel em vez de com um emulador, poderá haver problema de conexão entre o frontend e o backend.

Para resolver isso, temos que usar uma URL do backend que é acessível do smartphone que roda o app do Expo. Uma maneira de realizar isso é com o pacote de NPM chamado `localtunnel`. Faça assim:

Com o backend já rodando em uma janela ou aba do terminal, abra outra aba/janela separada. Esteja na pasta do repositório do backend e instale o localtunnel:

```
yarn add localtunnel
```

Daí basta rodá-lo, com o argument `port` correspondente a mesma porta do backend:

```
npx lt --port 3000
```

Ele irá imprimir na tela o valor da URL que você deve copiar para substituir todos os valores de `localhost:3000` no(s) arquivo(s) que realizam requisições ao backend. Por exemplo:

```
// Onde houver chamada de fetch, substituia localhost:3000 pela URL apresentada pelo localtunnel:

fetch('https://silent-beans-fly.loca.lt/tarefas')
```

## Em Caso de Erro

Como o desenvolvimento do React Native ocorre frequentemente, uma nova versão poderá deixar o Expo de funcionar com o aplicativo. Para resolver isso, basta atualizar os pacotes em `package.json` para a versão mais atual.

Uma maneira de saber qual os números específicos usar é assim:

- Em algum outro lugar, instale e use `create-expo-app` para gerar um novo projeto de amostra.
- Verifique o número das versões desse novo aplicativo e copie de acordo.
