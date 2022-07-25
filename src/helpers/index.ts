/**
 * Helpers that doesn't need to be on their own file as it is only a small function
 */

import { regExEmail, regExMobile } from './regEx';
/**
 * Validate Email
 * @param {string} email
 *
 * @returns       true if valid else false
 */
export function validateEmail(email = '') {
  return regExEmail.test(String(email).toLowerCase());
}

/**
 * Validate Phone
 * @param {string}  mobile
 * @returns
 */
export function validatePhone(phone = '') {
  return regExMobile.test(phone);
}

/**
 * Sort Array
 * Use only this helper if you are sorting through an array of objects
 * @param {array}   arr     the array to sort (length should be greater than 1)
 * @param {string}  key     Object key name to compare the values
 * @param {string}  sort    Sort method 'ASC' | 'DESC' default: 'ASC'
 *
 * @returns {array}         returns the sorted array
 */
export function sortBy(
  arr: any[] = [],
  key = '',
  sort: 'ASC' | 'DESC' = 'ASC',
  key2 = ''
) {
  // return immediately if function doesn't have the proper array and keys
  if ((arr && arr.length === 0) || key === '') {
    console.warn(
      'Sort By function should have an array with length greater than 1 and a key specified'
    );
    return null;
  }

  arr.sort((a, b) => {
    if (sort === 'ASC') {
      if (key2 && key2 !== '') {
        return a[key][key2] < b[key][key2] ? -1 : 1;
      }

      return a[key] < b[key] ? -1 : 1;
    }

    if (sort === 'DESC') {
      if (key2 && key2 !== '') {
        return b[key][key2] < a[key][key2] ? -1 : 1;
      }

      return b[key] < a[key] ? -1 : 1;
    }

    return 0; //default return value (no sorting)
  });

  return arr;
}
