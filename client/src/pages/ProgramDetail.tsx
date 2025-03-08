import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ButtonRetour from "../components/ButtonRetour";
import ProgramDeleteForm from "./ProgramDeleteForm";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

export default function ProgramDetail() {
  const { id } = useParams();
  const [program, setProgram] = useState(null as null | Program);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: Program) => {
        setProgram(data);
      });
  }, [id]);

  return (
    program && (
      <>
        <ButtonRetour />
        <div className="container-detail">
          <div className="container-detail-1">
            <img src={program.poster} alt="poster" />
          </div>
          <div className="container-detail-2">
            <h1>{program.title}</h1>
            <p>{program.synopsis}</p>
            <p>{program.country}</p>
            <p>{program.year}</p>
          </div>
        </div>
        <div className="selection-choix">
          <Link to={`/programs/${program.id}/edit`}>Modifier ✏️</Link>
          <ProgramDeleteForm id={program.id}>Supprimer ❌</ProgramDeleteForm>
        </div>
      </>
    )
  );
}
