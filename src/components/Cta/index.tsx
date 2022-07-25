// TODO
// - Loading state
// - Alert modifier
// - Disabled/inverted styles clash
// - CTA base style background-colour transition

// - <Button/> and Cosmetic CTAs retaining focus state on click?
// - full-width "plain" and/or "unstyled" responsive/styles?
// - should/could CtaContainer be bundled in this component folder?

// - CtaContainer sub-component?

// - NOTE: RTE CTAs dont support
// `-- Icons
// 	-- Loading
//  -- disabled href navigation supression (just styles)
// - "RTE" in 'All Types' story toggle to exclude/hide RTE row when not supported? (and print why?)

import cx from 'classnames';
import React from 'react';

// import Icon from 'app/components/Icon/Icon';
import { executeCallback } from '@/helpers/common-utils';

import * as S from './Cta.style';

// ------------------------------------------

// TDOO: Used to the size of the icons
// const ICON_SIZES = {
//   small: 16,
//   medium: 20,
//   large: 24,
// };

// ------------------------------------------

type onClickType =
  | React.MouseEvent<HTMLButtonElement>
  | React.MouseEvent<HTMLAnchorElement>
  | React.MouseEvent<HTMLSpanElement>;

export interface CtaProps {
  className?: string;
  ctaStyle?:
    | 'primary'
    | 'secondary'
    | 'plain'
    | 'outline'
    | 'mute'
    | 'warning'
    | 'success'
    | 'disabled';
  ctaType?: 'anchor' | 'button' | 'cosmetic' | 'unstyled';
  size?: 'xsmall' | 'small' | 'medium' | 'large';

  // Flags to change the way the CTA renders
  isAlert?: boolean;
  isInverted?: boolean;
  /** For 'plain' style only, render the cta component like a inline hyper link without padding */
  isLinkAlike?: boolean;
  /** For 'plain' style only, remove padding from the cta component */
  isWithoutPadding?: boolean;
  // Set CTA for full width in the container
  fullWidth?: boolean;

  // CTA states
  isLoading?: boolean;
  isDisabled?: boolean;
  // Feasibly useful for cosmetic CTAs
  isHovered?: boolean;

  // Icon related
  icon?: string;
  iconAlign?: 'left' | 'right';
  // iconProps?: Omit<IconProps, 'name'>;

  // Semantic tag contextual props
  href?: string;
  target?: string;
  buttonType?: 'button' | 'submit' | 'reset';
  isDownload?: boolean;

  style?: React.ReactNode;

  // Events
  onClick?: (event: onClickType) => void;

  // Contents
  children?: string | React.ReactNode;
}

// ------------------------------------------

const Cta = ({
  className = '',
  ctaStyle = 'primary',
  ctaType = 'anchor',
  size = 'medium',
  isLoading = false,
  isAlert,
  isInverted,
  isDisabled,
  isHovered,
  isLinkAlike = false,
  isWithoutPadding = false,
  icon,
  iconAlign = 'right',
  // iconProps = {} as IconProps,
  href,
  target,
  buttonType,
  isDownload,
  onClick,
  children,
  fullWidth = false,

  // Props passthrough to SemanticCta
  // (e.g. event handlers, aria-tags, data-attributes)
  ...props
}: CtaProps) => {
  const isUnstyled = ctaType === 'unstyled';
  const isAnchor = ctaType === 'anchor' || isUnstyled;
  const isCosmetic = ctaType === 'cosmetic';
  const isButton = ctaType === 'button';

  // Core semantic tag the CTA will render as.
  const SemanticCta: any = isButton ? 'button' : 'a';

  // When setting disabled=true, return true, otherwise return undefined (as opposed to false)
  // This is so the relevant attribute (`disabled` or `aria-disabled` is only conditionally present
  // as opposed to 'always present and either set to true/false'. Cleaner DOM output this way.
  const disabledState = isDisabled || isLoading ? true : undefined;

  const ctaProps = {
    href: isAnchor ? href : isUnstyled ? '' : undefined,
    target: isAnchor ? target : undefined,
    tabIndex: isCosmetic ? 0 : undefined,
    disabled: isButton ? disabledState : undefined,
    'aria-disabled': !isButton ? disabledState : undefined,
    className: !isUnstyled
      ? cx(S.CTA_CLASS, {
          // Styles --------------------------------
          'cta-primary': ctaStyle === 'primary',
          'cta-secondary': ctaStyle === 'secondary',
          'cta-plain': ctaStyle === 'plain',
          'cta-outline': ctaStyle === 'outline',
          'cta-mute': ctaStyle === 'mute',
          'cta-warning': ctaStyle === 'warning',
          'cta-success': ctaStyle === 'success',

          // States & flags ------------------------
          '-alert': isAlert,
          '-disabled': isDisabled ?? isLoading,
          '-hovered': isHovered,
          '-inverted': isInverted,
          '-linkAlike': isLinkAlike,
          '-withoutPadding': isWithoutPadding,
          '--full-width': fullWidth,
        })
      : undefined,
    onClick: (event: onClickType) => {
      // Suppress `href` navigation for disabled hyperlinks
      if (isDisabled && isAnchor) {
        event.preventDefault();
      }

      executeCallback(onClick, event);
    },
    download: isDownload,
    ...props,
  };

  // Optionally adjacent content icon
  // TEMP icon
  const ctaIcon = icon ? (
    <span>ICON</span>
  ) : // <Icon className="icon" src={icon} size={size} />
  null;
  /**
   *  change the <S.Cta> into <S.Cta className="cta__wrapper" style={{ width: fullWidth ? '100%' : 'auto' }}>
   *  const CtaWrapperClassName = cx('cta__wrapper', { '--full-width': fullWidth });
   */
  const CtaWrapperClassName = cx('cta__wrapper', className);

  return (
    <S.Cta className={CtaWrapperClassName}>
      {/* Override some select CTA styles to facilitate utilising <Link/>
			component for the Experience Ediotr whilst retaining core CTA style parity. */}
      {/* Cta content (text or encapsulated link) */}
      <SemanticCta {...ctaProps}>
        <S.Content {...{ iconAlign, size }}>
          {children}
          {ctaIcon}
        </S.Content>
      </SemanticCta>
    </S.Cta>
  );
};

export default Cta;
