---
title: Pente tucuna e baixo nível
publishDate: 2026-03-24T23:11:00-03:00
tags:
    - DevLog
    - Passaporte

params:
    author: Bromo Dumont
    originalProject: Passaporte
    episodeThumb: imgs/artworks/Films/Canguaretama2403/CANGUARETAMA_2403-Thumb.jpg
    devLogThumb: imgs/artworks/3DArtWork/Passaporte/prints/BL_PS-260323_02.png
    episodeID: 3m1lmjyTAFa38O5R7PlOBb
    episodeSeason: 01
    episodeNumber: 04
    preview: Apesar de já saber que não demoraria muito mais que um dia de trabalho para finalizá-lo vê-lo pronto. Para a apresentação em si ainda falta muita coisa, tudo que não seja o asset kkkk, sem contar com a própria página de apresentação aqui no site.
---
Acabou que hoje não fui a universidade e durante a tarde aproveitei para trabalhar no pente em formato de tucunaré, apesar de já saber que não demoraria muito mais que um dia de trabalho para finalizá-lo vê-lo pronto. Para a apresentação em si ainda falta muita coisa, tudo que não seja o asset kkkk, sem contar com a própria página de apresentação aqui no site.

Por enquanto vamos focar no que é devido ao dev-log: os processos do dia de hoje e o futuro do projeto.

Sobre o que eu havia comentado do edge loop na parte interna da malha ontem: no final das contas o melhor a ser feito foi fazer um no centro da borda e escalonar seguindo as normais, foi bem mais eficiente que qualquer outra abordagem; para ajustar as normais das faces fiz com que a malha da parte frontal e traseira fossem alinhadas seguindo as faces e nas bordas com base nas suas respectivas áreas. 

Para fazer isso basta você selecionar as faces que deseja fazer a modificação nas normais e apertar (alt + N), com isso vai abrir uma aba intitulada "Normals" e lá você indica o que deseja, a opção para definição das normais pela face é a "Set from faces" e a que usa a área da face é um sub opção da "Average", ao repousar o mouse nela vai abrir mais algumas opção e entre elas "Face area".

---

Agora partindo para os materiais: essa é sempre uma das partes que mais acho divertida, agora estou voltando a gostar mais de modelar, porém, a parte dos materiais ainda me pega de uma maneira diferente kkkk.

Ainda vou fazer os testes em engine mesmo, com o back-face culling desativado, para ver quantos planos vou precisar nos dentes, porém no agora deixei com 8 faces. Nessa parte o que fiz ontem já foi o bastante, é bem simples mesmo, o que cobrou mais tempo foi realmente a parte visual geral.

Nesse caso em especial as cores finais desse asset já era bem parecida com a base, então por coincidência já comecei trabalhando com um mapa de cor bem semelhante ao final, mas num geral acabo ignorando bem esse ponto - geralmente só deixando um cor chapada parecida com a final para ter uma pré-visualização dos valores -  e parto para o height map, é nele que a gente consegue fazer alguns detalhes mais finos que seriam inviáveis de se botar na malha tendo em vista jogos como alvo.

Num geral tudo foi relativamente simples, a parte mais complicadinha vieram logo no começo e foram as espinhas da barbatana dorsal, no substance painter isso poderia ser resolvido de maneira absurdamente rápida, bastava usar um warp node com circulo e blur que a curvatura seria alcançada, porém no painter as coisas são um tanto distintas. No final das contas acabei usando uma Line Wave grande com band máximo e rotação geral na mascara, a diferença de escala entre a  mascara a a UV em si fez com que a sensação de onda - de vai e vem - original não aparecesse.

As espinhas da barbatana caudal foram bem mais simples, só precisei usar o "Circular Stick" e centralizá-la mais ou menos ali onde originalmente ficaria aquele circulo preto no tucunaré, isso não é biologicamente acurado mas achei interessante usar esse ponto como progenitor das espinhas da barbatana caudal.

Se não fosse uma mascara base lá que está nomeado como "Fabric Circle Half Overlap" eu teria vencido a preguiça de ir para o substance designar para fazer uma mascara de escamas, fiquei surpreso com o quão ineficiente o painter é para criar algo assim (provavelmente é mais ignorância minha, porém, de toda maneira se eu vir a descobrir que realmente era ignorância minha ainda vou continuar impressionado com o quão escondido/complicado é fazer algo assim no painter). 

Agora sim, depois de ter o height pronto, comecei a mexer no resto das coisas, para mim essa etapa é bem intuitiva, vou pensando na história do asset e nisso adicionando elementos visuais que ajudem a contar essa história. No caso desse pente em si não tem muito segredo, ele está abandonado a um bom tempo e por ser de ferro foi enferrujando. Algo que me vem agora a vontade de fazer é entortar alguns dos dentes, e talvez até arrancar outros; uma ideia que me vem também é botar em algum lugar a logo do site - que provavelmente vai acabar sendo a logo vinculada a mim - em alguma parte do asset, mas isso vai ficar para o eu que vai modificar os dentes no futuro escolher.

---

Um ponto que me vem a mente agora é sobre a divisão dos dev-logs no que se refere a macro estrutura do projeto Passaporte, quero manter algo que me possibilite ter vinculado aos assets aqueles que são diretamente relacionados ao mesmo e manter uma forma de acesso ao todo, assim a pessoa que quiser ver o processo especifico do asset vai ter a mesma facilidade de busca das informações da que busca as do projeto como um todo.

Ainda tenho que pensar em como estruturar isso tanto no que se refere a arquitetura geral das informações como na interface em si do site, amanhã de manhã provavelmente vou estabelecer como boa parte disso vai ser no principio.

{{< galleryRow
    "artworks/3DArtWork/Passaporte/prints/PA_PS-260324_01.png"
    "artworks/3DArtWork/Passaporte/prints/PA_PS-260324_02.png"
    "artworks/3DArtWork/Passaporte/prints/PA_PS-260324_03.png"
>}}

{{< galleryRow
    "artworks/3DArtWork/Passaporte/prints/PA_PS-260324_04.png"
    "artworks/3DArtWork/Passaporte/prints/PA_PS-260324_05.png"
>}}