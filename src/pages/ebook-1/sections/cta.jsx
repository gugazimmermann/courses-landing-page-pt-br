import BuyNowButton from '../../../components/buyNowButton';

export default function Cta() {
  return (
    <section className='w-full px-4 py-8 bg-slate-900'>
      <div className='flex flex-col items-center justify-center text-center text-slate-100 sm:max-w-4xl sm:mx-auto'>
        <h1 className='text-2xl font-bold'>
          Se prepare para trabalhar remoto, ganhando em dolar!
        </h1>
        <p className='block mt-4 leading-relaxed'>
          A relevância deste ebook no mercado atual é significativa. As
          habilidades ensinadas, como React, TypeScript e Jest, estão em alta
          demanda na indústria de tecnologia.
        </p>
        <div className='w-full text-center mt-8'>
          <BuyNowButton size='half' />
        </div>
      </div>
    </section>
  );
}
