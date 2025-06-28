// src/components/Home.jsx
import welcome from "../assets/welcome.jpg";

export default function Home() {
  return (
    <div className="container text-center py-4">
      <img
        src={welcome}
        alt="Welcome"
        className="img-fluid rounded mb-3 welcome-img"
      />
      <h2 className="mb-3">Fast & Reliable Printing Services in Darbhanga</h2>
      <p>Located at Bhagat Singh Chowk, Lalbagh, Darbhanga</p>
      <div className="alert alert-info mt-4" role="alert">
        <strong>Looking for creative designs?</strong> With 6+ years of
        experience and 250+ ready-made templates, I design posters, social media
        ads, pamphlets & more! Contact now for fast & professional service. 📲
        6207871803
      </div>
      <a
        href="https://wa.me/6207871803?text=Hi%20Laxmi%20Printing%20Press%2C%20I%20would%20like%20to%20place%20a%20printing%20order."
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp mt-3"
      >
        📱 Order on WhatsApp
      </a>
    </div>
  );
}
