import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

class ProgramRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from program");
    return rows as Program[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM program WHERE id = ?",
      [id],
    );
    return rows[0] as Program;
  }

  async update(program: Program) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE program SET title = ? WHERE id = ?",
      [program.title, program.id],
    );
    return result.affectedRows;
  }

  async create(program: Omit<Program, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO program (titlte) VALUES (?)",
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
      ],
    );

    return result.insertId;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM program WHERE id=?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new ProgramRepository();
