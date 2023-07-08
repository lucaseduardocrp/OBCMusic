type TicketsType = {
  title: string,
  price: string,
  list: {
    item: string,
  }[],
  emphasis: 'Red' | '',
  btnBG: 'Red' | 'Black' | 'Transparent' | 'White',
  color: 'Red' | 'White' | 'Black',
  btnBorder: 'Red' | 'Black',
  cardBorderTop: 'Black' | '',
}

export const TicketsInformations: TicketsType[] = [
  {
    title: 'Básico',
    price: 'R$100',
    list: [
      {
        item: 'Acesso aos shows digitais',
      },
      {
        item: 'Experiência musical imersiva',
      },
      {
        item: 'Preço acessível',
      },
    ],

    emphasis: '',
    btnBG: 'White',
    color: 'Black',
    btnBorder: 'Black',
    cardBorderTop: 'Black',
  },
  {
    title: 'Padrão',
    price: 'R$150',
    list: [
      {
        item: 'Acesso aos shows digitais',
      },
      {
        item: 'Benefícios extras',
      },
      {
        item: 'Possibilidade de interagir com os artistas',
      },
    ],
    
    emphasis: '',
    btnBG: 'Black',
    color: 'White',
    btnBorder: 'Black',
    cardBorderTop: 'Black',
  },
  {
    title: 'VIP',
    price: 'R$200',
    list: [
      {
        item: 'Acesso aos shows digitais',
      },
      {
        item: 'Vantagens adicionais',
      },
      {
        item: 'Experiência VIP',
      },
    ],
    
    emphasis: 'Red',
    btnBG: 'Transparent',
    color: 'Red',
    btnBorder: 'Red',
    cardBorderTop: '',
  }
]