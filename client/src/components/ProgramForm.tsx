import type { ReactNode } from "react";
import ButtonRetour from "./ButtonRetour";

type ProgramData = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
}

export default function ProgramForm({
  children,
  defaultValue,
  onSubmit,
}: ProgramFormProps) {
  return (
    <>
      <ButtonRetour />
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);

          const title = formData.get("title") as string;
          const synopsis = formData.get("synopsis") as string;
          let poster = formData.get("poster") as string;
          const country = formData.get("country") as string;
          const year = formData.get("year") as string;
          const category_id = formData.get("category_id") as string;

          if (!poster) {
            poster =
              "https://img.freepik.com/vecteurs-premium/vecteur-icone-image-par-defaut-page-image-manquante-pour-conception-site-web-application-mobile-aucune-photo-disponible_87543-11093.jpg";
          }

          onSubmit({
            title,
            synopsis,
            poster,
            country,
            year: Number.parseInt(year),
            category_id: Number.parseInt(category_id),
          });
        }}
      >
        <div className="container-form">
          <div className="InputContainer">
            <input
              placeholder="Titre de la série"
              id="input"
              className="input"
              type="text"
              name="title"
              defaultValue={defaultValue.title}
            />
          </div>
          <div className="InputContainer">
            <input
              placeholder="Synopsis"
              id="input"
              className="input"
              type="text"
              name="synopsis"
              defaultValue={defaultValue.synopsis}
            />
          </div>
          <div className="InputContainer">
            <input
              placeholder="Image URL"
              id="input"
              className="input"
              type="text"
              name="poster"
              defaultValue={defaultValue.poster}
            />
          </div>
          <div className="InputContainer">
            <input
              placeholder="Pays"
              id="input"
              className="input"
              type="text"
              name="country"
              defaultValue={defaultValue.country}
            />
          </div>
          <div className="InputContainer">
            <input
              placeholder="Année"
              id="input"
              className="input"
              type="number"
              name="year"
              defaultValue={defaultValue.year}
            />
          </div>
          <div className="InputContainer">
            <input
              placeholder="ID de la catégorie"
              id="input"
              className="input"
              type="number"
              name="category_id"
              defaultValue={defaultValue.category_id}
            />
          </div>

          <button type="submit" className="button-ajouter">
            {children}
          </button>
        </div>
      </form>
    </>
  );
}
