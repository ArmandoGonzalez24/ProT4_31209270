import {pool} from './database.js';
 
class PersonaController{

    async getAll(req, res) {
        const [result] = await pool.query('SELECT * FROM personas');
        res.json(result);
        
    }

    async add(req,res){
        const personas = req.body;
        const [result] = await pool.query (`INSERT INTO Personas(nombre, apellido, dni) VALUES (?,?,?)`,[persona.nombre, persona.apellido, persona.dni]);
        res.json ({"Id insertado":result.insertId});

    }
    async delete (req,res){
        const persona = req.body;
        const [result] = await pool.query (`DELETE FROM Personas WHERE id = (?)`,[persona.id]);
            res.json({"Registros eliminados": result.affectedRows});

    }

    async update (req,res){
    const persona = req.body;
    const [result] = await pool.query(`UPDATE Personas SET nombre=(?), apellido=(?), dni=(?) WHERE id=(?)`,[persona.nombre, persona.apellido, persona.dni, persona.id]);
    res.json ({"Registros actualizados":result.changedRows});
}
}

export const persona = new PersonaController();


