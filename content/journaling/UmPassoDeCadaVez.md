---
title: Um passo de cada vez
publishDate: 2026-02-10
tags:
    - Journaling

params:
    author: Bromo Dumont
    preview: Hoje a tarde e no começo da noite trabalhei na atualização 0.3 do gerador procedural de gondolas, fazia muito tempo desde a última vez que eu não mexia noHoudini e ele continua uma delicia, a sensação de conseguir programar as coisas lá é muito satisfatória.
---
Como hoje foi o primeiro dia que desenhei desde que me comprometi acabei também tendo de começar a fazer a página de artes, ela ficou bem mais ou menos comparado ao que deve ser, com o tempo vou ir à melhorando. Hoje não me esforço nisso porque ainda vou jantar e estou com preguiça de trabalhar nisso agora.

Vamos falar sobre outra coisa:

Hoje a tarde e no começo da noite trabalhei na atualização 0.3 do gerador procedural de gondolas, fazia muito tempo desde a última vez que eu não mexia no Houdini e ele continua uma delicia, a sensação de conseguir programar as coisas lá é muito satisfatória. O objetivo era implementar um sistema de abertura automática de UVs mas se fosse simplesmente isso era fácil, as coisas começam a se complicar quando eu boto como uma das exigências esse sistema funcionar não só com uma gôndola única como também em todo uma série delas que estiveram num mesmo arquivo. A solução para isso era trazer para o asset uma técnica geralmente usada em environment: trim sheet.

Não sei explicar direito mas o sentimento de misturar os conhecimentos é sempre algo que me deixa muito animado, sempre parece que é algo "secreto" que está sendo acessado. Isso me faz lembrar de como tudo está interligado e que a separação das coisas são, geralmente, feitas de maneira artificial.

---

Não vou explicar agora de maneira muito detalhada e técnica o que é Trim Sheet, depois vou escrever um artigo e faço o link, vai ser melhor assim. Mas para não te deixar sem nada:

Pensa que eu tenho uma folha adesiva que tem largura infinita, a altura é limitada (digamos 20cm) e a largura infinita, horizontalmente ela é composta por três tiras, vermelha, amarela e azul, se eu quero adesivar algo de vermelho eu vou distribuir dentro dentro dessa tira vermelha, de amarelo dentro da amarela e azul na azul. Percebe que na vertical estamos limitados entre a fronteira das cores e na horizontal podemos ir botando infinitos itens?

Para dar cor, e todas as outras características visuais de um objeto a gente planifica ele e distribui em uma folha quadrada com as informações de cor e etc, em qualquer direção essa folha se estende até uma distancia muito grande - dado o escopo necessário para agora: infinitamente - ai quando eu quero uma mesma característica base em um objeto eu posso definir uma área horizontal exclusiva para tal e distribuir as planificações no "infinito" horizontal.

---

Eu até queria escrever mais, porém acho que não tenho nada de relevante para acrescentar agora, vou ir jantar para depois ler um pouco e dormir. Muito obrigado por ter lido até aqui.

Se quiseres me enviar alguma mensagem pode endereçar à esse e-mail: dumont@bromo.art.br

Até uma próxima!

Lembre-se: Apesar de tudo a vida é bela!