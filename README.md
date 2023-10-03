# Proyecto: starwars_api_microsevices

En este proyecto se realizó un Backend basado en la arquitectura de microservicios. Se encontrarán 5 microservicios distintos los cuales son los siguientes:

- Gateway: Es la conexción, entrada o enlace con los otros microservicios.

- Characters: Proporciona datos de todos los personajes de la saga starwars así como crear y eliminar los personajes que se deseen.

- Films: Proporciona los datos de todas las películas que se realizaron en la saga starwars así como crear y eliminar las películas que se deseen.

- Planets: Proporciona los datos de todos los planetas que se existen en la saga starwars así como crear y eliminar los planetas que se deseen.

Las tecnologías que se utilizaron fueron Express para la creacion y enrutado de la app, MongoDB para el almacenamieto de datos, Docker para la creacion de contenedores e imagenes, Docker-compose para comunicar los contenedores creados y GoogleCloud para el despliegue de la API mediante la creación y utilización de una Maquina Virtual (VM).

**Nota importante:** Una vez clonado el repositorio es necesario que antes de correrlo en la maquina virtual se creen los archivos .env correspondientes para los microservicios siguientes: 
- Para Characters, Films y Planets: URL_"Microservicio"_CONNECTION="http://database:"PuertoDelaBaseDeDatos"/(Character, Film, Planet).
- Para Database: DB_URL="url de la base de datos en MongoDB".
