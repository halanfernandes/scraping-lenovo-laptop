# Descrição do Projeto

Este projeto é uma API que realiza scraping de informações sobre notebooks Lenovo utilizando a biblioteca Puppeteer. A API coleta dados de um site de e-commerce de teste e retorna informações como:

- **Título**: Nome do notebook.
- **Preço**: Valor do notebook.
- **Descrição**: Breve descrição do produto.
- **Link**: URL do produto para mais detalhes.

## Funcionalidade

- A API acessa múltiplas páginas do site, coletando informações sobre todos os notebooks Lenovo disponíveis.
- Os dados coletados são retornados em formato JSON.

## Estrutura do Código

- **`scraper.js`**: Contém a lógica para realizar o scraping dos notebooks Lenovo.
- **`index.js`**: Configura o servidor Express e define a rota para acessar os dados dos notebooks.

