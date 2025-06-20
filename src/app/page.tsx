import RecentWorks from "./recent-works";

const CARD_ARRAY = [
  {
    title: "Outbound",
    year: 2025,
    type: "Personal",
    src: "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Outbound.png",
    alt: "Homepage of the Outbound trip planning website.",
  },
  {
    title: "InVEST Data Portal",
    year: 2025,
    type: "NTU",
    src: "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Invest.png",
    alt: "Screenshot of a map displaying various types of geological data like fault lines and volcanoes.",
  },
  {
    title: "Xiaomi Mock Site",
    year: 2024,
    type: "School",
    src: "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Xiaomi.png",
    alt: "Homepage of the mock website selling Xiaomi's Smart Air Purifier 4.",
  },
  {
    title: "STARS Redesign",
    year: 2024,
    type: "School",
    src: "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Stars.png",
    alt: "Screenshot of a redesigned timetable planner for NTU.",
  },
  {
    title: "Garage@EEE",
    year: 2023,
    type: "School",
    src: "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Garage.png",
    alt: "Homepage of the Garage@EEE website, a makerspace for EEE students in NTU.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen flex items-center justify-center">
        Welcome
      </div>
      <RecentWorks works={CARD_ARRAY} />
      <div className="h-screen w-screen flex items-center justify-center">
        Contact me
      </div>
    </main>
  );
}
