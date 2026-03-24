---
title: Começo do Passaporte
publishDate: 2026-03-23T21:35:00-03:00
tags:
    - DevLog
    - Passaporte

params:
    author: Bromo Dumont
    originalProject: Passaporte
    episodeThumb: imgs/artworks/Films/Canguaretama2403/CANGUARETAMA_2403-Thumb.jpg
    devLogThumb: imgs/artworks/3DArtWork/Passaporte/prints/BL_PS-260323_02.png
    episodeID: 30ZtE5on6nJQaLXkzykCa5
    episodeSeason: 01
    episodeNumber: 03
    preview: Mais rápido do que eu imaginei estamos tendo o primeiro episódio do 1420MHz de um segundo projeto, a maioria das coisas boas acontecem assim né - sem que a gente nem estivesse esperando direito.
---
Mais rápido do que eu imaginei estamos tendo o primeiro episódio do 1420MHz de um segundo projeto, a maioria das coisas boas acontecem assim né - sem que a gente nem estivesse esperando direito.

Acabou que agora a noite eu não fiz nada do pente porque me veio a ideia de testar se eu conseguir instalar o Blender em uma Raspberry Pi 3, tentei usar o Fedora como distro e não deu certo, por causa do tempo vou deixar para depois fazer o teste com outras distros, o objetivo é ver se consigo fazer uma cena 3D completa só nessa plaquinha.

Se esse projeto realmente for para frente a única coisa que eu faça fora dela durante o processo são os renders de preview, mas no final - só pela brincadeira -, quero renderizar ao menos um frame final só nela.

Agora voltando ao Passaporte:

Como referência direta para o Tucunaré usei duas fotos que encontrei pela internet e para ter a ideia do pente em si foi no pinterest; como eu consegui uma foto bem lateral foi fácil fazer a silhueta, após fazer uma cobertura bastou só fazer alguns ajustes, a parte mais complicadinha mesmo são as conexões internas das vértices.

No final das contas essa parte do preenchimento poderia ser deixada de lado, fazer isso no automático não causaria tanto problema ao manter a estrutura como um todo plana, bastaria você forçar as normais a seguirem a direção da face - algo que fiz mesmo deixando a malha bonitinha e organizada -, porém, eu acho esse processo gostoso e no final ainda gera um resultado mais agradável para os olhos, então resolvi não deixar de lado.

Algo que provavelmente ainda vou fazer, e que seria fundamental caso a malha estivesse bagunçada, é criar um edge loop em volta de toda a parte interna da malha, isso vai me dar mais controle na hora de arredondar as bordas. Na quarta vou ver se realmente vai ser necessário.

A parte dos dentes é onde a otimização brilha, hoje não vou falar muito porque estou com preguiça mas ainda vou escrever um artigo detalhando essa técnica. Mas só para dar um vislumbre: todos esses dentes só estão custando 4 faces - existem um total de 8 mas nesse preview ai só estão sendo renderizadas 4 por causa das normais e da configuração de backface culling.

{{< galleryRow
    "artworks/3DArtWork/Passaporte/prints/BL_PS-260323_01.png"
>}}

{{< galleryRow
    "artworks/3DArtWork/Passaporte/prints/BL_PS-260323_02.png"
>}}

{{< galleryRow
    "artworks/3DArtWork/Passaporte/prints/BL_PS-260323_03.png"
    "artworks/3DArtWork/Passaporte/prints/BL_PS-260323_04.png"
>}}

{{< galleryRow
    "artworks/3DArtWork/Passaporte/prints/PA_PS-260323_01.png"
>}}