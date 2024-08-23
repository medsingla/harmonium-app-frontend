import './App.css';
import { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import harmoniumImage2 from './assets/harmonium-3.jpeg'
import harmoniumImage from './assets/harmonium-1.jpg';
import Create from './pages/Create';

// HarmoniumImage component

const HarmoniumImage = ({ harmoniumImage, title, subtitle, link}) => {

  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const img = new Image();
    img.src = harmoniumImage;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const screenHeight = window.innerHeight;
      const calculatedHeight = screenHeight * 0.5;
      const calculatedWidth = screenHeight;
      setImageSize({ width: calculatedWidth, height: calculatedHeight*0.66 });
    };
  }, []);

  return (
    <Link to={link} className="block">
      <div className="relative rounded-lg shadow-lg"
        style={{
          width: `${imageSize.width}px`,
          height: `${imageSize.height}px`,
        }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg blur-xs"
          style={{
            backgroundImage: `url(${harmoniumImage})`,
          }}>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-white text-7xl font-bold">
            {title}
          </div>
          <div className="text-slate-300 text-small">
            {subtitle}
          </div>
        </div>
      </div>
    </Link>
  );

};

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#1B1B1B' }}>
      <div className="space-y-8 text-center">
        <HarmoniumImage
          harmoniumImage = {harmoniumImage}
          title="Create"
          subtitle="New chords"
          link="/create"
          />
        <HarmoniumImage
          harmoniumImage = {harmoniumImage2}
          title="Practice"
          subtitle="Existing chords"
          link="/create"
          />
      </div>
    </div>
  );
};
  
  function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    );
  };

export default App;
