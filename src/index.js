import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from './components';
import * as serviceWorker from './serviceWorker';




// single page
// single route
// no ssr (nextJs or others)
// ...just a game!

const items = [
  {
    label: "marci",
    message: "Marci il vittorioso",
    color: "blue"
  },
  {
    label: "ale",
    message: "Vince anche dall'altra parte del mondo",
    color: "pink"
  },
  {
    label: "mamma",
    message: "Di mamma ce n'è una, e la Licia batte pure quella",
    color: "yellow"
  },
  {
    label: "papà",
    message:
      "Il costruttore dell'alto lario... i nani di Moria non sono niente in confronto",
    color: "grey"
  },
  {
    label: "sandra",
    message: "Un medico in famiglia? Ma non scherziamo! Vai sandra :D",
    color: "red"
  },
  {
    label: "lella",
    message: "mille riunioni, ma trova sempre il tempo di fare la zia",
    color: "rebeccapurple"
  },
  {
    label: "maria",
    message: "Un' artista in famiglia leva il medico di torno :D",
    color: "lightblue"
  },
  {
    label: "nonna",
    message: "La più roccia della famiglia, grande!",
    color: "green"
  },
  {
    label: "franco",
    message:
      "Il conquistatore di Sandre e il raccoglitore di cibi e bevande locali!",
    color: "brown"
  },
  {
    label: "emanuele",
    message: "La Giargialandia non gli appartiene!",
    color: "lightgray"
  },
  {
    label: "tim",
    message: "Per gli amici Tommy ahah",
    color: "wheat"
  },
  {
    label: "mary",
    message:
      "Due Marie e due artiste... coincidenze? Allineamenti di pianeti? Io non credo :D",
    color: "orange"
  }
];


const data = items.map(item => ({
  angle: 360 / items.length,
  color: item.color,
  ...item
}))








ReactDOM.render(<Game
  data={data}
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
