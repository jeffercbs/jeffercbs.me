export type ExperienceProps = {
  logo: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

export const Experience: ExperienceProps[] = [
  {
    logo: '/mision-tic.jpg',
    title: 'MisiónTIC 2022',
    company: 'MinTIC - Gobierno Nacional',
    location: 'Ibagué, Tolima, Colombia',
    startDate: '2019-01-01',
    endDate: '2020-01-01',
    description:
      'Durante mi participación en el proyecto del gobierno MisionTIC2022, tuve la oportunidad de aprender de expertos de la industria y junto a la universidad de Pamplona el programa estuvo enfocado en proyectos individuales y en equipo, así como en charlas y otras actividades que me permitieron adquirir habilidades técnicas en programación. Fue una experiencia enriquecedora en la que pude desarrollar aún más mi lógica de programación en la generación de soluciones con software.',
  },
  {
    logo: '/eco-star.jpeg',
    title: 'Asistencia administrativa',
    company: 'Eco Star Hotel',
    location: 'Ibagué, Tolima, Colombia',
    startDate: '2022-06-01',
    endDate: '2020-10-01',
    description:
      'Durante mi etapa productiva como parte de mi formación técnica en asistencia administrativa, tuve la oportunidad de desempeñarme en la gestión de archivo. Durante este periodo, desempeñe funciones en la clasificación y organizar documentos importantes de la empresa.',
  },
  {
    logo: '/medium.jpeg',
    title: 'Escritor en medium',
    company: 'Google',
    location: 'Internet',
    startDate: '2019-01-01',
    endDate: '2020-01-01',
    description:
      'He publicado varios artículos en Medium sobre tecnología y programación, lo que me ha permitido compartir mis conocimientos y puntos de vista con una audiencia más amplia',
  },
];
