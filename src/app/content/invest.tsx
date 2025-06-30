import {
  DesktopScreenshot,
  PageTemplate,
  VideoTablet,
} from "@/components/page-template";
import { PageProperties } from "@/lib/types";

export const properties: PageProperties = {
  about:
    "The InVEST Data Portal is an interactive map which allows researchers, professors and students to quickly visualise and download a multitude of different geographic features. My role involves designing a maintainable and flexible solution to allow for the variety of different data types to easily be added and filtered.",
  title: "InVEST Data Portal",
  date: new Date(2025, 1),
  type: "InVEST NTU",
  coverImg:
    "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Invest.png",
  coverAlt:
    "Screenshot of a map displaying various types of geological data like fault lines and volcanoes.",
  roles: ["Frontend developer"],
  tools: ["NextJS", "PostGIS"],
  tagline: "Portal for geographic data visualisation",
  url: "https://map-green.vercel.app/",
};

export default function Outbound() {
  return (
    <PageTemplate {...properties}>
      <VideoTablet src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Invest_showcase.mp4" />
      <DesktopScreenshot
        src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Invest_map.png"
        alt="Screenshot of the map with a fault line highlighted."
      />
      <DesktopScreenshot
        src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Invest_publications.png"
        alt="Screenshot of a page showing publications related to the data presented on the website."
      />
    </PageTemplate>
  );
}
