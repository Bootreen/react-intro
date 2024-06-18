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
            <strong>Gender:</strong> {gender[language]}
          </li>
          <li>
            <strong>Age:</strong> {age}
          </li>
          <li>
            <strong>Hair:</strong> {hair[language]}
          </li>
        </ul>
      </div>
      <p className='desc'>{desc[language]}</p>
    </div>
  );
};
