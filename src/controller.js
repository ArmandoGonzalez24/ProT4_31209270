import {pool} from './database.js';
 
class PersonaController{

    async getAll(req, res) {
        const [result] = await pool.query('SELECT * FROM personas');
        res.json(result);
        
    }

    async add(req,res){
        const personas = req.body;
        const [result] = await pool.query (`INSERT INTO Persona(nombre, apellido, dni) VALUES (?,?,?)`,[persona.nombre, persona.apellido, persona.dni]);
        res.json ({"Id insertado":result.insertId});

    }
}

export const persona = new PersonaController();


