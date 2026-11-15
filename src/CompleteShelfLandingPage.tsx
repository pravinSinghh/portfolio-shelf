import {
  usePageTypography,
  type PageTypographyProps,
} from "./shaders/landing-pages/pageTypography";
import {
  LandingPageFrame,
  type LandingPageProps,
} from "./shaders/landing-pages/LandingPageFrame";

export function CompleteShelfLandingPage(
  props: LandingPageProps & PageTypographyProps,
) {
  const { headingFont, bodyFont, headingWeight, bodyWeight, primaryColor, headingSize, bodySize, headingLetterSpacing, ...frame } = props;
  const customization = usePageTypography(
    {
      headingFont: "iowan-old-style",
      bodyFont: "inter",
      headingWeight: "400",
      bodyWeight: "400",
      primaryColor: "#c87046",
      headingSize: 60,
      bodySize: 12,
      headingLetterSpacing: -0.055,
    },
    {
      headingFont,
      bodyFont,
      headingWeight,
      bodyWeight,
      primaryColor,
      headingSize,
      bodySize,
      headingLetterSpacing,
    },
  );

  return (
    <LandingPageFrame
      {...frame}
      customization={customization}
      title="Pravin Singh Rajbhar — Portfolio Volumes"
      sourceUrl="/landing-pages/complete-shelf-v2.html"
    />
  );
}
