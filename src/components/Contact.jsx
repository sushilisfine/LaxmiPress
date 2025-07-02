// ✅ src/components/Contact.jsx
export default function Contact() {
  return (
    <div className="container-fluid py-4">
      <div className="container wide-container">
        <h2 className="mb-4">Contact Us</h2>
        <p>
          <strong>Location:</strong> Bhagat Singh Chowk, Lalbagh, Darbhanga
        </p>
        <p>
          <strong>Phone/WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/6207871803"
            target="_blank"
            rel="noopener noreferrer"
          >
            6207871803
          </a>
        </p>

        <div className="mt-4">
          <iframe
            title="Laxmi Printing Press Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d895.3237194080549!2d85.8929377189102!3d26.15452436970587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb9853d0b1d5d%3A0x2048cb798527bcb4!2sLaxmi%20Printing%20Press!5e0!3m2!1sen!2sin!4v1751476903597!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
