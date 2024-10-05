import './App.css';
import { Card } from "./Card.jsx";




const cards = [
  {
    id: 1,
    title: "Безлимитный 300",
    price: 300,
    speed: 10,
  },
  {
    id: 2,
    title: "Безлимитный 450",
    price: 450,
    speed: 50,
  },
  {
    id: 3,
    title: "Безлимитный 550",
    price: 550,
    speed: 100,
  },
  {
    id: 4,
    title: "Безлимитный 1000",
    price: 1000,
    speed: 200,
  },

]

function App() {
function getColor (index) {
  switch (index) {
    case 0:
      return "green";
    case 1:
      return "pink";
    case 2:
      return "purple";
    case 3:
      return "grey";
    default:
      return "blue";
  }
}

return (
    <div className="App">
{cards.map((card,index)=>{
  return <Card color={getColor(index)} card={card}/>;

})}
    </div>
  );
}

export default App;
