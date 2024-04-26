# Tamar

Este proyecto está creado con NextJs 14, utilizando su feature de [App Router](https://nextjs.org/docs/app). La UI fue creada utilizando Material UI.

Con respecto al servicio de datos, se utiliza **[Weather-Api](https://rapidapi.com/oktamovshohjahon/api/weather-api138/)** de RapidApi. Es muy básica (solo permite buscar por nombre de ciudad), pero es 100% gratuita y permite varias request por minuto, no tiene planes pagos.

Dato: El nombre "Tamar" está basado en la diosa del clima de Georgia. [Más info](https://es.wikipedia.org/wiki/Tamara_de_Georgia).

## Demo deployada de Vercel

https://tamar-six.vercel.app/

## Pasos para iniciar el proyecto localmente

### Antes de iniciar

1. Crearse una cuenta en RapidApi: https://rapidapi.com/auth/sign-up?referral=/hub
2. Ingresar a Weather-Api: https://rapidapi.com/oktamovshohjahon/api/weather-api138
3. De la sección de **Code Snippets**, copiar el valor del encabezado: `X-RapidAPI-Key` y guardarlo en un lugar seguro, esta será tu `api-key`.

### Clonar el repositorio

https://github.com/alantoledo007/tamar

```bash
git clone https://github.com/alantoledo007/tamar.git
```

### .env.local

1. dentro de la raiz del proyecto, crear el archivo `.env.local`
2. Agregar la variable de entorno como en este ejemplo:

```properties
WEATHER_API_KEY="api-key"
```

_Recuerda reemplazar `api-key` por tu propia clave obtenida del encabezado `X-RapidAPI-Key`._

### Levantar proyecto

1. Verifica tener instalado Node (v18.18.0): https://nodejs.org/en/download
2. Verifica tener yarn instalado (v1.22.22): https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

#### instalar dependencias

```bash
yarn
```

#### Correr servidor local

```bash
yarn dev
```

Abir [http://localhost:3000](http://localhost:3000) en tu navegador.
