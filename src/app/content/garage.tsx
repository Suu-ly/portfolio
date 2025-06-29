import { PageTemplate, VideoTablet } from "@/components/page-template";
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
  tagline: "How can we showcase our club to interested students?",
  url: "https://garage-eee.com/",
};

export default function Outbound() {
  return (
    <PageTemplate {...properties}>
      <VideoTablet src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Garage_showcase.mp4" />
    </PageTemplate>
  );
}
