'use client';

import { useState } from 'react';
import * as EmailValidator from 'email-validator';
import Image from 'next/image';
import { Bar, Loading } from '@/components';
import {
  BackIcon,
  ChatIcon,
  EmailIcon,
  ErrorIcon,
  ExclamationIcon,
  QuestionIcon,
} from '@/components/icons';

export default function Content() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handlePostEmail(e) {
    e.preventDefault();
    setLoading(true);
    const isValid = EmailValidator.validate(email);
    if (!isValid) {
      setError(true);
      setLoading(false);
      return;
    }
    const endpoint =
      'https://nnj1lvzvx3.execute-api.us-east-1.amazonaws.com/staging';
    const options = {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };
    try {
      const res = await fetch(`${endpoint}/items`, options);
      const response = await res?.json();
      if (response) setSuccess(true);
      else setError(true);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  }

  function handleBack() {
    setEmail('');
    setError(false);
    setSuccess(false);
    setLoading(false);
  }

  function RenderSuccess() {
    return (
      <div className='flex items-center pt-4'>
        <EmailIcon />
        <p className='mx-2 font-bold'>
          Email enviado, em breve entrarei em contato!
        </p>
        <button type='button' onClick={() => handleBack()}>
          <BackIcon />
        </button>
      </div>
    );
  }

  function RenderError() {
    return (
      <div className='flex items-center pt-4'>
        <ErrorIcon />
        <p className='mx-2 font-bold text-red-500'>
          Ocorreu um erro, tente novamente
        </p>
        <button type='button' onClick={() => handleBack()}>
          <BackIcon />
        </button>
      </div>
    );
  }

  return (
    <section className='w-full p-8 bg-orange-100'>
      <div className='max-w-5xl flex flex-col mx-auto sm:flex-row sm:items-center'>
        <div className='w-full lg:w-1/2'>
          <div className='text-center sm:text-left'>
            <h1 className='text-3xl font-semibold tracking-wide'>
              Entre em contato
            </h1>
            <Bar dark={true} />
          </div>
          <div className='mt-4 space-y-4'>
            <p className='flex items-center'>
              <QuestionIcon />
              <span className='mx-2'>Tire suas dúvidas</span>
            </p>
            <p className='flex items-center'>
              <ExclamationIcon />
              <span className='mx-2'>Informações sobre próximos cursos</span>
            </p>
            <p className='flex items-center'>
              <ChatIcon />
              <span className='mx-2'>Marcar uma conversa</span>
            </p>
          </div>
          {loading ? (
            <Loading />
          ) : success ? (
            <RenderSuccess />
          ) : error ? (
            <RenderError />
          ) : (
            <div className='w-full mt-4 border bg-white rounded-md lg:max-w-sm focus-within:border-orange-400 focus-within:ring focus-within:ring-orange-300 focus-within:ring-opacity-40'>
              <form
                onSubmit={handlePostEmail}
                className='flex flex-col lg:flex-row'
              >
                <input
                  required
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Deixe seu email'
                  className='flex-1 h-10 px-4 py-2 m-1 placeholder-slate-500 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0'
                />
                <button
                  type='submit'
                  className='px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500'
                >
                  Enviar
                </button>
              </form>
            </div>
          )}
        </div>
        <div className='hidden md:flex md:items-center md:justify-end md:w-1/2'>
          <Image
            src='/images/contact.webp'
            alt='contact'
            width='0'
            height='0'
            sizes='100vw'
            className='h-64 w-auto rounded-xl shadow-md'
          />
        </div>
      </div>
    </section>
  );
}
