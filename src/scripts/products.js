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
        Contenido:  8 unidades / 6 elementos.`,
      content: `
        1 Alcohol en Gel (Pouch)
        1 Algodón en disco
        2 Apósitos protectores
        1 Jabón comprimido
        2 Gasa estéril en sobres de 10 cm x 10 cm
        2 Guantes descartables de polietileno`
    },
    {
      name: 'Botiquín cartuchera',
      folder: 'cartuchera',
      images: ['cartuchera-cerrada.jpg', 'cartuchera-abierta.jpg'],
      descrption: `
        Tela de cordura con cierre.
        Medidas: 16 cm x 15 cm x5 cm alto.
        Contenido: 31 unidades / 15 elementos.`,
      content: `
        1 Agua Oxigenada 10 vol x 30 cc
        4 Alcohol en Gel (Pouch)
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        2 Guantes de látex
        1 Pinza para extracciones
        10 Apósitos adhesivos 
        1 Venda tipo Cambric de 7 cms x 3 metros
        1 Venda tipo Cambric de 10  cms x 3 metros
        2 Gasa estéril en sobres de 10 cm x 10 cm
        2 Tablilla de madera
        1 Manual para primeros auxilios
        1 Solución Timerosal x 30 cc
        1 Venda tipo Cambric de 5 cms x 3 metros
        2 Jabón comprimido
        2 Algodón en disco`
    },
    {
      name: 'Botiquín Home Office',
      folder: 'home-office',
      images: ['home-office-cerrado.jpg', 'home-office-abierto.jpg'],
      descrption: `
        Caja plástica semitransparente, tapa con bisagra, dos trabas, cuatro divisiones internas.
        Medidas: 23 cm x 18 cm x 4,5 cm de alto.
        Contenido: 18 unidades / 11 elementos.`,
      content: `
        1 Agua Oxigenada 10 vol x 100 cc
        1 Apósito Estéril de 10 cm x 10 cm
        4 Alcohol en Gel (Pouch)
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        2 Gasa estéril en sobres de 10 cm x 10 cm
        2 Guantes de látex
        3 Jabón comprimido
        1 Tijera de metal plegable
        1 Solución Timerosal x 30 cc
        1 Venda tipo Cambric de 7 cms x 3 metros
        1 Venda tipo Cambric de 10  cms x 3 metros`
    },
    {
      name: 'Kit higiene y prevención',
      folder: 'kit-preventivo',
      images: ['kit-preventivo.jpg'],
      descrption: `
        Bolsita hermética con cierre zipper.
        Medidas:  19 cm de largo x 12 cm de ancho x 2 cm alto.
        Contenido: 12 unidades / 5 elementos.`,
      content: `
        1 Barbijo descartable tri-capa .Agarre con elástico
        3 Alcohol en gel (Pouch)
        3 Papel Tissué
        3 Jabón comprimido
        2 Guantes de látex`
    },
    {
      name: 'Botiquín Náutico',
      folder: 'nautico',
      images: ['nautico-cerrado.jpg', 'nautico-abierto.jpg'],
      descrption: `
        Estuche plástico semitransparente.
        Contiene: 25 unidades en 10 elementos.
        Medidas: 18 cm de largo x 12 cm de ancho x 4,3 cm alto.`,
      content: `
        1 Agua Oxigenada 10 vol x 30 cc
        4 Alcohol en Gel (Pouch)
        5 Gasa estéril en sobres de 10 cm x 10 cm
        2 Guantes de látex
        8 Jabón comprimido
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        1 Tijera de metal plegable
        1 Termómetro digital
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10  cms x 3 metros`
    },
    {
      name: 'Botiquín Zipper',
      folder: 'zipper',
      images: ['zipper.jpg'],
      descrption: `
        Bolsita hermética con cierre zipper.
        Medidas: 10 cm de largo x 12 cm de ancho.
        Contenido: 13 unidades / 8 elementos.`,
      content: `
        2 Alcohol en Gel (Pouch)
        2 Algodón en disco
        3 Apósitos protectores
        1 Gasa estéril en sobre de 10 cm x 10 cm
        2 Guantes descartables de polietileno
        1 Tablilla de madera
        1 Cinta adhesiva  1,25 cms 
        1 Jabón comprimido`
    },
    {
      name: 'Botiquín Econo',
      folder: 'econo',
      images: ['econo-cerrado.jpg', 'econo-abierto.jpg'],
      descrption: `
        Estuche plástico rígido transparente. Tapa rebatible con trabas.
        Medidas:  10,5 cm de largo x 8 cm de ancho x 3,5 cm alto.
        Contenido: 15 unidades / 8 elementos.`,
      content: `
        2 Alcohol en Gel (Pouch)
        2 Algodón en disco
        5 Apósitos protectores
        1 Gasa estéril en sobre de 10 cm x 10 cm
        2 Guantes descartables de polietileno
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Jabón comprimido`
    },
    {
      name: 'Botiquín Número 1',
      folder: 'botiquin1',
      images: ['botiquin1-cerrado.jpg', 'botiquin1-abierto.jpg'],
      descrption: `
        Estuche plástico transparente. Tapa rebatible con trabas.
        Medidas: 14 cm de largo x 11 cm de ancho x 4 cm alto.
        Contenido: 15 unidades / 9 elementos.`,
      content: `
        4 Alcohol en Gel (Pouch)
        1 Algodón en disco
        3 Apósitos protectores
        1 Gasa estéril en sobre de 10 cm x 10 cm
        2 Guantes descartables de polietileno
        1 Cinta adhesiva de 1,25 cms 
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Jabón comprimido
        1 Pinza para extracciones`
    },
    {
      name: 'Botiquín Número 2',
      folder: 'botiquin2',
      images: ['botiquin2-cerrado.jpg', 'botiquin2-abierto.jpg'],
      descrption: `
        Estuche plástico transparente. Tapa rebatible con trabas.
        Medidas: 18 cm de largo x 12 cm de ancho x 4,3 cm alto.
        Contenido: 34 unidades / 10 elementos.`,
      content: `
        1 Agua Oxigenada 10 vol x 30 cc
        2 Alcohol en Gel (Pouch)
        1 Algodón en disco
        20 Apósitos Protectores
        2 Gasa estéril en sobres de 10 cm x 10 cm
        2 Guantes descartables de polietileno
        1 Pinza para extracciones
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        1 Venda tipo Cambric de 5 cms x 3 metros
        2 Jabón comprimido`
    },
    {
      name: 'Botiquín Número 3',
      folder: 'botiquin3',
      images: ['botiquin3-cerrado.jpg', 'botiquin3-abierto.jpg'],
      descrption: `
        Valijita plástica blanca.
        Medidas: 23 cm de largo x 16 cm de ancho x 5,4 cm alto.
        Contenido: 39 unidades / 12 elementos.`,
      content: `
        1 Agua Oxigenada 10 vol x 30 cc
        3 Alcohol en Gel (Pouch)
        2 Algodón en disco
        20 Apósitos Protectores
        2 Gasa estéril en sobres de 10 cm x 10 cm
        2 Guantes de látex
        2 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Pinza para extracciones
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        1 Venda tipo Cambric de 5 cms x 3 metros
        3 Jabón comprimido`
    },
    {
      name: 'Botiquín Número 4',
      folder: 'botiquin4',
      images: ['botiquin4-cerrado.jpg', 'botiquin4-abierto.jpg'],
      descrption: `
        Valijita plástica blanca.
        Medidas: 19 cm de largo x 15 cm de ancho x 15 cm alto.
        Contenido: 74 unidades / 15 elementos.`,
      content: `
        1 Agua Oxigenada 10 vol x 100 cc
        10 Alcohol en Gel (Pouch)
        1 Algodón hidrófilo de 70 grs
        40 Apósitos Protectores
        1 Copita lava-ojos
        4 Gasa estéril en sobres de 10 cm x 10 cm
        6 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Manual para primeros auxilios
        1 Pinza para extracciones
        1 Cinta adhesiva hipoalergénica de 2,50  cms x 9 metros 
        1 Solución Timerosal x 30 cc
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10  cms x 3 metros
        4 Jabón comprimido`
    },
    {
      name: 'Botiquín Número 5',
      folder: 'botiquin5',
      images: ['botiquin5-cerrado.jpg', 'botiquin5-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil con división interna.
        Medidas: 20 cm x 17 cm x 9,5 cm de profundidad.
        Contenido: 49 unidades / 12 elementos.`,
      content: `
        2 Jabón comprimido
        1 Agua Oxigenada 10 vol x 100 cc
        10 Alcohol en Gel (Pouch)
        20 Apósitos Protectores
        4 Gasa estéril en sobres de 10 cm x 10 cm
        6 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Manual para primeros auxilios
        1 Pinza para extracciones
        1 Cinta adhesiva hipoalergénica de 2,50  cms x 9 metros 
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10  cms x 3 metros`
    },
    {
      name: 'Botiquín Número 6',
      folder: 'botiquin6',
      images: ['botiquin6-cerrado.jpg', 'botiquin6-abierto.jpg'],
      descrption: `
        Bolsito tipo neceser.
        Medidas: 16 cm x 10 cm x 8 cm de alto.
        Contenido: 39 unidades / 13 elementos.`,
      content: `
        1 Agua Oxigenada 10 vol x 30 cc
        2 Alcohol en Gel (Pouch)
        2 Algodón en disco
        20 Apósitos Protectores
        2 Gasa estéril en sobres de 10 cm x 10 cm
        2 Guantes de látex
        2 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Pinza para extracciones
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros
        3 Jabón comprimido`
    },
    {
      name: 'Botiquín Número 7',
      folder: 'botiquin7',
      images: ['botiquin7-cerrado.jpg', 'botiquin7-abierto.jpg'],
      descrption: `
        Caja plástica roja, traba con cierre.
        Medidas: 24,5 cm x 17 cm x 12,5 cm de alto.
        Contenido:  45 unidades / 14 elementos.`,
      content: `
        1 Agua Oxigenada 10 vol x 100 cc
        5 Alcohol en Gel (Pouch)
        1 Algodón hidrófilo de 70 grs
        20 Apósitos Protectores
        1 Bicarbonato de Sodio de 25 grs.
        1 Copita lava-ojos
        4 Gasa estéril en sobres de 10 cm x 10 cm
        6 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Pinza para extracciones
        1 Cinta adhesiva hipoalergénica de 2,50  cms x 9 metros 
        1 Solución Timerosal x 30 cc
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros`
    },
    {
      name: 'Botiquín Número 8',
      folder: 'botiquin8',
      images: ['botiquin8-cerrado.jpg', 'botiquin8-abierto.jpg'],
      descrption: `
        Caja plástica blanca.
        Medidas: 33 cm de largo x 20 cm de ancho x 15 cm de alto.
        Contenido: 49 unidades / 16 elementos.`,
      content: `
        1 Agua Oxigenada 10 vol x 100 cc
        1 Alcohol puro de 250 cc
        1 Algodón hidrófilo de 70 grs
        20 Apósitos Protectores
        1 Bicarbonato de Sodio de 25 grs.
        1 Copita lava-ojos
        10 Gasa estéril en sobres de 10 cm x 10 cm
        6 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Manual para primeros auxilios
        1 Paño Jabonoso
        1 Pinza para extracciones
        1 Cinta adhesiva hipoalergénica de 2,50  cms x 9 metros 
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros`
    },
    {
      name: 'Botiquín Número 9',
      folder: 'botiquin9',
      images: ['botiquin9-cerrado.jpg', 'botiquin9-abierto.jpg'],
      descrption: `
        Gabinete de chapa, pintado con epoxi blanco. Estantes. Cerradura portacandado.
        Medidas: 25 cm de largo x 17 cm de ancho x 10 cm de alto.
        Contenido: 36 unidades / 19 elementos.`,
      content: `
        1 Agua Oxigenada 10 vol x 100 cc
        1 Acido Pícrico de 30 cc
        2 Alcohol en Gel (Pouch)
        1 Algodón hidrófilo de 70 grs
        10 Apósitos adhesivos 
        2 Barbijos
        1 Bicarbonato de Sodio de 25 grs.
        1 Bolsa para residuos patogénicos
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        1 Copita lava-ojos
        6 Gasa esteríl en sobres de 10 cm x 10 cm
        2 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Paño Jabonoso
        1 Pinza para extracciones
        1 Solución Timerosal x 30 cc
        1 Tubuladura de látex
        1 Vasito descartable
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros`
    },
    {
      name: 'Botiquín Número 10',
      folder: 'botiquin10',
      images: ['botiquin10-cerrado.jpg', 'botiquin10-abierto.jpg'],
      descrption: `
        Caja plástica blanca, con trabas, portacandado. Manija. 
        Medidas: 43 cm de largo x 22 cm de ancho x 21 cm de alto.`,
      content: `
        1 Acido Pícrico de 30 cc
        1 Agua Oxigenada 10 vol x 100 cc
        1 Alcohol puro de 250 cc
        2 Algodón hidrófilo de 70 grs
        40 Apósitos Protectores
        1 Bicarbonato de Sodio de 100 grs
        1 Copita lava-ojos
        1 Espejo de 8 x 14 cms
        10 Gasa estéril en sobres de 10 cm x 10 cm
        6 Guantes descartables de polietileno
        2 Jeringa descartable de 5 cc con aguja
        1 Manual para primeros auxilios
        1 Paño Jabonoso
        1 Pinza para extracciones
        10 Tablillas de madera
        1 Cinta adhesiva hipoalergénica de 2,50  cms x 9 metros 
        1 Solución Timerosal x 30 cc
        1 Tubuladura de látex
        2 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 7 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros`
    },
    {
      name: 'Botiquín Número 11',
      folder: 'botiquin11',
      images: ['botiquin11-cerrado.jpg', 'botiquin11-abierto.jpg'],
      descrption: `
        Gabinete de PVC blanco, estantes, espejo, cierre portacandado.
        Medidas: 37 cm de alto x 26 cm de ancho x 8 cm de profundidad.
        contenido: 58 unidades / 19 elementos.`,
      content: `
        1 Agua Oxigenada 10 vol x 100 cc
        1 Alcohol puro de 250 cc
        1 Algodón hidrófilo de 70 grs
        20 Apósitos Protectores
        2 Barbijos
        1 Bicarbonato de Sodio de 100 grs
        1 Bolsa para residuos patogénicos
        1 Copita lava-ojos
        1 Espejo de 8 x 14 cms
        5 Gasa estéril en sobres de 10 cm x 10 cm
        6 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Pinza para extracciones
        10 Tablillas de madera
        1 Cinta Adhesiva antialérgica de 2,5 cm x 9 metros
        1 Tubuladura de látex
        2 Vasitos plásticos
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros`
    },
    {
      name: 'Botiquín Número 12',
      folder: 'botiquin12',
      images: ['botiquin12-cerrado.jpg', 'botiquin12-abierto.jpg'],
      descrption: `
        Gabinete de chapa pintado con epoxi blanco. Estantes. Espejo. Manija. Cierre portacandado.
        Medidas: 28 cm de alto x 22,5 de ancho x 10 cm de profundidad.
        Contenido: 57 unidades / 19 elementos.`,
      content: `
        1 Agua Oxigenada 10 vol x 100 cc
        1 Alcohol puro x 250 cc
        1 Algodón hidrófilo x 70 grs
        20 Apósitos Protectores
        2 Barbijos
        1 Bicarbonato de Sodio x 100 grs
        1 Bolsa para residuos patogénicos
        1 Copita lava-ojos
        1 Espejo de 8 x 14 cms
        5 Gasa estéril en sobres de 10 cm x 10 cm
        6 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Pinza para extracciones
        10 Tablillas de madera
        1 Cinta adhesiva hipoalergénica de 2,50  cms x 9 metros 
        1 Tubuladura de látex
        2 Vasitos plásticos
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros`
    },
    {
      name: 'Botiquín Número 13',
      folder: 'botiquin13',
      images: ['botiquin13-cerrado.jpg', 'botiquin13-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil, con espejo. Estantes.
        Medidas: 28 cm de alto x 23 cm de ancho x 10 cm de profundidad.
        Contenido: 64 unidades / 18 elementos`,
      content: `
        1 Agua Oxigenada 10 vol x 100 cc
        10 Alcohol en Gel (Pouch)
        1 Alcohol puro de 250 cc
        1 Algodón hidrófilo de 70 grs
        20 Apósitos Protectores
        1 Bicarbonato de Sodio de 100 grs
        1 Copita lava-ojos
        1 Espejo de 8 x 14 cms
        5 Gasa estéril en sobres de 10 cm x 10 cm
        6 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Paño Jabonoso
        1 Pinza para extracciones
        10 Tablillas de madera
        1 Cinta adhesiva hipoalergénica de 2,50  cms x 9 metros 
        1 Tubuladura de látex
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros`
    },
    {
      name: 'Botiquín Número 14',
      folder: 'botiquin14',
      images: ['botiquin14-cerrado.jpg', 'botiquin14-abierto.jpg'],
      descrption: `
        Gabinete de chapa, pintado con epoxi blanco. Espejo. Estantes. Manija, Cierre portacandado.
        Medidas: 35 cm de alto x 27 cm de anco x 12 cm de profundidad.
        Contenido: 100 unidades / 26 elementos.`,
      content: `
        1 Acido Pícrico de 30 cc
        1 Agua Oxigenada 10 vol x 250 cc
        1 Alcohol puro de 500 cc
        1 Algodón hidrófilo de 70 grs
        20 Apósitos Protectores
        1 Bicarbonato de Sodio de 250 grs
        2 Barbijos
        1 Bolsa para residuos patogénicos
        1 Copita lava-ojos
        1 Espejo de 8 x 14 cms
        10 Gasa estéril en sobres de 10 cm x 10 cm
        2 gasa estéril en sobres de 20 cm x 20 cm
        10 Guantes descartables de polietileno
        2 Guantes de látex
        2 Jeringa descartable de 5 cc con aguja
        1 Manual para primeros auxilios
        1 Paño Jabonoso
        1 Pinza para extracciones
        10 Tablillas de madera
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        1 Cinta adhesiva hipoalergénica de 2,50  cms x 9 metros 
        1 Tijera de metal plegable
        1 Solución Timerosal x 30 cc
        1 Tubuladura de látex
        2 Vasitos plásticos
        1 Venda tipo Cambriic de 5 cms x 3 metros
        1 Venda tipo Cambric de 7 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros`
    },
    {
      name: 'Botiquín Número 15',
      folder: 'botiquin15',
      images: ['botiquin15-cerrado.jpg', 'botiquin15-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil con estantes y espejo. Cerradura con llave.
        Medidas:  36 cm de alto x 27 cm de ancho x 9,7 cm de profundidad.
        Contenido: 100 unidades / 23 elementos.`,
      content: `
        1 Acido Pícrico de 30 cc
        2 Agua Oxigenada 10 vol x 250 cc
        1 Alcohol puro de 500 cc
        1 Algodón hidrófilo de 70 grs
        40 Apósitos Protectores
        1 Bicarbonato de Sodio de 250 grs
        1 Copita lava-ojos
        1 Espejo de 8 x 14 cms
        10 Sobres de gasa estéril de 10 cm x 10 cm
        2 Sobres de gasa estéril de 20 cm x 20 cm
        10 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Manual para primeros auxilios
        1 Paño Jabonoso
        1 Pinza para extracciones
        20 Tablillas de madera
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        1 Cinta adhesiva hipoalergénica de 2,50  cms x 9 metros 
        1 Tijera de metal plegable
        1 Solución Timerosal x 30 cc
        1 Tubuladura de látex
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros`
    },
    {
      name: 'Botiquín Número 16',
      folder: 'botiquin16',
      images: ['botiquin16-cerrado.jpg', 'botiquin16-abierto.jpg'],
      descrption: `
        Gabinete plástico alto impacto blanco brillante.
        Medidas: 49 cm de alto x 31 cm de ancho x 10 cm de profundidad.
        Contenido: 94 unidades / 22 elementos.`,
      content: `
        1 Acido Pícrico de 30 cc
        1 Agua Oxigenada 10 vol x 250 cc
        1 Alcohol puro de 500 cc
        1 Algodón hidrófilo de 70 grs
        40 Apósitos Protectores
        1 Bicarbonato de Sodio de 250 grs
        1 Copita lava-ojos
        1 Espejo de 8 x 14 cms
        10 Sobres de gasa estéril de 10 cm x 10 cm
        6 Guantes descartables de polietileno
        1 Jeringa descartable de 5 cc  con aguja
        1 Manual para primeros auxilios
        1 Paño Jabonoso
        1 Pinza para extracciones
        20 Tablillas de madera
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        1 Cinta adhesiva hipoalergénica de 2,50  cms x 9 metros 
        1 Tijera de metal plegable
        1 Solución Timerosal x 30 cc
        1 Tubuladura de látex
        1 Venda tipo Cambric de 5 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros`
    },
    {
      name: 'Botiquín Número 17',
      folder: 'botiquin17',
      images: ['botiquin17-cerrado.jpg', 'botiquin17-abierto.jpg'],
      descrption: `
        Gabinete de fibrofácil. Cerradura con llave. Estantes y espejo.
        Medida: 50 cm de alto x 30 cm de ancho x 11 cm de profundidad.
        Contenido: 114 unidades / 24 elementos.`,
      content: `
        1 Acido Pícrico de 30 cc
        2 Agua Oxigenada 10 vol x 250 cc
        1 Alcohol puro de 500 cc
        1 Algodón hidrófilo de 70 grs
        40 Apósitos Protectores
        1 Bicarbonato de Sodio de 250 grs
        1 Copita lava-ojos
        1 Espejo de 8 x 14 cms
        10 Sobres de gasa estéril de 10 cm x 10 cm
        2 Sobres de gasa estéril de 20 cm x 20 cm
        20 Guantes descartables de polietileno
        2 Jeringa descartable de 5 cc con aguja
        1 Manual para primeros auxilios
        1 Paño Jabonoso
        1 Pinza para extracciones
        20 Tablillas de madera
        1 Cinta adhesiva hipoalergénica de 1,25 cms x 9 metros 
        1 Cinta adhesiva hipoalergénica de 2,50  cms x 9 metros 
        1 Tijera de metal plegable
        1 Solución Timerosal x 30 cc
        1 Tubuladura de látex
        2 Venda tipo Cambric de 5 cms x 3 metros
        2 Venda tipo Cambric de 7 cms x 3 metros
        1 Venda tipo Cambric de 10 cms x 3 metros`
    },
    {
      name: 'Botiquín Número 22',
      folder: 'botiquin22',
      images: ['botiquin22-cerrado.jpg', 'botiquin22-abierto.jpg'],
      descrption: `
        Gabinete de chapa pintado con epoxi blanco. Espejo. Manija. Estantes. Cierre portacandado.
        Medidas: 50 cm de alto x 28 cm de ancho x 12 cm de profundidad.
        Contenido: 192 unidades / 27 eleementos.`,
      content: `
        1 Acido Picrico de 30 cc
        2 Agua Oxigenada 10 vol x 500 cc
        1 Alcohol puro x 500 cc
        2 Algodón hidrofilo x 75 grs
        30 Apositos protectores
        1 Aposito esteril
        10 Bajalengua de madera
        1 Cinta adhesiva hipoalergenica 1,25 x 9 mts
        1 Cinta adhesiva hipoalergenica 2,5 x 9 mts
        1 Bicarbonato de sodio x 250 grs
        1 Copita lavaojos
        1 Espejo 8 x 14 cms
        100 Guantes descartables 
        4 Guantes descartables
        20 Gasa en sobres de 10 x 10
        2 Gasa en sobres de 20 x 20
        1 Jeringa descartable x 5 cc con aguja
        1 Manual para primeros auxilios
        1 Paño Jabonoso
        1 Pinza para extracciones
        1 Sulfatiazol polvo cicatrizante de 3 grs
        1 Tijera metálica
        1 Solución TImerosal x 100 cc
        1 Tubuladura de látex
        2 vendas de algodón x 5 cm de ancho
        2 vendas de algodón x 7 cm de ancho
        2 vendas de algodón x 10 cm de ancho`
    },
    {
      name: 'Botiquín Número 27',
      folder: 'botiquin27',
      images: ['botiquin27-cerrado.jpg', 'botiquin27-abierto.jpg'],
      descrption: `
        Bolso morral de cordura con cierre. Correa regulable. Contiene una caja organizadora con divisiones.
        Medidas: 30 cm x 25 cm x 10 cm.
        Contenido: 63 unidades / 16 elementos.`,
      content: `
        4 Jabón comprimido
        1 Agua oxigenada 10 vol x 30 cc
        1 Alcohol puro x 500 cc
        1 Algodón hidrófilo x 75 gr
        40 Apósitos Protectores
        1 Bicarbonato de Sodio de 25 grs
        4 Gasa estéril en sobres de 10 cm x 10 cm
        2 Guantes de látex
        2 Guantes descartables de polietileno
        1 Jeringa descartable x 5 cc con aguja
        1 Manual para primeros auxilios
        1 Pinza para extracciones
        1 tela adhesiva hipoalergénica x 2,50 cm de ancho
        1 solución timerosal x 30 cc
        1 venda tipo cambric x 5 cm de ancho
        1 venda tipo cambric x 7 cm de ancho`
    },
  ]

  let productElements = []

  const generateProducts = () => {
    products.forEach( product => {
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
            <button data-action="toggle-content">
              Contenido
              <svg xmlns="http://www.w3.org/2000/svg" width="10.828" height="6.414" viewBox="0 0 10.828 6.414"
                data-icon="arrow">
                <path id="Flecha" d="M332.894,533.5l4,4-4,4" transform="translate(542.914 -331.48) rotate(90)" fill="none"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
            </button>
            <p class="content hide">
              ${product.content.trim()}
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
    console.dir(target)
    if (target.tagName === 'BUTTON') {
      const content = target.nextElementSibling
      content.classList.toggle('hide')
    }

    if (target.tagName === 'IMG' && target.nextElementSibling) {
      if (target.nextElementSibling.tagName === 'IMG') target.classList.toggle('opacity')
    }
  })
  
}