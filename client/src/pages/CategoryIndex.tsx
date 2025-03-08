import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

export default function CategoryIndex() {
  const [categories, setCategories] = useState([] as Category[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories`)
      .then((response) => response.json())
      .then((data: Category[]) => {
        setCategories(data);
      });
  }, []);

  return (
    <>
      <h1>Les catégories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`} title="Modifier">
              ✏️ {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="button-add">
        <Link to={"/categories/new"}>Ajouter une nouvelle catégorie ✨</Link>
      </div>
    </>
  );
}
