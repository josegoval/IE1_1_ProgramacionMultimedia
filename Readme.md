# Aplicación de React Native para Programación Multimedia 2ºDAM

Se desarrollará una aplicación de 3 ventanas para la asginatura Programación Multimedia de 2ºDAM.

## Autores

- Alcántara Montero, Miguel (@miguelalmont)[https://github.com/miguelalmont]
- Gómez Martínez, José Manuel (@josegoval)[https://github.com/josegova]
- Ruso Álvarez, José Francisco (@JoserusoDAM)[https://github.com/JoserusoDAM]


## Instalación
Tras hacer clone del proyecto, utilizar `yarn install` para instalar las dependencias. Y por último `yarn android` para ponerlo a funcionar. <br/>
Si hubiese algún problema buscando el emulador abrir 2 consolas y haced primero en una `yarn start` y en la otra, después de haberse iniciado `yarn android`. <br/>

Recordad colocarse en vuesta branch antes de trabajar y hacer el push, así como hacer pull siempre antes de comenzar.

## Objetivos

Se crearán 3 pantallas navegables, una asignada para cada autor del proyecto:

### FINDER - José

Constará de un input que filtrará los resultados (un array predeterminado para evitar que se caigan APIRest) según el usuario vaya escribiendo en él. <br/>
En la parte superior se mostrará el input, y justo debajo de esta todos los objetos de la lista filtrandose en tiempo real y con
separadores.

### TODO List - Ruso

Constará de una simple TODO list que deje añadir, eliminar y completar las tareas introducidas. <br/>
Lógicamente, tenndrá un input alfanumérico, y una lista a mostrar (el que los TODOs completados se borren o guarden
queda totalmente a su criterio.)

### Minigame - Miguel

Constará de un minijuego que tiene como objetivo encontrar un número aleatorio. <br/>
La pantalla monstrará un mensaje de feedback "fallaste || acertaste", junto con un input que permitirá introducir
solo valores numéricos al usuario.

## Licencia

(￣ ￣|||) MIT (」° ロ °)」
