import { Routes, Route, useNavigate } from 'react-router-dom';
import PropertyCard from './components/PropertyCard';
import PropertyDetails from './pages/PropertyDetails';
import './App.css';
import { properties } from './data/properties';

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={
        <div className="app">
          <div className="property-list">
            {properties.map((prop, idx) => (
              <div key={prop.id} onClick={() => navigate(`/property/${prop.id}`)} style={{ cursor: 'pointer' }}>
                <a href={`/property/${prop.id}`} target="_blank" rel="noopener noreferrer">
                  <PropertyCard {...prop} image={prop.images[0]} />
                </a>
              </div>
            ))}
          </div>
        </div>
      } />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
  );
}

export default App;
