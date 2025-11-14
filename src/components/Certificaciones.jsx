import "../App.css";
import { FaFilePdf } from "react-icons/fa";

export default function Certificaciones() {
  return (
    <section className="certificaciones">
      <h2>Certificaciones</h2>

      <div className="cert-grid">

  <div className="cert-card">
    <div className="cert-header">
      <FaFilePdf className="icono-pdf" />
      <h3>Análisis Exploratorio de Datos en Python</h3>
    </div>
    <p>SENA – Septiembre 2025</p>
    <a href="/certificados/CERTIFICADO_ANALISIS_DE_DATOS_SENA.pdf" download>
      📄 Descargar certificado
    </a>
  </div>

  <div className="cert-card">
    <div className="cert-header">
      <FaFilePdf className="icono-pdf" />
      <h3>Aplicaciones con Interfaz Gráfica en Java</h3>
    </div>
    <p>SENA – Octubre 2025</p>
    <a href="/certificados/CERTIFICADO_DE_APLICACIONES_CON_INTERFAZ_GRAFICA.pdf" download>
      📄 Descargar certificado
    </a>
  </div>

</div>

    </section>
  );
}
