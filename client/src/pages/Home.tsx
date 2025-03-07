import { Link } from "react-router-dom";
import biblio from "../assets/images/biblio.avif";
export default function Home() {
  return (
    <div className="home">
      <h1>Découvrez et partagez vos séries préférées !</h1>
      <i>
        Bienvenue sur Wild Series, la plateforme idéale pour tous les passionnés
        de séries.
      </i>
      <p>
        <b>Ajoutez</b>, <b>modifiez</b>, <b>supprimez</b> facilement vos
        <Link to="/programs" className="link-detail">
          {" "}
          séries préférées
        </Link>
        , retrouvez-les en un clin d'œil dans votre collection. Rejoignez-nous
        et construisez votre bibliothèque de séries dès aujourd’hui ! 🎬✨
      </p>
      <img src={biblio} alt="" />
    </div>
  );
}
