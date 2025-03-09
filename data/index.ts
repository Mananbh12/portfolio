export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Je privilégie la collaboration avec les clients, en favorisant une communication ouverte ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] overflow-hidden",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Je suis polyglotte",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "Je cherche à toujours m'améliorer",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Un esprit entrepreneur avec une passion pour le développement.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "un site de e-commerce pour l'entreprise de cybersécurité Cyna",
      description: "Actuellement en train de créer",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Vous souhaitez collaborer avec moi?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1 overflow-hidden",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Pitchez votre startup, Connectez vous avec des entrepreneurs",
      des: "Soumettez des idées, votez sur les propositions et faites-vous remarquer lors des compétitions virtuelles.",
      img: "/p1.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://yc-directory-ecru-nu.vercel.app/",
    },
    {
      id: 2,
      title: "Crespières Château – Atland Résidentiel",
      des: "Résidence de 79 logements où nous intervenons pour le sol dur, livraison prévue en janvier 2025. 2000m2 carrelage",
      img: "/crespieres.jpg",
      iconLists: [],
      link: "https://www.atland-logement.fr/actualites/article/premiere-pierre-a-crespieres",
    },
    {
      id: 3,
      title: "Groupe Scolaire Saint-Exupery",
      des: "Création d'une application web de gestion de classes via MongoDB avec authentification",
      img: "/p3.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://github.com/Mananbh12/4DEVS",
    },
    {
      id: 4,
      title: "Romainville Fareva – Paris Ouest Construction",
      des: "Intervention en sols durs et sols souples dans 146 studios et espaces de vie d'artistes. 4000m2 pvc, 500m2 carrelage",
      img: "/romainville.jpg",
      iconLists: [],
      link: "https://www.ville-romainville.fr/1073-zac-de-l-horloge.htm",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Travailler avec Manan a été une expérience remarquable. Son professionnalisme, sa réactivité et son engagement à fournir des résultats de qualité ont été constants tout au long de notre collaboration.",
      name: "Sahil Jeetun",
      title: "Director Technique chez Atland Residentiel",
    },
    {
      quote:
        "J’ai eu le plaisir de collaborer avec Manan, toujours ponctuel et méticuleux, il a su répondre à nos attentes avec efficacité. Face à un délai de livraison, il a réagi avec efficacité et calme, sauvant notre calendrier.",
      name: "Nam Cao",
      title: "Ingénieur Travaux principal chez Paris Ouest Construction",
    },
    {
      quote:
        "Travailler avec Manan sur notre opérations a révélé son talent pour organiser et anticiper les défis.",
      name: "Emmanuel Pré",
      title: "Chef de groupe chez Paris Ouest Construction",
    },
    
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Nexity",
      //img: "/nexity-logo.svg",
      img: "/nexity-texte.png",
    },
    {
      id: 2,
      name: "Atland Residentiel",
      img: "/atland-texte.png",
    },
    {
      id: 3,
      name: "Paris Ouest Construction",
      img: "/paris-ouest-logo.png",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Alternant développeur fullstack",
      desc: "Crée une landing page pour présenter l'entreprise aux clients ainsi qu'une application de gestion de stock",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Chargé d'affaire BTP",
      desc: "Prise de décision, gestion des équipes, de la logistique, relation client et fournisseur",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 3,
      title: "Projets informatique en auto-didacte pour augmenter en compétences",
      desc: "J'aime coder pendant mon temps libre afin d'en apprendre le plus possible",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
      
    },
    {
      id: 4,
      title: "Chef de projet IT / Product Owner",
      desc: "Je souhaite allier ma passion pour le développement et mes compétence de gestion de projet afin d'avoir une carrière dans la gestion de projet IT",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      href: "https://github.com/Mananbh12"
    },
    {
      id: 2,
      img: "/link.svg",
      href: "https://www.linkedin.com/in/manan-bhardwaj-945643226"
    },
  ];