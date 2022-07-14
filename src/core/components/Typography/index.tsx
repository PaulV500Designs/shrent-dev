// TODO
// - vanilla tables
// - Theme compatibility with `color` prop
// - better way to consolidate typography class/style/name definitions? Between .style.ts and .tsx files? Separate schema file?

import React from 'react';
import cx from 'classnames';
import {
  FlattenSimpleInterpolation as CSS,
  StyledComponent,
} from 'styled-components';
/* eslint-disable-next-line no-restricted-imports */

import * as S from './Typography.style';

// ------------------------------------
// Types

type TypographyColorType =
  | 'default'
  | 'primary'
  | 'subdued'
  | 'active'
  | 'error'
  | 'success';

// const colors = {
//   primary: '#3704FF',
//   default: '#000',
//   subdued: '#A9B1B8',
//   active: '',
//   error: '',
//   success: '',
// };

interface IProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  // ---------------------
  // Generaly available (e.g. HOC/inherent); not explicitly passed

  // theme: IThemeObject;
  children?: string | React.ReactNode;

  // ---------------------
  // These two props are normalised; `tag` prop takes precedent

  /* Semantic tag prop override - Styled Components convention.
	(This is used by to set defaults and pass down to the underlying Styled Component.) */
  as?: string;
  /* Semantic tag prop override
	(This is used to retain semantic tag overrides at the Typography component export level.) */
  tag?: string;

  // ---------------------
  // CSS related props
  /** specify Paragraph Typography fontSize small || regular */
  paragraphSize?: string;

  /* Theme-driven typography CSS color. Note the 'default' is set in GlobalStyles. */
  color?: TypographyColorType;
  /* Margin CSS string. */
  margin?: string;
  /* Text-decoration CSS string. */
  textDecoration?: string;
  /* Font style CSS string. Normal/Italic */
  fontStyle?: string;
  /* CSS `display: inline-block`. */
  inline?: boolean;
  /* CSS string template to pass into Styled Component. */
  style?: CSS;

  // ---------------------
  // Custom Typo component (BYO StyledComponent)
  StyledComponent?: StyledComponent<any, any, {}, never>;

  // ---------------------
  // Other props pertaining to attributes applied to the final tag

  /* CSS className selector as means to apply styles text field. */
  classNameIdentifier?: string;
  /* Generic className prop passthrough */
  className?: string;
}

/**
 * Dynamically returns either a styled component for standard/default rendering.
 * (Notably these will be visually indistinguishable).
 */
const DynamicTypographyComponent = ({
  // DynamicTypographyComponent proxy component
  as: asProp,
  style,
  className,
  classNameIdentifier,

  // ITypoProps
  tag: tagProp,
  color,
  margin,
  textDecoration = 'none',
  fontStyle = 'normal',
  paragraphSize = 'regular',
  inline,
  children,

  // 'Custom' Typo component
  // StyledComponent,

  ...props
}: IProps) => {
  // Default tag wrappers should be divs
  const Tag: any = tagProp || asProp || 'div';
  // 'div' by default but always overriden by `tag` prop, below

  className = cx(
    className,
    `${S.TYPOGRAPHY_CLASS_PREFIX}${classNameIdentifier}`,
  );

  const inlineStyles = {
    // color: !!color ? colors[color] : colors.default,
    display: inline ? 'inline-block' : 'block',
    textDecoration,
    fontStyle,
    fontSize: paragraphSize === 'small' ? '13px' : '',
    margin,
  };

  // const Typography = DefaultTypography(StyledComponent, style);
  return (
    <Tag style={inlineStyles} {...{ className, ...props }}>
      {/* Enforce span tag here, as semantically the correct/intended tag is applied above */}
      {children}
    </Tag>
  );
};
export default DynamicTypographyComponent;
// ------------------------------------
// Core typography exports

export interface ITypoProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  tag?: string;
  color?: TypographyColorType;
  className?: string;
  margin?: string;
  textDecoration?: string;
  fontStyle?: string;
  paragraphSize?: string;
  inline?: boolean;
  children?: string | React.ReactNode;
  as?: string;
}

export const DisplayOne = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h1"
    classNameIdentifier="displayOne"
    style={S.displayOne}
    {...props}
  />
);

export const DisplayTwo = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h1"
    classNameIdentifier="displayTwo"
    style={S.displayTwo}
    {...props}
  />
);

export const DisplayThree = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h1"
    classNameIdentifier="displayThree"
    style={S.displayThree}
    {...props}
  />
);

export const DisplayFour = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h1"
    classNameIdentifier="displayFour"
    style={S.displayFour}
    {...props}
  />
);

export const HeadingOne = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h1"
    classNameIdentifier="headingOne"
    style={S.headingOne}
    {...props}
  />
);

export const HeadingTwo = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h2"
    classNameIdentifier="headingTwo"
    style={S.headingTwo}
    {...props}
  />
);

export const HeadingThree = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h3"
    classNameIdentifier="headingThree"
    style={S.headingThree}
    {...props}
  />
);

export const HeadingFour = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h4"
    classNameIdentifier="headingFour"
    style={S.headingFour}
    {...props}
  />
);

export const HeadingFive = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h5"
    classNameIdentifier="headingFive"
    style={S.headingFive}
    {...props}
  />
);

export const HeadingSix = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h6"
    classNameIdentifier="headingSix"
    style={S.headingSix}
    {...props}
  />
);

export const SubHeading = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h3"
    classNameIdentifier="subHeading"
    style={S.subHeading}
    {...props}
  />
);

export const SubHeadingSmall = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="h3"
    classNameIdentifier="subHeadingSmall"
    style={S.subHeadingSmall}
    {...props}
  />
);

export const Paragraph = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="p"
    classNameIdentifier="paragraph"
    style={S.paragraph}
    {...props}
  />
);

export const ParagraphLighter = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="p"
    classNameIdentifier="paragraphLighter"
    style={S.paragraphLighter}
    {...props}
  />
);

export const ParagraphLight = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="p"
    classNameIdentifier="paragraphLight"
    style={S.paragraphLight}
    {...props}
  />
);

export const ParagraphBold = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="p"
    classNameIdentifier="paragraphBold"
    style={S.paragraphBold}
    {...props}
  />
);

export const ParagraphBolder = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="p"
    classNameIdentifier="paragraphBolder"
    style={S.paragraphBolder}
    {...props}
  />
);

export const Body = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="p"
    classNameIdentifier="body"
    style={S.body}
    {...props}
  />
);

export const BodySmall = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="p"
    classNameIdentifier="bodySmall"
    style={S.bodySmall}
    {...props}
  />
);

export const Caption = (props: ITypoProps) => (
  <DynamicTypographyComponent
    as="div"
    classNameIdentifier="div"
    style={S.caption}
    {...props}
  />
);

// -------------------------------------------
// TODO: Implement this one in better way
// BYO StyledComponent
export const Custom = ({
  classNameIdentifier,
  ...props
}: Omit<ITypoProps, 'StyledComponent'> & {
  /** Required: BYO StyledComponent for custom styles. */
  StyledComponent?: StyledComponent<any, any, {}, never>;
  /** Require a manually specified identifier, as not all Custom Typo components will be equal. */
  classNameIdentifier: string;
  /** CSS style to pass to styled-component */
  style?: CSS;
}) => (
  <DynamicTypographyComponent
    classNameIdentifier={`custom__${classNameIdentifier}`}
    {...props}
  />
);
