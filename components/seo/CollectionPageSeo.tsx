import { NextSeo } from "next-seo";
import { OpenGraphMedia } from "next-seo/lib/types";

import { CollectionDetailsFragment } from "@/saleor/api";

interface CollectionPageSeoProps {
  collection: CollectionDetailsFragment;
}

export function CollectionPageSeo({ collection }: CollectionPageSeoProps) {
  const baseTitle = "Robishop";
  const baseDescription =
    "Robishop project. Learn how to use our API and create storefront for your shop";

  const seoTitle = !collection.seoTitle ? baseTitle : `${collection.seoTitle} - ${baseTitle}`;
  const seoDescription = collection.seoDescription || baseDescription;
  let images: OpenGraphMedia[] = [
    {
      url: "https://og-image.vercel.app/React%20Storefront.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fsaleor.io%2Fstatic%2Flogo-ad1b99aa7c6f5acf58a61640af760cfd.svg",
      alt: "Robishop hero image",
    },
  ];
  if (collection.backgroundImage) {
    images = [
      {
        url: collection.backgroundImage.url,
        alt: collection.backgroundImage.alt || "Collection lead image",
      },
      ...images,
    ];
  }
  return (
    <NextSeo
      title={seoTitle}
      description={seoDescription}
      openGraph={{
        title: seoTitle,
        description: seoDescription,
        images,
        site_name: "Robishop",
      }}
    />
  );
}

export default CollectionPageSeo;
