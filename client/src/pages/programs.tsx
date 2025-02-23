import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
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
      <p>coucou</p>
      {program.length > 0 ? (
        <>
          <ul>
            {" "}
            Mon programme
            {program.map((item) => (
              <li key={item.id}>
                {item.title} - {item.country}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Chargement...⏳</p>
      )}
    </>
  );
}
