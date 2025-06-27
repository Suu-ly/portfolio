import PageTemplate from "@/components/page-template";

export default function Outbound() {
  return (
    <PageTemplate
      about="Planning a trip can be tiring with the amount of information you have to look through. Outbound solves this through the use of a tinder-style interface and easy to use itinerary planner to make trip planning effortless and fun."
      title="Outbound"
      year="2025"
      type="Personal"
      coverImg="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/Outbound.png"
      coverAlt="Homepage of the Outbound trip planning website."
      roles={["Full-stack developer"]}
      tools={["Figma", "NextJS", "PostgreSQL", "Redis"]}
      tagline="How can we make trip planning fun?"
      url="https://outbound-one.vercel.app"
    >
      <div className="w-full rounded-xl bg-zinc-950 p-1.5 sm:rounded-2xl sm:p-2 lg:rounded-4xl lg:p-4">
        <div className="w-full overflow-hidden rounded-lg sm:rounded-xl lg:rounded-[20px]">
          <video
            loop
            muted
            playsInline
            autoPlay
            src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images//Outbound_new_trip.mp4"
          />
        </div>
      </div>
      <div className="overflow-hidden rounded-lg">
        <video
          loop
          muted
          playsInline
          autoPlay
          src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images//Outbound_trip_planner.mp4"
        />
      </div>
    </PageTemplate>
  );
}
