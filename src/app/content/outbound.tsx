import {
  DesktopScreenshot,
  MobileScreenshots,
  PageTemplate,
  VideoPlayer,
  VideoTablet,
} from "@/components/page-template";
import { PageProperties } from "@/lib/types";

export const properties: PageProperties = {
  about:
    "Planning a trip can be tiring with the amount of information you have to look through. Outbound solves this through the use of a tinder-style interface and an easy to use itinerary planner to make trip planning effortless and fun.",
  title: "Outbound",
  date: new Date(2025, 5),
  type: "Personal",
  coverImg:
    "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Outbound.png",
  coverAlt: "Homepage of the Outbound trip planning website.",
  roles: ["Full-stack developer"],
  tools: ["Figma", "NextJS", "PostgreSQL", "Redis"],
  tagline: "Tinder-style trip planning",
  url: "https://outbound-one.vercel.app",
};

export default function Outbound() {
  return (
    <PageTemplate {...properties}>
      <VideoTablet src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Outbound_new_trip.mp4" />
      <MobileScreenshots
        first="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images//Outbound_home_mobile.png"
        firstAlt="Mobile screenshot of the Outbound trip planner's home screen"
        second="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images//Outbound_discover_mobile.png"
        secondAlt="Mobile screenshot of the Outbound trip planner's place discovery screen"
        third="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images//Outbound_trip_mobile.png"
        thirdAlt="Mobile screenshot of the Outbound trip planner's itinerary planner screen"
      />
      <VideoPlayer src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Outbound_planner.mp4" />
      <DesktopScreenshot
        src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Outbound_1.png"
        alt="Screenshot of itinerary planner."
      />
    </PageTemplate>
  );
}
