import { pool } from './database.js';

class LibrosController {

    async getAll(req, res) {
        try {
            const [result] = await pool.query('SELECT * FROM libros');
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los libros' });
        }
    }
  // Obtener un libro por su ID
  async getOne(req, res) {
    const { id } = req.params;
    try {
      const [result] = await pool.query("SELECT * FROM libros WHERE id = ?", [
        id,
      ]);

      if (result.length === 0) {
        // Si no se encuentra el libro, devolver un error 404
        res.status(404).json({ message: "Libro no encontrado" });
      } else {
        res.json(result[0]);
      }
    } catch (error) {
      // Manejar cualquier error que ocurra durante la consulta
      res.status(500).json({ message: "Error al obtener el libro", error });
    }
  }

// Agregar un nuevo libro
async add(req, res) {
  const libro = req.body;
  try {
    // Validar que solo se envíen atributos válidos
    if (
      !libro.nombre ||
      !libro.autor ||
      !libro.categoria ||
      !libro["año-publicacion"] ||
      !libro.isbn
    ) {
      return res.status(400).json({ message: "Faltan atributos requeridos" });
    }

    const [result] = await pool.query(
      "INSERT INTO libros (nombre, autor, categoria, `año-publicacion`, isbn) VALUES (?, ?, ?, ?, ?)",
      [
        libro.nombre,
        libro.autor,
        libro.categoria,
        libro["año-publicacion"],
        libro.isbn,
      ]
    );
    res.json({ "Id insertado": result.insertId });
  } catch (error) {
    // Manejar cualquier error que ocurra durante la inserción
    res.status(500).json({ message: "Error al agregar el libro", error });
  }
}
// Borrar un libro 

async delete(req, res) {
  try {
      const { isbn } = req.body;
      const [result] = await pool.query(
          `DELETE FROM libros WHERE isbn = ?`,
          [isbn]
      );
      res.json({ "Registros eliminados": result.affectedRows });
  } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el libro' });
  }
}
// Actualizar un libro existente

async update(req, res) {
  try {
      const libros = req.body;
      const [result] = await pool.query(
          `UPDATE libros SET nombre = ?, autor = ?,categoria = ?, isbn = ? WHERE id = ?`,
          [libros.nombre, libros.autor, libros.categoria, libros.isbn, libros.id]
      );
      res.json({ "Registros actualizados": result.changedRows });
  } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el libro' });
  }
}
}
const libros = new LibrosController();
export default libros;
