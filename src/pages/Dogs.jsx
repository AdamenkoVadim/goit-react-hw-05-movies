import { Link } from 'react-router-dom';
const Dogs = () => {
  return (
    <div>
      {['dog1', 'dog2', 'dog3', 'dog4', 'dog5'].map(dog => {
        return (
          <Link key={dog} to={`${dog}`}>
            {dog}
          </Link>
        );
      })}
    </div>
  );
};
export default Dogs;
