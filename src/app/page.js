import sharedMetadata from './shared-metadata';
import EbookOne from '@/pages/ebook-1/ebookOne';

export const metadata = {
  ...sharedMetadata,
};

export default function Home() {
  return (
    <main className="mx-auto flex flex-col w-full p-0 m-0 min-h-screen">
      <EbookOne />
    </main>
  );
}
