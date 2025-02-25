import type { ReactNode } from "react";

type ProgramData = {
  title: string;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
}

export default function ProgramForm({
  children,
  defaultValue,
  onSubmit,
}: ProgramFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const title = formData.get("title") as string;

        onSubmit({
          title,
        });
      }}
    >
      <div className="container-form">
        <div className="InputContainer">
          <input
            placeholder="Nouvelle série"
            id="input"
            className="input"
            type="text"
            name="name"
            defaultValue={defaultValue.title}
          />
        </div>

        <button type="submit">{children}</button>
      </div>
    </form>
  );
}
