---
title: Telodendro
thumb: imgs/guides/neuronio/MCM-CursoDeModelagem-Telodendro_3D.jpg
thumbAspectRatio: 16/9
---
## Circunferência

{{<embedVideo "p_sM7WA6WQg">}}

Vamos começar criando um plano pressionando "Shift + A", repousando o mouse em "Mesh" e clicando em "Plane", o nome é bem auto descritivo, porém, dele vamos começar usando apenas uma das vértices. Para excluir qualquer parte de uma malha basta, estando dentro do modo de edição (pressionar "Tab" tanto para entra nele quanto para retornar ao modo de visualização), selecionar a mesma, apertar o “X” e clicar em “{nome do elemento}”, a opção “dissolve {nome do elemento}” serve para você deleta-lo sem quebrar a conexão entre os ponto adjacentes.

Agora vamos selecionar essa vértice que sobrou e deixar em algum lugar na borda do telodendro, a partir dai basta pressionar a tecla "E" e mover o mouse, você vai conseguir perceber uma bolinha (um novo vértice) saindo do vértice que você tinha selecionado anteriormente e uma linha ligando os dois (uma edge).

Nosso objetivo nesse momento é ir contornando o telodendro com essas bolinhas e edges para ganhar naturalidade com essa operação. Um ponto a se prestar atenção é em deixar a mesma quantia de vértices dos dois lados de cada "braço" (terminal axiomático) do telodendro, isso vai fazer mais sentido ao ver o vídeo e os próximos passos.

## Indo do 2D para o 3D

### Definição das faces

{{<embedVideo "BydeFbODnHw">}}

Agora tendo as edges que definem a silhueta do telodendro vamos fazer as faces entre elas, conectar as edges umas com as outras, para em seguida realmente transformar esse desenho em um elemento tridimensional.

Apesar de simples esse processo exige alguns cuidados em especial, inicialmente vamos selecionar as edges das bordas mais extremas e ir pressionando F até chegar em um ponto de junção entre os terminais axiomáticos. A atenção em manter a mesma quantia de vértices dos dois lados de cada terminal axiomático começa a realmente fazer sentido agora né, vale lembrar que não tem problema algum adicionar novos vértices agora, para fazer isso baste pressionar "Ctrl + R" e botar o mouse em cima da edge onde o novo vértice vai ser criado.

Na junção dos terminais podemos continuar com as faces quadrangulares ou fazer uma triangular, isso vai depender do formato que estamos fazendo e de como a circunferência foi feita. Assistindo o vídeo vai dar para notar a diferença entre as partes melhor que por texto, mas, em síntese o que define quando fazer uma face triangular ou quadrangular na junção é o alinhamento entre as coisas, o erro vai ficar visualmente estranho. 

Para os casos das faces triangulares vamos selecionar as duas extremidades dos terminais e pressionar "F", dai em diante vamos seguir com faces quadrangulares até uma próxima conexão entre partes. Talvez fique um pouco confuso de compreender só pelo texto mas com o vídeo acho que fica mais fácil de entender.

### Dando volume

{{<embedVideo "qZ2_bHLJg">}}

Após ter as faces definidas as coisas ficam mais simples do que se possa esperar, nesse ponto o que temos de fazer é selecionar todas as faces, pressionar "E" e mover o mouse um pouco para cima, estamos fazendo uma extrusão de faces. Ao selecionar uma face sempre podemos fazer esse processo para adicionar um volume a malha a partir dela.

Anteriormente usamos esse mesmo atalho "E" para criar uma vértice né, a lógica é a mesma, podemos fazer isso não só com as vértices e faces como também com as edges.

---

Antes de seguir para a próxima etapa temos de nos atentar a um detalhe, no segundo 7 do vídeo, enquanto no modo de edição, em uma setinha na direita de um botão com dois círculos e ativo a opção "Face Orientation" e aparentemente nada acontece né, mas, na realidade isso ocorre porque todas as faces já estão voltadas "para fora". Um pouco mais a frente, no segundo 13, após ter deletado as faces de baixo nota-se que a parte interna da malha está toda vermelha, isso é justamente por causa do "Face Orientation" estar ativado.

Caso alguma face esteja aparecendo vermelha na parte de fora da malha você pode selecionar ela, pressionar "Alt + N" e clicar na opção "Flip", caso múltiplas faces estejam vermelhas você pode selecionar todas as faces da malha, basta pressionar "A", e clicar em "Recalculate Outside", caso assim todas as faces fiquem vermelhas (o Blender identificou errado a parte interna e externa da malha) basta selecionar todas e clicar em "Flip".

