// import adt_top_left from '../img/projets/adt/adt-top-left.png';
// import adt_bottom_left from '../img/projets/adt/adt-bottom-left.png';
// import adt_top_right from '../img/projets/adt/adt-top-right.png';
// import adt_bottom_right from '../img/projets/adt/adt-bottom-right.png';

// import brach_top_left from '../img/projets/brach-presite/brach-top-left.png';
// import brach_bottom_left from '../img/projets/brach-presite/brach-bottom-left.png';
// import brach_top_right from '../img/projets/brach-presite/brach-top-right.png';
// import brach_bottom_right from '../img/projets/brach-presite/brach-bottom-right.png';

// import brach_top_left_small from '../img/projets/brach-presite/brach-top-left-small.png';
// import brach_bottom_left_small from '../img/projets/brach-presite/brach-bottom-left-small.png';
// import brach_top_right_small from '../img/projets/brach-presite/brach-top-right-small.png';
// import brach_bottom_right_small from '../img/projets/brach-presite/brach-bottom-right-small.png';

// import ambroselli_white_top_left from '../img/projets/ambroselli-io/ambroselli-white-top-left.png';
// import ambroselli_white_bottom_left from '../img/projets/ambroselli-io/ambroselli-white-bottom-left.png';
// import ambroselli_white_top_right from '../img/projets/ambroselli-io/ambroselli-white-top-right.png';
// import ambroselli_white_bottom_right from '../img/projets/ambroselli-io/ambroselli-white-bottom-right.png';

const pictures = {
  vernet: {
    // topLeft: ambroselli_white_top_left,
    // bottomLeft: ambroselli_white_bottom_left,
    // topRight: ambroselli_white_top_right,
    // bottomRight: ambroselli_white_bottom_right,
    name: 'Hôtel Vernet',
    url: 'https://dev.ambroselli.io/vernet/',
    description: {
      __html: `- Développement front-end - SASS BEM (CSS Grid) + JS Vanilla (no jQuery)<br />
    - Gros effort de fluidité malgré les cinémagraphes qui ont tendance à ralentir les performance et dégrader l'expérience utilisateur<br />
    - Gros effort d'intégration pour rester compatible IE11 malgré une disposition d'élément difficile<br />`
    },
    classes: 'vernet '
  },
  adt: {
    // topLeft: adt_top_left,
    // bottomLeft: adt_bottom_left,
    // topRight: adt_top_right,
    // bottomRight: adt_bottom_right,
    name: 'Atelier Delalande Tabourin',
    url: 'https://www.atelierdelalandetabourin.com/',
    description: {
      __html: `- Développement en React.js<br />`
    },
    classes: 'adt '
  },
  brach: {
    // topLeft: window.matchMedia("(min-width: 1000px)").matches ? brach_top_left : brach_top_left_small,
    // bottomLeft: window.matchMedia("(min-width: 1000px)").matches ? brach_bottom_left : brach_bottom_left_small,
    // topRight: window.matchMedia("(min-width: 1000px)").matches ? brach_top_right : brach_top_right_small,
    // bottomRight: window.matchMedia("(min-width: 1000px)").matches ? brach_bottom_right : brach_bottom_right_small,
    name: 'Pré-site Hôtel Brach',
    description: {
      __html: `- Développement front-end - SASS + JS Vanilla (no jQuery)<br />
    - Gros effort de fluidité pour atteindre le 60 FPS en transitions<br />`
    },
    url: 'https://dev.ambroselli.io/brach-hotel/',
    classes: 'brach '
  },
  // argos: {
  //   // topLeft: ambroselli_white_top_left,
  //   // bottomLeft: ambroselli_white_bottom_left,
  //   // topRight: ambroselli_white_top_right,
  //   // bottomRight: ambroselli_white_bottom_right,
  //   name: 'Total - Challenge Argos',
  //   description: {
  //     __html: `- Premier projet
  //   - Développement front-end - SASS + JS Vanilla (no jQuery)<br />
  //   - Pas de framework ni de librairies pour tous les diaporamas : fait maison, made in ambroselli.io<br />`,
  //   url: 'https://dev.ambroselli.io/argos/'
  //   },
  //   classes: 'argos '
  // },
  ambroselli: {
    // topLeft: ambroselli_white_top_left,
    // bottomLeft: ambroselli_white_bottom_left,
    // topRight: ambroselli_white_top_right,
    // bottomRight: ambroselli_white_bottom_right,
    name: 'Ambroselli.io',
    description: {
      __html: `- Développement en React.js<br />
    - Animations SVG<br />
    - Première utilisation de react-transition-group v2<br />`
    },
    url: 'https://www.ambroselli.io/',
    classes: 'ambroselli '
  },
  'Librairie open-source npm react-swipe-to-delete-ios': {
    // topLeft: ambroselli_white_top_left,
    // bottomLeft: ambroselli_white_bottom_left,
    // topRight: ambroselli_white_top_right,
    // bottomRight: ambroselli_white_bottom_right,
    name: 'react-swipe-to-delete-ios',
    description: {
      __html: `- Développement en React.js<br />
    - Animations SVG<br />
    - Première utilisation de react-transition-group v2<br />`
    },
    url: 'https://arnaudambro.github.io/react-swipe-to-delete-ios/',
    classes: 'react-swipe-to-delete-ios '
  }
};

export default pictures;
