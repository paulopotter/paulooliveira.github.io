Title: Como é o desenvolvimento para Smart TVs
Category: Smart TV
Tags: Smart TV, Js, React
Series: Desenvolvendo para Smart TV
Date: 2019-10-09
cover_image: smart-tv.png
cover_image_by: Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
cover_image_alt: Smart Tv icon

Fala galera, blz?

Há aproximadamente a 1 ano, tenho sido integrante de um time de Smart TVs na globo.com, estando a frente do time da app do globosat play e as vezes meto o meu bedelho no desenvolvimento do app do globo esporte para tv.
<!-- PELICAN_END_SUMMARY -->

Graças a isso, eu gostaria de compartilhar um pouco da minha experiência nessa nova área e com isso mostrar o quão simples é fazer uma app de Tv. Esse será um post conceito, logo não haverá linha de código...

## Anota aí:

- Saber javascript.

<center>![meme He-man](https://i.pinimg.com/originals/6d/17/9b/6d179b75c54cc2bada2a1688ae3c6a04.jpg) <br/><sup>*Créditos:* na imagem</sup></center>

## Entendendo um pouco mais sobre as Smart TVs:

Hoje existem várias marcas de Smart TVs no mercado, as mais conhecidas são da *Samsung* e *LG*, mas ainda temos *Sony, Panasonic, TCL, Xiaomi, Motorola...*
Dependendo da fabricante e do sistema operacional, você encontrará as seguintes stacks:

- **Android TV**:
    - Kotlin/Java
- **Apple TV**:
    - Swift
- **Samsung TV**:
    - *Tizen*:
        - Web hosted (HTML/CSS/JS)
        - Xamarin
        - .NET
    - *Orsay <sup>(Descontinuadas)</sup>*:
        - Pelo amor de Zico, não programe para essa tv!
- **LG TV**:
    - *WebOs*:
        - Web hosted (HTML/CSS/JS)
    - *NetCast <sup>(Descontinuadas)</sup>*:
        - Assim como a Orsay, evite esse S.O, assim como o cascão evita a água.

*Nota: Ainda hoje a Orsay tem a maior fatia do mercado brasileiro.*

<br/>
Como desenvolvo mais para a **LG** e **Samsung**, irei me aprofundar mais sobre elas, caso tenham duvida sobre os outros S.Os / Fabricantes, deixem nos comentários.

Assim como mostrei ali em cima, todas elas têm o seu desenvolvimento nativo (com uma linguagem de programação especifica para aquele S.O), mas também existem algumas que suportam Apps Web hosted, como Samsung e LG (que por sinal, elas são as que possuem o maior market share no mundo!)

Assim como brinquei, é basicamente isso mesmo que você deverá saber: Javascript! Principalmente se você estiver programando para o mercado brasileiro, onde a maioria das Smart TVs dos brasileiros possui suporte.

## As dificuldades:

Mas não é porque você sabe javascript que vai ser tudo lindo, ao contrário de boa parte do que fazemos hoje para o desenvolvimento web, é necessária muita preocupação com performance e compatibilidade de código. Tanto no JS quanto no CSS. Por exemplo, o meu amado *flexbox* não funciona em algumas tvs. Então você precisa testar bem nas tvs que você dará suporte e/ou qual será a sua "régua de corte" nas tvs. Somado a isso os hardwares das tvs são "fracos", alguns até sendo pior que um feature phone. Nota: *Seu tamagotchi pode ser melhor que o hardware da sua tv.*

Quando se desenvolve apps web hosted, a tv abre um "browser" para o usuário (sem a barra de endereço, assim como uma app PWA), porém esses browsers das tvs são antigos e dificilmente eles receberam atualizações.

Outro problema recorrente, mesmo que você compre uma tv esse ano, não necessariamente ela é nova, você pode acabar comprando uma tv com 1, 2 até 3 anos de fabricação. Isso acontece porque as grandes redes de varejistas fazem um estoque de tvs e ao contrário dos celulares, nós não costumamos trocar de tv todos os anos, então o estoque "encalha" e dai que surgem aquelas promoções de *"Super Smart TV com <strike>netflix</strike> Globoplay e acesso a internet por apenas 12x R$120 no cartão..."*.

Boa parte dos brasileiros não pesquisam para comprar suas tvs, apenas pesquisam o preço e se acessa a internet. Mas mesmo que pesquisem, existe uma certa dificuldade de encontrar o ano da sua TV.

Também não poderia deixar de falar da dificuldade de encontrar documentação das tvs e o que suporta (ou não). Aos poucos isso está mudando, mas ainda assim é um pouco complicado encontrar certas dúvidas. Nem no [Stackoverflow](http://stackoverflow.com) você encontra 😱. Porém eu encontrei [esse link](https://developer.samsung.com/tv/develop/specifications/general-specifications) com as especificações gerais das tvs Samsung, o que já ajuda um pouco.

## Como extrair informações da sua TV:

Os códigos das tvs dizem muito sobre elas, basicamente descreve ela por completo.

- Samsung:

Usando o modelo **UE55F8000AFXZ** como exemplo, podemos ver o seguinte:

- **U** = LED
- **E** = Produzido na Europa
- **55** = Tamanho da tela
- **F** = Fabricado em 2013 (Ano de fabricação)
- **8000** = Numero de série. Isso será diferente dependendo dos recursos de cada modelo. É possível descobrir as especificações dos modelos, digitando o código do modelo [aqui](https://www.samsung.com/br/tvs/) (use a busca)
- **A** = Features ou design
- **FXZ** = Informações técnicas de produção

Se você possui UE55F8000**B**FXZ no lugar da UE55F8000**A**FXZ usado no exemplo, você verá que a diferença entre eles são apenas de design como a cor, por exemplo, mas o resto das especificações serão as mesmas.

Para ver a tradução de cada letra (como, por exemplo, saber qual letra representa qual ano), acesse [esse link](https://www.samsung.com/uk/support/tv-audio-video/what-do-samsung-tv-model-numbers-actually-mean-why-are-they-so-long/)


- LG:

Encontrei essa imagem que facilita a explicação no caso da LG:
<center> ![tab-tv image](./images/LG-TV-model-identification-2018-2019-new.jpg) <br/><br/><sup>*Créditos:* na imagem</sup></center>

Para ver a tradução de cada letra (como, por exemplo, saber qual letra representa qual ano), acesse [esse link](http://en.tab-tv.com/?page_id=7111) (não oficial).


## That`s all folks:

Com isso em mente, você já pode começar a se preparar para desenvolver sua tv app ou saber escolher melhor a sua próxima tv.

Dentro de alguns dias eu irei fazer uma série de posts mais técnicos, mostrando o desenvolvimento de uma tela simples para testar na sua TV em casa.

