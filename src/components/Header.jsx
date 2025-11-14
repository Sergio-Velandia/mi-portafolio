import "../App.css"


export default function Header() {
  return (
    <header>
      <h1>Sergio Andrés Ramírez Velandia</h1>
      <p id="tagline">Desarrollador de Software en formación | Fullstack & Análisis de Datos</p>
      <div>
        <a href="CV.pdf" download className="cv">
          Descargar CV
        </a>
        <a
          href="https://github.com/Sergio-Velandia"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          Ver GitHub
        </a>
      </div>



    </header>
  )
}
