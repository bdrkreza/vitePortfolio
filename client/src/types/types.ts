export type TAuth = {
  title: string;
  image: string;
  tags: string[];
};
export type TAbout = {
  title: string;
  tools: string[];
};

export interface IProjects {
  _id: string;
  image: string;
  title: string;
  author: string;
  category: string;
  slug: string;
  liveLink: string;
  getHubLink: string;
  screenshots: string[];
  imagelevel: string;
  tags: string[];
  rating: number;
  date: string;
  userFeature: TAuth;
  adminFeature: TAuth;
  about: TAbout;
}
