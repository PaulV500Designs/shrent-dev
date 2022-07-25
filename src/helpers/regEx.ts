// email and mobile regex validation
export const regExEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; // email must be in valid format ie: example@domain.com
export const regExIsGonnaBeEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@/; // pattern for when user is going to type an email (if there is an [at] sign at the value) ie: 123@
export const regExMobile = /^0(9)\d{9}$/; // number must start with 0 followed by 9 and have 9 more digit after ie: 09171234567

// password strength regex
export const regExPassword = /.{12,}$/; // password should be 12 or more characters
export const regExStrongPassword = new RegExp(
  '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.*[@$!%*#?&_])(?=.{12,})'
);
export const regExMediumPassword =
  /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/;
export const regExWeakPassword = /.{2,}$/;
