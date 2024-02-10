import Bar from '../../../components/bar';
import {
  AlertIcon,
  ApiIcon,
  CodeIcon,
  ComponentsIcon,
  FormIcon,
  ServerIcon,
  TechIcon,
  UserIcon,
} from '@/components/icons';

const modules = [
  {
    title: '1 - Tecnologias',
    icon: <TechIcon />,
    content:
      'Conheça as principais tecnologias e ferramentas utilizadas no desenvolvimento web, e sobre o dia a dia de uma empresa de tecnologia.',
  },
  {
    title: '2 - A Aplicação',
    icon: <CodeIcon />,
    content:
      'Configure o ambiente de desenvolvimento, entenda sobre qualidade de código, Git / GitHub e como hospedar a aplicação.',
  },
  {
    title: '3 - Componentes',
    icon: <ComponentsIcon />,
    content:
      'Aprenda a criar componentes reutilizáveis de fácil manutenção, entenda como realizar corretamente os Commits e proteção contra ataques.',
  },
  {
    title: '4 - Backend',
    icon: <ServerIcon />,
    content:
      'Crie um backend para ser utilizado com a aplicação, entenda sobre interfaces e variáveis de ambiente.',
  },
  {
    title: '5 - Autenticação',
    icon: <ApiIcon />,
    content:
      'Aprenda sobre Services, consultas em API e se aprofunde no React Router.',
  },
  {
    title: '6 - Testes Unitários',
    icon: <AlertIcon />,
    content:
      'Entenda a importancia e como realizar testes unitários utilizando o Jest, force a qualidade do código usando Coverage e Husky.',
  },
  {
    title: '7 - Formulários',
    icon: <FormIcon />,
    content:
      'Aprenda o flúxo da Autenticação por inteiro, separe a área pública da restrita e entenda como utilizar utilitários de testes.',
  },
  {
    title: '8 - Dados do Usuário',
    icon: <UserIcon />,
    content:
      'Entenda como funciona o State e Context no React, permita que os usuários alterem seus dados e senha.',
  },
];

function Module({ icon, title, content }) {
  return (
    <div className='space-y-2 bg-slate-100 p-4 rounded-lg'>
      <div className='flex flex-row items-center'>
        <span className='inline-block p-2 text-white bg-orange-600 rounded-xl'>
          {icon}
        </span>
        <h1 className='text-xl font-semibold capitalize ml-2'>{title}</h1>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default function Modules() {
  return (
    <section className='w-full py-8 bg-slate-900'>
      <div className='container mx-auto'>
        <div className='text-center mb-4'>
          <h2 className='font-semibold text-2xl text-orange-400'>
            Do Zero ao Profissional:
          </h2>
          <h1 className='font-bold text-3xl text-slate-50'>
            Autenticação com <br /> React / TypeScript e Jest
          </h1>
          <Bar light={true} />
        </div>
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {modules.map((m) => (
            <Module key={m.title} title={m.title} content={m.content} icon={m.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
