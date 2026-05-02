import "../App.css";
import { FaFilePdf } from "react-icons/fa";

const certs = [
  {
    title: "Análisis Exploratorio de Datos en Python",
    fecha: "SENA · Septiembre 2025",
    file: "CERTIFICADO_ANALISIS_DE_DATOS_SENA.pdf",
    className: "CERTIFICADO_ANALISIS_DE_DATOS_SENA",
  },
  {
    title: "Aplicaciones con Interfaz Gráfica en Java",
    fecha: "SENA · Octubre 2025",
    file: "CERTIFICADO_DE_APLICACIONES_CON_INTERFAZ_GRAFICA.pdf",
    className: "CERTIFICADO_DE_APLICACIONES_CON_INTERFAZ_GRAFICA",
  },
  {
    title: "Construcción de Bases de Datos con MySQL",
    fecha: "SENA · Diciembre 2025",
    file: "CONSTRUCCION_DE_BASES_DE_DATOS_CON_MYSQL.pdf",
    className: "CONSTRUCCION_DE_BASES_DE_DATOS_CON_MYSQL",
  },
];

export default function Certificaciones() {
  return (
    <section className="certificaciones" id="certificaciones">
      <div className="certificaciones-inner">

        <div className="cert-header-sec reveal">
          <span className="section-label">Formación</span>
          <h2 className="section-title">Certificaciones</h2>
        </div>

        <div className="cert-grid">
          {certs.map((cert) => (
            <div key={cert.file} className="cert-card reveal">
              <div className="cert-header">
                <FaFilePdf className="icono-pdf" />
                <h3>{cert.title}</h3>
              </div>
              <p className="cert-fecha">{cert.fecha}</p>
              <a href={cert.file} download className={cert.className}>
                Descargar certificado →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}