import { useNavigate } from "react-router-dom";
import "./pages.css";
import ProgramForm from "../components/ProgramForm";

export default function ProgramNew() {
  const navigate = useNavigate();

  const newProgram = {
    title: "",
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
          .then((response) => response.json())
          .then((data) => {
            navigate(`/programs/${data.insertId}`);
          });
      }}
    >
      <p>Ajouter</p>
    </ProgramForm>
  );
}
