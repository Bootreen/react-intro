import { useState } from "react";
import { Card } from "./Card";
import { characters } from "./database";
import "./css/style.css";

const App = () => {
  const [id, setId] = useState(0);
  const { name, gender, age, hair, desc, img } = characters[id];
  const onClickHandler = (direction) => {
    if (direction === "left") setId(id > 0 ? id - 1 : characters.length - 1);
    if (direction === "right") setId(id < characters.length - 1 ? id + 1 : 0);
  };
  return (
    <Card
      name={name}
      gender={gender}
      age={age}
      hair={hair}
      desc={desc}
      img={img}
      handler={onClickHandler}
    />
  );
};

export default App;
