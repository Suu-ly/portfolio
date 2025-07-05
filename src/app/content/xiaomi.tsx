import {
  DesktopScreenshot,
  MobileScreenshots,
  PageTemplate,
  VideoTablet,
} from "@/components/page-template";
import { PageProperties } from "@/lib/types";

export const properties: PageProperties = {
  about:
    "A mock pamphlet website designed as part of a school project. The website's purpose is to communicate the benefits of the chosen product, in this case Xiaomi's Smart Air Purifier 4, and sell the product to the user.",
  title: "Xiaomi",
  date: new Date(2024, 8),
  type: "School Project",
  coverImg:
    "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Xiaomi.png",
  coverAlt:
    "Homepage of the mock website selling Xiaomi's Smart Air Purifier 4.",
  roles: ["Designer", "Frontend developer"],
  tools: ["React"],
  tagline: "Mock promotional website for Xiaomi",
  url: "https://mi-coral.vercel.app/",
};

export default function Outbound() {
  return (
    <PageTemplate {...properties}>
      <VideoTablet src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Xiaomi_showcase.mp4" />
      <MobileScreenshots
        first="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Xiaomi_mobile_1.png"
        firstAlt="Mobile screenshot of a portion of the home page showing limited time offers."
        second="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Xiaomi_mobile_2.png"
        secondAlt="Mobile screenshot of the help and FAQ page."
        third="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Xiaomi_mobile_3.png"
        thirdAlt="Mobile screenshot of the sustainability goals of Xiaomi."
      />
      <DesktopScreenshot
        src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Xiaomi_1.png"
        alt="Screenshot of the blog page of website."
      />
      <DesktopScreenshot
        src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Xiaomi_2.png"
        alt="Screenshot of product page of website."
      />
    </PageTemplate>
  );
}
