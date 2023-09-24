import { editions } from '../../data';
import './edition.scss';

const Edition = () => {
  return (
    <div className="edition">
      {editions.map((edition) => (
        <div key={edition.id}>
          <h1>{edition.name}</h1>
          <img src={edition.image} alt={edition.name} />
        </div>
      ))}
    </div>
  );
};

export default Edition;
