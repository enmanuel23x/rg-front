# API CubeJs + React => Front-end

#### v-1.0.0

## 1. Introducción.

Este repositorio contiene el frontend de la API correspondiente a las pruebas con reportes,
integrando CubeJs, Express + React.

## 2. Funcionalidad.

Esta aplicación esta diseñada para ser integrada conjuntamente con el Back-end desarrollado en Expressjs.

## 3. Tipos de conexión.

-  El puerto configurado para ejecutar la aplicación es el **8000**.

## 4. Generalidades sobre la implementación.

- Esta aplicación ha sido desarrollada con React.


- La aplicación posee 2 rutas importantes, la /static el cual muestra el reporte requerido y la ruta / la cual muestra 
un entorno para hacer pruebas personalizadas y crear un dashboard personalizado.


## 5. Configuración y Despliegue.

Aspectos a considerar:

- Se describe el proceso de instalación y despliegue para la aplicación.

- Seguirlo paso a paso debería garantizar la correcta instalación y posterior despliegue o puesta en funcionamiento de los servicios.
 
- Cualquier tipo de contingencia o caso atípico que se pudiera presentar durante el despliegue en un ambiente determinado será documentado en esta fase en el punto **5.4 Resolución de problemas**.

### 5.1. Pre-requisitos.

**Se deben tener configurados los siguientes entornos:**

- NodeJS

- El Back-end de la aplicación debe estar previamente configurado y ejecutándose.

### 5.2. Instalación y configuración.

Paso a paso a seguir para la instalación propiamente de la aplicación:

1. Clonar el repositorio con `git`.
2. Acceder a la carpeta donde se haya descargado todo el código fuente del servicio.
3. Ejecutar `npm install` para instalar todas las dependencias necesarias del servicio.

#### Configuraciones en el código *(Solo de ser necesario)*

- Dentro del archivo App.js y el directorio config se encuentran los respectivos archivos de configuración y conexión 
con el Backend.


En App.js se encuentra el siguiente objeto de configuración, el cual debe ser modificado si se cambia el token o en su 
defecto la URL de la API.
```javascript
 const cubejsApi = cubejs({
   transport: new WebSocketTransport({ authorization: CUBEJS_TOKEN, apiUrl: API_URL })
 });
```

### 5.3. Ejecución.


En esta sección se deben considerar los siguientes pasos:

- Producción

1. Inicializa el servidor `npm start`.


### 5.4. Resolución de problemas.


- Token vencido: en este caso verificar que el entorno este no fijado en producción, de ser ese el caso comentar la 
línea de código:


- Puede ocurrir que el acceso a la BD se encuentre denegado, en cuyo caso verificar las credenciales ingresadas y los 
permisos asociados a dicho usuario.

---