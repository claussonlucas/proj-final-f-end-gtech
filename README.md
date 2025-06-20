# PROJETO FINAL FRONT END GERAÇÃO TECH - 2025

O objetivo do projeto é criar um um aplicativo Web simulando uma loja virtual, para venda de produtos, como tênis de vários modelos. Utiliza a biblioteca `React`, com auxílio da ferramenta `Vite`, com a linguagem `JavaScript`.

A criação faz parte do projeto final Frontend do curso de **Desenvolvedor Web Full Stack - Online - 2.0 - 2025**, da Geração Tech, IEL.

O projeto segue os requisitos do projeto `Digital Store`, da escola `Digital College`, disponibilizado no repositório do site do `GitHub`, e o modelo no site `Figma`:

- Link do repositório no GitHub:

```https://github.com/digitalcollegebr/projeto-digital-store/tree/main```

- Link do site Figma:

```https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30```

## Linguagem, Ferramentas e Bibliotecas Utilizadas
- JavaScript
- React
- HTML e CSS (estilos dos componentes do React)
- Vite
- Node.js
- npm
- Axios
- Styled-components
- Prime React
- React Router Dom
- Prime React

## Sobre o Aplicativo

O aplicativo apresenta três páginas ao cliente (usuário), sendo a primeira a página principal. A segunda, com uma lista de produtos, com opções para filtrar (não funcionais). E a terceira, com informações de um produto específico.

As páginas possuem elementos comuns entre elas, como o cabeçalho (header) com a barra de menus, e o rodapé (footer).

O aplicativo busca ter responsividade para a versão em telas menores.

<details>
  <summary><strong>Informações</strong></summary>

## Estrutura de pastas

A estrutura de pastas segue o modelo de organização recomendado pelo projeto `Digital Store`, acrescentando algumas pastas e arquivos, que são necessárias para o funcionamento do aplicativo.

- Os arquivos `.gitignore`, `eslint.config.js`, `package-lock.json`, `package.json`, `vite.config.js`, são para o funcionamento do aplicativo, e instalados quando a framework `Vite` é instalada.

- O `index.html` é o arquivo principal, que vai receber todos os componentes criados. O `TODO.txt` contém lembretes utilizados para criação do projeto.
A pasta `src` contém os arquivos `main.jsx`, que substitui o elemento que tem o ID 'root' no `index.html`, pelo componente `App.jsx`. O `App.jsx`, é responsável pelas rotas do site. Contém também os arquivos CSS de cada um.

- Na pasta `src`, também estão as principais pastas do projeto, como a pasta `components`, com os arquivos dos componentes React. A pasta `pages` armazena os arquivos relacionados às páginas do site. A pasta `service` tem o arquivo `index.js`, que serve para importar o `Axios`, que ajuda a montar o URL para o recebimento de dados do banco de dados de teste feitas pelas requisições. Na pasta `styles` contém os arquivos CSS para estilos dos componentes. A pasta `assets` possui arquivos de imagen com extensão `.svg`.

- A pasta `data` possui os arquivos utilizados como um banco de dados para teste, para verificar se o aplicativo consegue receber dados entregues por um servidor (que não está no escopo do projeto).

- A `public` é a pasta onde se encontram as imagens usadas para os produtos da loja fictícia.
E na pasta `doc` estão as imagens usadas nesse `README.md`.

<details>
  <summary><strong>Estrutura</strong></summary>

