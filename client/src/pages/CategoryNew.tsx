import { useNavigate } from "react-router-dom";

export default function CategoryNew() {
  const navigate = useNavigate();

  // const newCategory={ name:"",};
  const categoryData = "";

  return (
    // <CategoryForm
    // defaultValue={newCategory}
    // onSubmit={(categoryData) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate(`/categories/${data.insertId}`);
      })
    //     }}
    //     >
    //       Ajouter
    //     </CategoryForm>
    //   );
    // }
  );
}
