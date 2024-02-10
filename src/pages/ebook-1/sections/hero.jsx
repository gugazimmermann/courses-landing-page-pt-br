import Image from 'next/image';
import BuyNowButton from '../../../components/buyNowButton';

export default function Hero() {
  return (
    <section className='w-full bg-slate-100 p-4 pb-8'>
      <div className='max-w-5xl mx-auto flex flex-col justify-center items-center sm:flex-row'>
        <div className='flex justify-center sm:w-1/3'>
          <Image
            src='/images/cover.webp'
            alt='ebook 1 Cover'
            width='0'
            height='0'
            sizes='100vw'
            className='h-96 w-auto rounded-xl shadow-xl'
          />
        </div>
        <div className='text-center pt-8 sm:w-2/3 sm:px-8'>
          <h2 className='font-semibold text-orange-600 text-2xl md:text-3xl sm:mb-2'>
            Do Zero ao Profissional:
          </h2>
          <h1 className='leading-snug font-bold text-3xl md:text-4xl'>
            Autenticação com
            <br />
            React / TypeScript e Jest
          </h1>
          <p className='mt-4 leading-6 tracking-wide'>
            Aprenda React utilizando TypeScript, ferramentas de controle de
            qualidade, boas práticas, entendendo como funciona o dia a dia em um
            ambiente de desenvolvimento com Agile, e muitas formas de testes
            utilizando Jest.
          </p>
          <p className='text-center font-semibold mt-4 mb-2'>
            Cupom: <span className='text-orange-600 font-bold text-lg'>REACT25</span> - de R$
            97,00 por R$ 72,75
          </p>
          <div className='flex justify-center'>
            <BuyNowButton size='auto' />
          </div>
        </div>
      </div>
    </section>
  );
}
