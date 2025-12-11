export const profileData = {
  name: "Jérôme DELSAUX",
  company: "Dels IT Consulting",
  title: "Lead Développeur / Développeur Full Stack Senior",
  subtitle: "Java & JavaScript",
  email: "dels.itconsulting@gmail.com",
  phone: "0672128526",
  location: "Hauts-de-France, France",
  availability: "Freelance / Temps plein",
  avatar: "/images/avatar.png",
  banner: "/images/banniere-portfolio.jpg",
  links: {
    malt: "https://www.malt.fr/profile/jeromedelsaux",
    collective: "https://www.collective.work/profile/jerome-delsaux",
    linkedin: "https://www.linkedin.com/in/jérôme-delsaux-1743b5124",
    cv: "https://delsitconsutling.fr/CV-JD.pdf",
  },
  about: `Développeur avec plus de 15 ans d'expérience dans la conception, le développement et la modernisation de systèmes complexes dans des environnements exigeants et critiques.
 Expertise en technologies Java et JavaScript, avec une maîtrise des environnements cloud, des bases de données et des normes de sécurité applicatives (ex. PCI DSS).`,
  characteristics: [
    "Expertise technique sur les principales stacks Front-end (React.js, Vue.js) et Back-end (Java, Spring).",
    "Capacité à accompagner des projets complexes, la migration de systèmes legacy et l'intégration de solutions cloud.",
    "Concevoir des plateformes évolutives répondant aux besoins futurs des entreprises.",
    "Collaborer étroitement avec les équipes métiers et techniques pour proposer des solutions adaptées.",
    "Assurer le respect des normes de sécurité et de conformité au sein de projets à forte sensibilité."
  ],
  expertise: [
    {title: "Back-end", skills: ["Java 17-21", "Spring Boot 3", "OAuth 2.0"]},
    {title: "Front-end", skills: ["React", "Vue.js", "TypeScript", "Vite", "Npm"]},
    {
      title: "Methodologies",
      skills: ["Agility (Scrum, Kanban, SAFe)", "Test-Driven Development (TDD)", "Domain-Drive Design (DDD)", "Behavior-Driven Development (BDD)", , "Design Thinking", "Architecture Hexagonale", "Continuous Integration/Continuous Deployment (CI/CD)", "Git Flow", "Github Flow"]
    },
    {title: "Cloud", skills: ["Microsoft Azure", "Google Cloud Platform"]},
  ],
  certification: [{
    title: "Kafka",
    issuer: "Nextoo",
    date: "Septembre 2021",
  }, {
    title: "Agile Scrum Master",
    issuer: "Nextoo",
    date: "Septembre 2020",
  }, {
    title: "Oracle Certified Professional, Java SE 8 Programmer",
    issuer: "Oracle",
    date: "Juillet 2020",
  }],
  education: {
    school: "Université Polytechnique Hauts-de-France",
    degree: "Licence Pro Informatique",
    years: "2006 – 2007",
  },
  languages: [
    {name: "Français", level: "Natif"},
    {name: "Anglais", level: "A2"},
  ],
  skills: {
    "Langages et Frameworks": [
      "Java 21",
      "Spring Boot 3",
      "JavaScript",
      "TypeScript",
      "React 18",
      "Vue.js",
      "Python"
    ],
    "Database": ["PostgreSQL", "MongoDB", "H2", "Oracle"],
    "Web": ["HTML5", "CSS3", "SCSS", "Less", "EsLint"],
    "Testing": ["Junit 5", "Mockito", "Cucumber", "Gatling", "Selenium", "Jest"],
    "Cloud": ["Microsoft Azure", "Google Cloud Platform (GCP)"],
    "Even Driven": ["Rest API", "Redis", "Kafka", "MQ"],
    "DevOps": ["Docker", "Kubernetes", "Gitlab CI", "GitHub Actions", "Jenkins"],
    "Gestion": ["Github", "Gitlab", "Jira", "Confluence", "Trello", "Google analytics", "Kibana"],
  }
}

