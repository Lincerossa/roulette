import React from 'react';
import './App.css';
import Game from './components/Game';

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
    color: "#ec5991"
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
    color: "#110f1e"
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
  ...item
}))


const App = () => <Game data={data} />

export default App
