import "../App.css";
import { FaFilePdf } from "react-icons/fa";

const certs = [
  {
    title: "IBM Full-Stack JavaScript Developer",
    fecha: "IBM · Agosto 2026",
    file: "IBM Full-Stack JavaScript Developer.pdf",
    className: "CERT_IBM_FULLSTACK",
  },
  {
    title: "Google AI Essentials Certificate",
    fecha: "Google · Agosto 2026",
    file: "Google AI Essentials Certificate.pdf",
    className: "CERT_GOOGLE_AI",
  },
  {
    title: "AI Automation Engineer",
    fecha: "Agosto 2026",
    file: "AI Automation Engineer.pdf",
    className: "CERT_AI_AUTOMATION",
  },
  {
    title: "JavaScript Programming with React, Node",
    fecha: "Agosto 2026",
    file: "JavaScript Programming with React, Node & MongoDB.pdf",
    className: "CERT_JS_REACT_NODE",
  },
  {
    title: "Apply API Testing & Automation with Postman",
    fecha: "Agosto 2026",
    file: "Apply API Testing & Automation with Postman.pdf",
    className: "CERT_POSTMAN_TESTING",
  },
  {
    title: "Apply Postman APIs for Customer Data",
    fecha: "Agosto 2026",
    file: "Apply Postman APIs for Customer Data.pdf",
    className: "CERT_POSTMAN_CUSTOMER",
  },
  {
    title: "Construcción de Bases de Datos con MySQL",
    fecha: "SENA · Diciembre 2025",
    file: "CONSTRUCCION_DE_BASES_DE_DATOS_CON_MYSQL.pdf",
    className: "CONSTRUCCION_DE_BASES_DE_DATOS_CON_MYSQL",
  },
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
    title: "Stay Ahead of the AI Curve",
    fecha: "Agosto 2026",
    file: "Stay Ahead of the AI Curve.pdf",
    className: "CERT_STAY_AHEAD_AI",
  }
];

export default function Certificaciones() {
  return (
    <section className="certificaciones" id="certificaciones">
      <div className="certificaciones-inner">

        <div className="cert-header-sec reveal">
          <span className="section-label">Training</span>
          <h2 className="section-title">Certifications</h2>
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