import Image from 'next/image';
import Bar from '../../../components/bar';

export default function Content() {
  return (
    <section className='py-16 sm:py-8 flex justify-center bg-slate-100 bg-opacity-75'>
      <div className=' mx-4 bg-slate-100 shadow-md rounded-xl flex flex-col max-w-4xl sm:flex-row sm:overflow-hidden'>
        <div className='p-4 max-w-5xl sm:w-1/2'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold text-orange-600'>
              Sobre o Conteúdo
            </h1>
            <Bar />
          </div>
          <p className='mt-4 leading-6 tracking-wide'>
            O ebook é projetado para ser um tutorial que levará você,{' '}
            <span className='font-semibold'>passo a passo</span> e de forma
            prática, através de cada fase do desenvolvimento de uma aplicação
            web. Começando com conceitos básicos e avançando para técnicas mais
            complexas, os objetivos foram estabelecidos para serem realistas e
            alcançáveis, mesmo para quem está{' '}
            <span className='font-semibold'>começando do zero</span>.
          </p>
          <p className='mt-4 leading-6 tracking-wide'>
            Ao final do curso, você terá adquirido habilidades em{' '}
            <span className='font-semibold'>React, TypeScript e Jest</span>,
            além de ter desenvolvido uma aplicação web completa com
            funcionalidades de autenticação e testes unitários cobrindo 100% do
            código. O projeto final, com o código no GitHub e rodando na web,
            poderá ser utilizado como{' '}
            <span className='font-semibold'>portfólio</span> de seu aprendizado.
          </p>
        </div>
        <div className='p-2 sm:hidden'>
          <Image
            src='/images/content.webp'
            alt='content'
            width='0'
            height='0'
            sizes='100vw'
            className='rounded-xl shadow-md w-full'
          />
        </div>
        <div className='hidden sm:w-1/2 sm:inline-block'>
          <div
            className='sm:bg-center md:bg-cover h-full'
            style={{ backgroundImage: "url('/images/content.webp')" }}
          />
        </div>
      </div>
    </section>
  );
}
