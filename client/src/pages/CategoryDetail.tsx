import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ButtonRetour from "../components/ButtonRetour";
import CategoryDeleteForm from "./CategoryDeleteForm";

type Category = {
  id: number;
  name: string;
};

export default function CategoryDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState(null as null | Category);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories/${id}`)
      .then((response) => response.json())
      .then((data: Category) => {
        setCategory(data);
      });
  }, [id]);

  return (
    category && (
      <>
        <ButtonRetour />
        <h1 className="selection-h1">Catégorie sélectionnée : </h1>
        <h2 className="selection">{category.name}</h2>
        <div className="selection-choix">
          <Link to={`/categories/${category.id}/edit`}>Modifier ✏️</Link>
          <CategoryDeleteForm id={category.id}>Supprimer ❌</CategoryDeleteForm>
        </div>
      </>
    )
  );
}
