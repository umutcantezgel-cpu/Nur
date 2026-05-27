import * as React from "react";

interface SEOMetadataProps {
  jsonLd: Record<string, any>;
}

export function SEOMetadata({ jsonLd }: SEOMetadataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
