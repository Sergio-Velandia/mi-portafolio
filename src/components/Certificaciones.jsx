import "../App.css";
import { FaFilePdf, FaGraduationCap, FaAward, FaLaptopCode } from "react-icons/fa";
import { SiGoogle, SiPostman } from "react-icons/si";
import { useLang, formatMonth } from "../i18n";

const certsData = [
  {
    title: "IBM Full-Stack JavaScript Developer",
    issuer: "IBM",
    date: "2026-08",
    file: "IBM Full-Stack JavaScript Developer.pdf",
    shortName: "IBM Full-Stack JS",
    iconType: "ibm",
    isDestacada: true,
  },
  {
    title: "Google AI Essentials Certificate",
    issuer: "Google",
    date: "2026-08",
    file: "Google AI Essentials Certificate.pdf",
    shortName: "Google AI Essentials",
    iconType: "google",
    isDestacada: true,
  },
  {
    title: "AI Automation Engineer",
    issuer: null,
    date: "2026-08",
    file: "AI Automation Engineer.pdf",
    shortName: "AI Automation Eng",
    iconType: "award",
    isDestacada: true,
  },
  {
    title: "JavaScript Programming with React, Node",
    issuer: null,
    date: "2026-08",
    file: "JavaScript Programming with React, Node & MongoDB.pdf",
    shortName: "JS Programming",
    iconType: "award",
    isDestacada: false,
  },
  {
    title: "Apply API Testing & Automation with Postman",
    issuer: "Postman",
    date: "2026-08",
    file: "Apply API Testing & Automation with Postman.pdf",
    shortName: "API Testing & Auto",
    iconType: "postman",
    isDestacada: false,
  },
  {
    title: "Apply Postman APIs for Customer Data",
    issuer: "Postman",
    date: "2026-08",
    file: "Apply Postman APIs for Customer Data.pdf",
    shortName: "Postman APIs",
    iconType: "postman",
    isDestacada: false,
  },
  {
    title: "Construcción de Bases de Datos con MySQL",
    issuer: "SENA",
    date: "2025-12",
    file: "CONSTRUCCION_DE_BASES_DE_DATOS_CON_MYSQL.pdf",
    shortName: "Bases de Datos MySQL",
    iconType: "sena",
    isDestacada: false,
  },
  {
    title: "Análisis Exploratorio de Datos en Python",
    issuer: "SENA",
    date: "2025-09",
    file: "CERTIFICADO_ANALISIS_DE_DATOS_SENA.pdf",
    shortName: "Análisis Datos Python",
    iconType: "sena",
    isDestacada: false,
  },
  {
    title: "Aplicaciones con Interfaz Gráfica en Java",
    issuer: "SENA",
    date: "2025-10",
    file: "CERTIFICADO_DE_APLICACIONES_CON_INTERFAZ_GRAFICA.pdf",
    shortName: "Apps Interfaz Java",
    iconType: "sena",
    isDestacada: false,
  },
  {
    title: "Stay Ahead of the AI Curve",
    issuer: null,
    date: "2026-08",
    file: "Stay Ahead of the AI Curve.pdf",
    shortName: "AI Curve",
    iconType: "award",
    isDestacada: false,
  }
];

const ICONS_MAP = {
  ibm: <FaLaptopCode className="icono-emisor" aria-hidden="true" />,
  google: <SiGoogle className="icono-emisor" aria-hidden="true" />,
  sena: <FaGraduationCap className="icono-emisor" aria-hidden="true" />,
  postman: <SiPostman className="icono-emisor" aria-hidden="true" />,
  award: <FaAward className="icono-emisor" aria-hidden="true" />
};

const TEXT = {
  es: { title: "Certificaciones", download: "Descargar PDF", certificate: "Certificado" },
  en: { title: "Certifications", download: "Download PDF", certificate: "Certificate" },
};

export default function Certificaciones() {
  const { lang } = useLang();
  const t = TEXT[lang];
  const destacadas = certsData.filter((c) => c.isDestacada);
  const cursos = certsData.filter((c) => !c.isDestacada);

  const renderCard = (cert) => (
    <div key={cert.file} className={`cert-card ${cert.isDestacada ? 'cert-card-destacada' : ''} stagger-hidden`}>
      <div className="cert-header">
        {ICONS_MAP[cert.iconType]}
        <h3>{cert.title}</h3>
      </div>

      <div className="cert-footer">
        <a href={cert.file} download className="cert-cta" aria-label={`${t.download}: ${cert.title}`}>
          <FaFilePdf className="cert-cta-icon" aria-hidden="true" /> {t.download}
        </a>
        <span className="cert-cta-sub">
          {cert.issuer ?? t.certificate}, {formatMonth(cert.date, lang)}
        </span>
      </div>
    </div>
  );

  return (
    <section className="certificaciones" id="certificaciones">
      <div className="certificaciones-inner">

        <div className="cert-header-sec reveal">
          <h2 className="section-title">{t.title}</h2>
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