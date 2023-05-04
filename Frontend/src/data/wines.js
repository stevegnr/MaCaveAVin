import cndp from '../assets/chateauneuf_du_pape.jpg'
import chianti from '../assets/chianti.jpg'
import haut_rian from '../assets/haut_rian.jpg'
import hcdn from '../assets/hautes_cotes_de_nuit.jpg'
import jamelles from '../assets/les_jamelles.jpg'
import pivell from '../assets/pi-vell.jpg'
import riesling from '../assets/riesling.jpg'
/* import cndp from '../assets/chateauneuf_du_pape.jpg'
import cndp from '../assets/chateauneuf_du_pape.jpg' */

export const winesList = [
  {
    id: 1,
    name: 'Chateauneuf-du-Pape',
    domain: 'Château de Saint Cosme',
    region: 'Rhône',
    year: 1991,
    color: 'red',
    price: 220,
    grapeVariety: {
      'Grenache': 50,
      'Mourvèdre': 30,
      'Syrah': 15,
      'Cinsault': 5
    },
    biologic: false,
    bestAfter: 2,
    bestBefore: 7,
    country: 'France',
    cover: cndp,
  },
  {
    id: 2,
    name: 'Bourgogne Hautes Côtes de Beaune ',
    domain: 'Elodie Roy',
    region: 'Bourgogne',
    year: 2020,
    color: 'red',
    price: 19,
    grapeVariety: {
      'Pinot noir': 100
    },
    biologic: false,
    bestAfter: 5,
    bestBefore: 10,
    country: 'France',
    cover: hcdn,
  },
  {
    id: 3,
    name: 'Pi Vell',
    domain: 'Le Roc des Anges',
    region: 'Roussillon',
    year: 2021,
    color: 'white',
    price: 46,
    grapeVariety: {
      'Macabeu': 100
    },
    biologic: true,
    bestAfter: 2,
    bestBefore: 5,
    country: 'France',
    cover: pivell,
  },
  {
    id: 4,
    name: 'Riesling Collection Privée',
    domain: 'Domaine Kuehn',
    region: 'Alsace',
    year: 2021,
    color: 'white',
    price: 7.25,
    grapeVariety: {
      'Riesling': 100
    },
    biologic: false,
    bestAfter: 1,
    bestBefore: 3,
    country: 'France',
    cover: riesling,
  },
  {
    id: 5,
    name: 'Haut Rian',
    domain: 'Château Haut Rian',
    region: 'Bordeaux',
    year: 2022,
    color: 'pink',
    price: 5.80,
    grapeVariety: {
      'Merlot': 100
    },
    biologic: false,
    bestAfter: 0,
    bestBefore: 2,
    country: 'France',
    cover: haut_rian,
  },
  {
    id: 6,
    name: 'Les Jamelles Chardonnay',
    domain: 'Les Jamelles',
    region: 'Languedoc-Roussillon',
    year: 2021,
    color: 'white',
    price: 7.40,
    grapeVariety: {
      'Chardonnay': 100
    },
    biologic: false,
    bestAfter: 0,
    bestBefore: 2,
    country: 'France',
    cover: jamelles,
  },
  {
    id: 7,
    name: 'Chianti Riserva',
    domain: 'Uggiano',
    region: 'Italy',
    year: 2019,
    color: 'red',
    price: 9.35,
    grapeVariety: {
      'Sangiovese': 50,
      'Canailo': 50,
    },
    biologic: true,
    bestAfter: 2,
    bestBefore: 7,
    country: 'Italy',
    cover: chianti,
  },
]