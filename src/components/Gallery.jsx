// src/components/Gallery.jsx
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';

export default function Gallery() {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Gallery</h2>
      <div className="row g-3">
        <div className="col-md-6">
          <img src={banner1} alt="Banner 1" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <img src={banner2} alt="Banner 2" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}