# LOGS REST API

## Descripción

CRUD para el guardado de logs y autenticacion con JWT

### Tecnologias utilizadas
* Express
* MongoDB
* JWT
* Mongoose
* Joi

*************************************************************

## Servicio de autenticación(auth)
Este módulo es el encargado de administrar la autenticación al sistema por medio de tokens(JWT), estos son firmados por el servidor con una secret-key la cual se encuentra como variable de entorno(.env) además de asignarle un tiempo de vida al token. Posteriormente, se solicitará el token en los endpoints que estén protegidos.

### URL:
```
    local : http://127.0.0.1:8080/api/auth
```
### Metodos HTTP disponibles:

```
  * login - /login - POST
```

********************************************************

## Servicio gestion de usuarios(users)
Este módulo es el encargado de administrar la información de cada uno de los usuarios que ingresan al sistema, en este se gestiona el CRUD de los usuarios.  

### URL:
```
  local : http://127.0.0.1:8080/api/user
```
### Metodos HTTP disponibles:

```
   * Obtener todos los usuarios - GET
   * Obtener usuario por ID - GET
   * Crear nuevo usuario - POST - (no protegido)
   * Actualizar usuario - PUT
   * Eliminar usuario - DELETE
```
************************************************************

## Servicio gestion de aplicaciones
Este módulo es el encargado de administrar las aplicaciones.

### URL:
```
    local : http://127.0.0.1:8080/api/apps

```
### Metodos HTTP disponibles:

```
   * Obtener todas las apps - GET
   * Obtener una app por id - GET
   * Crear una nueva app - POST
   * Actualizar una app - PUT
   * Eliminar una app - DELETE
```
**************************************************************

## Servicio gestion de logs
Este módulo es el encargado de administrar los logs de las apps.

### URL:
```
    local : http://127.0.0.1:8080/api/logs

```
### Metodos HTTP disponibles:

```
   * Obtener todas los logs - GET
   * Obtener un log por id - GET
   * Crear un nuevo log - POST
   * Actualizar un log - PUT
   * Eliminar un log - DELETE
```
**************************************************************

## Servidor local

Instalación de dependencias
``` bash
    npm install
```
Crear el archivo .env en en la raiz del proyecto. (El ejemplo se encuentra como .env.example)
``` bash
    /.env
```
Una vez instaladas las dependencias se puede correr el servidor de manera local.
``` bash
    npm run start:dev || npm run start
```

************************
## Nota

### *Enviar token en cada una de las peticiones (POST user no esta protegida para poder registrar usuarios)
