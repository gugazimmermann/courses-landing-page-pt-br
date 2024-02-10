import Link from 'next/link';

export default function BuyNowButton({ size }) {
  return (
    <Link
      href='https://pay.hotmart.com/Q90585601U'
      rel='noopener noreferrer'
      target='_blank'
      className={`${
        size === 'full' ? 'w-full' : size === 'half' ? 'w-1/2' : 'w-auto'
      } px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:bg-orange-500`}
    >
      Compre Agora
    </Link>
  );
}
