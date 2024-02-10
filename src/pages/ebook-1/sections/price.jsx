import Link from 'next/link';
import Bar from '../../../components/bar';

export default function Price() {
  return (
    <section className='w-full bg-white py-8'>
      <div className='flex flex-col sm:flex-row justify-center items-center sm:max-w-2xl md:max-w-4xl sm:mx-auto'>
        <div className='px-4 text-center sm:w-2/3'>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold tracking-wide text-orange-600'>
              Lançamento
            </h1>
            <Bar />
          </div>
          <p className='mt-4'>
            Além do código, neste ebook discutiremos as principais ferramentas,
            melhores práticas, e teremos uma compreensão profunda do processo de
            desenvolvimento dentro de uma empresa de tecnologia.
          </p>
          <p className='mt-4'>
            Aproveite agora o cupom de lançamento{' '}
            <span className='text-orange-600 font-bold text-lg'>REACT25</span>{' '}
            para adquirir o ebook com{' '}
            <span className='text-orange-600 font-bold text-lg'>
              25% de desconto
            </span>
            ! Dê o start para sua nova carreira!
          </p>
        </div>
        <div className='mt-8 sm:mt-0 sm:w-1/3'>
          <div className='p-8 space-y-4 text-slate-100 uppercase text-center bg-orange-700 rounded-2xl shadow-md'>
            <p>Orferta de Lançamento</p>
            <h2 className='text-2xl line-through'>R$ 97,00</h2>
            <h2 className='text-3xl font-bold pb-8'>R$ 72,75</h2>
            <Link
              href='https://pay.hotmart.com/Q90585601U'
              rel='noopener noreferrer'
              target='_blank'
              className='w-full px-4 py-2 tracking-wide text-orange-600 font-bold text-xl capitalize bg-slate-100 rounded-md'
            >
              Comprar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
