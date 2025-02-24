import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Category = {
  id: number;
  name: string;
};

class CategoryRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await databaseClient.query<Rows>("select * from category");

    // Return the array of categories
    return rows as Category[];
  }
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT category.*,
    JSON_ARRAYAGG(JSON_OBJECT("id", program.id, "title", program.title) )as programs
    FROM category
    LEFT JOIN program on program.category_id = category.id
    WHERE category.id= ?
    GROUP BY category.id
    `[id],
    );

    //Return first row
    return rows[0] as Category;
  }
}

export default new CategoryRepository();
