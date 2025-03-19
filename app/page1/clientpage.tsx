'use client';

import { useState } from "react";

import XButton from "@components/x-button";

interface Props {
  props: {
    data: string;
  }
}

export default function ClientPage(props: Props) {
  const [state, setState] = useState<boolean>(false);
  console.log(process.env.API_SERVER);
  const [url, setUrl] = useState<string>(props.props.data);
  function handleClick() {
    setState(!state);
  }

  return (
    <div>
      <p>current: {state ? 'on' : 'off'}</p>
      <p>{url}</p>
      <XButton onClick={handleClick}></XButton>
    </div>
  );
}
