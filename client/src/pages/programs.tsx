import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
}

export default function Programs() {
  const [program, setProgram] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setProgram(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <>
      {program.length > 0 ? (
        <>
          <h1>Mon programme</h1>
          {program.map((item) => (
            <li key={item.id}>
              {item.title} - {item.country}
            </li>
          ))}
        </>
      ) : (
        <p>Chargement...⏳</p>
      )}
    </>
  );
}
