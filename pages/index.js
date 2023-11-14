import { useState, useEffect } from 'react';

export default function Home() {
  const [imageUrl, setImageUrl] = useState(null);
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('/api/v1/generate');
        const data = await response.json();
        setImageUrl(data.URL);
        setAnimal(data.animal);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, []); // Certifique-se de que a dependência está vazia para que o useEffect seja executado apenas uma vez

  if (!imageUrl) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <img src={imageUrl} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
      <p style={{
        position: 'absolute',
        bottom: '0',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: '100vw',
        textAlign: 'center',
        textShadow: '2px 2px 4px #000000',
        fontFamily: 'Arial'
      }}>{animal}</p>
    </div>
  );
}

function LoadingSpinner() {
  return <div>Loading...</div>;
}
