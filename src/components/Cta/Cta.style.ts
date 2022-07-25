import styled, {
  css,
  FlattenSimpleInterpolation as CSS,
} from 'styled-components';

import * as mx from '@/styles/mixins';
import { styleConstants } from '@/styles/styleConstants';

export interface CtaStateType {
  color?: string | null;
  text?: string;
  border?: string | null;
}

export interface CtaType {
  base?: CtaStateType;
  hover?: CtaStateType;
  active?: CtaStateType;
  disabled?: CtaStateType;
  alert?: CtaStateType;
  inverted?: Omit<CtaType, 'inverted'>;
}

// ------------------------------------
// Variables

export const CTA_CLASS = 'cta';

export const CTA_PADDING = '12px 24px';
const CTA_BORDER_WIDTH = 2;

const CTA_SIZE = {
  xsmall: '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
};

// ------------------------------------

const getCtaStyles = (cta: CtaType, isInverted: boolean): CSS => {
  const base = isInverted && !!cta?.inverted ? cta.inverted.base : cta.base;
  const hover =
    isInverted && !!cta?.inverted
      ? { ...base, ...cta.inverted.hover }
      : { ...base, ...cta.hover };
  const active =
    isInverted && !!cta?.inverted
      ? { ...base, ...cta.inverted.active }
      : { ...base, ...cta.active };
  const alert = { ...base, ...cta.alert };
  const disabled = { ...base, ...cta.disabled };

  const getState = (state: any): CSS => css`
    background-color: ${!state.color ? 'unset' : state.color};
    border: none;

    /* Set text color, ensuring to override any nested semantic anchor global styles. */
    &,
    a {
      color: ${state.text};
    }

    &:not(.-disabled) {
      ${!!state.border &&
      css`
        /* If the cta has a border, offset the vertical padding
					so the height of the cta is equal to other CTAs without borders. */
        padding: ${CTA_PADDING.split(' ')
          .map((px: string, idx) =>
            idx === 0 ? `${parseInt(px) - CTA_BORDER_WIDTH}px` : px
          )
          .join(' ')};
        border: ${CTA_BORDER_WIDTH}px solid ${state.border};
      `}
    }
  `;

  return css`
    ${getState(base)}

    &:not(.-disabled) {
      &:hover,
      &.-hovered,
      &:focus {
        ${getState(hover)}
        text-decoration: none;
      }

      &:focus {
        ${mx.mimicFocus}
      }

      &:active {
        ${getState(active)}
      }
    }

    ${alert &&
    css`
      &.-alert {
        ${getState(alert)}
      }
    `}

    &.-disabled {
      ${getState(disabled)}
      cursor: not-allowed;
    }
  `;
};

// CTAs are driven by the `.cta` class name and modifiers
// "look like CTAs" by adding a className to them
//
// ! Don't use the .cta class names in your components!
// ! -- The Cta component just uses these under the hood,
// ! -- and has corresponding component props for all these options
export const classNameCtas = css`
  .${CTA_CLASS},
    .${CTA_CLASS}-primary,
    .${CTA_CLASS}-secondary,
    .${CTA_CLASS}-success,
    .${CTA_CLASS}-warning,
    .${CTA_CLASS}-disabled,
    .${CTA_CLASS}-outline,
    .${CTA_CLASS}-plain,
    .${CTA_CLASS}-mute {
    ${mx.buttonReset};
    font-size: 22px;
    font-weight: 600;
    line-height: 1.6;
    display: inline-flex;
    align-items: center;
    outline: none;
    padding: ${CTA_PADDING};
    text-align: center;
    border-width: ${CTA_BORDER_WIDTH};
    border-style: solid;
    border-radius: ${styleConstants.radius.small};
    margin: 0;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    user-select: none;

    /* Emulates 'press down' */
    &:not(.-plain):not(.-disabled):active {
      top: 2px;
    }

    &.--full-width {
      justify-content: center;
    }
  }

  &:disabled {
    border: 0;
    background-color: #f0f0f0;
    color: #38434d;
  }

  .${CTA_CLASS} {
    ${({ theme }) => {
      const ctas = styleConstants.ctas;

      return css`
        /* --------------------------------
				Primary (by default) */

        &-primary {
          ${getCtaStyles(ctas.primary, false)}

          &.-inverted {
            ${getCtaStyles(ctas.primary, true)}
          }
        }

        /* -------------------------------- */

        &-secondary {
          ${getCtaStyles(ctas.secondary, false)}

          &.-inverted {
            ${getCtaStyles(ctas.secondary, true)}
          }
        }

        &-warning {
          ${getCtaStyles(ctas.warning, false)}

          &.-inverted {
            ${getCtaStyles(ctas.warning, true)}
          }
        }

        &-success {
          ${getCtaStyles(ctas.success, false)}

          &.-inverted {
            ${getCtaStyles(ctas.success, true)}
          }
        }

        &-outline {
          ${getCtaStyles(ctas.outline, false)}

          &.-inverted {
            ${getCtaStyles(ctas.outline, true)}
          }
        }

        &-plain {
          ${getCtaStyles(ctas.plain, false)}

          &.-inverted {
            ${getCtaStyles(ctas.plain, true)}
          }

          /* Link alike cta that has a underline */
          &.-linkAlike {
            padding: 0;
            text-decoration: underline;
            text-decoration-color: inherit;
          }

          &.-withoutPadding {
            padding: 0;
          }
        }

        &-mute {
          ${getCtaStyles(ctas.mute, false)}

          &.-inverted {
            ${getCtaStyles(ctas.mute, true)}
          }

          /* Link alike cta that has a underline */
          &.-linkAlike {
            padding: 0;
            text-decoration: underline;
            text-decoration-color: inherit;
          }

          &.-withoutPadding {
            padding: 0;
          }
        }
      `;
    }}
  }
`;

// -----------------------------------

// Wraps the component purely so we can
// target it from other Styled Components
export const Cta = styled.div`
  display: inline-block;

  > .${CTA_CLASS} {
    /* Width 100% so this div controls the CTA tag (a, button, span) width */
    width: 100%;
  }
`;

export const Content = styled.span<{
  iconAlign: 'left' | 'right';
  size: 'xsmall' | 'small' | 'medium' | 'large';
}>`
  position: relative;
  display: flex;
  align-items: center;

  ${({ size }) => css`
    font-size: ${CTA_SIZE[size] ?? '16px'};
  `}

  // For ICONS
	.icon {
    right: auto;
    margin-left: 8px;
    align-self: center;
  }

  ${({ iconAlign }) =>
    iconAlign === 'left' &&
    css`
      flex-direction: row-reverse;

      // For ICONS
      .icon {
        margin: 0 8px 0 0;
      }
    `};

  &&& > a {
    display: inherit;
    flex-direction: inherit;
  }
`;

export const CtaContainer = styled.div<{
  direction?: string;
  margin?: string;
  padding?: string;
}>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .cta__wrapper {
    margin-right: 10px;

    &:last-child {
      margin-right: 0px;
    }

    /* &.--full-width {
      width: 100%;
    } */
  }

  &.--column {
    & > div {
      width: 100%;
      height: auto;
      margin: 0 0 10px;
    }

    .cta {
      display: flex;
      justify-content: center;
    }
  }

  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;
