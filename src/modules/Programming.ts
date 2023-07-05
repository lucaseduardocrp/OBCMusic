type DayTypes = {
  hour: string,
  description: string,
  artists: {
    image: string,
    name: string,
    id: string,
  }[],
  preview: string,
  icon: string,
}

type EventDayTypes = {
  dayOne: DayTypes[],
  dayTwo: DayTypes[],
  dayThree: DayTypes[],
}

export const Programming: EventDayTypes = {
  dayOne: [
    {
    hour: '11:00 AM to 12:00 PM',
    description: 'Desfrute de uma performance emocionante com Yui Ronald, um artista solo que encanta o público com sua voz cativante e letras inspiradoras. Prepare-se para uma noite de músicas envolventes e momentos emocionantes.',
    
    artists:[
      {
        image: '/artists-image/Yui.png',
        name: 'Yui Ronald',
        id: 'Booth: 2F12', 
      },
    ], 

    preview: 'Previa',
    icon: '/svg/Icons-Play.svg',
  },
  {
    hour: '12:00 PM to 03:00 PM',
    description: 'O trio que vai levar você a uma jornada musical com suas harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório diversificado que abrange diversos estilos musicais e emocione seus sentidos.',      

    artists: [
      {
        image: '/artists-image/Bob.png',
        name: 'Bob John',
        id: 'Booth: 3G12', 
      },
  
      {
        image: '/artists-image/Yui.png',
        name: 'Yui Ronald',
        id: 'Booth: 2F12', 
      },
  
      {
        image: '/artists-image/Emma.png',
        name: 'Emma Satoshi',
        id: 'Booth: 2A35', 
      },
    ] ,

    preview: 'AO VIVO',
    icon: '/svg/Icons-LiveCamera.svg',
  },
  {
    hour: '03:00 AM to 04:00 PM',
    description: 'A dupla que vai conquistar seu coração com sua música cativante e performances cheias de energia. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único.',      

    artists: [
    {
      image: '/artists-image/Sasha.png',
      name: 'Sasha Jackson',
      id: 'Booth: 2F18', 
    },
    {
      image: '/artists-image/Diana.png',
      name: 'Diana Brock',
      id: 'Booth: 2F24', 
    },
  ],
    
    preview: 'Em breve',
    icon: '/svg/Icons-Clock.svg',
  }, 
],

dayTwo: [
  {
  hour: '11:00 AM to 12:00 PM',
  description: 'Viva uma experiência eletrizante com Neusa Smith, que hipnotiza a plateia com sua voz arrebatadora e poesias que transcendem. Prepare-se para uma noite imersiva, onde melodias envolventes e momentos tocantes se fundem em harmonia perfeita.',
  
  artists:[
    {
      image: '/artists-image/NeusaSmith.png',
      name: 'Neusa Smith',
      id: 'Booth: 32KK2', 
    },
  ], 

  preview: 'Em breve',
  icon: '/svg/Icons-Clock.svg',
},
{
  hour: '12:00 PM to 03:00 PM',
  description: 'Desfrute da experiência musical única proporcionada pelo trio formado por The Weeknd, Masked Dj e Marshmallow. Com suas harmonias vocais encantadoras e arranjos instrumentais cativantes, eles conduzem uma jornada musical diversificada, abrangendo diversos estilos. Prepare-se para uma noite emocionante, onde suas performances envolventes e talento excepcional irão cativar seus sentidos e criar memórias inesquecíveis.',      

  artists: [
    {
      image: '/artists-image/TheWeeknd.png',
      name: 'The Weeknd',
      id: 'Booth: 9K1W', 
    },

    {
      image: '/artists-image/MaskedDJ.png',
      name: 'Masked DJ',
      id: 'Booth: 2F72', 
    },

    {
      image: '/artists-image/Marshmallow.png',
      name: 'Marshmallow',
      id: 'Booth: 77A35', 
    },
  ] ,

    preview: 'Em breve',
    icon: '/svg/Icons-Clock.svg',
  },
  {
    hour: '03:00 AM to 04:00 PM',
    description: 'A dupla que vai conquistar seu coração com sua música cativante e performances cheias de energia. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único.',      

    artists: [
    {
      image: '/artists-image/AliciaKeys.png',
      name: 'Alicia Keys',
      id: 'Booth: 9998', 
    },
    {
      image: '/artists-image/JohnMayer.png',
      name: 'John Mayer',
      id: 'Booth: 9999', 
    },
  ],
    
    preview: 'Em breve',
    icon: '/svg/Icons-Clock.svg',
  }, 
],

dayThree: [
    {
    hour: '11:00 AM to 12:00 PM',
    description: 'O Seu Jorge do trap music que vai levar você a uma jornada musical com batidas eletrônicas e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório falando da Carolina o trap mais brabo do momento.', 

    artists:[
      {
        image: '/artists-image/Gmox.png',
        name: 'Gmox',
        id: 'Booth: 0F15', 
      },
    ], 
    
    preview: 'Em Breve',
    icon: '/svg/Icons-Clock.svg',
  },
  {
    hour: '12:00 PM to 03:00 PM',  
    description: 'O trio com sua performance dará um show de rock que vai contagiar a galera. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único. ERROR 404 Music', 

    artists: [
      {
        image: '/artists-image/Alexandre.png',
        name: 'Alexandre Back',
        id: 'Booth: 2F18', 
      },
      {
        image: '/artists-image/Paulo.png',
        name: 'Paulo Dialise',
        id: 'Booth: 8G12', 
      },

      {
        image: '/artists-image/Levi.png',
        name: 'Levi Logic',
        id: 'Booth: 2SP2', 
      },
    ],

      preview: 'Em Breve',
      icon: '/svg/Icons-Clock.svg',
    },
    {
      hour: '03:00 AM to 04:00 PM',
      description: 'A dupla de sertanejo do momento, DIALISE, dois jovens com uma voz cativante e letras inspiradoras. Prepare-se para uma noite de músicas envolventes e momentos emocionantes.',

      artists: [
        {
          image: '/artists-image/Paulo.png',
          name: 'Paulo Dialise',
          id: 'Booth: 8G12', 
        },
  
        {
          image: '/artists-image/Levi.png',
          name: 'Levi Logic',
          id: 'Booth: 2SP2', 
        },
      ] ,
     
      preview: 'Em breve',
      icon: '/svg/Icons-Clock.svg',
    }, 
  ],
}