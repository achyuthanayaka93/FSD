import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Simulate fetching initial count value
  useEffect(() => {
    const fetchInitialCount = () => {
      // Simulating API call delay
      setTimeout(() => {
        setCount(5); // Pretend we fetched 5 from an API
      }, 1000);
    };
    fetchInitialCount();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Counter 🧮</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>➕ Increment</button>{' '}
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>{' '}
      <button onClick={() => setCount(count * 2)}>✖️ Double</button>{' '}
      <button onClick={() => setCount(0)}>🔁 Reset</button>
    </div>
  );
};

export default Counter;
