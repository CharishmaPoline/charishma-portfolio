import React from "react";
import "./styles.css";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/charishma-polineni-821824222/",
  github: "https://github.com/CharishmaPoline",
  email: "mailto:charishmapolineni2001@gmail.com",

  // ✅ Put your resume pdf inside /public with this exact name
  resume: "/Charishma_Ressume_polineni.pdf",

  // ✅ Resume Parser AI links
  liveResumeParser: "https://resume-parser-ai-9bfwgpuon2yextjvwznikw.streamlit.app/",
  githubResumeParser: "https://github.com/CharishmaPoline/Resume-Parser-AI",

  // ✅ Sumarishma links
  sumarishmaLive: "https://sumarishma.vercel.app/",
  sumarishmaGithub: "https://github.com/CharishmaPoline/sumarishma",
};

const profile = {
  name: "Charishma Polineni",
  title: "AI/ML Engineer | Data Engineer | Data Analyst",

  // ✅ Put your photo here: /public/profile.jpg
  photo: "/profile.jpg",
};

const projects = [
  {
    title: "Resume Parser AI (Multi Job Titles + JD Match)",
    description:
      "NLP-based resume screening tool that scores resumes (0–10) against job titles and job descriptions using TF-IDF + cosine similarity. Streamlit app with job title search + top role suggestions.",
    tech: ["Python", "NLTK", "Scikit-learn", "TF-IDF", "Cosine Similarity", "Streamlit"],
    live: LINKS.liveResumeParser,
    code: LINKS.githubResumeParser,
    highlights: [
      "Multi-job categories (25 job titles)",
      "Resume vs Job Title + Resume vs JD scoring",
      "Deployed live on Streamlit Cloud",
    ],
  },

  // ✅ SUMARISHMA PROJECT (LIVE + CODE)
  {
    title: "Sumarishma (Lifestyle Web App)",
    description:
      "A multi-feature React web application that provides useful day-to-day sections like Business News, IT Skills, Jobs, Music, Cooking, Fashion, and Entertainment. Designed as a practical, real-time lifestyle & learning app with dynamic content.",
    tech: ["React JS", "JavaScript", "CSS", "APIs", "NewsAPI"],
    live: LINKS.sumarishmaLive,
    code: LINKS.sumarishmaGithub,
    highlights: [
      "Multi-page app with practical sections (Business, IT Skills, Jobs, Music, Cooking, Fashion, Entertainment)",
      "Real-time/dynamic content using API integration (e.g., Business via NewsAPI)",
      "User-friendly navigation with real-life usage focus",
    ],
  },

  {
    title: "Real-World SQL Practice on HR Dataset",
    description:
      "SQL analytics project simulating real-world HR reporting such as attrition trends, department headcount, salary distribution, and performance insights.",
    tech: ["SQL", "SQL Server", "Excel"],
    live: "",
    code: "",
    highlights: ["Advanced joins, window functions, subqueries", "Business-style reporting using SQL queries"],
  },
  {
    title: "Road Accident Dashboard (Microsoft Excel)",
    description:
      "Interactive Excel dashboard using pivot tables, slicers, charts, and conditional formatting to analyze accident trends across time, location, and severity.",
    tech: ["Excel", "Pivot Tables", "Dashboarding"],
    live: "",
    code: "",
    highlights: ["Slicers + pivot charts for interactivity", "Year-wise and severity-wise drill-down analysis"],
  },
  {
    title: "Predicting Credit Card Fraud (Machine Learning)",
    description:
      "Machine learning project to detect fraudulent transactions with preprocessing + class imbalance handling and strong evaluation metrics.",
    tech: ["Python", "Pandas", "Scikit-learn", "SMOTE"],
    live: "",
    code: "",
    highlights: ["Handled imbalance using SMOTE", "Compared multiple ML models using PR/F1/AUC"],
  },
];

