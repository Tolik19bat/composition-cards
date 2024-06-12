import "./App.css";
import Card from "./components/Card";
import CardBody from "./components/CardBody";
import CardButton from "./components/CardButton";
import CardImage from "./components/CardImage";
import CardText from "./components/CardText";
import CardTitle from "./components/CardTitle";

function App() {
  return (
    <>
      <Card>
        <CardImage src="https://russkiiyazyk.ru/wp-content/uploads/2018/06/Kartinka.jpg" alt="Image cap" />
        <CardBody>
          <CardTitle title="Card title" />
          <CardText text="Some quick example text to build on the card title and make up the bulk of the card's content." />
          <CardButton href="#">Go somewhere</CardButton>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle title="Special title treatment" />
          <CardText text="With supporting text below as a natural lead-in to additional content." />
          <CardButton href="#">Go somewhere</CardButton>
        </CardBody>
      </Card>
    </>
  );
}

export default App;
