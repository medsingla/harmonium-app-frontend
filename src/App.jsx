import './App.css';
import { useState, useEffect } from 'react';
import { User, MessageCircle } from 'lucide-react';
import harmoniumImage from './assets/harmonium-1.jpg';

// HarmoniumImage component
const HarmoniumImage1 = () => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = harmoniumImage;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const screenHeight = window.innerHeight;
      const calculatedHeight = screenHeight * 0.3;
      const calculatedWidth = calculatedHeight * aspectRatio;
      setImageSize({ width: calculatedWidth, height: calculatedHeight });
    };
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat rounded-lg shadow-lg blur-xs"
      style={{
        backgroundImage: `url(${harmoniumImage})`,
        width: `${imageSize.width}px`,
        height: `${imageSize.height}px`,
      }}
    >
      {/* Add any content inside the view if needed */}
    </div>
  );
};

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#1B1B1B' }}>
      <div className="space-y-8 text-center">
        <HarmoniumImage1 />
      </div>
    </div>
  );
}

export default App;
