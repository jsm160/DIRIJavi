import React, { FC, useState } from 'react';

const ItemList: FC<{ items: string[] }> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [items, _setItems] = useState<string[]>(
    Array.from({ length: 1000 }, (_, i) => `Item ${i}`)
  );

  return (
    <div>
      <h1>Profiling en React</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar ({count})</button>
      <ItemList items={items} />
    </div>
  );
};

export default App;