Para fazer a seleção das faces para exclusão das mesmas no segundo 10 usei justamente essa propriedade da direção da face, que se chama Normal, a normal de uma face é a direção para onde ela está virada, ao selecionar um face você pode ir na opção "Select" no canto superior esquerdo da viewport, ir na aba "Select Similar" e clicar em "Normal" para selecionar todas as faces de uma malha que estejam apontando para a mesma direção.

A exclusão dessas faces de baixo é especialmente importante para o próximo passo.

---

Algo que vamos fazer agora, um tanto para facilitar parte do processo e outra tanto para já irmos nos acostumando com esse elemento, é usar o modificador mirror. Os modificadores fazem operações não destrutivas na malha, no caso so mirror por exemplo vamos, literalmente, espelhar a malha, porém, diferente do que fazemos "na mão" essa operação pode ser desfeita sem alterar a malha original, basta desativar o modificar.

Para fazer isso vamos clicar na chave de boca que fica na direita da tela, depois em "Add Modifier" na aba que abrir, digitar "mirror" e clicar nele ou simplesmente pressionar "Enter" (da para ver isso acontecendo no segundo 14 do vídeo). Nesse momento vamos alterar o "Axis" (eixo de espelhamento) do X para que assim tenhamos uma simetria vertical.

Caso aí o alinhamento fique torto, com as bordas das malhas se sobrepondo, o problema provavelmente está no ponto de origem da malha, para resolver isso você vai fazer quatro coisas:

- Estando no modo de seleção de edge, sem nenhuma selecionada, segura "Alt" e clica com o botão esquerdo do mouse em uma das edges de baixo do Telodendro (isso vai selecionar todas as edges inferiores).
- Pressiona "S" depois "Z" e em seguida o "0" (agora todas as edges inferiores estão alinhadas).
- Tendo todas as edges inferiores selecionadas e alinhadas você pressiona o "Shift + S" e depois aperta o "2" (isso vai mover o cursor 3D para o centro da sua seleção).
- Agora para finalizar, fora do modo de edição, clique com o botão direito do mouse em cima da malha, repouse o mouse em cima da opção "Set Origin" e clique em "Set Origin to 3D Cursor" (isso vai definir a origem da malha no local do cursor 3D).

Após isso vamos aplicar o modificador repousando o mouse em cima do mesmo e pressionando "Ctrl + A" ou clicando na seta apontando para baixo ao lado do "x" no lado superior direito do modificador clicar em "Apply".

---

Para fazer os Terminais Axiomáticos temos primeiro de selecionar todos os pontos extremos do Telodendro, em seguida pressionar "Alt + E", vamos fazer aquela mesma operação que nos acostumamos a fazer anteriormente só que agora com uma direção controlada por um parâmetro da malha que já construímos e não de maneira livre, então cliquemos em "Extrude Face Along Normal" e movemos o mouse um pouco, realmente pouco, para o lado até que a face seja extrudada.

Se você prestar atenção, diferente de antes, a extrusão não seguiu essa mesma direção do movimento do mouse e sim a que a face estava apontando, a direção da Normal. Esse parâmetro é relevante em múltiplas situação e essa é uma delas.

Agora vamos clicar com o botão direito do mouse em qualquer lugar da viewport, repousar o mouse em cima da opção "Loop Tools" e clicar em "Circle", dessa maneira as formas quadradas que temos selecionadas vão ter suas vértices reorganizadas para a forma de um circulo.

O diâmetro do circulo deve ter ficado menor que a forma quadrada anterior, simplesmente pressionar o "S" para escaloná-lo (isso faria com que todas as faces selecionadas fossem escalonadas em direção ao meio da seleção como um todo), então para resolver isso vamos clicar no botão ao lado do "Global" na parte superior central da viewport, onde vai aparecer em azul a opção "Median Point", e vamos selecionar a opção "Individual Origina".

Agora sim podemos pressionar o "S" e a escala sera alterada por seleção, na opção "Median Origin" as operações com múltiplas partes selecionadas sempre tem como coordenada central a média global da seleção, enquanto com a opção "Individual Origin" a operação segue individual por seleção.

Após isso vamos fazer as extrusões necessárias para alcançar a forma dos Terminais Axiomáticos e para finalizar vamos, fora do modo de edição e com a malha selecionada, pressionar "Ctrl + 3" para adicionar o modificar de subdivisão a malha, dessa forma vamos ter uma forma geral mais arredondada (esse modificador por si só pode ser alvo de incontaveis horas de estudo, mas, por agora não vamos nos aprofundar tanto nele).