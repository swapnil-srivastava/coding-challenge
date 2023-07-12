import styles from './list-card.module.scss';

import { Products } from '@/interfaces/interfaces';

interface ListingCardProps {
  listings: Products[];
}
const ListingCard = ({ listings }: ListingCardProps) => {
  return listings.length > 0 ? (
    <>
      {listings.map((listing) => {
        return (
          <article className={styles['listing-card']}>
            <span className={styles['listing-card__price']}>
              {listing.price_sign} {listing.price}
            </span>
            <section className={styles['listing-card__description']}>
              <span>
                <strong>{listing.name}</strong>
              </span>
            </section>
            <section className={styles['listing-card__category']}>
              <span>
                <strong>Category </strong>:
              </span>
              <span>{listing.category}</span>
            </section>
            <section className={styles['listing-card__category']}>
              <span>
                <strong>Product Type :</strong>
              </span>
              <span>{listing.product_type}</span>
            </section>
            <section className={styles['listing-card__description']}>
              <span>
                <strong>Product description: </strong>
              </span>
              <span>{listing.description}</span>
            </section>
          </article>
        );
      })}
    </>
  ) : (
    <p>No listings found.</p>
  );
};

export default ListingCard;
