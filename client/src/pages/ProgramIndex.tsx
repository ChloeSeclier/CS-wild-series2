import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export default function ProgramIndex() {
  const [programs, setPrograms] = useState([] as Program[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data: Program[]) => {
        setPrograms(data);
      })
      .catch((error) =>
        console.error("Erreur de chargement ProgramIndex:", error),
      );
  }, []);

  return (
    <>
      <div className="button-add">
        <Link to={"/programs/new"}>Ajouter une nouvelle série 🎬</Link>
      </div>
      <h1>Vos séries</h1>
      <ul className="program-index">
        {programs.map((program) => (
          <div className="container-li" key={program.id}>
            <li className="box-li">
              <Link
                to={`/programs/${program.id}`}
                title="Cliquez pour voir plus"
              >
                <span />
                <span />
                <span />
                <span />

                <h3>{program.title}</h3>
                <p>
                  <b className="underline">Origine :</b> {program.country}
                </p>
                <p>
                  <b className="underline">Année :</b> {program.year}
                </p>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
