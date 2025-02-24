import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};
export default function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState(null as null | Category);

  return (
    // category && (
    // <CategoryForm
    //   defaultValue={category}
    //   onSubmit={(categoryData) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    }).then((response) => {
      if (response.status === 204) {
        navigate(`/categories/${id}`);
      }
    })
  );
  //   }}>
  //     Modifier
  //   </CategoryForm>
}
