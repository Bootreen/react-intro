import { locale } from "./locale";

export const Card = ({
  id,
  name,
  gender,
  age,
  hair,
  desc,
  img,
  language,
  paging,
  liking,
  coloring,
  feedback,
  colors,
}) => {
  return (
    <div className='card'>
      <div className='header'>
        <button onClick={() => paging("left")}>◄</button>
        <div className={`name ${colors[id]}`}>
          <h1>{name}</h1>
        </div>
        <button onClick={() => paging("right")}>►</button>
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
      <div className='feedback'>
        <div className='like'>
          {feedback[id] && <img src='./like.png' alt='"like" icon' />}
        </div>
        <select
          id='color'
          name='color'
          onChange={(event) => coloring(event.target.value)}
        >
          <option value='Black'>Black</option>
          <option value='DimGray'>DimGray</option>
          <option value='SlateGray'>SlateGray</option>
          <option value='DarkRed'>DarkRed</option>
          <option value='Sienna'>Sienna</option>
          <option value='Olive'>Olive</option>
          <option value='DarkGreen'>DarkGreen</option>
          <option value='Teal'>Teal</option>
          <option value='Indigo'>Indigo</option>
        </select>
        <button onClick={liking}>{locale.like[language]}</button>
      </div>
    </div>
  );
};
