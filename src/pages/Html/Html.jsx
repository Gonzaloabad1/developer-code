import "./Html.css";

const Html = () => {
  return (
    
    <main className="html">
      <br></br>
      <br></br>
      <h1>Iniciación a HTML👨🏻‍💻</h1>
      <p>HTML es uno de los lenguajes de programación más importantes que se usa en el frontend de un sitio. Su escritura ayuda a dar estructura y organización al contenido de una página web, a través de una acomodación tipo árbol.Se configura por medio de etiquetas o hipertextos que permiten que los sitios web se encuentren en los motores de búsqueda</p>
      <p></p> <p> El navegador web interpretará esa información y es lo que
nosotros veremos en nuestra pantalla.</p>
<br></br>

<h2>Estructura</h2>
<p>Os aconsejamos crearos un carpeta en la que ir
guardando todos los ejemplos de HTML y así podéis encontrar cada uno de ellos en
cualquier momento. La estructura dentro de la carpeta que usaría es:</p>

   <p>Para indicar que se trata de un documento html al principio de nuestro código debemos
hacer uso de la etiqueta.</p>
<br></br>
<img
        src="./Captura.PNG"
        alt="texto alternativo"
        className="medium-image"  // Clase para aplicar estilos
      />
      <br></br>
    <h3>Hypervinculos</h3>
    <p>Los hipervínculos realmente son importantes — estos son los que hacen la Web. Este artículo muestra la sintaxis requerida para hacer un enlace, y explica las mejores prácticas sobre enlaces.</p>
    <img
        src="./Captura2.PNG"
        alt="texto alternativo"
        className="medium-image"  
        title="Ejemplo de enlaces a  varias páginas"
  />
    <h2>Formularios</h2>
    <p>Al igual que un formulario físico, un |form| es un elemento HTML que se encarga de recopilar información para enviarla a otro lugar. Existe una buena posibilidad de que si estás escribiendo en un campo de texto o proporcionando una entrada, el campo en el que estás escribiendo sea parte de un [form!]</p>
    <img
        src="./Captura5.PNG"
        alt="texto alternativo"
        className="medium-image"  
        title="Ejemplo de varios formularios"
  />
    </main>
  );
};

export default Html;