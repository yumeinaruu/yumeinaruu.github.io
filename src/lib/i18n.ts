export type Locale = "en" | "ru";

const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      badge: "Available for opportunities",
      firstName: "Stanislau",
      lastName: "Lisavy",
      title: "Backend Developer",
      tagline:
        "Building robust, scalable backend systems with clean architecture. Turning complex requirements into elegant solutions.",
      contactMe: "Contact Me",
      viewExperience: "View Experience",
    },
    about: {
      heading: "About Me",
      subtitle: "Passionate about building things that work at scale",
      description:
        "Backend developer with a strong focus on building clean, maintainable, and high-performance systems. I enjoy working with distributed architectures, solving complex integration challenges, and continuously improving system design. I care deeply about code quality, testability, and delivering reliable software.",
      highlights: [
        {
          title: "Backend Architecture",
          description:
            "Designing resilient server-side systems with Kotlin and Spring Boot, following clean architecture principles.",
        },
        {
          title: "Distributed Systems",
          description:
            "Building microservice-based platforms with proper service isolation, fault tolerance, and data consistency.",
        },
        {
          title: "System Integration",
          description:
            "Integrating complex third-party systems — from FIX/FAST protocols to payment gateways and enterprise platforms.",
        },
      ],
    },
    experience: {
      heading: "Experience",
      subtitle: "Professional journey and key projects",
      company: "LLC Krainet",
      role: "Backend Developer",
      period: "July 2024 — Present",
      nda: "Projects under NDA — descriptions reflect general scope only",
      projects: [
        {
          title: "Securities Trading Platform",
          description:
            "High-reliability platform for securities trading with real-time market data processing and order management.",
          highlights: [
            "Integrated FIX/FAST protocol for real-time market data streaming with BCSE",
            "Designed high-throughput REST APIs for order execution and trading workflows",
            "Refactored core modules to improve scalability, latency, and fault tolerance",
            "Improved system observability and reliability in a high-load trading environment",
          ],
        },
        {
          title: "Auto-Secured Loans Platform",
          description:
            "End-to-end loan processing platform with complex financial workflows, automated document generation and multi-system integration.",
          highlights: [
            "Architected multi-system integrations (Bitrix24 CRM, 1C via SFTP/SMB)",
            "Designed automated document generation pipeline (.odt → .pdf)",
            "Built microservices communication layer using REST and Kafka",
            "Improved deployment workflows and environment stability",
            "Engineered comprehensive unit and integration test suites (80%+ coverage)",
            "Applied advanced Mockito & MockK techniques (argument captors, slots, behavioral verification) to ensure business logic reliability and edge-case resilience",
            "Developed modular annuity payment calculation engine supporting multiple configurable calculators",
            "Built extensible calculator framework allowing dynamic strategy resolution via factory-based orchestration",
            "Encapsulated domain logic using Strategy, Composite, and Factory patterns for flexible financial calculations",
          ],
        },
        {
          title: "Car Leasing",
          description:
            "Enterprise-grade leasing platform with state-driven business processes and deep integration with Bitrix24 CRM for end-to-end process automation.",
          highlights: [
            "Designed and maintained deep bidirectional integration with Bitrix24 CRM, synchronizing leads, contacts, and deal lifecycle states",
            "Designed and implemented complex business workflows using Spring StateMachine (states, guards, actions) to model leasing lifecycle processes",
            "Encapsulated domain logic using Strategy, Composite, and Factory patterns for flexible financial calculations",
            "Achieved 80%+ test coverage with comprehensive unit and integration testing",
            "Applied advanced Mockito & MockK techniques (argument captors, slots, behavioral verification) to validate business state transitions and financial logic",
            "Designed and implemented advanced logging pattern using BeanPostProcessor to create Proxies for put MDC",
          ],
        },
      ],
    },
    skills: {
      heading: "Skills",
      subtitle: "Technologies and tools I work with",
      categories: {
        backend: "Backend",
        devops: "DevOps",
        databases: "Databases",
        architecture: "Architecture & Principles",
      },
    },
    education: {
      heading: "Education",
      subtitle: "Academic background",
      university:
        "Belarusian State University of Informatics and Radioelectronics",
      degree: "Bachelor's Degree",
      period: "2022 — 2026",
    },
    languages: {
      heading: "Languages",
      subtitle: "Communication skills",
      items: [
        { name: "English", level: "B2" },
        { name: "Russian", level: "Native" },
        { name: "Belarusian", level: "Native" },
        { name: "Japanese", level: "N5" },
      ],
    },
    contact: {
      heading: "Get in Touch",
      subtitle: "",
      email: "Email",
      phone: "Phone",
      sendEmail: "Send Email",
    },
    footer: {
      copyright: "Stanislau Lisavy",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      experience: "Опыт",
      skills: "Навыки",
      education: "Образование",
      contact: "Контакты",
    },
    hero: {
      badge: "Открыт к предложениям",
      firstName: "Лисовой",
      lastName: "Станислав",
      title: "Backend-разработчик",
      tagline:
        "Создаю надёжные, масштабируемые серверные системы с чистой архитектурой. Превращаю сложные требования в элегантные решения.",
      contactMe: "Связаться",
      viewExperience: "Смотреть опыт",
    },
    about: {
      heading: "Обо мне",
      subtitle: "Создаю масштабируемые и надёжные системы",
      description:
        "Backend-разработчик с фокусом на построение чистых, поддерживаемых и высокопроизводительных систем. Мне нравится работать с распределёнными архитектурами, решать сложные интеграционные задачи и постоянно улучшать проектирование систем. Я уделяю большое внимание качеству кода, тестируемости и надёжности ПО.",
      highlights: [
        {
          title: "Backend-архитектура",
          description:
            "Проектирование устойчивых серверных систем на Kotlin и Spring Boot с использованием принципов чистой архитектуры.",
        },
        {
          title: "Распределённые системы",
          description:
            "Создание микросервисных платформ с правильной изоляцией сервисов, отказоустойчивостью и консистентностью данных.",
        },
        {
          title: "Системная интеграция",
          description:
            "Интеграция сложных сторонних систем — от протоколов FIX/FAST до платёжных шлюзов и корпоративных платформ.",
        },
      ],
    },
    experience: {
      heading: "Опыт работы",
      subtitle: "Профессиональный путь и ключевые проекты",
      company: "ООО Крайнет",
      role: "Backend-разработчик",
      period: "Июль 2024 — Настоящее время",
      nda: "Проекты под NDA — описания отражают только общий характер работы",
      projects: [
        {
          title: "Платформа торговли ценными бумагами",
          description:
            "Высоконадёжная платформа для торговли ценными бумагами с обработкой рыночных данных в реальном времени и управлением ордерами.",
          highlights: [
            "Интеграция протокола FIX/FAST для потоковой передачи рыночных данных с БВФБ",
            "Проектирование высоконагруженных REST API для исполнения ордеров и торговых процессов",
            "Рефакторинг основных модулей для улучшения масштабируемости, задержки и отказоустойчивости",
            "Повышение наблюдаемости и надёжности системы в высоконагруженной торговой среде",
          ],
        },
        {
          title: "Платформа автокредитования под залог",
          description:
            "Комплексная платформа обработки займов со сложными финансовыми процессами, автоматической генерацией документов и мультисистемной интеграцией.",
          highlights: [
            "Архитектура мультисистемных интеграций (Bitrix24 CRM, 1C через SFTP/SMB)",
            "Проектирование автоматической генерации документов (.odt → .pdf)",
            "Построение коммуникационного слоя микросервисов с использованием REST и Kafka",
            "Улучшение процессов деплоя и стабильности окружений",
            "Разработка комплексных модульных и интеграционных тестов (80%+ покрытие)",
            "Применение продвинутых техник Mockito и MockK (argument captors, slots, поведенческая верификация) для обеспечения надёжности бизнес-логики",
            "Разработка модульного движка расчёта аннуитетных платежей с множеством настраиваемых калькуляторов",
            "Создание расширяемого фреймворка калькуляторов с динамическим разрешением стратегий через фабрику",
            "Инкапсуляция доменной логики с использованием паттернов Strategy, Composite и Factory",
          ],
        },
        {
          title: "Автолизинг",
          description:
            "Корпоративная лизинговая платформа с процессами на основе конечных автоматов и глубокой интеграцией с Bitrix24 CRM для сквозной автоматизации.",
          highlights: [
            "Проектирование и поддержка глубокой двунаправленной интеграции с Bitrix24 CRM, синхронизация лидов, контактов и состояний жизненного цикла сделок",
            "Проектирование и реализация сложных бизнес-процессов на Spring StateMachine (состояния, гварды, экшены) для моделирования жизненного цикла лизинга",
            "Инкапсуляция доменной логики с использованием паттернов Strategy, Composite и Factory для гибких финансовых расчётов",
            "Достижение 80%+ покрытия тестами с комплексным модульным и интеграционным тестированием",
            "Применение продвинутых техник Mockito и MockK для валидации бизнес-переходов состояний и финансовой логики",
            "Проектирование и реализация паттерна логирования через BeanPostProcessor с созданием Proxy для MDC",
          ],
        },
      ],
    },
    skills: {
      heading: "Навыки",
      subtitle: "Технологии и инструменты, с которыми я работаю",
      categories: {
        backend: "Backend",
        devops: "DevOps",
        databases: "Базы данных",
        architecture: "Архитектура и принципы",
      },
    },
    education: {
      heading: "Образование",
      subtitle: "Академическая подготовка",
      university:
        "Белорусский государственный университет информатики и радиоэлектроники",
      degree: "Бакалавр",
      period: "2022 — 2026",
    },
    languages: {
      heading: "Языки",
      subtitle: "Коммуникативные навыки",
      items: [
        { name: "Английский", level: "B2" },
        { name: "Русский", level: "Родной" },
        { name: "Белорусский", level: "Родной" },
        { name: "Японский", level: "N5" },
      ],
    },
    contact: {
      heading: "Связь со мной",
      subtitle: "",
      email: "Почта",
      phone: "Телефон",
      sendEmail: "Написать письмо",
    },
    footer: {
      copyright: "Станислав Лисовой",
    },
  },
};

export type Translations = (typeof translations)["en"];

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
