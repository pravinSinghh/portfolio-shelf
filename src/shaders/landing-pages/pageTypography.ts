import { useMemo, type CSSProperties } from "react";

export type PageTypographyProps = {
  headingFont?: string;
  bodyFont?: string;
  headingWeight?: string | number;
  bodyWeight?: string | number;
  primaryColor?: string;
  headingSize?: number;
  bodySize?: number;
  headingLetterSpacing?: number;
};

export type LandingPageCustomization = PageTypographyProps;

const defaultTypography: Required<PageTypographyProps> = {
  headingFont: "iowan-old-style",
  bodyFont: "inter",
  headingWeight: "400",
  bodyWeight: "400",
  primaryColor: "#c87046",
  headingSize: 60,
  bodySize: 12,
  headingLetterSpacing: -0.055,
};

export function splitTypographyProps(
  props: PageTypographyProps & Record<string, unknown>,
) {
  const {
    headingFont,
    bodyFont,
    headingWeight,
    bodyWeight,
    primaryColor,
    headingSize,
    bodySize,
    headingLetterSpacing,
    ...frame
  } = props;
  return [
    { headingFont, bodyFont, headingWeight, bodyWeight, primaryColor, headingSize, bodySize, headingLetterSpacing },
    frame,
  ] as const;
}

export function usePageTypography(
  base: PageTypographyProps,
  overrides: PageTypographyProps,
) {
  return useMemo(
    () => ({ ...defaultTypography, ...base, ...overrides }),
    [base, overrides],
  );
}

export function applyPageCustomization(
  frame: HTMLIFrameElement | null,
  customization?: LandingPageCustomization,
) {
  const document = frame?.contentDocument;
  if (!document || !customization) return;
  document.getElementById("threeui-page-customization")?.remove();
  const style = document.createElement("style");
  style.id = "threeui-page-customization";
  style.textContent = customizationCss(customization);
  document.head.appendChild(style);
}

export function postPageCustomization(
  frame: HTMLIFrameElement | null,
  customization?: LandingPageCustomization,
) {
  if (!customization) return;
  frame?.contentWindow?.postMessage(
    { type: "threeui-page-customization", customization },
    "*",
  );
}

function customizationCss(customization: LandingPageCustomization) {
  const values = { ...defaultTypography, ...customization };
  return `:root {
    --threeui-heading-font: ${values.headingFont};
    --threeui-body-font: ${values.bodyFont};
    --threeui-heading-weight: ${values.headingWeight};
    --threeui-body-weight: ${values.bodyWeight};
    --threeui-primary-color: ${values.primaryColor};
    --threeui-heading-size: ${values.headingSize}px;
    --threeui-body-size: ${values.bodySize}px;
    --threeui-heading-letter-spacing: ${values.headingLetterSpacing}em;
  }`;
}
