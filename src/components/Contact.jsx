import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { IoCopyOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Contact() {
  const linkedin = "https://www.linkedin.com/in/gonzaloviglioni/";
  const whatsapp = "https://wa.me/+59898602073";
  const webGitHub = "https://github.com/gonza87";
  const email = "gonzalo.viglioni@gmail.com";
  const subject = ""; // Puedes personalizar el asunto del correo si lo deseas
  const body = ""; // Puedes personalizar el cuerpo del correo si lo deseas
  const handleSendEmail = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Abrir el cliente de correo electrónico predeterminado del usuario
    window.open(mailtoLink);
  };

  const handleCopyEmail = async () => {
    try {
      // Utilizar la Clipboard API para copiar el contenido al portapapeles
      await navigator.clipboard.writeText(email);
    } catch (error) {
      console.error("Error al copiar el correo al portapapeles:", error);
    }
  };

  return (
    <>
      <p className="fs-2">Contacto</p>
      <div className="contcamposContactos fs-5">
        <div className="d-flex align-items-baseline">
          <div>
            <MdOutlineEmail className="logoEmail me-2" />
          </div>
          <p>gonzalo.viglioni@gmail.com</p>
          <div className="ms-2">
            <button className="btnSendEmail" onClick={handleSendEmail}>
              <VscSend />
            </button>
            <button className="btnCopyEmail" onClick={handleCopyEmail}>
              <IoCopyOutline />
            </button>
          </div>
        </div>

        <div className="d-flex align-items-baseline">
          <div>
            <Link to={linkedin} style={{ textDecoration: "none" }}>
              <FaLinkedinIn className="logoLinkedin me-2" />
            </Link>
          </div>
          <p>in/gonzaloviglioni/</p>
        </div>

        <div className="d-flex align-items-baseline">
          <div>
            <Link to={whatsapp} style={{ textDecoration: "none" }}>
              <FaWhatsapp className="logoWhatsapp me-2" />
            </Link>
          </div>
          <p>+598 60 20 73</p>
        </div>

        <div className="d-flex align-items-baseline">
          <div>
            <Link to={webGitHub} style={{ textDecoration: "none" }}>
              <FaGithub className="linksCardProyect me-2" />
            </Link>
          </div>
          <p>gonza87</p>
        </div>
      </div>
    </>
  );
}
export default Contact;
