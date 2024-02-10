import React, { Suspense } from 'react';
import { Loading } from '@/components';

const Intro = React.lazy(() => import('./sections/intro'));
const Hero = React.lazy(() => import('./sections/hero'));
const Content = React.lazy(() => import('./sections/content'));
const Contact = React.lazy(() => import('./sections/contact'));
const Cta = React.lazy(() => import('./sections/cta'));
const AboutMe = React.lazy(() => import('./sections/aboutMe'));
const Modules = React.lazy(() => import('./sections/modules'));
const Bonus = React.lazy(() => import('./sections/bonus'));
const Price = React.lazy(() => import('./sections/price'));

export default function EbookOne() {
  return (
    <main className='mx-auto flex flex-col w-full p-0 m-0 min-h-screen'>
      <Suspense fallback={<Loading />}>
        <div
          className='bg-cover bg-fixed bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/images/cover2.webp')" }}
        >
          <Intro />
          <Hero  />
          <Content />
          <Contact />
          <Cta />
          <AboutMe />
          <Modules />
          <Bonus />
        </div>
        <Price />
      </Suspense>
    </main>
  );
}
