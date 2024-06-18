import { locale } from "./locale";

export const Card = ({
  name,
  gender,
  age,
  hair,
  desc,
  img,
  language,
  handler,
}) => {
  return (
    <div className='card'>
      <div className='header'>
        <button onClick={() => handler("left")}>◄</button>
        <h1>{name}</h1>
        <button onClick={() => handler("right")}>►</button>
      </div>
      <div className='info'>
        <div className='imgCont'>
          <img src={img} alt={name} />
        </div>
        <ul>
          <li>
            <strong>{locale.gender[language]}</strong> {gender[language]}
          </li>
          <li>
            <strong>{locale.age[language]}</strong> {age}
          </li>
          <li>
            <strong>{locale.hair[language]}</strong> {hair[language]}
          </li>
        </ul>
      </div>
      <p className='desc'>{desc[language]}</p>
    </div>
  );
};
