'use client';

import { useState } from 'react';

import XButton from '@components/x-button';

export default function Page1() {
  const [state, setState] = useState<boolean>(false);

  function handleClick() {
    setState(!state);
  }

  return (
    <div>
      <p>current: {state ? 'on' : 'off'}</p>
      <XButton onClick={handleClick}></XButton>
    </div>
  );
}
