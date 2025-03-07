import biblio from "../assets/images/biblio.avif";
export default function Home() {
  return (
    <div className="home">
      <h1>Découvrez et partagez vos séries préférées !</h1>
      <p>
        Bienvenue sur Wild Series, la plateforme idéale pour tous les passionnés
        de séries. <b>Ajoutez</b>, <b>modifiez</b>, <b>supprimez</b> facilement
        vos séries préférées, retrouvez-les en un clin d'œil dans votre
        collection. Rejoignez-nous et construisez votre bibliothèque de séries
        dès aujourd’hui ! 🎬✨
      </p>
      <img src={biblio} alt="" />
    </div>
  );
}
