import "../App.css";
import { FaFilePdf, FaGraduationCap, FaAward, FaLaptopCode } from "react-icons/fa";
import { SiGoogle, SiPostman } from "react-icons/si";

const certsData = [
  {
    title: "IBM Full-Stack JavaScript Developer",
    issuer: "IBM",
    year: "Agosto 2026",
    file: "IBM Full-Stack JavaScript Developer.pdf",
    shortName: "IBM Full-Stack JS",
    iconType: "ibm",
    isDestacada: true,
  },
  {
    title: "Google AI Essentials Certificate",
    issuer: "Google",
    year: "Agosto 2026",
    file: "Google AI Essentials Certificate.pdf",
    shortName: "Google AI Essentials",
    iconType: "google",
    isDestacada: true,
  },
  {
    title: "AI Automation Engineer",
    issuer: "Certificación",
    year: "Agosto 2026",
    file: "AI Automation Engineer.pdf",
    shortName: "AI Automation Eng",
    iconType: "award",
    isDestacada: true,
  },
  {
    title: "JavaScript Programming with React, Node",
    issuer: "Certificación",
    year: "Agosto 2026",
    file: "JavaScript Programming with React, Node & MongoDB.pdf",
    shortName: "JS Programming",
    iconType: "award",
    isDestacada: false,
  },
  {
    title: "Apply API Testing & Automation with Postman",
    issuer: "Postman",
    year: "Agosto 2026",
    file: "Apply API Testing & Automation with Postman.pdf",
    shortName: "API Testing & Auto",
    iconType: "postman",
    isDestacada: false,
  },
  {
    title: "Apply Postman APIs for Customer Data",
    issuer: "Postman",
    year: "Agosto 2026",
    file: "Apply Postman APIs for Customer Data.pdf",
    shortName: "Postman APIs",
    iconType: "postman",
    isDestacada: false,
  },
  {
    title: "Construcción de Bases de Datos con MySQL",
    issuer: "SENA",
    year: "Diciembre 2025",
    file: "CONSTRUCCION_DE_BASES_DE_DATOS_CON_MYSQL.pdf",
    shortName: "Bases de Datos MySQL",
    iconType: "sena",
    isDestacada: false,
  },
  {
    title: "Análisis Exploratorio de Datos en Python",
    issuer: "SENA",
    year: "Septiembre 2025",
    file: "CERTIFICADO_ANALISIS_DE_DATOS_SENA.pdf",
    shortName: "Análisis Datos Python",
    iconType: "sena",
    isDestacada: false,
  },
  {
    title: "Aplicaciones con Interfaz Gráfica en Java",
    issuer: "SENA",
    year: "Octubre 2025",
    file: "CERTIFICADO_DE_APLICACIONES_CON_INTERFAZ_GRAFICA.pdf",
    shortName: "Apps Interfaz Java",
    iconType: "sena",
    isDestacada: false,
  },
  {
    title: "Stay Ahead of the AI Curve",
    issuer: "Certificación",
    year: "Agosto 2026",
    file: "Stay Ahead of the AI Curve.pdf",
    shortName: "AI Curve",
    iconType: "award",
    isDestacada: false,
  }
];

const ICONS_MAP = {
  ibm: <FaLaptopCode className="icono-emisor" />,
  google: <SiGoogle className="icono-emisor" />,
  sena: <FaGraduationCap className="icono-emisor" />,
  postman: <SiPostman className="icono-emisor" />,
  award: <FaAward className="icono-emisor" />
};

export default function Certificaciones() {
  const destacadas = certsData.filter((c) => c.isDestacada);
  const cursos = certsData.filter((c) => !c.isDestacada);

  const renderCard = (cert) => (
    <div key={cert.file} className={`cert-card ${cert.isDestacada ? 'cert-card-destacada' : ''} stagger-hidden`}>
      <div className="cert-header">
        {ICONS_MAP[cert.iconType]}
        <h3>{cert.title}</h3>
      </div>
      
      <div className="cert-footer">
        <a href={cert.file} download className="cert-cta">
          <FaFilePdf className="cert-cta-icon" /> PDF · {cert.shortName}
        </a>
        <span className="cert-cta-sub">{cert.issuer} · {cert.year}</span>
      </div>
    </div>
  );

  return (
    <section className="certificaciones" id="certificaciones">
      <div className="certificaciones-inner">

        <div className="cert-header-sec reveal">
          <span className="section-label">Training</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        {/* 1. Certificaciones Destacadas (fila superior, tarjetas más grandes) */}
        <div className="cert-grid cert-grid-destacadas">
          {destacadas.map(renderCard)}
        </div>

        {/* 2. Cursos y otras certificaciones (grid compacto) */}
        <div className="cert-grid cert-grid-cursos">
          {cursos.map(renderCard)}
        </div>

      </div>
    </section>
  );
}