import ContactButton from "@/components/contact-button";
import Footer from "@/components/footer";
import HelloThere from "@/components/hello-there";
import { MaxWidthWrapper } from "@/components/page-template";
import ProjectCard from "@/components/project-card";
import fs from "fs";
import { join } from "path";

export default async function Home() {
  const allSlugs = fs
    .readdirSync(join(process.cwd(), "src/app/content/"))
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.slice(0, -4));
  const allProjects = await Promise.all(
    allSlugs.map(async (val) => ({
      slug: val,
      importVal: await import(`@/app/content/${val}.tsx`),
    })),
  );
  allProjects.sort(
    (a, b) => b.importVal.properties.date - a.importVal.properties.date,
  );

  return (
    <div className="flex min-h-svh flex-col">
      <main className="grow space-y-32 overflow-x-hidden pt-32 pb-8 sm:pb-16 lg:py-32">
        <MaxWidthWrapper className="flex w-full flex-col justify-center p-4">
          <div className="animate-slide-in mb-6 self-start">
            <div className="animate-wiggle self-start">
              <HelloThere />
            </div>
          </div>
          <h1 className="font-display animate-slide-in text-main mb-8 text-6xl font-bold lg:text-8xl">
            Lance Yeo
          </h1>
          <p className="animate-slide-in animation-delay-75 mb-8 text-2xl font-medium text-zinc-800 lg:mb-12 lg:text-4xl dark:text-zinc-200">
            I&apos;m full-stack dev and designer that enjoys building things
            that feel <i className="text-accent">just right</i>.
          </p>
          <p className="animate-slide-in animation-delay-150 text-muted lg:text-xl">
            Currently working as a frontend developer at{" "}
            <span className="whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="82"
                fill="none"
                viewBox="0 0 81 82"
                className="inline size-4 flex-shrink-0 translate-y-[10.5%] align-baseline"
              >
                <g
                  fillRule="evenodd"
                  clipPath="url(#tiktok-logo-clip)"
                  clipRule="evenodd"
                >
                  <path
                    fill="#25F4EE"
                    d="M54.618 5.11A18.6 18.6 0 0 1 54.04.5H40.789v52.65c0 6.071-4.901 10.993-10.948 10.993-6.046 0-10.948-4.922-10.948-10.993s4.902-10.993 10.948-10.993c1.208 0 2.37.197 3.457.56V28.512a25 25 0 0 0-3.457-.24c-13.684 0-24.777 11.138-24.777 24.878S16.156 78.029 29.84 78.029c13.492 0 24.472-10.828 24.778-24.3v-26.94A31.46 31.46 0 0 0 72.48 32.32V19.014c-8.599 0-15.823-5.91-17.863-13.904"
                  ></path>
                  <path
                    className="fill-black dark:fill-white"
                    d="M58.074 8.583a18.6 18.6 0 0 1-.576-4.61H44.245v52.649c0 6.072-4.902 10.993-10.948 10.993s-10.949-4.921-10.949-10.993c0-6.07 4.902-10.993 10.949-10.993 1.208 0 2.37.197 3.457.56V31.984a25 25 0 0 0-3.457-.24c-13.685 0-24.778 11.138-24.778 24.878s11.093 24.879 24.778 24.879c13.491 0 24.471-10.827 24.777-24.3V30.262a31.46 31.46 0 0 0 17.863 5.532V22.487c-8.598 0-15.822-5.91-17.863-13.904"
                  ></path>
                  <path
                    fill="#FE2C55"
                    d="M54.365 3.97q.109.576.252 1.139a18.53 18.53 0 0 0 6.664 10.099A18.47 18.47 0 0 1 57.497 3.97zM72.48 22.16v10.16a31.46 31.46 0 0 1-17.863-5.533v26.94c-.306 13.473-11.286 24.3-24.777 24.3a24.6 24.6 0 0 1-15.712-5.64c4.544 5.563 11.443 9.112 19.168 9.112 13.492 0 24.471-10.827 24.778-24.3V30.26a31.46 31.46 0 0 0 17.862 5.533V22.485c-1.18 0-2.336-.112-3.456-.325m-39.183 9.582v10.973a10.9 10.9 0 0 0-3.457-.56c-6.047 0-10.949 4.922-10.949 10.993 0 3.924 2.047 7.367 5.128 9.312a10.97 10.97 0 0 1-1.671-5.84c0-6.07 4.901-10.992 10.948-10.992 1.208 0 2.37.196 3.457.56V31.981a25 25 0 0 0-3.456-.24"
                  ></path>
                </g>
                <defs>
                  <clipPath id="tiktok-logo-clip">
                    <path fill="#fff" d="M0 .5h81v81H0z"></path>
                  </clipPath>
                </defs>
              </svg>{" "}
              <a
                href="https://www.tiktok.com/"
                rel="noreferrer"
                target="_blank"
                className="after:bg-body hover:text-body relative rounded transition after:absolute after:top-full after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
              >
                Tiktok
              </a>
              .
            </span>
          </p>
        </MaxWidthWrapper>
        <MaxWidthWrapper>
          <h2 className="font-display animate-slide-in animation-delay-225 mb-8 text-2xl font-bold text-zinc-900 lg:mb-16 dark:text-zinc-50">
            Recent Works
          </h2>
          <div className="animate-slide-in animation-delay-300 grid gap-4 sm:grid-cols-2 sm:gap-y-8 lg:gap-y-16">
            {allProjects.map((project) => (
              <ProjectCard
                key={project.importVal.properties.title}
                alt={project.importVal.properties.coverAlt}
                tagline={project.importVal.properties.tagline}
                slug={project.slug}
                src={project.importVal.properties.coverImg}
                title={project.importVal.properties.title}
                type={project.importVal.properties.type}
                year={project.importVal.properties.date.getFullYear()}
              />
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
