/**
 * @param {Function} cb - Callback.
 * @returns {boolean}
 */
export const callbackExists = (cb: any) => !!cb && typeof cb === 'function';

/**
 * Safely executes a callback function.
 *
 * @param {Function} cb - Callback.
 * @param {Object} params - Callback parameters.
 * @returns {Function|null}
 */
export const executeCallback = (cb: any, ...params) =>
  callbackExists(cb) ? cb(...params) : null;
