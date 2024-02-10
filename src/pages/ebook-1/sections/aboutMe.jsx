import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className='sm:bg-slate-100 sm:bg-opacity-75 sm:p-4'>
      <div className='sm:mx-auto sm:max-w-3xl lg:max-w-5xl'>
        <div className='relative z-20 w-full sm:flex sm:items-center'>
        <div className='absolute w-full bg-slate-900 -z-10 sm:h-96 sm:rounded-2xl sm:shadow-md' />
          <div className='w-full p-4 bg-slate-900 sm:flex sm:items-center sm:rounded-2xl sm:bg-transparent lg:px-12 sm:justify-evenly'>
            <Image
              src='/images/profile.webp'
              alt='linkedin profile'
              width='0'
              height='0'
              sizes='100vw'
              className='h-64 w-64 rounded-full object-fill mx-auto sm:object-cover sm:h-[16rem] sm:w-[14rem] md:h-[32rem] md:w-[22rem] lg:h-[36rem] lg:w-[26rem] sm:rounded-2xl sm:shadow-md'
            />
            <div className='my-4 sm:pl-4 md:pl-6 lg:pl-8'>
              <div className='text-center sm:text-left'>
                <h1 className='text-3xl font-medium tracking-tight text-slate-100'>
                  Guga Zimmermann
                </h1>
                <h2 className='text-xl text-orange-400'>
                  Senior Full-Stack Developer
                </h2>
              </div>
              <p className='my-4 leading-relaxed text-slate-100'>
                Com mais de 20 anos de experiência na área de desenvolvimento de
                sistemas, minha jornada inclui trabalhar em projetos
                internacionais, superando desafios no desenvolvimento de
                software e lidando com uma variedade de tecnologias. Me
                especializei em Node.js, React e AWS (certificado como
                Developer).
              </p>
              <a
                className='mt-4 leading-relaxed text-slate-100 hover:underline hover:text-orange-400'
                href='https://www.linkedin.com/in/guga-zimmermann'
                target='_blank'
              >
                https://www.linkedin.com/in/guga-zimmermann
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
