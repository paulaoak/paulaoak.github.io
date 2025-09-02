// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "(*) denotes equal contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-two-of-my-papers-have-been-accepted-at-neurips-2023-unbiased-constrained-sampling-with-self-concordant-barrier-hamiltonian-monte-carlo-co-authored-with-valentin-de-bortoli-and-alain-durmus-and-tree-based-diffusion-schrödinger-bridge-with-applications-to-wasserstein-barycenters-co-authored-with-valentin-de-bortoli-arnaud-doucet-and-alain-durmus-spotlight-top-3-6-see-you-in-new-orleans-in-december",
          title: 'Two of my papers have been accepted at NeurIPS 2023: Unbiased constrained sampling...',
          description: "",
          section: "News",},{id: "news-i-am-invited-to-be-part-of-the-dml-programme-diffusions-in-machine-learning-foundations-generative-models-and-non-convex-optimisation-organised-by-the-isaac-newton-institute-for-mathematical-sciences-which-takes-place-in-july-2024-at-the-alan-turing-institute-i-will-give-a-long-talk-on-my-latest-work-stochastic-localization-via-iterative-posterior-sampling-bridging-gaps-between-mcmc-methods-and-recent-diffusion-flow-based-approaches",
          title: 'I am invited to be part of the DML programme (Diffusions in machine...',
          description: "",
          section: "News",},{id: "news-i-presented-my-latest-work-stochastic-localization-via-iterative-posterior-sampling-at-mostly-monte-carlo-seminar-organized-by-andrea-bertazzi-and-joshua-bon-paris-santé-campus",
          title: 'I presented my latest work Stochastic Localization via Iterative Posterior Sampling at Mostly...',
          description: "",
          section: "News",},{id: "news-my-latest-paper-stochastic-localization-via-iterative-posterior-sampling-co-authored-with-louis-grenioux-marylou-gabrié-and-alain-durmus-has-been-accepted-at-icml-2024-spotlight-top-3-5-see-you-in-vienna-in-july",
          title: 'My latest paper Stochastic Localization via Iterative Posterior Sampling co-authored with Louis Grenioux,...',
          description: "",
          section: "News",},{id: "news-i-presented-my-latest-work-stochastic-localization-via-iterative-posterior-sampling-at-google-deepmind-s-reading-group-on-generative-models-transport-and-sampling-organized-by-valentin-de-bortoli",
          title: 'I presented my latest work Stochastic Localization via Iterative Posterior Sampling at Google...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-riemannian-constrained-sampling-at-the-4-th-italian-meeting-on-probability-and-mathematical-statistics-rome-italy",
          title: 'I gave a talk on Riemannian constrained sampling at the 4-th Italian Meeting...',
          description: "",
          section: "News",},{id: "news-along-with-some-talented-french-researchers-i-am-co-organizing-the-4-th-edition-of-neurips-paris-which-will-take-place-in-december",
          title: 'Along with some talented French researchers, I am co-organizing the 4-th edition of...',
          description: "",
          section: "News",},{id: "news-my-latest-paper-learned-reference-based-diffusion-sampling-for-multi-modal-distributions-co-authored-with-louis-grenioux-marylou-gabrié-and-alain-durmus-has-been-accepted-at-iclr-205",
          title: 'My latest paper Learned Reference-based Diffusion Sampling for multi-modal distributions co-authored with Louis...',
          description: "",
          section: "News",},{id: "news-in-the-next-days-i-will-be-presenting-the-results-from-learned-reference-based-diffusion-sampling-for-multi-modal-distributions-at-google-deepmind-s-workshop-on-diffusion-models-as-well-as-at-the-center-for-data-science-s-reading-group-ens-ulm",
          title: 'In the next days, I will be presenting the results from Learned Reference-based...',
          description: "",
          section: "News",},{id: "news-my-reflexion-paper-improving-the-evaluation-of-samplers-on-multi-modal-targets-co-authored-with-louis-grenioux-and-marylou-gabrié-has-been-accepted-at-the-workshop-frontiers-in-probabilistic-inference-learning-meets-sampling-at-iclr-205-i-am-very-excited-to-attend-to-this-event-probably-the-workshop-most-closely-aligned-with-the-content-of-my-phd-see-you-in-singapore-in-late-april",
          title: 'My reflexion paper Improving the evaluation of samplers on multi-modal targets co-authored with...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
