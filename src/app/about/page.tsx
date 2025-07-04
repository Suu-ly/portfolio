import ContactButton from "@/components/contact-button";
import Footer from "@/components/footer";
import ImageFadeIn from "@/components/image-fade-in";
import { MaxWidthWrapper } from "@/components/page-template";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

const EXPERIENCES = [
  {
    company: "Tiktok",
    role: "Frontend Developer",
    period: "Jul 2025 — Present",
    src: "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/tiktok.jpg",
    alt: "Tiktok logo",
  },
  {
    company: "InVEST NTU",
    role: "Frontend Developer",
    period: "Jan 2025 — Jul 2025",
    src: "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/ntu.jpg",
    alt: "NTU logo",
    isIntern: true,
  },
  {
    company: "Mediatek",
    role: "Full-Stack Developer",
    period: "Dec 2023 — May 2024",
    src: "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/mediatek.jpg",
    alt: "Mediatek logo",
    isIntern: true,
  },
  {
    company: "Keppel Land",
    role: "UI/UX, Mobile Developer",
    period: "May 2023 — Jul 2023",
    src: "https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/keppel.jpg",
    alt: "Keppel logo",
    isIntern: true,
  },
];

export const metadata: Metadata = {
  title: "About",
  description: "Find out a little bit more about me!",
  openGraph: {
    url: "/about",
  },
};

export default function About() {
  return (
    <div className="flex min-h-svh flex-col">
      <main className="grow">
        <MaxWidthWrapper className="grid grid-cols-2 gap-8 pt-24 pb-16 lg:gap-16 lg:py-32">
          <div className="col-span-2 grid grid-cols-[auto_1fr] gap-8 lg:gap-16">
            <div className="animate-slide-in col-span-2 sm:col-auto sm:row-span-2 sm:self-center">
              <ImageFadeIn
                alt="A man smiling in a white shirt with a crossbody bag."
                src="https://poaggtkhfuxbvwysdoyo.supabase.co/storage/v1/object/public/images/me.JPG"
                width={256}
                height={256}
                sizes="(max-width: 639px) 128px, 256px"
                className="size-32 rounded-full object-cover sm:size-64"
                priority
              />
            </div>
            <h1 className="font-display animate-slide-in animation-delay-75 col-span-2 text-5xl font-bold text-zinc-900 sm:col-auto lg:text-6xl dark:text-zinc-50">
              A little about me.
            </h1>
            <p className="animate-slide-in animation-delay-150 col-span-2 max-w-xl text-zinc-700 sm:col-auto lg:text-lg dark:text-zinc-300">
              Hey there! I&apos;m Lance, a full-stack developer based in
              Singapore with a love for design. Having an art background, I used
              to think I wanted to go into UI/UX design, but along the way, I
              discovered that bringing designs to life through code was way more
              fun. Now, I build things with a strong eye for design, a close
              attention to detail, and a love for crafting interactions that
              feel smooth and natural.
            </p>
          </div>
          <Separator className="animate-slide-in animation-delay-225 col-span-2 dark:bg-zinc-800" />
          <h2 className="font-display animate-slide-in animation-delay-225 col-span-2 text-2xl font-bold text-zinc-900 sm:col-auto dark:text-zinc-50">
            Past Work Experience
          </h2>
          <div className="animate-slide-in animation-delay-300 col-span-2 divide-zinc-200 sm:col-auto sm:divide-y dark:divide-zinc-800">
            {EXPERIENCES.map((experience, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 lg:flex-row lg:items-center lg:justify-between lg:py-8"
              >
                <div className="order-1 flex items-center gap-4 lg:order-none">
                  <ImageFadeIn
                    width={48}
                    height={48}
                    src={experience.src}
                    alt={experience.alt}
                    className="rounded"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                      {experience.role}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {experience.company}
                      {experience.isIntern && " · Intern"}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {experience.period}
                </p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </main>
      <Footer>
        <ContactButton />
      </Footer>
    </div>
  );
}