```
|--- doc/
|--- public/
|--- src/
|--- |--- assets/
|--- |--- components/
|          |--- BarSearch.jsx
|          |--- BotoesConta.jsx
|          |--- BotoesContaMobile.jsx
|          |--- BuyBox.jsx
|          |--- FilterGroup.jsx
|          |--- Footer.jsx
|          |--- Gallery.jsx
|          |--- Header.jsx
|          |--- HeaderFull.jsx
|          |--- HeaderMobile.jsx
|          |--- Information.jsx
|          |--- Logo.jsx
|          |--- MenuBar.jsx
|          |--- MenuBarMobile.jsx
|          |--- ModalMenuMobile.jsx
|          |--- ProductCard.jsx
|          |--- ProductListing.jsx
|          |--- ProductOptions.jsx
|          |--- Section.jsx
|--- |--- context/
|          |--- MenuContext.json
|--- |--- data/
|          |--- dataFilter.json
|          |--- dataFooter.json
|          |--- dataGallery.json
|          |--- dataProduct.json
|          |--- dataProductListing.json
|          |--- dataProductView.json
|--- |--- pages/
|          |--- HomePage.jsx
|          |--- Layout.jsx
|          |--- NotFound.jsx
|          |--- ProductListingPage.jsx
|          |--- ProductViewPage.jsx
|--- |--- service/
|          |--- index.js
|--- |--- styles/
|          |--- barSearch.css
|          |--- botoesConta.css
|          |--- botoesContaMobile.css
|          |--- buyBox.css
|          |--- filterGroup.css
|          |--- footer.css
|          |--- gallery.css
|          |--- Hearder.css
|          |--- hearderMobile.css
|          |--- homePage.css
|          |--- logo.css
|          |--- modalMenuMobile.css
|          |--- productCard.css
|          |--- productListing.css
|          |--- productListingPage.css
|          |--- productOptions.css
|          |--- ProductViewPage.css
|--- |--- App.css
|--- |--- App.jsx
|--- |--- index.css
|--- |--- main.js
|--- .gitignore
|--- eslint.config.js
|--- index.html
|--- package-lock.json
|--- package.json
|--- README.md
|--- TODO.txt
|--- vite.config.js
```
</details>

## Páginas

<details>
  <summary><strong>Informações</strong></summary>

### 1 - Página Principal

<details>
  <summary><strong>Sobre</strong></summary>

A página principal (Home Page) contém o cabeçalho (header) com a logo da loja fictícia, barra de pesquisa, botões para entrar como usuário (Login) e cadastro, e a barra de menus para as outras páginas.

Na seção principal, mostra uma galeria de imagens de produtos, uma seção com vários produtos, e no final um rodapé (footer) com informações da loja.

<details>
  <summary><strong>Componentes: HomePage</strong></summary>

A página **Home** é montada usando o componente principal `HomePage.jsx`, e os componentes gerais `MenuContext.jsx`, usado para a responsividade e o menu na versão mobile, e o `Layout.jsx`, que traz os componentes comuns às outras páginas, como o `Header.jsx` e o `Footer.jsx`.

- Endereço:

```
http://localhost:5173/
```

**Componentes Utilizados**
- Gallery:

Galeria de imagens dos produtos.

```
<Gallery  className={ }  width={ } height={ } radius={ } images={ } showThumbs/>
```

- Section:

Seção que traz imagens de produtos de destaque.

```
<Section title={ } titleAlign={ } link={}>
“Children”
</Section>
```

- ProductListing e ProductCard:

O `ProductListing.jsx` é o componente presente em outro `Section.jsx`, que mostra os componentes `ProductCard.jsx`, com imagem, nome e preço dos produtos.

```
<ProductListing products={ } />
```

```
<ProductCard image={ } name={ } price={ } priceDiscount={ }/>
```

</details>

<details>
  <summary><strong>Telas</strong></summary>

- Página Inicial - Parte 1
 
![homepage](./doc/homepage-p1.png)

- Página Inicial - Parte 2

![homepage](./doc/homepage-p2.png)


- Página Inicial - Parte 3

![homepage](./doc/homepage-p3.png)

- Página Inicial - Parte 4

![homepage](./doc/homepage-p4.png)

- Página Inicial - Parte 5

![homepage](./doc/homepage-p5.png)

(Versão para telas menores)

![homepage](./doc/homepage-mobile-p1.png)

![homepage](./doc/homepage-mobile-p2.png)

![homepage](./doc/homepage-mobile-p3.png)

![homepage](./doc/homepage-mobile-p4.png)

![homepage](./doc/homepage-mobile-p5.png)

![homepage](./doc/homepage-mobile-p6.png)

![homepage](./doc/homepage-mobile-p7.png)

</details>

</details>

### 2 - Página da Lista de Produtos

<details>
  <summary><strong>Sobre</strong></summary>

A segunda página mostra uma lista de produtos, com opções para filtrar (não funcionais).

<details>
  <summary><strong>Componentes: ProductsListingPage</strong></summary>

- Endereço:

```
http://localhost:5173/produtos
```

