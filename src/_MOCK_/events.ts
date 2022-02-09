type Section_price = {
  sect: string,
  price: number
}

export type Event = {

  name: string,
  description: string,
  about: string,
  abount_discounts: string,
  discount: string[],
  sect_price: Section_price[],
  image: string,
  location: string,
  uf: string,
  city: string,
  day: string,
  mounth: string,
  year: string,
  hour: string,
}

export const MOCK_EVENTS: Event[] = [
  {

    name: 'Roupa Nova',
    description: 'Jantar Show com apresentação da banda Roupa Nova',
    about: "Lorem ipsum - Sobre",
    abount_discounts: "Lorem ipsum - Descontos",
    discount: ['Meia entrada', 'Inteira'],
    sect_price: [
      {
        sect: 'Mesa',
        price: 600.00
      },
      {
        sect: 'Palco - Frente',
        price: 350.00
      },
      {
        sect: 'Ala esquerda',
        price: 200.00
      },
      {
        sect: 'Ala direita',
        price: 200.00
      },
    ],
    image: 'https://images.ticket360.com.br/images.ticket360/eventos/interna/19711.jpg',
    location: 'Casa do Lago',
    uf: 'SP',
    city: 'Santo André',
    day: '26',
    mounth: 'Março',
    year: '2022',
    hour: '10:00',
  },
  {

    name: 'CarnavAU',
    description: 'PETS NÃO PAGAM INGRESSO.',
    about: 'Lorem Ipsum - Sobre',
    abount_discounts: 'Lorem Ipsum - Descontos',
    discount: ['Meia entrada', 'Inteira'],
    sect_price: [
      {
        sect: 'Camarote',
        price: 450.00
      }
    ],
    image: 'https://images.ticket360.com.br/images.ticket360/eventos/interna/22388-20211210154054.jpg',
    location: 'Sambódromo do Anhembi',
    uf: 'SP',
    city: 'São Paulo',
    day: '23',
    mounth: 'Abril',
    year: '2022',
    hour: '21:00',
  },
  {

    name: 'Carnaval 2022',
    description: 'Tudo começa na recepção do nosso ponto de encontro fora do Anhembi, onde iremos oferecer um serviço de make-up.',
    about: 'Lorem Ipsum - Sobre',
    abount_discounts: 'Lorem Ipsum - Descontos',
    discount: ['Inteira', 'Meia entrada'],
    sect_price: [
      {
        sect: 'Camarote',
        price: 450.00
      }
    ],
    image: 'https://images.ticket360.com.br/images.ticket360/eventos/interna/23414.jpg',
    location: 'Sambódromo do Anhembi',
    uf: 'SP',
    city: 'São Paulo',
    day: '23',
    mounth: 'Abril',
    year: '2022',
    hour: '21:00',
  },
  {
    name: 'Brabus BBQ',
    description: 'BRABUS BBQ é um festival de churrasco que tem como objetivo promover experiências gastronômicas.',
    about: 'Lorem Ipsum - Sobre',
    abount_discounts: 'Lorem Ipsum - Descontos',
    discount: ['Meia entrada', 'Inteira'],
    sect_price: [
      {
        sect: 'Evento',
        price: 150.00
      }
    ],
    image: 'https://images.ticket360.com.br/images.ticket360/eventos/interna/22073-20211105150415.jpg',
    location: 'Casa do Lago',
    uf: 'SP',
    city: 'S. B. do Campo',
    day: '19',
    mounth: 'Março',
    year: '2022',
    hour: '13:00',
  },

]