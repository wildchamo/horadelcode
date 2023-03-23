import { LinkGDSC } from "./linkgdsc";
import "./styles.css";
import logo from "./logogdsc.png";

function App() {
  const Links = [
    {
      name: "¿Eres estudiante de la UAO? \b ¡Haz parte de la comunidad en WhatsApp!",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScleWCJgiAPrPpBLHodka9vnKJPBjcF9wDKCdtDHObGTKdLrg/viewform",
    },
    {
      name: "¿Quieres dar una charla? ¡Unete a nuestro Call for Speakers! ",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSe9rWf2qUPt0x9mKQG7fAeBtH20N9aspLbWuj8heRy59MiX9g/viewform",
    },
    {
      name: "¿Quieres asistir a nuestros clubs de estudio? ¡Revisa el horario acá!",
      url: "https://www.notion.so/Horarios-Club-de-Estudio-5abe9d4334544e55abe9449db800b721",
    },
    {
      name: "¿Tienes alguna sugerencia? Déjala aquí",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdqSF95CLcRNYh1hZG4eAfeci5eooKXO9IRDFDFPzLF6aiu-A/viewform",
    }
  ];

  return (
    <div>
      <div className="container">
        <img src={logo} />
        <h1>✨GDSC UAO✨</h1>
        <p>
          Bienvenido a la familia del Google Developers Students Club de la UAO
        </p>
        <div>
          {Links.map((link) => (
            <LinkGDSC key={link.name} name={link.name} url={link.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
