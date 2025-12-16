export const TAB_DATA = [
  {
    id: "skills",
    label: "Skills",
    content: (
      <ul className="space-y-3 text-secondary-300">
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
          JavaScript
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
          React & Next.js
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
          Node.js (Express / Fastify)
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
          SQL (SQLite / PostgreSQL)
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
          Docker & Microservices
        </li>
      </ul>
    ),
  },

  {
    id: "certifications",
    label: "Certifications",
    content: (
      <ul className="space-y-3 text-secondary-300">
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
          FreeCodeCamp Responsive Web Design Certification
        </li>
      </ul>
    ),
  },
];
