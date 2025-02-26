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
      {/* <div className="button-add">
        <Link to={"/programs/new"}>Ajouter une nouvelle série</Link>
      </div> */}
      <h1>Liste des séries</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <Link to={`/programs/${program.id}`}>
              {program.title} - {program.country} - {program.synopsis}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
