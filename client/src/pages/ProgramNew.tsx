import { useNavigate } from "react-router-dom";
import "./pages.css";
import ProgramForm from "../components/ProgramForm";

export default function ProgramNew() {
  const navigate = useNavigate();

  const newProgram = {
    title: "",
    synopsis: "",
    poster:
      "https://img.freepik.com/vecteurs-premium/vecteur-icone-image-par-defaut-page-image-manquante-pour-conception-site-web-application-mobile-aucune-photo-disponible_87543-11093.jpg",
    country: "",
    year: 0,
    category_id: 0,
  };

  return (
    <ProgramForm
      defaultValue={newProgram}
      onSubmit={(programData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/programs`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(programData),
        })
          .then((response) => {
            if (!response.ok) {
              // Si la réponse n'est pas ok, on génère une erreur
              throw new Error(`Erreur HTTP ${response.status}`);
            }
            return response.json(); // Si ok, on parse le JSON
          })
          .then(() => {
            navigate("/programs");
          })
          .catch((error) => {
            console.error("Erreur lors de la requête :", error); // Affiche l'erreur si la requête échoue
          });
      }}
    >
      <p>Ajouter</p>
    </ProgramForm>
  );
}
