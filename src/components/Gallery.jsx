const { useParams } = require('react-router-dom');

export const Gallery = () => {
  const { dogId } = useParams();
  return <div>Image Gallery: {dogId}</div>;
};