const skills = [
  { group: "Programming Languages", items: ["Python", "R", "SQL", "Bash"] },
  { group: "AI/ML Frameworks", items: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "Hugging Face"] },
  { group: "Generative AI", items: ["LLM Fundamentals", "Text Similarity", "Embeddings", "RAG Basics"] },
  { group: "Data & Analytics", items: ["Pandas", "NumPy", "Tableau", "Power BI", "Matplotlib", "Seaborn"] },
  { group: "Cloud & MLOps", items: ["AWS", "Azure ML", "Docker", "Kubernetes", "MLflow", "CI/CD"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { group: "APIs & Backend", items: ["FastAPI", "Flask", "REST APIs"] },
  { group: "Workflow", items: ["ETL", "PySpark", "Data Pipelines"] },
];

const experience = [
  {
    company: "American Airlines",
    location: "Hyderabad, India",
    role: "AI/ML Engineer",
    dates: "Jul 2022 – Jul 2023",
    bullets: [
      "Designed ML systems for forecasting and operations insights.",
      "Built NLP classification models to categorize and route support tickets.",
      "Implemented ETL workflows using Python, SQL, and PySpark.",
      "Worked with Docker/Kubernetes and cloud deployments.",
    ],
  },
  {
    company: "HD Supply",
    location: "Hyderabad, India",
    role: "Machine Learning Intern",
    dates: "Jun 2021 – Jul 2022",
    bullets: [
      "Developed churn prediction and customer segmentation models.",
      "Created recommendation engine prototype using similarity methods.",
      "Worked on ML automation pipelines and evaluation.",
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Texas Tech University — Lubbock, TX, USA",
    dates: "Aug 2023 – May 2025",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "JNTU Kakinada (JNTUK) — India",
    dates: "Jun 2018 – Jul 2022",
  },
];

const certifications = [
  {
    name: "Apache Spark (Simplilearn)",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQ4IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODQ2MDA2NV84ODEzMDAxMTc0OTc0Mzg1Mjk3Ny5wbmciLCJ1c2VybmFtZSI6IkNIQVJJU0hNQSBQT0xJTkVOSSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4238%2FApache%2520Spark%2520Beginners%2520Course%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1537905885438041545&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVjyrOCs0wS0xLCk2yrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAL1De19BAAAA",
  },
  {
    name: "Programming in Python (Meta - Coursera)",
    link: "https://www.coursera.org/account/accomplishments/verify/3LZ0LOFJ2F6K",
  },
  {
    name: "Machine Learning with Python (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/verify/R2HM0EBKT8HC",
  },
  {
    name: "Connect and Protect: Networks and Network Security (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/verify/CBDLFAW8P05W",
  },
  {
    name: "Microsoft SQL Certification Training (Intellipaat)",
    link: "https://lms.intellipaat.com/certificate-link/?Yz0yODUzJnU9MjU1NjkwJmV4dD0x",
  },
  {
    name: "Data Analysis with R Programming (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/verify/T746GLLF4QU7",
  },
];

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="sectionHead">
        <h2>{title}</h2>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Button({ href, children, variant = "primary" }) {
  const className = variant === "secondary" ? "btn btnSecondary" : "btn btnPrimary";
  if (!href) return null;

  const isMail = href.startsWith("mailto:");
  return (
    <a className={className} href={href} target={isMail ? "_self" : "_blank"} rel="noreferrer">
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="navInner">
          <a className="brand" href="#top">
            {profile.name}
          </a>

          <nav className="navLinks">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <div id="top"></div>

        <div className="heroTop">
          <div className="heroPhotoWrap">
            <img src={profile.photo} alt="Profile" className="profileImgHero" />
          </div>

          <h1 className="heroTitle">{profile.name}</h1>
          <p className="heroSubtitle">{profile.title}</p>

          <div className="heroBtns centerBtns">
            <Button href={LINKS.linkedin}>LinkedIn</Button>
            <Button href={LINKS.github} variant="secondary">
              GitHub
            </Button>
            <Button href={LINKS.resume} variant="secondary">
              Download Resume
            </Button>
            <Button href={LINKS.email} variant="secondary">
              Email
            </Button>
          </div>
        </div>

        <Section id="about" title="About" subtitle="A short summary about me">
          <div className="grid2">
            <div className="card">
              <h3>What I do</h3>
              <p className="muted">
                I build end-to-end ML solutions including data preprocessing, feature engineering, model training,
                evaluation, and deployment. I’ve worked on forecasting, NLP ticket routing, and scalable ETL pipelines.
              </p>
            </div>

            <div className="card">
              <h3>What I’m looking for</h3>
              <p className="muted">
                I’m looking for AI/ML Engineer or Machine Learning Engineer roles where I can apply ML + NLP + cloud
                deployment skills to solve real-world business problems.
              </p>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="My current technical stack">
          <div className="skillGrid">
            {skills.map((s) => (
              <div key={s.group} className="card">
                <h3>{s.group}</h3>
                <div className="chipWrap">
                  {s.items.map((it) => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" subtitle="My work experience">
          <div className="projectGrid">
            {experience.map((e) => (
              <div key={e.company + e.role} className="card">
                <h3>{e.role}</h3>
                <p className="muted" style={{ marginTop: 6 }}>
                  {e.company} • {e.location} • {e.dates}
                </p>

                <ul className="bullets">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected projects">
          <div className="projectGrid">
            {projects.map((p) => (
              <article key={p.title} className="card projectCard">
                <h3>{p.title}</h3>
                <p className="muted">{p.description}</p>

                <div className="chipWrap">
                  {p.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>

                <ul className="bullets">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="cardBtns">
                  {p.live ? <Button href={p.live}>Live</Button> : null}
                  {p.code ? (
                    <Button href={p.code} variant="secondary">
                      Code
                    </Button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education" subtitle="Academic background">
          <div className="projectGrid">
            {education.map((ed) => (
              <div key={ed.degree} className="card">
                <h3>{ed.degree}</h3>
                <p className="muted">{ed.school}</p>
                <p className="muted" style={{ marginTop: 6 }}>
                  {ed.dates}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications" subtitle="My certifications (click to view)">
          <div className="contactGrid">
            {certifications.map((c) => (
              <div key={c.name} className="contactCard">
                <h3>{c.name}</h3>
                <p className="muted">Open the certificate verification link.</p>
                <a className="contactBox" href={c.link} target="_blank" rel="noreferrer">
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s connect">
          <div className="contactGrid">
            <div className="contactCard">
              <h3>Email Me</h3>
              <p className="muted">Shoot me an email, I’ll get back to you asap.</p>
              <a className="contactBox" href={LINKS.email}>
                charishmapolineni2001@gmail.com
              </a>
            </div>

            <div className="contactCard">
              <h3>Connect on LinkedIn</h3>
              <p className="muted">Let’s connect and share valuable insights.</p>
              <a className="contactBox" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/charishma-polineni
              </a>
            </div>

            <div className="contactCard">
              <h3>Stay Social</h3>
              <p className="muted">Catch all the latest updates with me.</p>

              <div className="socialRow">
                <a className="socialIcon" href={LINKS.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                  in
                </a>
                <a className="socialIcon" href={LINKS.github} target="_blank" rel="noreferrer" title="GitHub">
                  GH
                </a>
                <a className="socialIcon" href={LINKS.email} title="Email">
                  @
                </a>
                <a className="socialIcon" href={LINKS.resume} target="_blank" rel="noreferrer" title="Resume">
                  CV
                </a>
              </div>
            </div>
          </div>
        </Section>

        <footer className="footer muted">© {new Date().getFullYear()} {profile.name} • Built with React</footer>
      </main>
    </div>
  );
}
