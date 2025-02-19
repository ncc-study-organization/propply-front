import { useState } from 'react';

interface pageForm {
  name?: string;
  email?: string;
}

interface responseType {
  data: {
    name: string;
    email: string;
  };
}

type statusType = 'valid' | 'invalid' | 'pending';

export default function usePage() {
  const [form, setForm] = useState<pageForm>({ name: '', email: '' });
  const [formStatus, setFormStatus] = useState<statusType>('invalid');
  const [message, setMessage] = useState<string>('');
  const apiUrl = '/api';

  async function onValid() {
    setFormStatus('pending');
    setMessage('pending...');
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const resData: responseType = await response.json();
    setForm({ name: resData.data.name, email: resData.data.email });
    setMessage('Form submitted: ' + resData.data.name + ', ' + resData.data.email);
    setFormStatus('valid');
  }

  async function onInvalid(errorMsg?: string) {
    switch (formStatus) {
    case 'invalid':
      setMessage('Invalid form data' + errorMsg ? ': ' + errorMsg : '');
      break;
    case 'pending':
      setMessage('Form is pending');
      break;
    default:
      setMessage('Unknown error' + errorMsg ? ': ' + errorMsg : '');
      break;
    }
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form === undefined || form === null) {
      setFormStatus('invalid');
      return;
    }
    if (form.name === '' || form.email === '') {
      setFormStatus('invalid');
      onInvalid('name or email is missing');
      return;
    }
    if (formStatus === 'pending') {
      onInvalid();
      return;
    }
    onValid();
  }

  return { setForm, message, handleOnSubmit };
}
