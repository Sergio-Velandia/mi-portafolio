import "../App.css";
import { FaFilePdf } from "react-icons/fa";

export default function Certificaciones() {
  return (
    <section className="certificaciones">
      <h2>Certificaciones</h2>

      {/* Tarjetas individuales */}
      <div className="cert-grid">

        <div className="cert-card">
          <FaFilePdf className="icono-pdf" />
          <h3>Análisis Exploratorio de Datos en Python</h3>
          <p>SENA – Septiembre 2025</p>
          <a href="/certificados/python.pdf" download>
            📄 Descargar certificado
          </a>
        </div>

        <div className="cert-card">
          <FaFilePdf className="icono-pdf" />
          <h3>Aplicaciones con Interfaz Gráfica en Java</h3>
          <p>SENA – Octubre 2025</p>
          <a href="/certificados/java.pdf" download>
            📄 Descargar certificado
          </a>
        </div>

      </div>

      {/* BOTONES GRANDES DE DESCARGA */}
      <div className="cert-botones">
        <h3>Descargar Certificados</h3>

        <a href="/certificados/python.pdf" download className="cert-btn">
          📄 Descargar Certificado Python
        </a>

        <a href="/certificados/java.pdf" download className="cert-btn">
          📄 Descargar Certificado Java
        </a>
      </div>
    </section>
  );
}
