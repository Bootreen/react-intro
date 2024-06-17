import { Fragment } from "react";
import { Card } from "./Card";
import "./css/style.css";

const App = () => (
  <Fragment>
    <Card title='Card 1' caption='OK' />
    <Card title='Card 2' caption='Cancel' />
    <Card title='Card 3' caption='Back' />
    <Card title='Card 4' caption='Forward' />
    <Card title='Card 5' caption='Exit' />
  </Fragment>
);

export default App;
