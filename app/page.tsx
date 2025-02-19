import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex justify-center items-center gap-4'>
      <Link href={'/page1'} className='text-blue bg-slate-200'>페이지1</Link>
      <Link href={'/page2'} className='text-blue bg-slate-200'>페이지2</Link>
    </div>
  );
}
