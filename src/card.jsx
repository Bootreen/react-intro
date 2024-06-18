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
        <div className='name' style={{ background: colors[id] }}>
          <h2>{name}</h2>
          <input
            type='color'
            value={colors[id]}
            id='colorPicker'
            onChange={coloring}
          />
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
        <button onClick={liking}>{locale.like[language]}</button>
      </div>
    </div>
  );
};
