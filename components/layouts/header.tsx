'use client';

import Link from 'next/link';

import SearchForm from '@components/search-form';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 h-20 bg-white px-[10%] shadow-md">
      <nav className="flex h-full items-center justify-between">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Logo</Link>
          </li>
          <li>
            <Link href="/">개발자 찾기</Link>
          </li>
          <li>
            <Link href="/">프로젝트</Link>
          </li>
        </ul>
        <SearchForm />
        <ul className="flex items-center gap-4">
          <li>
            <Link href="">로그인</Link>
          </li>
          <li>
            <Link href="">로그아웃</Link>
          </li>
          <li>
            <Link href="">회원가입</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
