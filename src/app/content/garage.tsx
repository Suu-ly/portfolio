import {
  DesktopScreenshot,
  MobileScreenshots,
  PageTemplate,
  VideoTablet,
} from "@/components/page-template";
import { PageProperties } from "@/lib/types";

export const properties: PageProperties = {
  about:
    "The official website for NTU's Garage@EEE club, which showcases the events, projects and facilities of the club. The 'backend' of this website is made using Google Sheets, as we wanted club members to be able to easily update the content of the site without having to touch any code.",
  title: "Garage@EEE",
  date: new Date(2023, 5),
  type: "Club Project",
  coverImg:
    "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Garage.png",
  coverAlt:
    "Homepage of the Garage@EEE website, a makerspace for EEE students in NTU.",
  roles: ["Designer", "Frontend developer"],
  tools: ["React", "Apps Script"],
  tagline: "A platform to showcase club activities",
  url: "https://garage-eee.com/",
};

export default function Outbound() {
  return (
    <PageTemplate {...properties}>
      <VideoTablet src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Garage_showcase.mp4" />
      <MobileScreenshots
        first="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Garage_mobile_1.png"
        firstAlt="Mobile screenshot showing the projects undertaken by Garage members."
        second="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Garage_mobile_2.png"
        secondAlt="Mobile screenshot of a page about the internal orientation camp of Garage."
        third="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Garage_mobile_3.png"
        thirdAlt="Mobile screenshot of one of Garage's projects, Learnr."
      />
      <DesktopScreenshot
        src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Garage_1.png"
        alt="Screenshot of events page of website."
      />
    </PageTemplate>
  );
}
