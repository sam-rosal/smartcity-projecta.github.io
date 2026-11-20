window.SITE_CONFIG = {
  pageTitle: "SUMO Traffic Simulation & Demand Analysis | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Samuel Rosales",
    program: "Automation Engineering Technology",
    university: "McMaster University, Canada",
    email: "samuelrosalesfaria26@gmail.com"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
    footerBg: "#111111",
    footerText: "#ffffff",
    footerBorder: "#222222",

    homeLinkText: "RoadwayVR",

    templateCredit:
      "This academic showcase template was developed by RoadwayVR.",

    templateCreditLinkText:
      "Learn more at RoadwayVR.com",

    templateCreditUrl:
      "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "A",
    projectTitle: "Evaluating AV Integration and Intersection Efficiency at Sheppard Ave W & Yonge St: A SUMO-Based Traffic Simulation and Demand Analysis",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Study Area: Sheppard Ave W & Yonge St, Toronto, ON · Stages A1 & A2 · Scenarios A, B & C (Intervention X)"
  },

caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
      "Digital traffic models replicate urban intersections to test signal plans and vehicle technologies safely.",
      "Study area covers Sheppard Ave W & Yonge St in North York, Toronto, modeled in SUMO.",
      "Controlled simulations against a 100% HDV baseline isolate CAV and signal timing impacts.",
      "Toronto drivers lost 100 hours to rush-hour congestion in 2025, necessitating data-backed road investments."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
      "A calibrated SUMO baseline (100% HDV) is needed to characterize Edge E145 speed-density behaviour.",
      "100% CAV speed-density impacts cannot be inferred from human-driven models without controlled testing.",
      "Signal re-timing requires quantitative before-and-after evidence on Edge E145 prior to municipal investment.",
      "Single-edge scope and uncalibrated synthetic demand limit network-wide generalization without further analysis."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Build a SUMO network for Sheppard & Yonge and model the 100% HDV baseline on Edge E145.",
      "Compare Edge E145 speed-density performance between 100% HDV and 100% CAV scenarios.",
      "Implement and evaluate Intervention X (8s left-turn advanced green) using before-and-after data.",
      "Provide simulation evidence to guide network-wide study before committing municipal capital."
    ]
  },
  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Network & HDV Baseline (Scenario A)",
        text: "Digitize Sheppard Ave W & Yonge St in SUMO (netedit) using aerial imagery and GIS layers, resolve TLS/lane-sorting challenges, and run a 3,600s simulation (300s warmup) with 60s loop detectors on Edge E145.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 2: Controlled 100% CAV Setup (Scenario B)",
        text: "Retain identical network geometry, demand, routes, and Lab 2 signal timing while updating vehicle-following parameters to τ = 0.5s, σ = 0.0, and s0 = 1.0m over a 3,600s run.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 3: Intervention X Signal Modification (Scenario C)",
        text: "Modify the 60s signal cycle for 100% HDVs by adding an 8s left-turn advanced green, setting through green to 19s and yellow transitions to 2s to clear left-turn queues on Edge E145.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 4: Speed-Density & Tradeoff Analysis",
        text: "Compare linear speed-density fits (vf, kj, R²) and operational regimes across Scenarios A, B, and C, documenting cross-street spillover risks and data limitations.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Roadway Network & HDV Baseline (Scenario A)",
        bullets: [
          { text: "Digitized Sheppard Ave W & Yonge St geometry, lanes, turn bays, and junctions in SUMO netedit with 300 veh/h through and 150 veh/h turning demand (3,600s run, 300s warmup, 60s aggregation on Edge E145)." },
          { text: "Resolved TLS phase alignment conflicts on custom geometry and adjusted vehicle departure/lane-sorting behaviour to eliminate artificial upstream bottlenecks." },
          { text: "Configured HDV baseline parameters: τ = 1.0s, σ = 0.5, s0 = 2.5m, desired max speed 13.89 m/s (50 km/h), max accel 2.6 m/s², emergency decel 4.5 m/s², and default Lab 2 signal timing." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: 100% CAV Fleet Simulation (Scenario B)",
        bullets: [
          { text: "Kept network geometry, traffic demand, routing, turning ratios, detector placement on Edge E145, and Lab 2 signal timing constant." },
          { text: "Updated behavioural parameters to deterministic CAV settings: τ = 0.5s, σ = 0.0, and s0 = 1.0m (same 13.89 m/s speed limit, 2.6 m/s² accel, and 4.5 m/s² decel)." },
          { text: "Evaluated speed-density shifts and noted the lack of high-density observations (above 50 veh/km) due to free-flow clearance at tested demand." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Signal Timing Intervention X (Scenario C)",
        bullets: [
          { text: "Diagnosed severe queueing and densities exceeding 200 veh/km on upstream Edge E145 in the 100% HDV baseline." },
          { text: "Implemented an 8s left-turn advanced green within a 60s cycle, adjusting through green to 19s and yellow phases to 2s under 100% HDV demand." },
          { text: "Assessed before-and-after speed-density performance on Edge E145 alongside potential cross-street delay transfers." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results, Limitations & Recommendations",
        bullets: [
          { text: "Compared fitted free-flow speed (vf), jam density (kj), and R² across HDV baseline (14.14 m/s, 259.2 veh/km, R² = 0.963), CAV (15.71 m/s, 118.7 veh/km, R² = 0.882), and Intervention X (16.84 m/s, 79.4 veh/km)." },
          { text: "Identified limitations: uncalibrated synthetic demand, single-edge scope (E145), idealized 100% CAV fleet assumptions, and potential cross-street queue spillover." },
          { text: "Recommended empirical video/radar data collection, network-wide signal optimization, and mixed HDV–CAV sensitivity testing before capital investment." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

  results: {
    title: "Results & Potential Improvements",
    subtitle:
      "Edge E145 speed-density simulation comparisons across 100% HDV baseline (Scenario A), 100% CAV (Scenario B), and Intervention X (Scenario C). Results are for educational purposes only.",

    charts: {
      left: {
        title: "Scenario A vs. Scenario B — Speed-Density: HDV Baseline vs. 100% CAV",
        src: "assets/img/image6.jpg",
        alt: "Edge E145 speed-density diagrams comparing 100% HDV baseline and 100% CAV scenario"
      },
      right: {
        title: "Scenario A vs. Scenario C — Speed-Density: HDV Baseline vs. Intervention X",
        src: "assets/img/image7.jpg",
        alt: "Edge E145 speed-density diagrams comparing 100% HDV baseline and Intervention X"
      }
    },

    discussionTitle: "Discussion",
    discussionBullets: [
      "Scenario A (100% HDV baseline) on Edge E145 shows two-regime behaviour with clusters near 15–30 veh/km and congested states at 200–280 veh/km (vf = 14.14 m/s, kj = 259.2 veh/km, R² = 0.963).",
      "Scenario B (100% CAV) consolidates observations in low density (under 25 veh/km) with vf = 15.71 m/s and fitted kj = 118.7 veh/km (R² = 0.882), though kj is extrapolated without high-density points.",
      "Scenario C (Intervention X, 100% HDV with 8s left-turn advanced green) shifts points into 10–20 veh/km with vf = 16.84 m/s and fitted kj = 79.4 veh/km, preventing severe Edge E145 queue buildup.",
      "Reallocating signal time may transfer delays and queues onto cross-street approaches, and municipal re-timing costs must be weighed against network-wide impacts.",
      "Next steps include collecting empirical radar/video traffic and turning counts, modeling full network interactions, and testing mixed HDV–CAV penetration before capital commitment."
    ]
  },

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Samuel Rosales", role: "NexGen Transit Solutions — SUMO Network & Traffic Simulation, Scenario Modeling & Analysis" },
      { name: "Rumi Alkhani", role: "NexGen Transit Solutions — Team Contributor (Group 5)" },
      { name: "Oliver Naruse", role: "NexGen Transit Solutions — Team Contributor (Group 5)" },
      { name: "Viroz D’Souza", role: "NexGen Transit Solutions — Team Contributor (Group 5)" }
    ],

    acknowledgments: [
      "Group: NexGen Transit Solutions (Group 5)",
      "Institution: McMaster University, Hamilton, Ontario, Canada",
      "Course: SMRTTECH 4SC3 — Smart Cities and Communities",
      "Tools: SUMO (netedit), Python, GIS & Aerial Imagery"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/sam-rosal/smartcity-projecta.github.io"
  }
};
