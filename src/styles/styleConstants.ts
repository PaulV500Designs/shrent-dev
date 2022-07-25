/**
 * Style Constants
 * Declare here the colors, sizes, etc that is defined in Figma
 * @ref https://www.figma.com/file/rtQcBIHhpqYeLp7JbaGgod/Shrent-Mobile%2FWeb-App?node-id=901%3A17229
 */

// ------------------------------------
// Shared CTA styles
// ! Local DRY use only; don't export

const CTA_DISABLED = {
  color: '#ECEAE0',
  text: '#444',
  border: null,
};

const CTA_PRIMARY = {
  base: {
    color: '#3704FF',
    text: '#fff',
    border: null,
  },

  hover: {
    color: '#3704FF',
  },

  active: {
    color: '#3704FF',
  },

  disabled: CTA_DISABLED,
};

export const styleConstants = {
  color: {
    primaryBlue: '#3704FF',
    gray: '#6E7387',
    black: '#000',
    white: '#FFF',
    paleyellow1: '#D7C481',
    paleyellow2: '#FAEDAB',
    metallicdarkgray: '#D1CFCB',
    gray1: '#F6F8FA',
    gray2: '#38434D',
    gray3: '#526372',
    gray4: '#A9B1B8',
    lightgray1: '#E0E0E0',
    lightgray2: '#CED4DA',
    highlight: '#FAFAFA',
    tones: {
      mute: '#F0F0F0',
      red: '#FF645E',
      green: '#28A745',
      blue: '#007BFF',
      yellow: '#F6E6C4',
      softred: '#FFD1CF',
      softgreen: '#BFE5C7',
      softblue: '#B3D7FF',
    },
  },
  borderColor: '#E7EAF2',
  divider: '#CED4DA',
  shadow: [
    '0px 12px 15px rgba(140, 152, 164, 0.05)',
    '0px 12px 15px rgba(140, 152, 164, 0.1)',
    '0px 12px 15px rgba(140, 152, 164, 0.25)',
  ],
  focus: '0 0 1px 2px #4D90FE', // simulate the browser default for outline when focusing on elements ie: input, button, etc
  spacing: {
    4: '4px',
    8: '8px',
    12: '12px',
    16: '16px',
    24: '24px',
    32: '32px',
    40: '40px',
    48: '48px',
    56: '56px',
    64: '64px',
    72: '72px',
    80: '80px',
    88: '88px',
    96: '96px',
    104: '104px',
    112: '112px',
    120: '120px',
    128: '128px',
    136: '136px',
    144: '144px',
    152: '152px',
    160: '160px',
    168: '168px',
    176: '176px',
    184: '184px',
  },
  radius: {
    small: '5px',
  },
  body: {
    default: '#FFFFFF',
    background: '#DAB9E6',
    text: '#526372',
  },
  ctas: {
    primary: {
      isDark: true,
      ...CTA_PRIMARY,

      inverted: {
        base: {
          color: '#3704FF',
          text: '#3704FF',
          border: null,
        },
        hover: {
          color: '#3704FF',
        },
        active: {
          color: '#3704FF',
        },
        disabled: CTA_DISABLED,
      },
    },

    secondary: {
      isDark: false,

      base: {
        color: '#E0AC3B',
        text: '#fff',
        border: '#E0AC3B',
      },

      hover: {
        color: '#D7C481',
      },

      active: {
        color: '#D7C481',
      },

      disabled: CTA_DISABLED,
      inverted: CTA_PRIMARY,
    },

    outline: {
      isDark: false,

      base: {
        color: null,
        text: '#022343',
        border: '#022343',
      },

      hover: {
        text: '#022343',
        background: '#022343',
      },

      active: {
        text: '#022343',
      },

      disabled: {
        text: '#38434D',
      },

      // TODO ?
      inverted: CTA_PRIMARY,
    },

    plain: {
      isDark: false,

      base: {
        color: null,
        text: '#3704FF',
        border: null,
      },

      hover: {
        text: '#3704FF',
      },

      active: {
        text: '#3704FF',
      },

      disabled: {
        text: '#38434D',
      },

      // TODO ?
      inverted: CTA_PRIMARY,
    },

    mute: {
      isDark: false,

      base: {
        color: '#F0F0F0',
        text: '#38434D',
        border: null,
      },

      hover: {
        color: '#BFE5C7',
        text: '#38434D',
      },

      active: {
        text: '#E0AC3B',
      },

      disabled: {
        text: '#38434D',
      },

      inverted: CTA_PRIMARY,
    },

    success: {
      base: {
        color: '#28A745',
        text: '#fff',
        border: '#28A745',
      },

      hover: {
        color: '#BFE5C7',
      },
    },

    warning: {
      base: {
        color: '#FF645E',
        text: '#fff',
        border: '#FF645E',
      },

      hover: {
        color: '#FF645E',
      },
    },
  },
  sidebar: {
    width: '300px',
    collapseWidth: '65px',
    shadow: '0px 12px 15px rgba(140, 152, 164, 0.05)',
  },
  BLACK_TRANSPARENT_BG: 'rgba(0, 0, 0, 0.25)',
};
