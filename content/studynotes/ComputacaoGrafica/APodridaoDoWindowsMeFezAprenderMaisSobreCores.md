---
title: A Podridão Do Windows Me Fez Aprender Mais Sobre Cores
publishDate: 2026-08-15T20:15:00-03:00
tags:
  - Notas De Estudo
  - Computação Gráfica

params:
  author: Bromo Dumont
  preview: Por incrível que pareça o que aconteceu, na realidade, não foi exatamente um erro, mas sim uma omissão e falta de exatidão na nomenclatura dos metadados de uma imagem. No visualizador de metadados o windows mostrava que a imagem tinha 64 bit, algo possível mas absurdo para o contexto. O ponto foi que ele mostrou o valor apenas como bit depth sem especificar se era bit depth per sample ou per pixel.
---
Por incrível que pareça o que aconteceu, na realidade, não foi exatamente um erro, mas sim uma omissão e falta de exatidão na nomenclatura dos metadados de uma imagem. No visualizador de metadados o windows mostrava que a imagem tinha 64bit, algo possível mas absurdo para o contexto.

Eu sabia que era muito improvável a imagem realmente ter 64bit então fui procurar na internet alguma outra maneira de verificar os metadados da imagem, dito e feito, a imagem tinha 16bit. Mas ainda parecia muito estranho mostrar 64bit nos metadados pelo windows e no site mostrar 16, quando fui pesquisar mais encontrei outro site que também expunha os metadados de imagem e percebi que nele mostrava duas variáveis relacionadas a bit depth: bit per sample (64) e stored bits per pixel (16).

Buscando mais sobre descobri que os 64 bit per sample se referem a soma dos quatro canais presente na imagem Vermelho, Verde, Azul e Alfa (R, G, B, A), cada uma tendo 16 bit. Eu não fazia ideia que se já se fazia o uso da especificação de profundidade de cor com a soma dos canais, geralmente quando a gente se refere a profundidade de cor das imagens no cinema, game dev e etc fala-se apenas sobre a profundidade individual de cada canal (que via de regra se repete em todos, se não me engano é só no OpenEXR que da para ter diferença entre canais).

No final das contas o windows poderia nomear de maneira mais específica a variável no leitor de metadados e mostrar as duas né, de toda forma isso ainda geraria curiosidade nos(as) maluquetes que nem eu e levaria conhecimento, só que maneira menos complicada.

---

Eu não especifiquei o site que usei para verificar os metadados porque ele caiu, tem vários outros que da para se encontrar facilmente e ele tinha uma cara forte de ia.

Para quem ficou querendo saber qual era a imagem que gerou tudo isso: era uma normal map para uma textura procedural de parede, eu tava querendo exportar ela direto do substance designer para a unreal mas no final das contas o melhor foi montar o SBSAR, botar na minha biblioteca de materiais no substance painter e exportar de lá. É mais trabalho agora porém vai facilitar o re-uso desse material depois, outra maneira seria usar um conversor e isso seria bem pior para o fluxo de trabalho.

---

#### Refs:

- *Geral sobre profundidade de cor (bit depth):*

https://en.wikipedia.org/wiki/Color_depth

- *Múltiplas profundidades de cor no OpenEXR:*

https://openexr.com/en/latest/TechnicalIntroduction.html#:~:text=deep%20data

---

Lembre-se: Apesar de tudo a vida é bela!

Até uma próxima!