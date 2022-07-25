/**
 * Display Time in a specific timezone
 * @param   {string}  offset    input the offset time ie: +8 or -7
 * @example var today = intlDateTime('+8');
 *
 * @return  {object}            return a Date object
 */
export function intlDateTime(offset: any) {
  const d = new Date();

  // convert the date to milliseconds in UTC and add offset
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // return correct offset date and time
  // NOTE: do not mind the GMT +8 or any string, date and time is correct for the specified timezone
  return new Date(utc + 3600000 * offset);
}
