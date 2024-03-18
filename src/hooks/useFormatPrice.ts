import { useState, useEffect } from 'react';

const useFormatPrice = (price: number) => {
  const [formattedPrice, setFormattedPrice] = useState('');

  useEffect(() => {
    const formatPrice = (price: number) => {
      if (typeof price !== 'number') {
        console.error('Invalid price type. Price must be a number.');
        return '';
      }

      return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    setFormattedPrice(formatPrice(price));
  }, [price]);

  return formattedPrice;
};

export default useFormatPrice;
