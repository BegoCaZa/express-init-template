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

## ACTUALIZAR UN ESTUDIANTE

-Method: PUT
-URL: /api/students/<StudentID>
-Headers: XXXX
-Body: name, surname, phone, email

Response:
-Status: 200
-Body: Un array con el estudiante actualizado

######

## TEACHERS

######

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

## Crear un profesor

-Method: POST
-URL: /api/teachers
-Headers: XXXX
-Body:
