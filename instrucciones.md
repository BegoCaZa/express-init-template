## RECUPERAR TODOS LOS ESTUDIANTES

-Methor: GET
-URL: /api/students
-Header: XXXX
-Body: XXXX

## CREAR UN ESTUDIANTE

-Method: POST
-url: /api/students
-Headers: XXXX
-Body: name, surname, phone, email

Response:
-Status: 201
-Body: El objeto con el nuevo estudiante creado

## TEACHERS

## Recuperar los datos de todos los profesores

-Method: GET
-URL: /api/teachers
-Headers: XXXX
-Body: XXXX

Response:
-Status: 200
-Body: Un array con todos los profesores

## Recuperar un profesor a partir de ID

-Method: GET
-URL: /api/teachers/{IDPROFESOR}
-Headers: XXXX
-Body: XXXX

Response:
-Status: 200
-Body: El objeto con el profesor buscado