export const projects = [
  {
    company: "Oney",
    type: "Freelance",
    position: "Lead Dev Full Stack Java / JavaScript",
    startDate: "Septembre 2023",
    endDate: "Aujourd'hui",
    location: "Lille et périphérie, France",
    workMode: "Hybride",
    companyDescription:
        "Oney est une entreprise spécialisée dans les solutions de paiement et de financement pour les particuliers et les professionnels.",
    consultingWork:
        "Mission de conception et de mise en œuvre d’un nouveau coffre de sécurisation de cartes bancaires (Visa / Mastercard) dans un environnement Cloud Azure, avec pour objectif de moderniser l’existant et renforcer le niveau de conformité et de sécurité.",
    tasks: [
      "Migration des données en mode Big Bang depuis le coffre legacy vers la nouvelle plateforme",
      "Développement d’API REST sécurisées pour la capture et la restitution des informations cartes",
      "Mise en conformité réglementaire : RGPD (purge et rétention des données)",
      "Implémentation de la rotation des clés de chiffrement et signatures PAN (norme PCI DSS v4)",
      "Optimisation des performances et réduction des risques de sécurité sur les données sensibles",
      "Coordination avec les équipes produit, design et QA",
      "Collaboration à la conception de solutions et planification des sprints",
      "Accompagnement de l'équipe de développement par le mentorat, la direction technique, et la promotion des meilleures pratiques de codage.",

    ],
    skills: [
      "Java 21", "Spring Boot 3.5",
      "Microsoft Azure",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Norme PCI DSS",
      "Scrum", "SAFe"
    ],
  },
  {
    company: "Nextoo (Mission pour Adéo)",
    type: "CDI",
    position: "Développeur Full Stack Java / JavaScript",
    startDate: "Septembre 2021",
    endDate: "Septembre 2023",
    location: "Lille et périphérie, France",
    workMode: "Hybride",
    companyDescription:
        "Adéo est le groupe propriétaire de Leroy Merlin, leader mondial du bricolage et de l'aménagement de la maison.",
    consultingWork:
        "Conception et développement sur la plateforme Omni Commerce visant à optimiser les processus de tarification, de livraison et de fidélisation.",
    tasks: [
      "Développement de fonctionnalités pour les projets DELTA, Quotation et Loyalty Orchestrator",
      "Mise en place de solutions de calcul des tarifs de livraison performantes et précises",
      "Développement d’un moteur d’orchestration des prix, et récompenses client",
      "Intégration dans un environnement Cloud Google (GCP), garantissant disponibilité et scalabilité",
      "Gestion des flux temps réel via Apache Kafka",
      "Développement Full Stack (Back & Front) dans une architecture moderne et distribuée"
    ],
    skills: ["Java 17", "Spring Boot 3", "Reactor", "MongoDB", "Apache Kafka", "Google Cloud Platform", "React.js", "Vue.js", "TypeScript", "Scrum Master"],
  },
  {
    company: "Nextoo (Mission pour supermarché Match)",
    type: "CDI",
    position: "Lead Développeur Full Stack Java / JavaScript",
    startDate: "Mai 2017",
    endDate: "Septembre 2021",
    location: "Lille et périphérie, France",
    workMode: "Hybride",
    companyDescription:
        "Match est une enseigne de supermarchés présente en France, et offrant une large gamme de produits alimentaires.",
    consultingWork:
        "Pilotage des évolutions techniques et de la modernisation du portail Back Office (Nestor / Pluton) utilisé par les magasins en France, Belgique et Luxembourg pour la gestion de la supply chain, du drive et des opérations terrain.",
    tasks: [
      "Migration des systèmes legacy AS400 vers une architecture moderne Java / Spring Boot / React.js",
      "Maintenance et amélioration continue des applications existantes",
      "Développement de nouvelles fonctionnalités métiers côté Back-End et Front-End",
      "Optimisation des performances et de la fiabilité des outils Back Office",
      "Coordination avec les équipes produit, design et QA",
      "Accompagnement de l'équipe de développement par le mentorat, la direction technique, et la promotion des meilleures pratiques de codage.",
      "Collaboration à la conception de solutions et planification des versions"
    ],
    skills: ["Java 11", "Spring Boot", "PostgreSQL", "React.js", "Jenkins", "Lean"],
  },
  {
    company: "Nextoo (Mission pour Swisslife)",
    type: "CDI",
    position: "Développeur Full Stack Java / JavaScript",
    startDate: "Novembre 2014",
    endDate: "Mai 2017",
    location: "Lille et périphérie, France",
    workMode: "Sur site",
    companyDescription:
        "Swiss Life est un groupe d'assurance vie et de services financiers, leader sur le marché suisse et présent dans toute l'Europe.",
    consultingWork:
        "Intervention sur l’espace client MySwissLife, avec pour objectif de moderniser, stabiliser et améliorer les performances de la plateforme ainsi que des outils métiers associés.",
    tasks: [
      "Migration progressive de composants métiers vers AngularJS / Node.js",
      "Maintenance et évolution de l’interface existante",
      "Intégration d’Elasticsearch pour optimiser la recherche et le traitement des données",
      "Développement de nouvelles fonctionnalités orientées expérience utilisateur",
      "Stabilisation des composants critiques et amélioration de la fiabilité globale",
    ],
    skills: ["Java 11", "Spring Boot", "Node.js", "AngularJS", "Elasticsearch", "Scrum", "Kanban"],
  },
  {
    company: "Nextoo (Mission pour Humanis / Vauban)",
    type: "CDI",
    position: "Consultant Java JEE / Chef de Projet Junior",
    startDate: "Mai 2014",
    endDate: "Novembre 2014",
    location: "Lille et périphérie, France",
    workMode: "Sur site",
    companyDescription:
        "Humanis est un groupe paritaire de protection sociale spécialisé dans la retraite complémentaire, la prévoyance et l'épargne salariale.",
    consultingWork:
        "Participation au projet de tarification des offres Santé et Prévoyance, avec un rôle transversal combinant coordination projet, structuration des processus et support technique.",
    tasks: [
      "Organisation et suivi des différentes étapes du projet (planning, priorités, livrables)",
      "Structuration et mise à jour de la documentation fonctionnelle et technique",
      "Coordination et exécution des tests fonctionnels pour valider les règles de tarification",
      "Interface entre équipes métiers et techniques afin d’assurer l’alignement des besoins et des livraisons",
      "Contribution au développement et à l’analyse de composants en Java"],
    skills: ["Java", "Gestion de projet"],
  },
  {
    company: "Capgemini",
    type: "CDI",
    position: "Consultant Confirmé en Architecture et Technologie",
    startDate: "Août 2012",
    endDate: "Avril 2014",
    location: "Lille et périphérie, France",
    workMode: "Sur site",
    companyDescription:
        "Capgemini est un leader mondial du conseil, de la transformation digitale et des services technologiques et d'ingénierie.",
    consultingWork:
        "Intervention au sein d’un centre de services pour assurer la maintenance et le support des portails clients de Vallourec (R&D) et Kiloutou, avec un objectif de stabilité, performance et amélioration continue.",
    tasks: [
      "Maintenance évolutive et corrective des portails (PHP / .NET)",
      "Support quotidien (analyse, résolution d’incidents, corrections)",
      "Prise en compte et suivi des retours métiers",
      "Propositions d’amélioration des processus et des outils existants",
      "Coordination avec les équipes fonctionnelles et techniques"
    ],
    skills: ["C#", ".NET Framework", "Dotnet", "PHP"],
  },
  {
    company: "Groupe SII (Mission pour Orange)",
    type: "CDI",
    position: "Consultant Développement PHP",
    startDate: "Avril 2010",
    endDate: "Août 2012",
    location: "Villejuif, Île-de-France, France",
    workMode: "Sur site",
    companyDescription:
        "Orange est un opérateur de télécommunications français, leader sur le marché européen des services de téléphonie mobile et fixe.",
    consultingWork:
        "Participation à la migration et à la maintenance d’applications du réseau mobile dans le cadre du déploiement des infrastructures 2G / 3G Ericsson pour Orange.",
    tasks: ["Contribution à la migration d’outils réseau depuis le legacy vers la nouvelle infrastructure Ericsson",
      "Maintenance corrective et évolutive des applications",
      "Optimisation et gestion des bases de données MySQL",
      "Support technique et collaboration étroite avec les équipes Orange / Ericsson",
      "Tests, validation et surveillance de la performance applicative"],
    skills: ["MySQL", "PHP", "Lean"],
  },
  {
    company: "Blue Consulting (Mission pour SFR)",
    type: "CDI",
    position: "Consultant Développement PHP",
    startDate: "Octobre 2009",
    endDate: "Avril 2010",
    location: "Boulogne-Billancourt, Île-de-France, France",
    workMode: "Sur site",
    companyDescription:
        "SFR est un opérateur de télécommunications français, fournisseur de services mobiles, internet et téléphonie fixe.",
    consultingWork: "Intervention sur les outils de supervision de la qualité du réseau ADSL de SFR, avec pour objectif d’améliorer la fiabilité, la performance et la précision du suivi réseau.",
    tasks: ["Maintenance évolutive des systèmes de supervision (PHP / MySQL)",
      "Analyse des indicateurs de qualité réseau ADSL",
      "Détection et correction des anomalies impactant la performance",
      "Amélioration continue des outils de monitoring et de reporting",
      "Support technique en lien direct avec les équipes réseau"],
    skills: ["PHP", "MySQL"],
  },
  {
    company: "Inetum (Ex GFI Informatique)",
    type: "CDI",
    position: "Analyste Programmeur",
    startDate: "Juillet 2007",
    endDate: "Octobre 2009",
    location: "Douai, Hauts-de-France, France",
    workMode: "Sur site",
    companyDescription:
        "Inetum (anciennement GFI Informatique) est une ESN française spécialisée dans les services informatiques et le conseil en technologies.",
    consultingWork:
        "Intervention en Tierce Maintenance Applicative (TMA) sur plusieurs applications critiques liées aux systèmes CRM, CMS, SAV et à des projets spécifiques liés aux objectifs commerciaux et aux infrastructures télécom.",
    tasks: [
      "Maintenance évolutive et corrective des applications CRM / CMS / SAV",
      "Participation à la migration du projet de gestion des objectifs de vente en magasin, améliorant le suivi et la performance commerciale",
      "Rôle de Responsable d’application sur un projet d’identification des câbles sous-marins téléphoniques et d’un CRM dédié aux clients VIP pour Orange",
      "Interaction continue avec les équipes métiers et techniques pour assurer l’alignement fonctionnel"
    ],
    skills: ["Java", "Oracle Database", "MySQL", "PHP", "TMA"],
  },
]
