export type Publication = {
  title: string;
  authorsHtml: string;
  conference: string;
  publishedAt: string;
  pdf?: string;
  code?: string;
  page?: string;
  pageLabel?: string;
  bibtex?: string;
  notes?: string;
};

export const publications: Publication[] = [
  {
    title: "Conditioning Surface Shape Processes with Neural Operators",
    authorsHtml: "Jingchao Zhou, <strong>Gefan Yang</strong>, Stefan Horst Sommer",
    conference:
      "Geometric Science of Information, Lecture Notes in Computer Science 16033:188-197, 2025.",
    publishedAt: "2025-10-28",
    code: "https://github.com/MateosCz/ShapeSphericalFNO",
    page: "https://doi.org/10.1007/978-3-032-03918-7_20",
  },
  {
    title: "Neural Guided Diffusion Bridges",
    authorsHtml: "<strong>Gefan Yang</strong>, Frank van der Meulen, Stefan Sommer",
    conference:
      "Proceedings of the 42nd International Conference on Machine Learning, PMLR 267:71210-71230, 2025.",
    publishedAt: "2025-07-13",
    pdf: "https://arxiv.org/pdf/2502.11909",
    code: "https://github.com/gefanyang/neuralbridge",
    page: "https://proceedings.mlr.press/v267/yang25af.html",
  },
  {
    title: "Infinite-dimensional Diffusion Bridge Simulation via Operator Learning",
    authorsHtml:
      "<strong>Gefan Yang</strong>, Elizabeth L. Baker, Michael L. Severinsen, Christy Anna Hipsley, Stefan Sommer",
    conference:
      "Proceedings of the 28th International Conference on Artificial Intelligence and Statistics, PMLR 258:3556-3564, 2025.",
    publishedAt: "2025-05-03",
    pdf: "https://arxiv.org/pdf/2405.18353",
    code: "https://github.com/gefanyang/scoreoperator",
    page: "https://proceedings.mlr.press/v258/yang25c.html",
  },
  {
    title: "Conditioning Non-linear and Infinite-dimensional Diffusion Processes",
    authorsHtml:
      "Elizabeth L. Baker, <strong>Gefan Yang</strong>, Michael L. Severinsen, Christy Anna Hipsley, Stefan Sommer",
    conference:
      "Advances in Neural Information Processing Systems 37, 10801-10826, 2024.",
    publishedAt: "2024-12-10",
    pdf: "https://openreview.net/pdf?id=FV4an2OuFM",
    code: "https://github.com/libbylbaker/infsdebridge",
    page: "https://proceedings.neurips.cc/paper_files/paper/2024/hash/14ad9256c430e6c8977e470d8e268320-Abstract-Conference.html",
    notes: "Spotlight",
    pageLabel: "Page"
  },
  {
    title: "A Denoising Diffusion Model for Fluid Field Prediction",
    authorsHtml: "<strong>Gefan Yang</strong>, Stefan Sommer",
    conference: "NeurIPS 2023 Workshop on Diffusion Models.",
    publishedAt: "2023-12-10",
    code: "https://github.com/gefanyang/fluid-diff",
    pdf: "https://arxiv.org/pdf/2301.11661",
    page: "https://neurips.cc/virtual/2023/74855",
    pageLabel: "Page",
  },
];

export const preprints: Publication[] = [
  {
    title: "Stochastics of Shapes and Kunita Flows",
    authorsHtml: "Stefan Sommer, <strong>Gefan Yang</strong>, Elizabeth L. Baker",
    conference: "arXiv preprint, arXiv:2512.11676",
    publishedAt: "2025-12-12",
    pdf: "https://arxiv.org/pdf/2512.11676",
    page: "https://arxiv.org/pdf/2512.11676",
    pageLabel: "arXiv"
  },
  {
    title: "Hyperiax and Phylogenetic Inference from Shape Data",
    authorsHtml: "<strong>Gefan Yang</strong>, Marcus Teller, Christy Anna Hipsley, Rasmus Nielsen, Stefan Sommer",
    conference: "arXiv preprint, arXiv:2606.26974",
    publishedAt: "2026-06-25",
    code: "https://github.com/ComputationalEvolutionaryMorphometry/hyperiax-phylo",
    pdf: "https://arxiv.org/pdf/2606.26974",
    page: "https://arxiv.org/pdf/2606.26974",
    pageLabel: "arXiv",
  },
  {
    title: "Neural Backward Filtering Forward Guiding",
    authorsHtml: "<strong>Gefan Yang</strong>, Frank van der Meulen, Stefan Sommer",
    conference: "arXiv preprint, arXiv:2601.23030",
    publishedAt: "2026-01-30",
    code: "https://github.com/gefanyang/nbffg",
    pdf: "https://arxiv.org/pdf/2601.23030",
    page: "https://arxiv.org/abs/2601.23030",
    pageLabel: "arXiv",
  },
  {
    title: "Parameter Inference via Differentiable Diffusion Bridge Importance Sampling",
    authorsHtml:
      "Nicklas Boserup, <strong>Gefan Yang</strong>, Michael Lind Severinsen, Christy Anna Hipsley, Stefan Sommer",
    conference: "arXiv preprint, arXiv:2411.08993",
    publishedAt: "2024-11-13",
    pdf: "https://arxiv.org/pdf/2411.08993",
    page: "https://arxiv.org/abs/2411.08993",
    pageLabel: "arXiv",
  },
];
