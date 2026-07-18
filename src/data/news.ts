export type NewsItem = {
  publishedAt: string;
  date: string;
  title: string;
  venue: string;
  href: string;
};

export const news: NewsItem[] = [
  {
    publishedAt: "2025-10-28",
    date: "Oct 2025",
    title: "Conditioning Surface Shape Processes with Neural Operators",
    venue: "GSI 2025",
    href: "https://doi.org/10.1007/978-3-032-03918-7_20",
  },
  {
    publishedAt: "2025-07-13",
    date: "Jul 2025",
    title: "Neural Guided Diffusion Bridges",
    venue: "ICML 2025",
    href: "https://proceedings.mlr.press/v267/yang25af.html",
  },
  {
    publishedAt: "2025-05-03",
    date: "May 2025",
    title: "Infinite-dimensional Diffusion Bridge Simulation via Operator Learning",
    venue: "AISTATS 2025",
    href: "https://proceedings.mlr.press/v258/yang25c.html",
  },
  {
    publishedAt: "2024-12-10",
    date: "Dec 2024",
    title: "Conditioning Non-linear and Infinite-dimensional Diffusion Processes",
    venue: "NeurIPS 2024",
    href: "https://proceedings.neurips.cc/paper_files/paper/2024/hash/14ad9256c430e6c8977e470d8e268320-Abstract-Conference.html",
  },
];
