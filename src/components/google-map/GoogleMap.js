import "./GoogleMap.css";

const GoogleMap = () => {
  return (
    <div className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.3409591444592!2d20.462804376579097!3d44.814618076544505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab035f6a6f1%3A0x25efb314771bd03f!2z0JrQvtC90LTQuNC90LAgMjIsINCR0LXQvtCz0YDQsNC0IDExMDAw!5e0!3m2!1ssr!2srs!4v1767866139895!5m2!1ssr!2srs"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
