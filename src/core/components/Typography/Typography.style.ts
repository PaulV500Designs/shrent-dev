import styled, { css } from 'styled-components';

// ------------------------------------

export const UNIFORM_MARGIN = '0 0 1em 0';

const uniformMarginCss: any = css`
  margin: ${UNIFORM_MARGIN};

  &:first-of-type {
    margin-top: 0;
  }
`;

// ------------------------------------
// Core typography styles

// For Display Typography No explicit margin-top set here as it should always be first child
export const displayOne: any = css`
  font-size: 96px;
  font-weight: 600;
  line-height: 144px;

  /*  */
  margin: 0 0 32px;
`;

export const displayTwo: any = css`
  font-size: 88px;
  font-weight: 600;
  line-height: 132px;

  /*  */
  margin: 0 0 32px;
`;

export const displayThree: any = css`
  font-size: 72px;
  font-weight: 600;
  line-height: 108px;

  /*  */
  margin: 0 0 32px;
`;

export const displayFour: any = css`
  font-size: 56px;
  font-weight: 600;
  line-height: 84px;

  /*  */
  margin: 0 0 32px;
`;

// Heading Typography

export const headingOne: any = css`
  font-size: 40px;
  font-weight: 600;
  line-height: 60px;
`;

export const headingTwo: any = css`
  font-size: 50px;
  font-weight: 600;
  line-height: 68px;
`;

export const headingThree: any = css`
  font-size: 28px;
  font-weight: 600;
  line-height: 42px;
`;

export const headingFour: any = css`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
`;

export const headingFive: any = css`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
`;

export const headingSix: any = css`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const subHeading: any = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

export const subHeadingSmall: any = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

export const paragraph: any = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const paragraphLight: any = css`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
`;

export const paragraphLighter: any = css`
  font-size: 16px;
  font-weight: 250;
  line-height: 24px;
`;

export const paragraphBold: any = css`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const paragraphBolder: any = css`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

export const body = css`
  font-size: 16px;
  line-height: 24px;
`;

export const bodySmall: any = css`
  font-size: 14px;
  line-height: 20px;
`;

export const caption: any = css`
  font-size: 12px;
  line-height: 20px;
  text-align: left;
`;

// For sample CUSTOM typography only
export const SampleCustom = styled.div`
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  font-weight: 600;
`;

// ------------------------------------
// Class-driven typography.
// Makes all typography styles accessible via class name.
//
// NOTE: Don't use these in your components! Use the styled component
// exports available in the adjacent 'Typography.tsx' file

export const TYPOGRAPHY_CLASS_PREFIX = 'typography--';

// NOTE: Changing or adding classNames here would also entail
// like changes in the adjacent Typography.tsx file
export const classNameTypography: any = css`
  .${TYPOGRAPHY_CLASS_PREFIX}displayOne {
    ${displayOne}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}displayTwo {
    ${displayTwo}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}displayThree {
    ${displayThree}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}displayFour {
    ${displayFour}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}headingOne {
    ${uniformMarginCss}
    ${headingOne}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}headingTwo {
    ${uniformMarginCss}
    ${headingTwo}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}headingThree {
    ${uniformMarginCss}
    ${headingThree}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}headingFour {
    ${uniformMarginCss}
    ${headingFour}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}headingFive {
    ${uniformMarginCss}
    ${headingFive}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}headingSix {
    ${uniformMarginCss}
    ${headingSix}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}subHeading {
    ${uniformMarginCss}
    ${subHeading}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}subHeadingSmall {
    ${uniformMarginCss}
    ${subHeadingSmall}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}paragraph {
    ${uniformMarginCss}
    ${paragraph}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}paragraphLight {
    ${uniformMarginCss}
    ${paragraphLight}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}paragraphLighter {
    ${uniformMarginCss}
    ${paragraphLighter}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}paragraphBold {
    ${uniformMarginCss}
    ${paragraphBold}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}paragraphBolder {
    ${uniformMarginCss}
    ${paragraphBolder}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}body {
    ${uniformMarginCss}
    ${body}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}bodySmall {
    ${uniformMarginCss}
    ${bodySmall}
  }

  .${TYPOGRAPHY_CLASS_PREFIX}caption {
    ${uniformMarginCss}
    ${caption}
  }

  .paragraph--small {
    font-size: 14px;
  }
`;

// ------------------------------------
// Global styles

export const globalTypography: any = css`
  /* ------------------------------------
	Default site-wide fonts and semantic typography */

  h1 {
    ${displayOne}
  }

  h2 {
    ${headingOne}
  }

  h3 {
    ${headingThree}
  }

  h4 {
    ${headingFour}
  }

  h5 {
    ${headingFive}
  }

  h6 {
    ${headingSix}
  }

  p {
    ${paragraph}
  }

  caption {
    ${caption}
  }

  /* ------------------------------------
	Lists */

  /* Shared logic between ordered/unordered lists */
  ul,
  ol {
    padding-left: 17px;

    li {
      /* Additional padding is applied here for a total
			of 40px so that <ol/> list items are offset
			by the additional 10px for nicer alignment. */
      padding-left: 10px;
      position: relative;
      margin-top: 8px;
      line-height: 24px;

      &:first-of-type {
        margin-top: 0;
      }
    }

    /* For nested list elements, have their margins a little
		tighter so they are visually a little more grouped with
		the list item they are nested within. */
    ul,
    ol {
      > li:first-of-type {
        margin-top: 4px;
      }
    }
  }

  ul {
    /* Fully replacing the default bullet styles so they can
		visually be much tighter (smaller) and spaced differently. */
    list-style: none;

    > li {
      &::before {
        position: absolute;
        content: '·';
        font-size: 50px;
        left: -18px;
        top: 11px;
        line-height: 0;

        /* So the content in any given pseudo element are
				not selectable with the cursor. */
        pointer-events: none;
      }

      ul > li {
        &::before {
          content: 'o';
          left: -12px;
          font-size: 10px;
        }

        /* Note the selector isn't 'ul > li' here, as nested
				levels 3 and below will share the same ligature. */
        ul li::before {
          content: '■';
          font-size: 8px;
        }
      }
    }
  }

  /* ------------------------------------
	Margins */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    ${uniformMarginCss}
  }
`;
