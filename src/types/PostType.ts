import FeaturedImageType from "./FeaturedImageType";

interface PostType {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  featuredImage: FeaturedImageType;
}

export default PostType;
