import fs from "fs";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "path";

// Image metadata
export const alt =
  "Preview of Lance's project. A screenshot of the project is on the right.";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const route = params.slug;

  const { properties } = await import(`@/app/content/${route}.tsx`);

  const PlusJakartaBold = await readFile(
    join(process.cwd(), "src/app/fonts/PlusJakartaSans-Bold.ttf"),
  );
  const Bricolage = await readFile(
    join(process.cwd(), "src/app/fonts/BricolageGrotesque-Regular.ttf"),
  );
  const BricolageMedium = await readFile(
    join(process.cwd(), "src/app/fonts/BricolageGrotesque-Medium.ttf"),
  );

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          padding: "64px",
          gap: "64px",
          flexDirection: "row",
          background: "linear-gradient(156deg, #FAFAFA 29.68%, #E6F5F3 90.64%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            flexShrink: 1,
            color: "#71717A",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Bricolage Grotesque Medium",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "28px",
              }}
            >
              <span>{properties.type}</span>
              <div
                style={{
                  display: "flex",
                  padding: "6px 24px",
                  borderRadius: "24px",
                  border: "1px solid #52525B",
                }}
              >
                {properties.date.getFullYear()}
              </div>
            </div>
            <h1
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "60px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "60px",
                color: "#18181B",
                margin: 0,
              }}
            >
              {properties.title}
            </h1>
            <p
              style={{
                fontFamily: "Bricolage Grotesque",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "32px",
                margin: 0,
              }}
            >
              {properties.tagline}
            </p>
          </div>
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "32px",
              margin: 0,
              color: "#18181B",
            }}
          >
            Lance Yeo
          </p>
        </div>
        <img
          src={properties.coverImg}
          alt={properties.coverAlt}
          style={{
            height: "100%",
            boxShadow:
              "0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
            borderRadius: "12px",
            border: "2px solid #E4E4E7",
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Bricolage Grotesque",
          data: Bricolage,
          style: "normal",
          weight: 400,
        },
        {
          name: "Bricolage Grotesque Medium",
          data: BricolageMedium,
          style: "normal",
          weight: 500,
        },
        {
          name: "Plus Jakarta Sans",
          data: PlusJakartaBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}

export function generateStaticParams() {
  const files = fs.readdirSync(join(process.cwd(), "src/app/content/"));
  return files
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => ({ slug: file.slice(0, -4) }));
}

export const dynamicParams = false;
