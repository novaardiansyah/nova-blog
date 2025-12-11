import { Hero } from "@/components/hero";
import { FeaturedPosts } from "@/components/featured-posts";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <Newsletter showBorder={false} compact />
    </>
  );
}
