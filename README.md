<h1 align="center">
  <img alt="Leadster" title="Leadster" src="./public/cover.png" />
</h1>

<h1 align="center">
  Leadster
</h1>

<p align="center">
  <a href="https://landing-page-eosin-eight.vercel.app/">Link to Preview</a>
</p>

### Motivations

Decidi utilizar TailwindCSS pela primeira vez para criar essa landing page e fiquei surpreso com a facilidade de construir algo usando essa ferramenta. Inicialmente, considerei usar o Styled Components, mas como estamos na era dos SSR, sabemos que ele não se adapta tão bem a essa nova abordagem de desenvolvimento de aplicações.
Como não encontrei um arquivo Figma ou algo similar, utilizei a imagem fornecida e contei com a ajuda do plugin para Chrome chamado PerfectPixel. Com ele, consegui ajustar as dimensões dos elementos da página o mais próximo possível do layout desejado.

### Approach

Utilizei o template recomendado pelo Next.js e, seguindo a estrutura sugerida, criei a pasta "components" dentro da pasta "src" do projeto. Organizei os componentes nessa pasta de acordo com seu contexto, visando sua reutilização em páginas futuras.
Na seção de Galeria, onde temos os vídeos, senti a necessidade de utilizar um contexto simples. Por isso, criei um hook no final para facilitar ainda mais o seu uso.
Quanto às animações, optei por utilizar o framer-motion, uma biblioteca que admiro bastante. Com ela, consigo aplicar animações pontuais, bem como animações que levam em consideração a posição do scroll na página. É uma ferramenta muito útil!

```bash
# First, clone this repository:
$ git clone https://github.com/mateusdotcc/landing-page.git

# Access the project folder in the / cmd terminal:
$ cd landing-page

# Install the dependencies:
$ npm install

# Run the application in development mode:
$ npm run dev

# The server will start at port: 3000 go to:
$ http://localhost:3000
```

### Connect with me:

<a href="https://www.linkedin.com/in/mateusdotcc/">
  <img alt="Connect with me" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

### Other projects:

- http://beconsulting.com.br/
- https://www.original.com.br/
- https://www.amplifyre.com/
- and more •‿•
