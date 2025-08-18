const gallery = document.getElementById('gallery') || null

if (gallery) {

  const products = [
    {
      name: 'Mini',
      folder: 'mini',
      images: ['mini-cerrado.jpg', 'mini-abierto.jpg'],
      descrption: `
        Estuche plástico rígido transparente.
        Medidas: 10,5 cm de largo x 7 cm de ancho x 3 cm alto.
        Contenido:  8 unidades / 6 elementos.`
    },
    {
      name: 'Botiquín cartuchera',
      folder: 'cartuchera',
      images: ['cartuchera-cerrada.jpg', 'cartuchera-abierta.jpg'],
      descrption: `
        Tela de cordura con cierre.
        Medidas: 16 cm x 15 cm x5 cm alto.
        Contenido: 32 unidades / 15 elementos.`
    },
    {
      name: 'Botiquín Home Office',
      folder: 'home-office',
      images: ['home-office-cerrado.jpg', 'home-office-abierto.jpg'],
      descrption: `
        Caja plástica semitransparente, tapa con bisagra, dos trabas, cuatro divisiones internas.
        Medidas: 23 cm x 18 cm x 4,5 cm de alto.
        Contenido: 18 unidades / 11 elementos.`
    },
    {
      name: 'Botiquín Home Office mediano',
      folder: 'home-office-mediano',
      images: ['home-office-mediano-cerrado.jpg', 'home-office-mediano-abierto.jpg'],
      descrption: `
        Estuche plástico semitransparente, tapa rebatible con trabas.
        Medidas: 14 cm de largo x 11 cm de ancho x 4cm de alto.
        Contenido: 29 unidades / 13 elementos.`
    },
    {
      name: 'Botiquín Home Office chico',
      folder: 'home-office-chico',
      images: ['home-office-chico-cerrado.jpg', 'home-office-chico-abierto.jpg'],
      descrption: `
        Estuche plástico semitransparente, tapa rebatible con trabas.
        Medidas: 14 cm de largo x 11 cm de ancho x 4 cm de alto.
        Contenido: 24 unidades / 10 elementos.`
    },
    {
      name: 'Kit higiene y prevención',
      folder: 'kit-preventivo',
      images: ['kit-preventivo.jpg'],
      descrption: `
        Bolsita hermética con cierre zipper.
        Medidas:  19 cm de largo x 12 cm de ancho x 2 cm alto.
        Contenido: 12 unidades / 5 elementos.`
    },
    {
      name: 'Botiquín Náutico',
      folder: 'nautico',
      images: ['nautico-cerrado.jpg', 'nautico-abierto.jpg'],
      descrption: `
        Estuche plástico semitransparente.
        Medidas: 18 cm de largo x 12 cm de ancho x 4,3 cm alto.
        Contenido: 24 unidades / 9 elementos.`
    },
    {
      name: 'Botiquín Zipper',
      folder: 'zipper',
      images: ['zipper.jpg'],
      descrption: `
        Bolsita hermética con cierre zipper.
        Medidas: 19 cm de largo x 12 cm de ancho.
        Contenido: 13 unidades / 8 elementos.`
    },
    {
      name: 'Botiquín Econo',
      folder: 'econo',
      images: ['econo-cerrado.jpg', 'econo-abierto.jpg'],
      descrption: `
        Estuche plástico rígido transparente. Tapa rebatible con trabas.
        Medidas:  10,5 cm de largo x 8 cm de ancho x 3,5 cm alto.
        Contenido: 14 unidades / 7 elementos.`
    },
    {
      name: 'Botiquín Número 1',
      folder: 'botiquin1',
      images: ['botiquin1-cerrado.jpg', 'botiquin1-abierto.jpg'],
      descrption: `
        Estuche plástico transparente. Tapa rebatible con trabas.
        Medidas: 14 cm de largo x 11 cm de ancho x 4 cm alto.
        Contenido: 15 unidades / 9 elementos.`
    },
    {
      name: 'Botiquín Número 2',
      folder: 'botiquin2',
      images: ['botiquin2-cerrado.jpg', 'botiquin2-abierto.jpg'],
      descrption: `
        Estuche plástico transparente. Tapa rebatible con trabas.
        Medidas: 18 cm de largo x 12 cm de ancho x 4,3 cm alto.
        Contenido: 33 unidades / 10 elementos.`
    },
    {
      name: 'Botiquín Número 3',
      folder: 'botiquin3',
      images: ['botiquin3-cerrado.jpg', 'botiquin3-abierto.jpg'],
      descrption: `
        Valijita plástica blanca.
        Medidas: 23 cm de largo x 16 cm de ancho x 5,4 cm alto.
        Contenido: 39 unidades / 12 elementos.`
    },
    {
      name: 'Botiquín Número 4',
      folder: 'botiquin4',
      images: ['botiquin4-cerrado.jpg', 'botiquin4-abierto.jpg'],
      descrption: `
        Valijita plástica blanca.
        Medidas: 19 cm de largo x 15 cm de ancho x 15 cm alto.
        Contenido: 74 unidades / 15 elementos.`
    },
    {
      name: 'Botiquín Número 5',
      folder: 'botiquin5',
      images: ['botiquin5-cerrado.jpg', 'botiquin5-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil con división interna.
        Medidas: 20 cm x 17 cm x 9,5 cm de profundidad.
        Contenido: 49 unidades / 12 elementos.`
    },
    {
      name: 'Botiquín Número 6',
      folder: 'botiquin6',
      images: ['botiquin6-cerrado.jpg', 'botiquin6-abierto.jpg'],
      descrption: `
        Bolsito tipo neceser.
        Medidas: 16 cm x 10 cm x 8 cm de alto.
        Contenido: 39 unidades / 13 elementos.`
    },
    {
      name: 'Botiquín Número 7',
      folder: 'botiquin7',
      images: ['botiquin7-cerrado.jpg', 'botiquin7-abierto.jpg'],
      descrption: `
        Caja plástica roja, traba con cierre.
        Medidas: 24,5 cm x 17 cm x 12,5 cm de alto.
        Contenido:  45 unidades / 14 elementos.`
    },
    {
      name: 'Botiquín Número 8',
      folder: 'botiquin8',
      images: ['botiquin8-cerrado.jpg', 'botiquin8-abierto.jpg'],
      descrption: `
        Caja plástica blanca.
        Medidas: 33 cm de largo x 20 cm de ancho x 15 cm de alto.
        Contenido: 48 unidades / 16 elementos.`
    },
    {
      name: 'Botiquín Número 9',
      folder: 'botiquin9',
      images: ['botiquin9-cerrado.jpg', 'botiquin9-abierto.jpg'],
      descrption: `
        Gabinete de chapa, pintado con epoxi blanco. Estantes. Cerradura portacandado.
        Medidas: 25 cm de largo x 17 cm de ancho x 10 cm de alto.
        Contenido: 37 unidades / 20 elementos.`
    },
    {
      name: 'Botiquín Número 10',
      folder: 'botiquin10',
      images: ['botiquin10-cerrado.jpg', 'botiquin10-abierto.jpg'],
      descrption: `
        Caja plástica blanca, con trabas, portacandado. Manija. 
        Medidas: 43 cm de largo x 22 cm de ancho x 21 cm de alto.
        Contenido: 86 unidades / 21 elementos.`
    },
    {
      name: 'Botiquín Número 11',
      folder: 'botiquin11',
      images: ['botiquin11-cerrado.jpg', 'botiquin11-abierto.jpg'],
      descrption: `
        Gabinete de PVC blanco, estantes, espejo, cierre portacandado.
        Medidas: 37 cm de alto x 26 cm de ancho x 8 cm de profundidad.
        Contenido: 58 unidades / 19 elementos.`
    },
    {
      name: 'Botiquín Número 12',
      folder: 'botiquin12',
      images: ['botiquin12-cerrado.jpg', 'botiquin12-abierto.jpg'],
      descrption: `
        Gabinete de chapa pintado con epoxi blanco. Estantes. Espejo. Manija. Cierre portacandado.
        Medidas: 28 cm de alto x 22,5 de ancho x 10 cm de profundidad.
        Contenido: 58 unidades / 19 elementos.`
    },
    {
      name: 'Botiquín Número 13',
      folder: 'botiquin13',
      images: ['botiquin13-cerrado.jpg', 'botiquin13-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil, con espejo. Estantes.
        Medidas: 28 cm de alto x 22 cm de ancho x 10 cm de profundidad.
        Contenido: 64 unidades / 18 elementos`
    },
    {
      name: 'Botiquín Número 14',
      folder: 'botiquin14',
      images: ['botiquin14-cerrado.jpg', 'botiquin14-abierto.jpg'],
      descrption: `
        Gabinete de chapa, pintado con epoxi blanco. Espejo. Estantes. Manija, Cierre portacandado.
        Medidas: 35 cm de alto x 27 cm de anco x 12 cm de profundidad.
        Contenido: 79 unidades / 28 elementos.`
    },
    {
      name: 'Botiquín Número 15',
      folder: 'botiquin15',
      images: ['botiquin15-cerrado.jpg', 'botiquin15-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil con estantes y espejo. Cerradura con llave.
        Medidas:  36 cm de alto x 27 cm de ancho x 9,7 cm de profundidad.
        Contenido: 101 unidades / 23 elementos.`
    },
    {
      name: 'Botiquín Número 16',
      folder: 'botiquin16',
      images: ['botiquin16-cerrado.jpg', 'botiquin16-abierto.jpg'],
      descrption: `
        Gabinete plástico alto impacto blanco brillante.
        Medidas: 49 cm de alto x 31 cm de ancho x 10 cm de profundidad.
        Contenido: 95 unidades / 22 elementos.`
    },
    {
      name: 'Botiquín Número 17',
      folder: 'botiquin17',
      images: ['botiquin17-cerrado.jpg', 'botiquin17-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil. Cerradura con llave. Estantes y espejo.
        Medida: 50 cm de alto x 30 cm de ancho x 11 cm de profundidad.
        Contenido: 115 unidades / 24 elementos.`
    },
    {
      name: 'Botiquín Número 18',
      folder: 'botiquin18',
      images: ['botiquin18-cerrado.jpg', 'botiquin18-abierto.jpg'],
      descrption: `
        Gabinete de acero inoxidable, espejo, estantes, traba con cierre.
        Medidas: 28 cm de alto x 22 cm de ancho x 10 cm de alto.
        Contenido: 56 unidades / 18 elementos.`
    },
    {
      name: 'Botiquín Número 19',
      folder: 'botiquin19',
      images: ['botiquin19-cerrado.jpg', 'botiquin19-abierto.jpg'],
      descrption: `
        Caja plástica blanca, con trabas, portacandado, manija y bandeja interna.
        Medidas: 50,5 cm de largo x 24,5 cm de ancho x 24,2 cm de alto.
        Contenido: 280 unidades / 33 elementos.`
    },
    {
      name: 'Botiquín Número 20',
      folder: 'botiquin20',
      images: ['botiquin20-cerrado.jpg', 'botiquin20-abierto.jpg'],
      descrption: `
        Es un gabinete de madera tipo fibrofácil.
        Con estantes y divisiones internas. Amurable. Cerradura con llave.
        Medidas: 70 cm de alto x 50 cm de ancho x 15 cm de profundidad.`
    },
    {
      name: 'Botiquín Número 22',
      folder: 'botiquin22',
      images: ['botiquin22-cerrado.jpg', 'botiquin22-abierto.jpg'],
      descrption: `
        Gabinete de chapa pintado con epoxi blanco. Espejo. Manija. Estantes. Cierre portacandado.
        Medidas: 50 cm de alto x 28 cm de ancho x 12 cm de profundidad.
        Contenido: 192 unidades / 26 elementos.`
    },
    {
      name: 'Botiquín Número 27',
      folder: 'botiquin27',
      images: ['botiquin27-cerrado.jpg', 'botiquin27-abierto.jpg'],
      descrption: `
        Bolso morral de cordura con cierre. Correa regulable. Contiene una caja organizadora con divisiones.
        Medidas: 30 cm x 25 cm x 10 cm.
        Contenido: 63 unidades / 16 elementos.`
    },
    {
      name: 'KIT para Reposición chico',
      folder: 'kit-reposicion-chico',
      images: ['kit-reposicion-chico-cerrado.jpg', 'kit-reposicion-chico-abierto.jpg'],
      descrption: `
        Para reponer productos de botiquines Nros 5 / 8 / 9 / 10 / 11 / 12 / 13.
        Medida de la caja: 20 cm x 15 cm x 15 cm.
        Contenido: 44 unidades / 11 elementos.`
    },
    {
      name: 'KIT para Reposición mediano',
      folder: 'kit-reposicion-mediano',
      images: ['kit-reposicion-mediano-cerrado.jpg', 'kit-reposicion-mediano-abierto.jpg'],
      descrption: `
        Para reponer productos de botiquines Números 14 / 15 / 16 / 17 / 18 / 22.
        Medida de la caja: 20 cm x 15 cm x 15 cm.
        Contenido: 77 unidades / 18 elementos.`
    },
    {
      name: 'Bolso para emergencia',
      folder: 'bolso-emergencia',
      images: ['bolso-emergencia-cerrado.jpg', 'bolso-emergencia-abierto.jpg'],
      descrption: `
        2  bolsillos externos
        11 bolsillos internos
        4 bolsillos tipo red
        2 bolsillos laterales
        Medida: 62 cm x 30 cm x 24 cm de alto`
    },
  ]

  let productElements = []

  const generateProducts = () => {
    products.forEach(product => {
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

      let template =
        `
        <article class="product" id="${product.folder}">
          <div class="images">
            <img src="assets/${product.images[0]}" alt="${product.images[0].replaceAll('-', ' ')}">
            ${product.images[1] ? `<img src="assets/${product.images[1]}" alt="${product.images[1].replaceAll('-', ' ')}">` : ''}
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


  gallery.addEventListener('click', event => {
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
