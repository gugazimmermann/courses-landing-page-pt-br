import { Bar } from '@/components';
import { DocIcon, GitIcon, LinkedinIcon } from '@/components/icons';

function Module({ icon, title, content }) {
  return (
    <div className='flex flex-col items-center p-4 space-y-2 text-center bg-slate-100 rounded-lg shadow-md'>
      <span className='inline-block p-2 text-white bg-orange-500 rounded-full'>
        {icon}
      </span>
      <h1 className='text-xl font-semibold capitalize'>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default function Bonus() {
  return (
    <section className='w-full py-8 bg-orange-100 bg-opacity-90'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold tracking-wide'>
            Módulos Bônus
          </h1>
          <Bar dark={true} />
        </div>
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-4'>
          <Module
            title='LinkedIn'
            content='Aprenda como criar um perfil profissional para se destacar, atrair recrutadores e receber ofertas de emprego do mundo todo.'
            icon={<LinkedinIcon />}
          />
          <Module
            title='README'
            content='Seu GitHub é uma vitrine onde os recrutadores podem ver seus projetos, tecnologias que utiliza e seus códigos. Um README correto é essencial.'
            icon={<DocIcon />}
          />
          <Module
            title='Controle de Versões'
            content='Entenda como funciona o controle de versões, a diferença entre os sistemas mais utilizados e os principais comandos do Git.'
            icon={<GitIcon />}
          />
        </div>
      </div>
    </section>
  );
}
