---
id: 57f371b0-7921-43bf-8508-dd328909599d
title: Integrando Notion com Github
created_time: 2023-05-14T02:52:00.000Z
last_edited_time: 2023-05-22T16:44:00.000Z
cover_image: public/images/integrando-notion-com-github/Frame_1_XghZLEg0.png
series: []
date:
  type: string
  string: 2023-05-22 21:36
uri:
  type: string
  string: integrando-notion-com-github
category: []
cover_image_alt: Imagem com a logo da notion + logo github actions
Status: Publicado
_thumbnail: public/images/integrando-notion-com-github/Frame_1_XghZLEg0.png

---

Fala pessoa, como cê tá?

Sim, o blog não morreu 😂, eu só não tenho conseguido escrever nada. Por mais que meus posts sejam como especial de natal, que só aparece uma vez por ano e não necessariamente é tão bom 🤣🤣.

Eu tenho estado muito ocupado e acabo não conseguido parar pra escrever, principalmente pela forma que eu preciso pra escrever. Meu blog é feito com NextJS e hospedado via Github pages e por isso, eu preciso ou estar no meu pc + escrever + realizar o build e postar ou baixar o projeto + instalar dependências + escrever + realizar o build e então postar. O que aumenta o “custo” na hora de escrever (*Resumindo, da preguiça!*).

<!-- START_SUMMARY -->

Mas como o titulo do post da o spoiler, eu descobri uma forma de facilitar a minha criação de post utilizando o poder do Notion, sem tirar a liberdade que eu possuo em ter o meu blog feito por mim e hospedado no Github pages.

<!-- END_SUMMARY -->

Eu tenho trabalhado muito voltado ao DX ( e esse assunto já está na lista de posts pra escrever ) mas eu mesmo não faço isso pra mim ( o clássico “*em casa de ferreiro, o espeto é de pau*” ).

## Conhecendo as ferramentas

