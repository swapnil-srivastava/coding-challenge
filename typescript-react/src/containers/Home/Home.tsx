import { useEffect } from 'react';

// import { useParams } from 'react-router-dom';
import styles from './home.module.scss';

import {} from '@/interfaces/interfaces';

const PricesHistory = () => {
  // let { listingId } = useParams();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Home</h1>

      <a href="/listpage" className={styles['link']}>
        Go to List Page &rarr;
      </a>
    </div>
  );
};
export default PricesHistory;
