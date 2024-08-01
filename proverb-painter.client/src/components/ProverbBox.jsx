import { useState, useEffect } from 'react';
import { getRandomProverb } from '../services/proverbService';

const ProverbBox = () => {
  const [proverb, setProverb] = useState(null);

  useEffect(() => {
    const fetchProverb = async () => {
      try {
        const data = await getRandomProverb();
        setProverb(data);
      } catch (error) {
        console.error('Error fetching proverb:', error);
      }
    };

    fetchProverb();
  }, []);

  return (
    <div className="proverb-box">
      {proverb ? <p>{proverb.proverbText}</p> : <p>Loading...</p>}
    </div>
  );
};

export default ProverbBox;
