import { Button } from "./Button";

export const Card = ({ title, caption }) => (
  <div className='card'>
    <h1>{title}</h1>
    <Button caption={caption} />
  </div>
);
