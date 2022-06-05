import { NextSeo } from "next-seo";

interface BaseSeoProps {
  title?: string;
  description?: string;
}

export function BaseSeo({ title, description }: BaseSeoProps) {
  const baseTitle = "Robishop";
  const baseDescription =
    "Robishop project. Learn how to use our API and create storefront for your shop";

  const seoTitle = title || baseTitle;
  const seoDescription = description || baseDescription;

  return (
    <NextSeo
      title={seoTitle}
      description={seoDescription}
      openGraph={{
        title: seoTitle,
        description: seoDescription,
        images: [
          {
            url: "https://og-image.vercel.app/React%20Storefront.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fsaleor.io%2Fstatic%2Flogo-ad1b99aa7c6f5acf58a61640af760cfd.svg",
            alt: "Robishop hero image",
          },
        ],
        site_name: "Robishop",
      }}
    />
  );
}

export default BaseSeo;
