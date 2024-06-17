export const Card = ({ name, gender, age, hair, desc, img, handler }) => {
  const handlerLeft = () => handler("left");
  const handlerRight = () => handler("right");
  return (
    <div className='card'>
      <div className='header'>
        <button onClick={handlerLeft}>◄</button>
        <h1>{name}</h1>
        <button onClick={handlerRight}>►</button>
      </div>
      <div className='info'>
        <img src={img} alt={name} />
        <ul>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>Age:</strong> {age}
          </li>
          <li>
            <strong>Hair:</strong> {hair}
          </li>
        </ul>
      </div>
      <p className='desc'>{desc}</p>
    </div>
  );
};
