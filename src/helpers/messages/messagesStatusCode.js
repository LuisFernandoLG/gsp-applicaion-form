import partyImage from "../../img/party.svg";
import errorImage from "../../img/notFound.svg";

const messagesStatusCode = {
  201: {
    title: "Felicidades",
    content:
      "Tu solicitud ha sido recibida, ahora solo queda esperar los resultados que se publicarán en nuestra",
    img: partyImage,
  },
  99999: {
    title: "¡Oh no!",
    content: "Algo salió mal, intentalo nuevamente dentro de unos minutos.",
    img: errorImage,
  },
};

export default messagesStatusCode;
