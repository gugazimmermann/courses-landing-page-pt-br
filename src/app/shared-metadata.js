const TITLE =
  "Do Zero ao Profissional: Autenticação com React / TypeScript e Jest";
const DESCRIPTION =  "Aprenda do zero a construir aplicações em React. Este ebook não é apenas um tutorial de programação, é uma jornada em todos os aspectos como um profissional. Aprenda React utilizando TypeScript, ferramentas de controle de qualidade, boas práticas, entendendo como funciona o dia a dia em um ambiente de desenvolvimento com Agile, e muitas formas de testes utilizando Jest. Este ebook é essencial para quem quer iniciar uma carreira internacional como desenvolvedor.";
const URL = "https://zero-ao-profissional.com.br";

const sharedMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Autenticação",
    "React",
    "TypeScript",
    "Jest",
    "Teste Unitário",
    "Unit Test",
    "Development",
    "Developer",
    "Programmer",
    "Frontend",
    "Front end",
    "Remote",
    "Job",
    "Remote Job",
    "Learning",
    "Tutorial",
    "Auth",
    "Authentication",
    "ESLint",
    "Prettier",
    "Agile",
    "Scrum",
    "Desenvolimento",
    "Programação",
    "Ebook",
    "E-book",
    "Curso",
  ],
  alternates: {
    canonical: URL,
  },
  authors: [
    {
      name: "Guga Zimmermann - gugazimmermann@gmail.com",
      url: "https://www.linkedin.com/in/guga-zimmermann/",
    },
  ],
  creator: "Guga Zimmermann",
  publisher: "Guga Zimmermann",
  metadataBase: URL,
  openGraph: {
    title: TITLE,
    description:
      "Aprenda React utilizando TypeScript e muitas formas de testes utilizando Jest.",
    locale: "pt_BR",
    type: "website",
    url: URL,
    siteName: TITLE,
    images: [
      {
        url: `${URL}/images/social/800x600.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${URL}/images/social/1800x1600.png`,
        width: 1800,
        height: 1600,
      },
      {
        url: `${URL}/images/social/1200x630.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    siteId: "-",
    creator: "@touchsistemas",
    creatorId: "-",
    images: [`${URL}/images/social/1200x628.png`],
  },
};

export default sharedMetadata;
