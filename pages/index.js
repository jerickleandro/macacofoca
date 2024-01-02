import { useState, useEffect } from 'react';

export default function Home() {
  const [imageUrl, setImageUrl] = useState(null);
  const [animal, setAnimal] = useState(null);

  const generateNewImage = async () => {
    try {
      const response = await fetch('/api/v1/generate');
      const data = await response.json();
      setImageUrl(data.URL);
      setAnimal(data.animal);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    generateNewImage();
  }, []);

  if (!imageUrl) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <img src={imageUrl} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
      <p style={{
        position: 'absolute',
        bottom: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: '5vw',
        textAlign: 'center',
        textShadow: '2px 2px 4px #000000',
        fontFamily: 'Arial',
        width: '100%',
        maxWidth: '100vw',
        fontWeight: 'bold'
      }}>{animal}</p>
      <button
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          backgroundColor: 'purple',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer'
        }}
        onClick={generateNewImage}
      >
        ↻
      </button>
    </div>
  );
}

function LoadingSpinner() {
  return <div>Loading...</div>;
}
