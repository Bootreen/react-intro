import { Fragment, useState } from "react";
import { Card } from "./card";
import { locale } from "./locale";
import { characters } from "./database";
import "./css/style.css";

const App = () => {
  const feedback = characters.map(() => false);
  const colors = characters.map(() => "Black");
  const [id, setId] = useState(0);
  const [language, setLanguage] = useState("en");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLiked, setIsLiked] = useState(feedback);
  const [colorMap, setColorMap] = useState(colors);
  const { name, gender, age, hair, desc, img } = characters[id];

  const onPagingClickHandler = (direction) => {
    if (direction === "left") setId(id > 0 ? id - 1 : characters.length - 1);
    if (direction === "right") setId(id < characters.length - 1 ? id + 1 : 0);
  };

  const onLoginClickHandler = () => setIsLoggedIn(isLoggedIn ? false : true);

  const onLocaleChangeHandler = (lang) => setLanguage(lang);

  const onLikeClickHandler = () =>
    setIsLiked(isLiked.toSpliced(id, 1, !isLiked[id]));

  const onColorPickHandler = (color) =>
    setColorMap(colorMap.toSpliced(id, 1, color));

  return (
    <Fragment>
      <h1>{locale.title[language]}</h1>
      <div className='options'>
        <div className='locale'>
          <label htmlFor='lang'>{locale.lang[language]}</label>
          <select
            id='lang'
            name='locale'
            onChange={(event) => onLocaleChangeHandler(event.target.value)}
          >
            <option value='en'>EN</option>
            <option value='de'>DE</option>
          </select>
        </div>
        <div className='login'>
          <div className='avatar'>
            {isLoggedIn && <img src='./boot-ava.jpg' alt='User avatar' />}
          </div>
          <button onClick={onLoginClickHandler}>
            {isLoggedIn ? locale.logout[language] : locale.login[language]}
          </button>
        </div>
      </div>
      <Card
        id={id}
        name={name}
        gender={gender}
        age={age}
        hair={hair}
        desc={desc}
        img={img}
        language={language}
        paging={onPagingClickHandler}
        liking={onLikeClickHandler}
        coloring={onColorPickHandler}
        feedback={isLiked}
        colors={colorMap}
      />
    </Fragment>
  );
};

export default App;
