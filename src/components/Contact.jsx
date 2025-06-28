// ✅ src/components/Contact.jsx
export default function Contact() {
  return (
    <div className="container-fluid py-4">
      <div className="container wide-container">
        <h2 className="mb-4">Contact Us</h2>
        <p><strong>Location:</strong> Bhagat Singh Chowk, Lalbagh, Darbhanga</p>
        <p><strong>Phone/WhatsApp:</strong> <a href="https://wa.me/6207871803" target="_blank" rel="noopener noreferrer">6207871803</a></p>

        <div className="mt-4">
          <iframe
            title="Laxmi Printing Press Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3120679984253!2d85.90260127453366!3d26.153782877110483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb82785b3b2c7%3A0xa8bbfd2e2804dc93!2sBhagat%20Singh%20Chowk%2C%20Darbhanga%2C%20Bihar%20846004!5e0!3m2!1sen!2sin!4v1719393650576!5m2!1sen!2sin"
            width="100%"
            height="350"
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
