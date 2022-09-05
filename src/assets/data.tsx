import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import RpgImg from "../assets/rpg-apps-angular.png"
import ToDoImg from "../assets/todo-app.png"
import PokedexImg from "../assets/pokedex.png"
import WWEImg from "../assets/wwe-trivia-rumble.png"
import TourOfHeroesImg from "../assets/tour-of-heroes.png"
import LostJudgementImg from "../assets/lost-judgement-tsx.png"
import AluraImg from "../assets/alura-cursos.png"

const menuLinks = [
  {location: '/home', name: 'home.name', icon: HomeIcon},
  {location: '/about', name: 'about.name', icon: InfoIcon},
]

export const projectsList = [
  {git: 'rpg-apps-angular', name: 'home.rpg-apps-angular',description:"home.rpg-apps-angular-desc", img: RpgImg, type: "Angular"},
  {git: 'todo-app', name: 'home.todo-app',description:"home.todo-app-desc", img: ToDoImg, type: "React"},
  {git: 'pokedex', name: 'home.pokedex',description:"home.pokedex-desc", img: PokedexImg, type: "React"},
  {git: 'wwe-trivia-rumble', name: 'home.wwe-trivia-rumble',description:"home.wwe-trivia-rumble-desc", img: WWEImg, type: "React"},
  {git: 'tour-of-heroes', name: 'home.tour-of-heroes',description:"home.tour-of-heroes-desc", img: TourOfHeroesImg, type: "Angular"},
  {git: 'lost-judgement-tsx', name: 'home.lost-judgement-tsx',description:"home.lost-judgement-tsx-desc", img: LostJudgementImg, type: "React"},
  {git: 'alura-cursos', name: 'home.alura-cursos',description:"home.alura-cursos-desc", img: AluraImg, type: "ETC"},
]

let invoices = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

export function getInvoices() {
  return invoices;
}

export function getInvoice(number: number | undefined) {
  return invoices.find(
    (invoice) => invoice.number === number
  );
}

export function deleteInvoice(number: number | undefined) {
  invoices = invoices.filter(
    (invoice) => invoice.number !== number
  );
}

export function getLinks() {
  return menuLinks
}