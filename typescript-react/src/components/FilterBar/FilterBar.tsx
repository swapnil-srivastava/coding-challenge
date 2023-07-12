import { SyntheticEvent, useState } from 'react';

import styles from './listing-form.module.scss';

import { ListingPayload, PostalAddress } from '@/interfaces/interfaces';

interface ListingFormProps {
  submittedForm: (listings: ListingPayload) => void;
}

const ListingForm = ({ submittedForm }: ListingFormProps) => {
  const [listings, setListings] = useState<Partial<ListingPayload>>();
  const [postalAddress, setPostalAddress] = useState<Partial<PostalAddress>>();

  const handleChange = (event: SyntheticEvent) => {
    const inputElement = event.target as HTMLInputElement;

    setListings({
      ...listings,
      [inputElement.name]: inputElement.value,
    });
  };

  const handleChangePostalAddress = (event: SyntheticEvent) => {
    const inputElement = event.target as HTMLInputElement;

    setPostalAddress({
      ...postalAddress,
      [inputElement.name]: inputElement.value,
    });
  };

  function assertAllPropertiesDefined(
    obj: any,
  ): asserts obj is ListingPayload | PostalAddress {
    for (const key in obj) {
      if (typeof obj[key] === 'undefined') {
        throw new Error(`Property ${key} is not defined`);
      }
    }
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    try {
      assertAllPropertiesDefined(listings);
      assertAllPropertiesDefined(postalAddress);

      const listingForm = {
        ...listings,
        bedrooms_count: +listings.bedrooms_count,
        latest_price_eur: +listings.latest_price_eur,
        postal_address: {
          ...postalAddress,
        },
        rooms_count: +listings.rooms_count,
        surface_area_m2: +listings.surface_area_m2,
      };

      submittedForm(listingForm);
    } catch (e) {
      // Handle undefined values
    }
  };

  return (
    <form className={styles['listing-form']} onSubmit={handleSubmit}>
      <div className={styles['listing-form__card']}>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="bedrooms_count">Bedroom Count:</label>
          <input
            type="number"
            name="bedrooms_count"
            value={listings?.bedrooms_count}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="building_type">Building Type:</label>
          <select
            name="building_type"
            value={listings?.building_type || ''}
            onChange={handleChange}
            className={styles['listing-form__select']}
          >
            <option value="STUDIO">Studio</option>
            <option value="APARTMENT">Apartment</option>
            <option value="HOUSE">House</option>
          </select>
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="contact_phone_number">Contact Number:</label>
          <input
            type="text"
            name="contact_phone_number"
            value={listings?.contact_phone_number}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            value={listings?.description}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="latest_price_eur">Price:</label>
          <input
            type="number"
            name="latest_price_eur"
            value={listings?.latest_price_eur}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={listings?.name}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="street_address">Street address:</label>
          <input
            type="text"
            name="street_address"
            value={postalAddress?.street_address}
            onChange={handleChangePostalAddress}
            className={styles['listing-form__input-text']}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="postal_code">Postal Code:</label>
          <input
            type="text"
            name="postal_code"
            value={postalAddress?.postal_code}
            onChange={handleChangePostalAddress}
            className={styles['listing-form__input-text']}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            value={postalAddress?.city}
            onChange={handleChangePostalAddress}
            className={styles['listing-form__input-text']}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            name="country"
            value={postalAddress?.country}
            onChange={handleChangePostalAddress}
            className={styles['listing-form__input-text']}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="rooms_count">Room Count:</label>
          <input
            type="number"
            name="rooms_count"
            value={listings?.rooms_count}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="surface_area_m2">Area:</label>
          <input
            type="number"
            name="surface_area_m2"
            value={listings?.surface_area_m2}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>

        <button
          type="submit"
          className={styles['listing-form__button--submit']}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default ListingForm;
