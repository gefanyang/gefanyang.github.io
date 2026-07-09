export type Publication = {
  title: string;
  authorsHtml: string;
  conference: string;
  conferenceShort?: string;
  pdf?: string;
  code?: string;
  page?: string;
  bibtex?: string;
  notes?: string;
};

export const publications: Publication[] = [
  {
    title: "Neural Guided Diffusion Bridges",
    authorsHtml: "<strong>Gefan Yang</strong>, Frank van der Meulen, Stefan Sommer",
    conference:
      "International Conference on Machine Learning <strong>(ICML)</strong>, 2025.",
    conferenceShort: "ICML",
    pdf: "https://arxiv.org/pdf/2502.11909",
    code: "https://github.com/gefanyang/neuralbridge",
    notes: "Poster",
  },
  {
    title: "Infinite-dimensional Diffusion Bridge Simulation via Operator Learning",
    authorsHtml:
      "<strong>Gefan Yang</strong>, Elizabeth L. Baker, Michael L. Severinsen, Christy Anna Hipsley, Stefan Sommer",
    conference:
      "International Conference on Artificial Intelligence and Statistics <strong>(AISTATS)</strong>, 2025.",
    conferenceShort: "AISTATS",
    pdf: "https://arxiv.org/pdf/2405.18353",
    code: "https://github.com/gefanyang/scoreoperator",
    notes: "Poster",
  },
  {
    title: "Conditioning Non-linear and Infinite-dimensional Diffusion Processes",
    authorsHtml:
      "Elizabeth L. Baker, <strong>Gefan Yang</strong>, Michael L. Severinsen, Christy Anna Hipsley, Stefan Sommer",
    conference:
      "The Annual Conference on Neural Information Processing Systems <strong>(NeurIPS)</strong>, 2024.",
    conferenceShort: "NeurIPS",
    pdf: "https://openreview.net/pdf?id=FV4an2OuFM",
    code: "https://github.com/libbylbaker/infsdebridge",
    notes: "Spotlight",
  },
];