A página **Lista de Produtos** é montada usando o componente principal `ProductsListingPage.jsx`, e também com os componentes gerais `MenuContext.jsx` e o `Layout.jsx`, que traz os componentes `Header.jsx` e o `Footer.jsx`.

 - A página traz elementos HTML para criar um campo para selecionar entre o menor e maior preço.

**Componentes Utilizados**
- FilterGroup:

Cria campos para filtrar produtos.

```
<FilterGroup title={ } inputType={ } options={ } />
```

- Section, ProductListing e ProductCard:

Os componentes `Section.jsx`, `ProductListing.jsx` e `ProductCard.jsx` são usados na página.

</details>

<details>
  <summary><strong>Telas</strong></summary>

- Página de Produtos - Parte 1
  
![produtos](./doc/produtos-p1.png)

- Página de Produtos - Parte 2
  
![produtos](./doc/produtos-p2.png)

(Versão para telas menores)

![homepage](./doc/produtos-mobile-p1.png)

![homepage](./doc/produtos-mobile-p2.png)

![homepage](./doc/produtos-mobile-p3.png)

</details>

</details>

### 3 - Página de um Produto Específico

<details>
  <summary><strong>Sobre</strong></summary>

A terceira página contém informações de um produto específico.

<details>
  <summary><strong>Componentes: ProductViewPage</strong></summary>

- Endereço:

```
http://localhost:5173/product/:id
```
A página **Produto Específico** é montada usando o componente principal `ProductViewPage.jsx`, e também com os componentes gerais `MenuContext.jsx` e o `Layout.jsx`, que traz os componentes `Header.jsx` e o `Footer.jsx`.

**Componentes Utilizados**

 - A página usa o componente Gallery.jsx.


- BuyBox:

Apresenta as informações do produto. Como “filhos” (children), recebe o componente `ProductOptions.jsx`.

```
<BuyBox name={ } reference={ } stars={ } rating={ } price={ } priceDiscount={ } description={ } >
“Children”
</BuyBox>
```

- ProductOptions:

Contém variações relacionadas ao produto, como tamanho e cor.

```
<ProductOptions options={ } radius={ } shape={ } type={ } />
```

- Section, ProductListing e ProductCard:

Os componentes `Section.jsx`, `ProductListing.jsx` e `ProductCard.jsx` são usados na página.

</details>

<details>
  <summary><strong>Telas</strong></summary>

- Página Product - Parte 1
  
![produtos](./doc/product-p1.png)

- Página Product - Parte 2
  
![produtos](./doc/product-p2.png)

- Página Product - Parte 3
  
![produtos](./doc/product-p3.png)

(Versão para telas menores)

![homepage](./doc/product-mobile-p1.png)

![homepage](./doc/product-mobile-p2.png)

![homepage](./doc/product-mobile-p3.png)

</details>

</details>

</details>

## Instalação
<details>
  <summary><strong>Informações</strong></summary>

- Baixar Node.js: 

Link:

```
https://nodejs.org/pt
```

- Criar projeto React com o Vite: 

```
npm create vite
```

> Seguir as opções definir nome do projeto, escolher React, a linguagem JavaScript, e criar uma pasta.

- Instalar pacotes node modules: 

```
npm install
```

- Abrir o VScode:

```
code .
```

- Instalar bibliotecas Prime React, Prime Flex, Prime Icons e Styled Components:

```
npm i primereact primeflex primeicons styled-components
```

- Instalar biblioteca React Router Dom:
  
```
npm i react-router-dom
```

- Instalar biblioteca React Hook Form:
  
```
npm i react-hook-form
```

- Instalar biblioteca Axios:
  
```
npm i axios
```

- Rodar o aplicativo:

```
npm run dev
```
</details>

</details>

## Autor

- GitHub: claussonlucas

## Contribuição

Alguns trechos de códigos foram feitos em parceria com o aluno Clailson Lucas, do curso Desenvolvedor Web Full Stack - Online - 2.0 - 2025, da Geração Tech.
- GitHub: [@clailson1](https://github.com/clailson1)

## Licença

O projeto segue o modelo do projeto `Digital Store`, da escola `Digital College`, disponibilizado no repositório do site do `GitHub`, e o modelo no site `Figma`:

- Link do repositório no GitHub:

```https://github.com/digitalcollegebr/projeto-digital-store/tree/main```

- Link do site Figma:

```https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30```
