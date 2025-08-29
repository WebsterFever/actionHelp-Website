export const languageData = {
  en: {
    quickLinks: {
      // existing blog keys...
      getInvolvedTitle: "Get Involved",
      volunteer: "Volunteer",
      donate: "Donate",
      collaborate: "Collaborate",
      resourcesTitle: "Resources",
      immigrationGuides: "Immigration Guides",
      resumeTemplates: "Resume Templates",
      supportLinks: "Support Links",
      newsEventsTitle: "News & Events",
      workshops: "Workshops",
      communityStories: "Community Stories",
      advocacyUpdates: "Advocacy Updates",

      // ✅ new service links
      immigrationAssistance: "Immigration Assistance",
      jobPlacement: "Job Placement & Career Training",
      languagePrograms: "Language & Literacy Programs",
      educationSupport: "Education Support for Children",
      housingResources: "Housing & Shelter Resources",
      communityIntegration: "Community Integration & Orientation",
    },

    home: {
      donateMessage: "👉 Make your donation", // Add this line in EN
      welcomeText: "SUPPORTING IMMIGRANT WITH EVERY STEP",
      description:
        "We support Haitian and African immigrants in Springfield, MA and beyond. A human-centered mission focused on empowerment, not just charity",
      buttonText: "Learn More",
      aboutTitle: "About Us",
      aboutDescription: (
        <>
          We are dedicated to empowering immigrants
          <br />
          and creating inclusive communities.
        </>
      ),
      missionTitle: "Mission Statement",
      missionDescription: (
        <>
          Providing resources and support for integration,
          <br />
          growth, and opportunity.
        </>
      ),
      servicesTitle: "Our Services",
      services: [
        {
          title: "Immigration Assistance",
          image: "/images/com.jpg",
          description:
            "We help immigrants navigate legal, housing, and community resources.",
        },
        {
          title: "Job Placement & Career Training",
          image: "/images/job.jpg",
          description:
            "We help immigrants navigate legal, housing, and community resources.",
        },
        {
          title: "Language & Literacy Programs",
          image: "/images/lang.jpg",
          description:
            "We help immigrants navigate legal, housing, and community resources.",
        },
        {
          title: "Education Support for Children",
          image: "/images/education.jpg",
          description:
            "We help immigrants navigate legal, housing, and community resources.",
        },
        {
          title: "Housing & Shelter Resources",
          image: "/images/housing.jpg",
          description:
            "We help immigrants navigate legal, housing, and community resources.",
        },
        {
          title: "Community Integration & Orientation",
          image: "/images/comu.jpeg",
          description:
            "We help immigrants navigate legal, housing, and community resources.",
        },
      ],
      testimonialTitle: "Testimonials",
      testimonials: [
        {
          name: "Marie Joseph",
          message:
            "Thanks to ACTIONHELP, I was able to find a safe place to live and support for my children.",
          image: "/images/comu.jpeg",
        },

        {
          name: "Jean Pierre",
          message:
            "They helped me understand my immigration rights and get assistance quickly.",
          image: "/images/education.jpg",
        },
        {
          name: "Awa Diop",
          message:
            "ACTIONHELP guided me through job training and language classes. Now I have a full-time job!",
          image: "/images/lang.jpg",
        },
        {
          name: "Plim Lups",
          message:
            "ACTIONHELP guided me through job training and language classes. Now I have a full-time job!",
          image: "/images/black.jpg",
        },
        {
          name: "Maki Adams",
          message:
            "ACTIONHELP guided me through job training and language classes. Now I have a full-time job!",
          image: "/images/maki.jpg",
        },
        {
          name: "Nek Williams",
          message:
            "ACTIONHELP guided me through job training and language classes. Now I have a full-time job!",
          image: "/images/plim.jpg",
        },
      ],


    },
    contact: {
      title: "Contact Us",
      subtitle: "We’re here to help. Please reach out with any questions.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      phonePlaceholder : "Your Phone Number",
      sendButton: "Send",
    },
    nav: {
      home: "Home",
      about: "About",
      mission: "Mission",
      services: "Services",
      contact: "Contact",
    },
    chatbot: {
      welcome: "Hi! I'm ActionHelpBot. How can I help you?",
      responses: {
        greetings: "How can I help you?",
        help: "You can ask about immigration, housing, jobs, and more!",
        immigration: "We can help you with your immigration process",
        bye: "Goodbye! Have a great day!",
        default: "Please contact us at (555) 123-4567.",
      },
      toggleOpen: "Chat with us 💬",
      toggleClose: "Close Chat",
      placeholder: "Type here...",
      send: "Send",
    },
    search: {
      placeholder: "Search",
    },
    newsletter: {
      title: "Subscribe to our Newsletter",
      description: "Stay informed with updates and resources.",
      emailPlaceholder: "Enter your email",
      subscribeButton: "Subscribe",
      successMessage: "Thank you for subscribing!",
      errorMessage: "Please enter a valid email.",
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "How can I get immigration support?",
          answer: "You can visit our services page.",
        },
        {
          question: "Is ACTIONHELP free to use?",
          answer: "Yes, our resources and support are completely free.",
        },
        {
          question: "Can I volunteer or donate?",
          answer:
            "Yes, please check the 'Volunteer' or 'Donate' section in our menu.",
        },
      ],
    },
    donate: {
      title: "Support Our Cause",
      description:
        "Help our organization by donating today! All donations go directly to making a difference for our cause.",
      button: "Donate Now",
      secure: "Secure Donation",
      chooseAmount: "Choose Amount",
      customAmount: "Custom Amount",
      monthly: "Make this donation monthly",
      continue: "Continue",
      addInfo: "Add Your Information",
      summary: "Here's what you're about to donate:",
      cardDetails: {
        cardNumber: "Card Number",
        cvc: "CVC",
        name: "Cardholder Name",
        exp: "MM / YY",
        country: "Country",
        city: "City",
        zip: "Zip / Postal Code",
        phone: "Phone",
        address1: "Address",
        address2: "Address Line 2",
        state: "State / Province",
        comment: "Leave a comment",
        anonymous: "Make this an anonymous donation.",
        companyDonation: "Is this donation on behalf of a company?",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        successTitle: "Thank You!",
        successMessage:
          "Your donation was successfully received. We truly appreciate your support!",
        backHome: "Return to Home",
      },
      finalButton: "Donate Now",
      cardTitle: "Support Our Cause",
      cardDescription:
        "Help our organization by donating today! All donations go directly to making a difference for our cause.",
      fillInfo: "Add Your Information",
      name: "Your Name",
      email: "Your Email",
      card: "Card Number",
      submit: "Donate Now",
      back: "Back",
    },

    menuSections: {
      blog: "📌 Blog",
      services: "🛠 Services",
    },

    bigTitle: {
      about: "ABOUT US",
      mission: "MISSION & VISION",
    },

    read: {
      readMore: "Read More",
    },

    // Add other languages like es, pt, ht, de here
  },

  fr: {
    quickLinks: {
      getInvolvedTitle: "Engagez‑vous",
      volunteer: "Bénévolat",
      donate: "Faire un don",
      collaborate: "Collaborer",
      resourcesTitle: "Ressources",
      immigrationGuides: "Guides d'immigration",
      resumeTemplates: "Modèles de CV",
      supportLinks: "Liens de soutien",
      newsEventsTitle: "Actualités & Événements",
      workshops: "Ateliers",
      communityStories: "Histoires de la communauté",
      advocacyUpdates: "Mises à jour de la sensibilisation",
      immigrationAssistance: "Assistance en immigration",
      jobPlacement: "Placement d’emploi et formation",
      languagePrograms: "Programmes de langue et alphabétisation",
      educationSupport: "Soutien scolaire pour enfants",
      housingResources: "Ressources de logement et hébergement",
      communityIntegration: "Intégration et orientation culturelle",
    },

    home: {
      welcomeText: "BIENVENUE CHEZ ACTIONHELP",
      donateMessage: "👉 Faites un don",
      description:
        "Nous soutenons les immigrants haïtiens et africains à Springfield, MA et au-delà.",
      buttonText: "En savoir plus",
      aboutTitle: "À propos de nous",
      aboutDescription: (
        <>
          Nous sommes dédiés à l’autonomisation des immigrants
          <br />
          et à la création de communautés inclusives.
        </>
      ),
      missionTitle: "Déclaration de mission",
      missionDescription: (
        <>
          Fournir des ressources et du soutien pour l’intégration,
          <br />
          la croissance et les opportunités.
        </>
      ),
      servicesTitle: "Nos Services",
      services: [
        { title: "Assistance en immigration", image: "/images/com.jpg", description: "We help immigrants navigate legal, housing, and community resources." },
        { title: "Placement d’emploi & formation", image: "/images/job.jpg", description: "We help immigrants navigate legal, housing, and community resources." },
        {
          title: "Programmes de langue & alphabétisation",
          image: "/images/lang.jpg",
          description: "We help immigrants navigate legal, housing, and community resources."
        },
        {
          title: "Soutien scolaire pour enfants",
          image: "/images/education.jpg",
          description: "We help immigrants navigate legal, housing, and community resources."
        },
        {
          title: "Ressources de logement et d’hébergement",
          image: "/images/housing.jpg",
          description: "We help immigrants navigate legal, housing, and community resources."
        },
        {
          title: "Intégration & orientation culturelle",
          image: "/images/comu.jpeg",
          description: "We help immigrants navigate legal, housing, and community resources."
        },
      ],
      testimonialTitle: "Témoignages",
      testimonials: [
        {
          name: "Marie Joseph",
          message:
            "Grâce à ACTIONHELP, j’ai pu trouver un endroit sûr où vivre et un soutien pour mes enfants.",
          image: "/images/comu.jpeg",
        },

        {
          name: "Jean Pierre",
          message:
            "Ils m’ont aidé à comprendre mes droits en matière d’immigration et à obtenir une assistance rapidement.",
          image: "/images/education.jpg",
        },
        {
          name: "Awa Diop",
          message:
            "ACTIONHELP m’a guidée à travers la formation professionnelle et les cours de langue. Maintenant j’ai un emploi à temps plein !",
          image: "/images/lang.jpg",
        },

        
        
      ],
    },

    contact: {
      title: "Contactez-nous",
      subtitle:
        "Nous sommes là pour vous aider. N'hésitez pas à poser vos questions.",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre e-mail",
      messagePlaceholder: "Votre message",
      phonePlaceholder : "Votre numéro de téléphone",
      sendButton: "Envoyer",
    },

    nav: {
      home: "Accueil",
      about: "À propos",
      mission: "Mission",
      services: "Services",
      contact: "Contact",
    },
    chatbot: {
      welcome: "Hi! I'm ActionHelpBot. How can I help you?",
      responses: {
        greetings: "How can i help you?",
        help: "You can ask about immigration, housing, jobs, and more!",
        bye: "Goodbye! Have a great day!",
        default: "Please contact us at (555) 123-4567.",
      },
      toggleOpen: "Chat with us 💬",
      toggleClose: "Close Chat",
      placeholder: "Type here...",
      send: "Send",
    },
    search: {
      placeholder: "Recherche",
    },
    newsletter: {
      title: "Abonnez-vous à notre newsletter",
      description: "Restez informé avec des mises à jour et des ressources.",
      emailPlaceholder: "Entrez votre e-mail",
      subscribeButton: "S'abonner",
      successMessage: "Merci pour votre abonnement !",
      errorMessage: "Veuillez entrer un e-mail valide.",
    },
    faq: {
      title: "Foire aux questions",
      questions: [
        {
          question: "Comment puis-je obtenir de l’aide à l’immigration ?",
          answer:
            "Vous pouvez consulter notre page de services ou nous contacter directement via le formulaire.",
        },
        {
          question: "ACTIONHELP est-il gratuit ?",
          answer:
            "Oui, nos ressources et notre accompagnement sont entièrement gratuits.",
        },
        {
          question: "Puis-je faire du bénévolat ou un don ?",
          answer:
            "Oui, consultez la section « Bénévolat » ou « Faire un don » dans notre menu.",
        },
      ],
    },
    donate: {
      title: "Soutenez notre cause",
      description:
        "Aidez notre organisation en faisant un don aujourd’hui ! Tous les dons vont directement à notre mission.",
      button: "Faire un don",
      secure: "Don sécurisé",
      chooseAmount: "Choisissez le montant",
      customAmount: "Montant personnalisé",
      monthly: "Faire de ce don un don mensuel",
      continue: "Continuer",
      addInfo: "Ajoutez vos informations",
      summary: "Voici ce que vous êtes sur le point de donner :",
      cardDetails: {
        cardNumber: "Numéro de carte",
        cvc: "CVC",
        name: "Nom du titulaire",
        exp: "MM / AA",
        country: "Pays",
        city: "Ville",
        zip: "Code postal",
        phone: "Téléphone",
      },

      finalButton: "Faire un don",
    },

    menuSections: {
      blog: "📌 Blog",
      services: "🛠 Services",
    },

    bigTitle: {
      about: "À PROPOS DE NOUS",
      mission: "MISSION & VISION",
    },

    read: {
      readMore: "En savoir plus",
    },
  },

  es: {
    quickLinks: {
      getInvolvedTitle: "Involúcrate",
      volunteer: "Voluntariado",
      donate: "Donar",
      collaborate: "Colaborar",
      resourcesTitle: "Recursos",
      immigrationGuides: "Guías de Inmigración",
      resumeTemplates: "Plantillas de CV",
      supportLinks: "Enlaces de Apoyo",
      newsEventsTitle: "Noticias y Eventos",
      workshops: "Talleres",
      communityStories: "Historias de la Comunidad",
      advocacyUpdates: "Noticias de Incidencia",
      immigrationAssistance: "Asistencia de Inmigración",
      jobPlacement: "Colocación de Empleo y Capacitación",
      languagePrograms: "Programas de Idioma y Alfabetización",
      educationSupport: "Apoyo Educativo Infantil",
      housingResources: "Recursos de Vivienda y Refugio",
      communityIntegration: "Integración y Orientación Comunitaria",
    },
    home: {
      donateMessage: "👉 Haz tu donación",
      welcomeText: "APOYANDO INMIGRANTES EN CADA PASO",
      description: "Apoyamos a inmigrantes haitianos y africanos en Springfield, MA y más allá.",
      buttonText: "Más información",
      aboutTitle: "Sobre Nosotros",
      aboutDescription: (
        <>
          Nos dedicamos a empoderar inmigrantes
          <br />
          y crear comunidades inclusivas.
        </>
      ),
      missionTitle: "Declaración de Misión",
      missionDescription: (
        <>
          Proporcionando recursos y apoyo para integración,
          <br />
          crecimiento y oportunidades.
        </>
      ),
      servicesTitle: "Nuestros Servicios",
      services: [
        { title: "Asistencia de Inmigración", image: "/images/com.jpg", description: "Ayudamos a navegar recursos legales, vivienda y comunitarios." },
        { title: "Colocación de Empleo y Capacitación", image: "/images/job.jpg", description: "Apoyo para encontrar empleo y formación profesional." },
        { title: "Programas de Idioma y Alfabetización", image: "/images/lang.jpg", description: "Clases de idioma y alfabetización para integración." },
        { title: "Apoyo Educativo Infantil", image: "/images/education.jpg", description: "Recursos para la educación de niños inmigrantes." },
        { title: "Recursos de Vivienda y Refugio", image: "/images/housing.jpg", description: "Ayuda para encontrar vivienda adecuada." },
        { title: "Integración Comunitaria y Orientación", image: "/images/comu.jpeg", description: "Orientación para integrarse en la comunidad local." },
      ],
      testimonialTitle: "Testimonios",
      testimonials: [
        { name: "Marie Joseph", message: "Gracias a ACTIONHELP encontré un lugar seguro para vivir y apoyo para mis hijos.", image: "/images/comu.jpeg" },
        { name: "Jean Pierre", message: "Me ayudaron a entender mis derechos migratorios y a recibir asistencia rápidamente.", image: "/images/education.jpg" },
        { name: "Awa Diop", message: "ACTIONHELP me guió en capacitación laboral y clases de idioma. ¡Ahora tengo trabajo a tiempo completo!", image: "/images/lang.jpg" },
        { name: "Plim Lups", message: "ACTIONHELP me guió en capacitación laboral y clases de idioma. ¡Ahora tengo trabajo a tiempo completo!", image: "/images/black.jpg" },
        { name: "Maki Adams", message: "ACTIONHELP me guió en capacitación laboral y clases de idioma. ¡Ahora tengo trabajo a tiempo completo!", image: "/images/maki.jpg" },
        { name: "Nek Williams", message: "ACTIONHELP me guió en capacitación laboral y clases de idioma. ¡Ahora tengo trabajo a tiempo completo!", image: "/images/plim.jpg" },
      ],
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Estamos aquí para ayudarte. Por favor, contáctanos con cualquier pregunta.",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "Tu Correo",
      messagePlaceholder: "Tu Mensaje",
      phonePlaceholder : "Tu número de teléfono",
      sendButton: "Enviar",
    },
    nav: {
      home: "Inicio",
      about: "Acerca",
      mission: "Misión",
      services: "Servicios",
      contact: "Contacto",
    },
    chatbot: {
      welcome: "¡Hola! Soy ActionHelpBot. ¿En qué puedo ayudarte?",
      responses: {
        greetings: "¿Cómo puedo ayudarte?",
        help: "Puedes preguntar sobre inmigración, vivienda, empleos y más.",
        immigration: "Podemos ayudarte con tu proceso de inmigración",
        bye: "¡Adiós! Que tengas un gran día.",
        default: "Por favor contáctanos al (555) 123-4567.",
      },
      toggleOpen: "Chatea con nosotros 💬",
      toggleClose: "Cerrar Chat",
      placeholder: "Escribe aquí…",
      send: "Enviar",
    },
    search: {
      placeholder: "Buscar",
    },
    newsletter: {
      title: "Suscríbete a nuestro boletín",
      description: "Mantente informado con actualizaciones y recursos.",
      emailPlaceholder: "Introduce tu correo",
      subscribeButton: "Suscribir",
      successMessage: "¡Gracias por suscribirte!",
      errorMessage: "Por favor introduce un correo válido.",
    },
    faq: {
      title: "Preguntas Frecuentes",
      questions: [
        {
          question: "¿Cómo puedo obtener apoyo migratorio?",
          answer: "Puedes visitar nuestra página de servicios.",
        },
        {
          question: "¿ACTIONHELP es gratuito?",
          answer: "Sí, nuestros recursos y apoyo son completamente gratuitos.",
        },
        {
          question: "¿Puedo ser voluntario o donar?",
          answer: "Sí, revisa la sección 'Voluntariado' o 'Donar' en nuestro menú.",
        },
      ],
    },
    donate: {
      title: "Apoya Nuestra Causa",
      description: "Ayuda a nuestra organización donando hoy. Todas las donaciones se destinan directamente a nuestra causa.",
      button: "Donar Ahora",
      secure: "Donación Segura",
      chooseAmount: "Elige Monto",
      customAmount: "Monto Personalizado",
      monthly: "Hacer esta donación mensual",
      continue: "Continuar",
      addInfo: "Agrega tu información",
      summary: "Esto es lo que estás a punto de donar:",
      cardDetails: {
        cardNumber: "Número de Tarjeta",
        cvc: "CVC",
        name: "Nombre del titular",
        exp: "MM / AA",
        country: "País",
        city: "Ciudad",
        zip: "Código Postal",
        phone: "Teléfono",
        address1: "Dirección",
        address2: "Dirección Línea 2",
        state: "Estado / Provincia",
        comment: "Deja un comentario",
        anonymous: "Hacer esta donación anónima.",
        companyDonation: "¿Esta donación es en nombre de una empresa?",
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Correo Electrónico",
        successTitle: "¡Gracias!",
        successMessage: "Tu donación fue recibida con éxito. ¡Realmente apreciamos tu apoyo!",
        backHome: "Volver al inicio",
      },
      finalButton: "Donar Ahora",
      cardTitle: "Apoya Nuestra Causa",
      cardDescription: "Ayuda a nuestra organización donando hoy. Todas las donaciones se destinan directamente a nuestra causa.",
      fillInfo: "Agrega tu información",
      name: "Tu Nombre",
      email: "Tu Correo",
      card: "Número de Tarjeta",
      submit: "Donar Ahora",
      back: "Volver",
    },

    menuSections: {
      blog: "📌 Blog",
      services: "🛠 Servicios",
    },

    bigTitle: {
      about: "QUIÉNES SOMOS",
      mission: "MISIÓN Y VISIÓN",
    },

     read: {
      readMore: "leer más",
    },
  },

  ht: {
    quickLinks: {
       getInvolvedTitle: "Angaje W",
      volunteer: "Volontè",
      donate: "Bay Don",
      collaborate: "Kolabore",
      resourcesTitle: "Resous",
      immigrationGuides: "Gid Imigrasyon",
      resumeTemplates: "Modèl CV",
      supportLinks: "Lyens Sipò",
      newsEventsTitle: "Nouvèl & Evènman",
      workshops: "Atelye",
      communityStories: "Istwa Kominote",
      advocacyUpdates: "Mizajou Avonman",
      immigrationAssistance: "Asistans Imigrasyon",
      jobPlacement: "Plasman Travay & Fòmasyon",
      languagePrograms: "Pwogram Lang & Alfabetizasyon",
      educationSupport: "Sipò Edikasyon pou Timoun",
      housingResources: "Resous Lojman & Refij",
      communityIntegration: "Entegrasyon Ak Òyantasyon Kominotè",
    },
    home: {
      donateMessage: "👉 Fè don ou kounye a",
      welcomeText: "SIPÒTE IMIGRAN NAN CHAK ETAP",
      description: "Nou sipòte imigran ayisyen ak afriken nan Springfield, MA ak lòt kote.",
      buttonText: "Aprann plis",
      aboutTitle: "Sou Nou",
      aboutDescription: (
        <>
          Nou dedye pou bay pouvwa imigran
          <br />
          e kreye kominote enklizif.
        </>
      ),
      missionTitle: "Deklarasyon Misyon",
      missionDescription: (
        <>
          Bay resous ak sipò pou entegrasyon,
          <br />
          kwasans ak opòtinite.
        </>
      ),
      servicesTitle: "Sèvis Nou Yo",
      services: [
        { title: "Asistans Imigrasyon", image: "/images/com.jpg", description: "Nou ede pou navige resous legal, lojman ak kominotè." },
        { title: "Plasman Travay & Fòmasyon", image: "/images/job.jpg", description: "Sipò pou jwenn travay ak fòmasyon pwofesyonèl." },
        { title: "Pwogram Lang & Alfabetizasyon", image: "/images/lang.jpg", description: "Klas lang ak alfabetizasyon pou entegrasyon." },
        { title: "Sipò Edikasyon Timoun", image: "/images/education.jpg", description: "Resous pou edikasyon timoun imigran." },
        { title: "Resous Lojman & Refij", image: "/images/housing.jpg", description: "Èd pou jwenn lojman apwopriye." },
        { title: "Entegrasyon Kominotè & Òyantasyon", image: "/images/comu.jpeg", description: "Òyantasyon pou entegre nan kominote lokal la." },
      ],
      testimonialTitle: "Temwayaj",
      testimonials: [
        { name: "Marie Joseph", message: "Mèsi ak ACTIONHELP mwen jwenn yon kote sekirite pou viv ak sipò pou pitit mwen yo.", image: "/images/comu.jpeg" },
        { name: "Jean Pierre", message: "Yo ede m konprann dwa imigrasyon mwen e jwenn asistans rapid.", image: "/images/education.jpg" },
        { name: "Awa Diop", message: "ACTIONHELP gide m nan fòmasyon travay ak klas lang. Kounye a mwen gen yon travay a plen tan!", image: "/images/lang.jpg" },
        { name: "Plim Lups", message: "ACTIONHELP gide m nan fòmasyon travay ak klas lang. Kounye a mwen gen yon travay a plen tan!", image: "/images/black.jpg" },
        { name: "Maki Adams", message: "ACTIONHELP gide m nan fòmasyon travay ak klas lang. Kounye a mwen gen yon travay a plen tan!", image: "/images/maki.jpg" },
        { name: "Nek Williams", message: "ACTIONHELP gide m nan fòmasyon travay ak klas lang. Kounye a mwen gen yon travay a plen tan!", image: "/images/plim.jpg" },
      ],
    },
    contact: {
      title: "Kontakte Nou",
      subtitle: "Nou la pou ede w. Tanpri kontakte nou si ou gen kesyon.",
      namePlaceholder: "Non Ou",
      emailPlaceholder: "Imèl Ou",
      messagePlaceholder: "Mesaj Ou",
      phonePlaceholder : "Nimewo telefòn ou",
      sendButton: "Voye",
    },
    nav: {
      home: "Akèy",
      about: "Nou Menm",
      mission: "Misyon",
      services: "Sèvis",
      contact: "Kontak",
    },
    chatbot: {
      welcome: "Bonjou! Mwen se ActionHelpBot. Kijan m ka ede ou?",
      responses: {
        greetings: "Kijan m ka ede ou?",
        help: "Ou ka mande sou imigrasyon, lojman, travay, ak plis.",
        immigration: "Nou ka ede w ak pwosesis imigrasyon ou",
        bye: "Orevwa! Pase yon bon jounen.",
        default: "Tanpri kontakte nou nan (555) 123-4567.",
      },
      toggleOpen: "Chat avèk nou 💬",
      toggleClose: "Fèmen Chat",
      placeholder: "Ekri isit la…",
      send: "Voye",
    },
    search: {
      placeholder: "Chèche",
    },
    newsletter: {
      title: "Abòne ak bilten nou",
      description: "Rete enfòme ak mizajou ak resous.",
      emailPlaceholder: "Antre imel ou",
      subscribeButton: "Abònman",
      successMessage: "Mèsi pou abònman ou!",
      errorMessage: "Tanpri antre yon imel valab.",
    },
    faq: {
      title: "Kesyon Souvan Poze",
      questions: [
        {
          question: "Ki jan mwen ka jwenn sipò imigrasyon?",
          answer: "Ou ka vizite paj sèvis nou an.",
        },
        {
          question: "Èske ACTIONHELP gratis?",
          answer: "Wi, resous ak sipò nou yo nèt ale gratis.",
        },
        {
          question: "Èske mwen ka volontè oswa bay don?",
          answer: "Wi, tanpri tcheke seksyon “Volontè” oswa “Bay Don” nan meni an.",
        },
      ],
    },
    donate: {
      title: "Sipòte Koz Nou",
      description: "Ede òganizasyon nou an lè w bay don jodi a. Tout don yo ale dirèkteman nan koz la.",
      button: "Bay Don Kounye a",
      secure: "Don Sekirize",
      chooseAmount: "Chwazi Montan",
      customAmount: "Montan Pèsonalize",
      monthly: "Fè don sa a chak mwa",
      continue: "Kontinye",
      addInfo: "Ajoute enfòmasyon ou",
      summary: "Men sa w pral bay don pou:",
      cardDetails: {
        cardNumber: "Nimewo Kat",
        cvc: "CVC",
        name: "Non Titilè",
        exp: "MM / AA",
        country: "Peyi",
        city: "Vil",
        zip: "Kòd Postal",
        phone: "Telefòn",
        address1: "Adrès",
        address2: "Adrès Liy 2",
        state: "Eta / Pwovens",
        comment: "Kite yon kòmantè",
        anonymous: "Fè don sa a anonim.",
        companyDonation: "Èske don sa a fèt pou yon konpayi?",
        firstName: "Non",
        lastName: "Siyati",
        email: "Imèl",
        successTitle: "Mèsi!",
        successMessage: "Don ou te resevwa avèk siksè. Nou vrèman apresye sipò ou!",
        backHome: "Tounen Lakay",
      },
      finalButton: "Bay Don Kounye a",
      cardTitle: "Sipòte Koz Nou",
      cardDescription: "Ede òganizasyon nou an lè w bay don jodi a. Tout don yo ale dirèkteman nan koz la.",
      fillInfo: "Ajoute enfòmasyon ou",
      name: "Non Ou",
      email: "Imèl Ou",
      card: "Nimewo Kat",
      submit: "Bay Don Kounye a",
      back: "Retounen",
    },

    menuSections: {
      blog: "📌 Blog",
      services: "🛠 Sèvis",
    },

     bigTitle: {
      about: "NOU MENM",
      mission: "MISYON AK VIZYON",
    },

    read: {
      readMore: "li plis",
    },
  },


};

