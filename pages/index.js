import { useState, useEffect } from 'react';

export default function Home() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('/api/v1/generate');
        const data = await response.json();
        setImageUrl(data.URL);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, []); // Certifique-se de que a dependência está vazia para que o useEffect seja executado apenas uma vez

  console.log("🚀 ~ file: index.js:21 ~ Home ~ imageUrl:", imageUrl);
  if (!imageUrl) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <img src={imageUrl} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
    </div>
  );
}

function LoadingSpinner() {
  return <div>Loading...</div>;
}