*   [**Notion**](https://notion.so)

    Onde eu pretendo escrever e gerenciar os posts do meu blog.

    *Se você não conhece o* [*Notion*](https://notion.so) *eu recomendo, é uma grande ferramenta que ajuda em vários pontos da minha vida.*

*   [**Github**](https://github.com) (Pages e Actions)

    Hoje eu já hospedo o meu blog via Github Pages, visto que o blog é estático e finalmente vou utilizar o Github Actions para fazer o build e o deploy do blog.

*   [**Next JS**](https://nextjs.org/)

    Para gerar os estáticos eu fiz o meu blog inteiro utilizando o Next.

## Começando pelo o começo

Eu, a um tempo, estava incomodado de não ter criado uma pipeline pra fazer os testes e o build/deploy do meu blog, mas mais incomodado ainda em não estar postando com frequência, principalmente porque hoje para mim é cansativo escrever um post.

Hoje estou mais acostumado com o Gitlab CI, visto que na Globo usamos o Gitlab. Eu já conhecia o Github Actions, mas nunca havia mexido. Então acabava postergando o aprendizado e a utilização do Github actions.

Em um dado momento, dado a praticidade de utilizar o Notion, eu acabei me perguntado se não era possível integrar ele com o meu Blog, para facilitar o gerenciamento dos posts e assim me incentivar a escrever mais ( ainda mais porque eu to cheio de ideias de post mas sem saco de passar pelo o processo de escrita que possuo hoje ).

Com isso, acabei encontrando uma action para o Github, que faz o a integração com o Notion, porém eu tive uma certa dificuldade para configurá-lo 😞, a documentação dele foi a melhor que eu achei dessas actions, porém já está meio desatualizada e não tem algumas infos importantes, que eu quebrei a cabeça para entender.

Chega de história, vamos para a ação!

## Notion

Para facilitar a visualização, vamos começar adaptando o Notion para esperar a integração com o Github, para isso vamos criar uma pagina de database e nela vai ficar listada todos os posts que serão publicados no blog. Então coloque as propriedade que você quiser, no meu caso ficou assim:

![Print da tela do database do notion com as colunas: Title, created\_at, Status, Category](public/images/integrando-notion-com-github/Untitled_UOvGF0TT.png)

*Os campos podem ser quais você quiser, porem é* ***obrigatório*** *possuir o campo “status” (ou outro que faça o mesmo trabalho, que você entenderá mais a frente).*

Com essa tabela criada, já possuímos uma estrutura onde podemos criar todos os nossos post e, de brinde, criar status onde você pode saber se já está postado, escrevendo ou é apenas uma ideia.

### Iniciando a integração

*   Agora para preparar o terreno para integração vamos adicionar uma conexão, nas opções da tabela, vá até gerenciamento de conexão (Manage connections)

![](public/images/integrando-notion-com-github/Screenshot_2023-05-13_at_22.15.11_dQFMXWf8.png)

*   Na janela que abrir, procure no fim da tela o campo: *Developer or manager integrations*

![](public/images/integrando-notion-com-github/Screenshot_2023-05-13_at_22.15.33_nLdfOHEv.png)

*   Ele vai te redirecionar até a area de integrações de api do Notion

![](public/images/integrando-notion-com-github/Screenshot_2023-05-13_at_22.15.56_TyshPMJz.png)

*   Clique para adicionar uma nova integração ( New Integration ) e preencha o campo de Name com o nome que voce quiser dar, uma imagem para você saber o que você está associando e qual o workspace do notion essa api vai ser associada.

![](public/images/integrando-notion-com-github/Screenshot_2023-05-13_at_22.17.13_PMhozEqd.png)

Após criado ele irá gerar uma **secret key,** guarde ela que iremos utiliza-la mais a frente. (Você consegue acessar ela a hora que você quiser, não se preocupe).

*   Depois disso, voltamos para a nossa tabela e acessamos a configuração dela, e no campo de conexão, a gente adiciona a  integração que acabamos de criar.

![](public/images/integrando-notion-com-github/Screenshot_2023-05-13_at_22.18.47_IjrI60Fy.png)

Pronto! A parte referente ao Notion foi finalizada 😄

## Github actions (Gh Actions)

Eu não vou mostrar uma config completa e/ou explicar como funciona o Github Actions, até porque eu ainda estou aprendendo/ me entendendo com ele.

### Environments

Vamos criar logo as nossas variáveis de ambiente para ser utilizada na pipeline.

*   Vá até as configurações do seu projeto e acesse o menu “**Environments**”,

Nessa tela você terá duas formas de criar variáveis de ambiente, uma secreta e outra aberta.

*   Na parte de criação das variáveis secretas, nós vamos criar duas: **NOTION\_ROOT\_PAGE\_ID** e **NOTION\_TOKEN**,  onde os valores deles serão a url da database do notion e a **secret key** obtido na explicação do Notion, respectivamente.

![](public/images/integrando-notion-com-github/Untitled_7bD9JTC7.png)

*   Na parte da criação das variáveis, eu preferi criar 3 variáveis, para me dar a liberdade de não ter que ficar mexendo no código toda hora que eu precisar alterar alguma info que a action usa para tratar os dados do notion. Essas variáveis são: **FILTER\_PROP**, **FILTER\_VALUES** e  **POST\_URI**. Onde:

    *   **FILTER\_PROP** fica o nome do campo onde eu quero que o Github filtre para saber qual o post ele terá que publicar.

    *   **FILTER\_VALUES** fica o valor do campo que, quando um post tiver esse valor no campo de filtro, será o indicativo para o Github para saber que é o post ele terá que publicar.

    *   **POST\_URI** é o nome do campo onde ele vai usar o valor final (como o nome do post, por exemplo) para ajudar a montar o path de arquivos.

![](public/images/integrando-notion-com-github/Untitled_9MEIPqCG.png)

### Criando seu job / action:

Pesquisando, acabei caindo na action [Notion jam](https://github.com/victornpb/notion-jam), que pega os dados e gera um arquivo markdown. Também peguei outras actions, o [git auto commit action](https://github.com/stefanzweifel/git-auto-commit-action) e o [GitHub push action](https://github.com/ad-m/github-push-action) para poder fazer um commit e puxar o arquivo criado na branch que eu to usando.

Para facilitar a explicação, eu vou colar o meu arquivo de actions aqui

```yaml
name: Sync Notion pages to posts

on:
  schedule:
    - cron: '0 13 * * *' # daily

  workflow_dispatch:

jobs:
  get_and_commit_notions_posts:
    runs-on: ubuntu-latest
    environment: github-pages
    steps:
      - uses: actions/checkout@v3

      - name: notion-jam
        uses: victornpb/notion-jam@v0.0.13
        with:
          NOTION_SECRET: ${{ secrets.NOTION_TOKEN}}
          NOTION_DATABASE: ${{ secrets.NOTION_ROOT_PAGE_ID }}
          FILTER_PROP: ${{ vars.FILTER_PROP }}
          FILTER_VALUES: ${{ vars.FILTER_VALUES }}
          ARTICLE_PATH: src/posts/${{ vars.POST_URI }}.md
          ASSETS_PATH: public/images/${{ vars.POST_URI }}/
          PARALLEL_PAGES: 25
          PARALLEL_DOWNLOADS_PER_PAGE: 3
          DOWNLOAD_IMAGE_TIMEOUT: 30

      - name: Save changes
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: 'docs: add new post'
      - uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          branch: ${{ github.ref }}
```

[Link para o action atualizado](https://github.com/paulopotter/paulopotter.github.io/blob/nextjs/.github/workflows/notion.yml)

## Bonus track

Para facilitar ainda mais a minha vida, eu consegui criar um template na hora de criar um post, dentro do notion, onde ele já preenche alguns campos para mim. Além de criar botões de criação rápida de post, onde ele já preenche alguns dados de acordo com o conteúdo do botão.

![](public/images/integrando-notion-com-github/Untitled_ZUOQtLmi.png)

## Thats all folks

Eu ainda estou descobrindo o que eu posso fazer no Notion e isso refletir no meu Blog, ainda não sei se todas as funcionalidades que eu tenho no blog eu consigo criar via o Notion. Talvez, posts mais complexos ainda precisem ser manuais.

As coisas que já descobri até então são:

*   que é difícil utilizar tags HTML, pois quando chega via api, chega “encodada”.

*   que mesmo se eu não editar ele busca o conteúdo novamente e faz um novo commit, vou precisar fazer um diff para nao ficar fazendo commit sem ter novas alterações.

Ainda tenho como meta, conseguir ver uma forma de publicar nas redes sociais automaticamente, talvez até via Github actions também, mais infelizmente não vai ser dessa vez.

É isso, espero que esse post te ajude em algo 😃.

E com muito orgulho, esse é o primeiro post que eu fiz a partir dessa integração! Espero que a partir de agora eu consiga manter o blog mais atualizado, graças a essa facilidade.

Valeu, Falow, até a próxima!
