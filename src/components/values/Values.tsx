import { iconsAbout } from '../../data';
import './values.scss';

function Values() {
  return (
    <div className="values-icon">
      {iconsAbout.map((icon) => (
        <div key={icon.id}>
          <img src={icon.image} alt={icon.name} />
        </div>
      ))}
    </div>
  );
}

export default Values;
