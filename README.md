#Evalución Final Módulo-3 -Rick y Morty-

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

Partes del ejercicio:

1. Listado de personajes
   En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty. Para eso, vamos
   a utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve
   informaci n sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:
   Foto
   Nombre
   Especie
2. Filtrado de personajes
   Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos
   por nombre. Para eso, a adimos un input a la interfaz, de forma que al ir escribiendo un nombre queden
   en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al
   escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.
3. Componentes del listado de personajes
   El listado debe tener los siguientes componentes como m nimo:
   Componente para el filtro de nombre.
   Componente para el listado.
   Componente para la tarjeta de cada personaje del listado.
   Componente para el detalle de cada personaje.
4. Detalle de personajes
   Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información
   aparecer  a pantalla completa. Para hacer esto usaremos rutas y React router. En la pantalla de detalle
   aparecer  adem s de la foto, nombre y especie, el planeta de origen, el número de episodios en los que
   aparece y si est  vivo o muerto.
5. Detallitos de calidad
   Como nos gusta cuidar la sem ntica, el campo de texto debe estar recubierto por una etiqueta
   <form />.
   Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie
   la ruta sin querer.
   Si se busca por un texto por ejemplo "XXX" y no hay ning n personaje que coincida con dicho texto
   se debe mostrar un mensaje del tipo "No hay ning n personaje que coincida con la palabra XXX".
   El filtro debe filtrar independientemente de que la usuaria introduzca el texto en may suclas o
   minísculas.
   Al entrar en el detalle de un personaje y a continuaci n pulsar atrás, el campo de texto debe mostrar
   el texto que ten a anteriormente.
