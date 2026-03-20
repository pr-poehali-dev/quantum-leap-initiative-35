import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/a091625c-c80a-468a-b4c7-1ad1ee1685b1/files/036e986a-0188-4b50-a76a-ff114f588535.jpg",
    "https://cdn.poehali.dev/projects/a091625c-c80a-468a-b4c7-1ad1ee1685b1/files/a838b398-9a17-47da-8b4c-ee69da717371.jpg",
    "https://cdn.poehali.dev/projects/a091625c-c80a-468a-b4c7-1ad1ee1685b1/files/30f42e92-4a05-4a7c-81d3-b9007e34b3fb.jpg",
    "https://cdn.poehali.dev/projects/a091625c-c80a-468a-b4c7-1ad1ee1685b1/files/b811f779-5045-4165-acca-96ffe9c1d7cf.jpg",
    "https://cdn.poehali.dev/projects/a091625c-c80a-468a-b4c7-1ad1ee1685b1/files/1181e6e8-2873-4bf2-89ad-94ce10d7ad0e.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={140}
        cardSizeMd={110}
        cardSizeSm={85}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;
