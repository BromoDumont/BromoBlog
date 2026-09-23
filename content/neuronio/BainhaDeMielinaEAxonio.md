---
title: Bainha de Mielina e Axônio
thumb: imgs/guides/neuronio/MCM-CursoDeModelagem-BainhaDeMielina.jpg
thumbAspectRatio: 16/9
hideThumbOnPage: true
---
{{<embedVideo "czsyR3isnZ8">}}

Agora seguindo outra estratégia, já direto no 3D, em vez de usarmos um um plano como malha base vamos usar um cilindro. Para cria-lo seguimos os mesmo dois primeiros passos da criação do plano e clicamos em "Cylinder". Antes de clicar em qualquer outro lugar vamos abrir a aba "Add Cylinder", que apareceu no canto inferior esquerdo, e nela a configuração base do cilindro que vamos usar sera feita.

Devemos ir direto a essa aba após a adição do cilindro porque nesse momento a malha ainda não está em estado de livre edição, após o clique com botão esquerdo do mouse, ou qualquer operação que afete a malha, ela se torna uma malha completamente editável, por enquanto ela ainda é resultado de uma função matemática e isso faz com que possamos alterar os parâmetros de criação como quantidade de vértices, raio, profundidade e vários outros.

Por agora a única coisa que vamos alterar é a quantidade de vértices do cilindro, ele inicialmente vem com 32 e vamos usar um com 16, após isso vamos rotacionar e escalonar o cilindro para alinha-lo com a malha anteriormente modelada (no vídeo inicialmente faço a bainha de mielina na espessura do que, na realidade, seria o Axônio, na minutagem 01:42 percebi isso e ajustei a escala da malha).

---

Agora vamos pressionar "Ctrl + R" e, diferente de outrora em que usamos esse atalho para adicionar vértices no momento de fazer os contornos, vamos usa-lo para adição de um edge loop no cilindro. Para isso basta, após ter pressionado o "Ctrl + R" e aproximar do centro do cilindro (como no segundo 9 do vídeo), dar um clique com o mouse, nesse momento você vai poder controlar o local onde o edge loop vai estar posicionado, no nosso caso o lugar ideal é o centro e a maneira mais adequada para posicionar um edge loop no centro de uma face é simplesmente pressionar o "Esc" nesse momento em que controlamos sua localização.

Vamos fazer esse mesmo procedimento mais duas vezes, uma em cada lado do cilindro sem edge loop no mesmo sentido ao que acabamos de criar (vendo o vídeo, no segundo 9, vai dar para entender melhor), e selecionar quatro das faces mais superiores. Após isso vamos pressionar a tecla "i" para criar uma borda em volta a seleção original e movendo o mouse podemos diminuir um pouco o tamanho da mesma.

Nesse estágio vamos mover as quatro faces já selecionadas um pouco para cima para fazer o relevo que representa a Célula de Schwann, e, a partir desse ponto podemos excluir um dos lados da bainha de mielina e adicionar o modificador "Mirror" para as edições feitas de uma lado já serem refletidas no oposto.

Um detalhe importante aqui é o ponto de origem da malha estar alinhada com o centro da mesma, o mirror usa esse ponto para definir o local de espelhamento, caso o ponto de origem esteja em outro ponto você pode selecionar as vértices da borda interna - aquela que estava conectada com a outra metade da bainha de mielina -, pressionar "Shift + S" e pressionar "2" ou clicar em "Cursor to Selected". Nesse momento o 3D Cursor vai estar exatamente no centro da seleção feita, o local onde o ponto de origem da malha deve estar, então saindo do modo de edição, selecionando a malha, clicando com o botão direito do mouse na viewport, repousando o mouse na opção "Set Origin" e clicando em "Origin to 3D Cursor" vamos atualizar o ponto de origem da malha para o mesmo local do 3D Cursor.

Para uma melhor pré-visualização da malha já podemos adicionar o modificador de subdivisão nesse estágio (lembrando sempre de deixar ele depois do mirror na aba de modificadores, para alterar a ordem basta clicar e segurar os oito pontinhos ao lado do "x" para remover o modificar no canto superior da aba do mesmo e move-lo para cima ou para baixo) e ajustar as proporções das coisas. Após termos a bainha pronta vamos criar um novo cilindro que não precisa ter nenhum detalhe de mais, esse vai ser o axônio e ele vai ser visível entre as bainhas de mielina, a proporção da espessura entre o axônio + bainha de mielina e o axônio pelado é de 0,6, parte dele tem de ficar dentro da bainha de mielina para que eles estejam conectados quando impressos.

Tendo o axônio e a bainha de mielina prontos vamos aplicar o "mirror" na bainha de mielina (basta, com o mouse sobre o modificador, pressionar "Ctrl + A" ou clicar em  "Apply Modifier" após clicar na setinha para baixo no canto superior direito da aba do modificar) e juntar as duas malhas, a junção das malhas se da com a seleção das duas e o pressionar das teclas "Ctrl + J" (lembrando que aqui o único modificador que deve estar ativado é o de subdivisão).

---

Nesse momento o que vamos fazer é multiplicar a quantidade de conjuntos "Bainha de Melina + Axônio" e para isso vamos usar dois modificadores:

- Array
- Curve

Vamos adicionar o "Array" e move-lo para antes da subdivisão, nas suas configurações vamos trocar o "Offset Method" de "Relative" para "Offset" e definir um valor em que faça os axônios sempre ficarem um pouco dentro das bainhas de mielina.

Após isso vamos criar, tal qual fizemos com o plano e cilindro, uma curva, para fazer isso vamos pressionar "Shift + A", repousar o mouse sobre "Curve" e clicar em "Path". Uma coisa importante aqui é a localização do ponto de origem do path, ela precisa ser a mesma do objeto contendo a Bainha de Mielina e Axônio, para verificar isso basta pressionarmos "N" e verificar, estando na aba "Item", se as coordenadas nos três eixos estão iguais nos dois objetos.

Então agora, tendo a curva feita e na localização adequada, vamos adicionar um modificador chamado "Curve" no objeto com a Bainha de Mielina e Axônio (ele tem de ser o último dos modificadores na lista), no parâmetro "Curve Object" vamos selecionar a curva "Path" que criamos anteriormente.

Nesse ponto só precisamos adicionar mais pontos na curva, alterando o path, e definir o número de bainhas de mielina que queremos, no modificar array, para termos a parte "central" do neurônio. Algo que pode ocorrer é da deformação não seguir exatamente a curva e ir em outra direção, para resolvermos isso basta alterarmos o parâmetro "Deform Axis" no modificador "Curve".