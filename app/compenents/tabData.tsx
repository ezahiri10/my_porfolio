export const TAB_DATA = [
  {
    id: "skills",
    label: "Skills",
    content: (
      <ul className="list-disc ml-4 space-y-1">
        <li>JavaScript (ES6+)</li>
        <li>React & Next.js</li>
        <li>Node.js (Express / Fastify)</li>
        <li>SQL (SQLite / PostgreSQL)</li>
        <li>Docker & Microservices</li>
      </ul>
    ),
  },

  {
    id: "projects",
    label: "Projects",
    content: (
      <ul className="list-disc ml-4 space-y-1">
        <li>Task Manager App (Fastify + SQLite)</li>
        <li>Auth System (JWT, OAuth2, 2FA)</li>
        <li>Game Tournament API</li>
        <li>Microservices with RabbitMQ</li>
      </ul>
    ),
  },

  {
    id: "certifications",
    label: "Certifications",
    content: (
      <ul className="list-disc ml-4 space-y-1">
        <li>CS50 by Harvard</li>
        <li>Docker & Containers Mastery</li>
        <li>Next.js Fullstack Bootcamp</li>
        <li>Linux Fundamentals</li>
      </ul>
    ),
  },
];
