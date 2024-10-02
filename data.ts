export type Friend = {
  id: number;
  name: string;
  image?: string;
  relation: string;
  likes: string[];
  giftIdea: string[];
};

export const MockFriendsData: Friend[] = [
  {
    id: 1,
    name: "Alice Johnson",
    image: "pexels-javon-swaby-197616-1697912.jpg",
    relation: "Best Friend",
    likes: ["Hiking", "Photography", "Traveling"],
    giftIdea: ["Camera accessories", "Hiking gear", "Travel vouchers"],
  },
  {
    id: 2,
    name: "Bob Smith",
    image: "pexels-luizclas-170497-1848565.jpg",
    relation: "College Buddy",
    likes: ["Video Games", "Cooking", "Sci-Fi Movies"],
    giftIdea: [
      "Gaming mouse",
      "Cookbook",
      "Blu-ray collection of Sci-Fi movies",
    ],
  },
  {
    id: 3,
    name: "Catherine Lee",
    image: "pexels-olly-837358.jpg",
    relation: "Colleague",
    likes: ["Yoga", "Painting", "Reading"],
    giftIdea: ["Yoga mat", "Art supplies", "Books by favorite authors"],
  },
  {
    id: 4,
    name: "David Brown",
    image: "pexels-trinitykubassek-445109.jpg",
    relation: "Neighbor",
    likes: ["Gardening", "DIY Projects", "Cycling"],
    giftIdea: ["Gardening tools", "DIY project kits", "Cycling accessories"],
  },
  {
    id: 5,
    name: "Eva Green",
    image: "pexels-javon-swaby-197616-1697912.jpg",
    relation: "Childhood Friend",
    likes: ["Dancing", "Fashion", "Music"],
    giftIdea: ["Dance shoes", "Fashion accessories", "Concert tickets"],
  },
];
