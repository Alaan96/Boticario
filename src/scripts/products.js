const gallery = document.getElementById('gallery') || null

if (gallery) {
  const products = [
    {
      name: 'Botiquín Mini',
      folder: 'mini',
      images: ['mini-cerrado.jpg', 'mini-abierto.jpg'],
      descrption: `
        Estuche plástico semirrígido
        Contiene 8 unidades en 6 productos
        Medidas: 10,5 cm x 7 cm x 3 cm de alto`
    },
    {
      name: 'Botiquín cartuchera',
      folder: 'cartuchera',
      images: ['cartuchera-cerrada.jpg', 'cartuchera-abierta.jpg'],
      descrption: `
        Estuche de cordura con cierre
        Contiene 43 unidades en 16 productos
        Medidas: 16 cm x 5 cm x 5 cm`
    },
    {
      name: 'Botiquín Home Office Chico',
      folder: 'home-office-chico',
      images: ['home-office-chico-cerrado.jpg', 'home-office-chico-abierto.jpg'],
      descrption: `
        Estuche plástico semitransparente, tapa rebatible con trabas
        Contiene 24 unidades en 10 productos
        Medidas: 13,5 cm x 11 cm x 4,7 cm`
    },
    {
      name: 'Botiquín Home Office Mediano',
      folder: 'home-office-mediano',
      images: ['home-office-mediano-cerrado.jpg', 'home-office-mediano-abierto.jpg'],
      descrption: `
        Estuche plástico semitransparente, tapa rebatible con trabas
        Contiene 29 unidades en 13 productos
        Medidas: 13,5 cm x 11 cm x 4,7 cm alto`
    },
    {
      name: 'Botiquín Home Office Grande',
      folder: 'home-office-grande',
      images: ['home-office-grande-cerrado.jpg', 'home-office-grande-abierto.jpg'],
      descrption: `
        Estuche plástico, tapa con bisabra. Cuatro divisiones internas
        Contiene 27 unidades en 11 productos
        Medidas: 23 cm x 18 cm x 4,5 cm alto`
    },
    // {
    //   name: 'Kit higiene y prevención',
    //   folder: 'kit-preventivo',
    //   images: ['kit-preventivo.jpg'],
    //   descrption: `
    //     Bolsita hermética con cierre zipper.
    //     Medidas:  19 cm de largo x 12 cm de ancho x 2 cm alto.
    //     Contenido: 12 unidades / 5 elementos.`
    // },
    {
      name: 'Botiquín Náutico',
      folder: 'nautico',
      images: ['nautico-cerrado.jpg', 'nautico-abierto.jpg'],
      descrption: `
        Estuche plástico semitransparente, tapa rebatible con trabas
        Contiene 24 unidades en 9 productos
        Medidas: 18 cm de largo x 12 cm de ancho x 4,3 cm`
    },
    // {
    //   name: 'Botiquín Zipper',
    //   folder: 'zipper',
    //   images: ['zipper.jpg'],
    //   descrption: `
    //     Bolsita hermética con cierre zipper.
    //     Medidas: 19 cm de largo x 12 cm de ancho.
    //     Contenido: 13 unidades / 8 elementos.`
    // },
    {
      name: 'Botiquín Econo',
      folder: 'econo',
      images: ['econo-cerrado.jpg', 'econo-abierto.jpg'],
      descrption: `
        Estuche plástico semitransparente, tapa rebatible con trabas
        Contiene 13 unidades en 7 productos
        Medidas: 10,5 cm x 8 cm x 3,5 cm alto`
    },
    {
      name: 'Botiquín Número 1',
      folder: 'botiquin1',
      images: ['botiquin1-cerrado.jpg', 'botiquin1-abierto.jpg'],
      descrption: `
        Estuche plástico semitransparente, tapa rebatible con trabas
        Contiene 15 unidades en 9 productos
        Medidas: 13,5 cm x 11 cm x 4,7 cm alto`
    },
    {
      name: 'Botiquín Número 2',
      folder: 'botiquin2',
      images: ['botiquin2-cerrado.jpg', 'botiquin2-abierto.jpg'],
      descrption: `
        Estuche plástico semitransparente, tapa rebatible con trabas
        Contiene 33 unidades en 10 productos
        Medidas: 18 cm x 12 cm x 4,3 cm alto`
    },
    {
      name: 'Botiquín Número 3',
      folder: 'botiquin3',
      images: ['botiquin3-cerrado.jpg', 'botiquin3-abierto.jpg'],
      descrption: `
        Valijita plástica blanca
        Contiene 39 unidades en 12 productos
        Medidas: 23 cm x 16 cm x 5,4 cm alto`
    },
    {
      name: 'Botiquín Número 4',
      folder: 'botiquin4',
      images: ['botiquin4-cerrado.jpg', 'botiquin4-abierto.jpg'],
      descrption: `
        Caja plástica blanca. Manija para transportar.
        Contiene 74 unidades en 15 productos
        Medidas: 31 cm x 16 cm x 11 cm de alto`
    },
    {
      name: 'Botiquín Número 5',
      folder: 'botiquin5',
      images: ['botiquin5-cerrado.jpg', 'botiquin5-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil. Divisiones internas.
        Contiene 45 unidades en 12 productos
        Medidas: 20 cm x 17 cm x 9,5 cm profundidad`
    },
    {
      name: 'Botiquín Número 6',
      folder: 'botiquin6',
      images: ['botiquin6-cerrado.jpg', 'botiquin6-abierto.jpg'],
      descrption: `
        Bolsito tipo neceser con cierre y manija
        Contiene 29 unidades en 13 productos
        Medidas: 16 cm x 10 cm x 8 cm alto`
    },
    {
      name: 'Botiquín Número 7',
      folder: 'botiquin7',
      images: ['botiquin7-cerrado.jpg', 'botiquin7-abierto.jpg'],
      descrption: `
        Caja plástica. Colores surtidos. Tapa rebatible con traba. Manija para transportar
        Contiene 35 unidades en 13 productos
        Medidas: 26 cm x 16 cm x 14 cm de alto`
    },
    {
      name: 'Botiquín Número 8',
      folder: 'botiquin8',
      images: ['botiquin8-cerrado.jpg', 'botiquin8-abierto.jpg'],
      descrption: `
        Caja plástica blanca. Manija para transportar. Tapa rebatible con trabas
        Contiene 48 unidades en 15 productos
        Medidas: 33 cm x 20 cm x 15 cm de alto`
    },
    {
      name: 'Botiquín Número 9',
      folder: 'botiquin9',
      images: ['botiquin9-cerrado.jpg', 'botiquin9-abierto.jpg'],
      descrption: `
        Gabinete de chapa pintado con epoxi blanco. Amurable. Manija para transportar
        Contiene 48 unidades en 12 productos
        Medidas: 25 cm x 17 cm x 10 cm de profundidad`
    },
    {
      name: 'Botiquín Número 10',
      folder: 'botiquin10',
      images: ['botiquin10-cerrado.jpg', 'botiquin10-abierto.jpg'],
      descrption: `
        Caja plástica blanca. Manija para transportar. Tapa rebatible con trabas, cerradura portacandado. Bandeja interior rebatible. 
        Contiene 86 unidades en 21 productos
        Medidas: 43 cm x 22 cm x 21 cm de alto`
    },
    // {
    //   name: 'Botiquín Número 11',
    //   folder: 'botiquin11',
    //   images: ['botiquin11-cerrado.jpg', 'botiquin11-abierto.jpg'],
    //   descrption: `
    //     Gabinete de PVC blanco, estantes, espejo, cierre portacandado
    //     Contenido: 58 unidades / 19 elementos
    //     Medidas: 37 cm de alto x 26 cm de ancho x 8 cm de profundidad`
    // },
    {
      name: 'Botiquín Número 12',
      folder: 'botiquin12',
      images: ['botiquin12-cerrado.jpg', 'botiquin12-abierto.jpg'],
      descrption: `
        Gabinete de chapa pintado con epoxi blanco. Amurable. Manija para transportar. Estantes.  Portacandado
        Contiene 40 unidades en 18 productos
        Medidas: 28 cm x 22,5 cm x 10 cm de profundidad`
    },
    {
      name: 'Botiquín Número 13',
      folder: 'botiquin13',
      images: ['botiquin13-cerrado.jpg', 'botiquin13-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil. Amurable. Estantes,
        Contiene 42 unidades en 16 productos
        Medidas: 28 cm x 22 cm x 10 cm de profundidad`
    },
    {
      name: 'Botiquín Número 14',
      folder: 'botiquin14',
      images: ['botiquin14-cerrado.jpg', 'botiquin14-abierto.jpg'],
      descrption: `
        Gabinete de chapa pintado con epoxi blanco. Amurable. Manija para transportar. Estantes.  Portacandado
        Contiene 52 unidades en 25 productos
        Medidas: 35 cm x 27 cm x 12 cm`
    },
    {
      name: 'Botiquín Número 15',
      folder: 'botiquin15',
      images: ['botiquin15-cerrado.jpg', 'botiquin15-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil. Amurable. Estantes, Cerradura con llave (incluye 2 llaves)
        Contiene 80 unidades en 22 productos
        Medidas: 36 cm x 27 cm x 9,7 cm `
    },
    // {
    //   name: 'Botiquín Número 16',
    //   folder: 'botiquin16',
    //   images: ['botiquin16-cerrado.jpg', 'botiquin16-abierto.jpg'],
    //   descrption: `
    //     Gabinete plástico alto impacto blanco brillante
    //     Contenido: 95 unidades / 22 elementos
    //     Medidas: 49 cm de alto x 31 cm de ancho x 10 cm de profundidad`
    // },
    {
      name: 'Botiquín Número 17',
      folder: 'botiquin17',
      images: ['botiquin17-cerrado.jpg', 'botiquin17-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil. Amurable. Estantes, Cerradura con llave (incluye 2 llaves)
        Contiene 116 unidades en 24 productos
        Medidas: 50 cm x 30 cm x 11 cm de alto`
    },
    // {
    //   name: 'Botiquín Número 18',
    //   folder: 'botiquin18',
    //   images: ['botiquin18-cerrado.jpg', 'botiquin18-abierto.jpg'],
    //   descrption: `
    //     Gabinete de acero inoxidable, espejo, estantes, traba con cierre
    //     Contenido: 56 unidades / 18 elementos
    //     Medidas: 28 cm de alto x 22 cm de ancho x 10 cm de alto`
    // },
    {
      name: 'Botiquín Número 19',
      folder: 'botiquin19',
      images: ['botiquin19-cerrado.jpg', 'botiquin19-abierto.jpg'],
      descrption: `
        Caja plástica blanca. Manija . Trabas. Bandeja interior. Portacandado
        Contiene 281 unidades en 33 productos
        Medidas: 50,5 cm x 24,5 cm x  24,2 cm de profundidad`
    },
    {
      name: 'Botiquín Número 20',
      folder: 'botiquin20',
      images: ['botiquin20-cerrado.jpg', 'botiquin20-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil. Amurable. Estantes, Cerradura con llave (incluye 2 llaves)
        Contiene 263 unidades en 35 productos
        Medidas: 70 cm x 50 cm x 15 cm de profundidad`
    },
    {
      name: 'Botiquín Número 22',
      folder: 'botiquin22',
      images: ['botiquin22-cerrado.jpg', 'botiquin22-abierto.jpg'],
      descrption: `
        Gabinete de chapa pintado con epoxi blanco. Amurable. Manija para transportar. Estantes.  Portacandado
        Contiene 192 unidades en 26 productos
        Medidas: 50 cm x 28 cm x 12 cm`
    },
    {
      name: 'Botiquín Número 23',
      folder: 'botiquin23',
      images: ['botiquin23-cerrado.jpg', 'botiquin23-abierto.jpg'],
      descrption: `
        Gabinete de chapa pintado con epoxi blanco. Amurable. Manija para transportar. Estantes.  Portacandado
        Contiene 206 unidades en 33 productos
        Medidas: 50 cm x 28 cm x 24 cm `
    },
    {
      name: 'Botiquín Número 26',
      folder: 'botiquin26',
      images: ['botiquin26-cerrado.jpg', 'botiquin26-abierto.jpg'],
      descrption: `
        Bolsito de tela con cierre y manija. Bolsillo interior
        Contiene 38 unidades en 16 productos
        Medidas: 22 cm x 13 cm x 8 cm de alto`
    },
    {
      name: 'Botiquín Número 27',
      folder: 'botiquin27',
      images: ['botiquin27-cerrado.jpg', 'botiquin27-abierto.jpg'],
      descrption: `
        Bolso / morral tela cordura. cierre. solapa. Manija regulable. Incluye caja contenedora
        Contiene 64 unidades en 16 productos
        Medidas: 30 cm x 25 cm x 10 cm `
    },
    {
      name: 'KIT para Reposición chico',
      folder: 'kit-reposicion-chico',
      images: ['kit-reposicion-chico.jpg'],
      descrption: `
        Caja de cartón
        Contiene 44 unidades en 11 prodcutos`
    },
    {
      name: 'KIT para Reposición mediano',
      folder: 'kit-reposicion-mediano',
      images: ['kit-reposicion-mediano.jpg'],
      descrption: `
        Caja de cartón
        Contiene  77 unidades en 18 prodcutos`
    },
    {
      name: 'KIT para Reposición grande',
      folder: 'kit-reposicion-grande',
      images: ['kit-reposicion-grande.jpg'],
      descrption: `
        Caja de cartón
        Contiene 260 unidades en 24 productos`
    }
    // {
    //   name: 'Bolso para emergencia',
    //   folder: 'bolso-emergencia',
    //   images: ['bolso-emergencia-cerrado.jpg', 'bolso-emergencia-abierto.jpg'],
    //   descrption: `
    //     2  bolsillos externos
    //     11 bolsillos internos
    //     4 bolsillos tipo red
    //     2 bolsillos laterales
    //     Medida: 62 cm x 30 cm x 24 cm de alto`
    // }
  ]

  let productElements = []

  const generateProducts = () => {
    products.forEach((product) => {
      let images
      if (product.images > 1) {
        images = `
          <img src="assets/${product.images[0]}" alt="${product.images[0].replaceAll('-', ' ')}">
          <img src="assets/${product.images[1]}" alt="${product.images[1].replaceAll('-', ' ')}">
        `
      } else {
        images = `
          <img src="assets/${product.images[0]}" alt="${product.images[0].replaceAll('-', ' ')}">
        `
      }

      let template = `
        <article class="product" id="${product.folder}">
          <div class="images">
            ${images}
          </div>
          <div class="data">
            <h2>${product.name}</h2>
            <p class="description">
              ${product.descrption.trim()}
            </p>
          </div>
        </article>
      `

      productElements.push(template)
    })

    gallery.innerHTML = productElements.join('')
  }

  generateProducts()

  gallery.addEventListener('click', (event) => {
    const target = event.target
    if (target.tagName === 'BUTTON') {
      const content = target.nextElementSibling
      content.classList.toggle('hide')
    }

    if (target.tagName === 'IMG' && target.nextElementSibling) {
      if (target.nextElementSibling.tagName === 'IMG') target.classList.toggle('opacity')
    }
  })
}
