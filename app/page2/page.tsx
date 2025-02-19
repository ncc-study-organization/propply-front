'use client';

import { ChangeEvent, useState } from 'react';

import usePage from '@lib/hooks/use-page';

export default function Page1() {
  const { setForm, message, handleOnSubmit } = usePage();

  function handleOnChangeName(event: ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, name: event.target.value }));
  }

  function handleOnChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, email: event.target.value }));
  }

  return (
    <div>
      <div>
        <p>form Status</p>
        <p>message: {message}</p>
      </div>
      <form onSubmit={handleOnSubmit}>
        <label>
          Name:
          <input className='border-black' type="text" name="name" onChange={handleOnChangeName} />
        </label>
        <label>
          Email:
          <input className='border-black' type="text" name="email" onChange={handleOnChangeEmail} />
        </label>
        <button type="submit" className='bg-slate-200'>Submit</button>
      </form>
    </div>
  );
}
