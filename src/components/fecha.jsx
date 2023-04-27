import React, { useState, useEffect } from 'react';
import '../estilos/fecha.css';

const SetDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = date.toLocaleString('es', {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className='fecha'>
      <h1>Planeador Diario</h1>
        <div>{formattedDate}</div>
    </div>
  );
};

export default SetDate;

