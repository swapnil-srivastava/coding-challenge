import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './list-page.module.scss';

import ListingCard from '@/components/List/ListingCard';
import {} from '@/interfaces/interfaces';

const Listings = () => {
  const [listings, setListings] = useState<[]>([]);

  useEffect(() => {
    getListings();
    return () => {};
  }, []);

  const getListings = async () => {
    try {
      // TODO add loader
      const response = await axios.get<[]>(
        'https://makeup-api.herokuapp.com/api/v1/products.json',
      );

      setListings(response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error(
            `Request failed with status code ${error.response.status}`,
          );
          // TODO stop loader
        } else if (error.request) {
          console.error('No response received from server');
          // TODO stop loader
        } else {
          console.error(`Error: ${error.message}`);
        }
      } else {
        console.error(`Unknown error: ${error}`);
      }
    } finally {
      // TODO stop loader
    }
  };

  return (
    <main className={styles['listings']}>
      <h1 className={styles['listings__title']}>Main Listings page</h1>
      <div className={styles['listings__wrapper']}>
        {/* <aside className={styles['listings__aside']}></aside> */}
        <section className={styles['listings__section']}>
          <h2 className={styles['listings__sub-title']}>Listings</h2>
          <ListingCard listings={listings} />
        </section>
      </div>
    </main>
  );
};

export default Listings;
