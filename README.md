Programas utilizados
(Node.js, npm, MySQL, Postman)

Se trabajo sobre una propuesta de una libreria para construir y probar una REST API 
para la gestión de libros de una biblioteca.
Utilizando el metodo CRUD
getAll: Obtiene todos los libros de la base de datos y los devuelve en formato JSON.
getOne: Obtiene un libro específico por su ID.
add: Agrega un nuevo libro a la base de datos.
delete: Elimina un libro de la base de datos utilizando su ISBN.
update: Actualiza los detalles de un libro existente por su ID.

Instalación
Clonar el repositorio:

git clone https://github.com/ArmandoGonzalez24/ProT4_31209270.git
cd ProT4_31209270
Instalar dependencias:

Ejecuta el siguiente comando para instalar todas las dependencias necesarias del proyecto: npm install / npm run dev 

Configuración
Variables de entorno:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=libros
PORT=3000
