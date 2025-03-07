import type { ReactNode } from "react";
import ButtonRetour from "./ButtonRetour";

type CategoryData = {
  name: string;
};

interface CategoryFormProps {
  children: ReactNode;
  defaultValue: CategoryData;
  onSubmit: (category: CategoryData) => void;
}

function CategoryForm({ children, defaultValue, onSubmit }: CategoryFormProps) {
  return (
    <>
      <ButtonRetour />
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);

          const name = formData.get("name") as string;

          onSubmit({
            name,
          });
        }}
      >
        <div className="container-form">
          <div className="InputContainer">
            <input
              placeholder="Nouvelle catégorie"
              id="input"
              className="input"
              type="text"
              name="name"
              defaultValue={defaultValue.name}
            />
          </div>

          <button type="submit">{children}</button>
        </div>
      </form>
    </>
  );
}

export default CategoryForm;
