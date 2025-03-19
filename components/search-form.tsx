'user client';

import { useState } from 'react';

export default function SearchForm() {
  const [search, setSearch] = useState('');
  return (
    <div>
      <form>
        <input type="text" />
        <button>검색</button>
      </form>
    </div>
  );
}
