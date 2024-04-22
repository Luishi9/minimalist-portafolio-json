import { c as createAstro, d as createComponent, r as renderTemplate, j as addAttribute, e as renderHead, k as renderSlot, m as maybeRenderHead, l as renderComponent } from '../astro_CdGMreOr.mjs';
/* empty css                          */

const $$Astro$e = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/layouts/Layout.astro", void 0);

const $$Astro$d = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Section;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-sh445jdo> ${title && renderTemplate`<h2 data-astro-cid-sh445jdo>${title}</h2>`} ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/components/Section.astro", void 0);

const basics = {
	name: "Luis Eduardo Cruz Rubin",
	label: "Programmer Web",
	image: "",
	email: "luisrubin977@gmail.com",
	phone: "(+52) 2441567536",
	url: "https://johndoe.com",
	summary: "+15 años de experiencia como Desarrollador Web. Actualmente soy Creador de Contenido y Divulgador sobre Programación. Vivo en Barcelona, España. He trabajado en diferentes entornos: desde acelerar el desarrollo de start-ups hasta liderando equipos de empresas multinacionales.",
	location: {
		address: "2712 Broadway St",
		postalCode: "CA 94115",
		city: "Atlixco, Puebla.",
		countryCode: "MX",
		region: "Puebla"
	},
	profiles: [
		{
			network: "GitHub",
			username: "john",
			url: "https://github.com/Luishi9/minimalist-portafolio-json"
		},
		{
			network: "linkedIn",
			username: "john",
			url: "https://github.com/Luishi9/minimalist-portafolio-json"
		}
	]
};
const work = [
	{
		name: "DOCUPUBELA",
		position: "TRANSFORMACION DIGITAL",
		url: "https://company.com",
		startDate: "2013-01-01",
		endDate: "2014-01-01",
		summary: "Programador web…",
		highlights: [
			"Started the company"
		]
	}
];
const education = [
	{
		institution: "Benemerita Universidad Autonoma de Puebla",
		url: "https://institution.com/",
		area: "Ing. Tecnologias de la Informacion",
		studyType: "University",
		startDate: "2017-08-01",
		endDate: "2023-09-01",
		score: "4.0",
		courses: [
			"DB1101 - Basic SQL"
		]
	}
];
const skills = [
	{
		name: "Web Development",
		level: "Master",
		keywords: [
			"HTML",
			"CSS",
			"JavaScript"
		]
	}
];
const projects = [
	{
		name: "Project",
		isActive: true,
		startDate: "2019-01-01",
		endDate: "2021-01-01",
		description: "Description...",
		highlights: [
			"Won award at AIHacks 2016"
		],
		url: "https://project.com/"
	},
	{
		name: "Project",
		isActive: true,
		startDate: "2019-01-01",
		endDate: "2021-01-01",
		description: "Description...",
		highlights: [
			"Won award at AIHacks 2016"
		],
		url: "https://project.com/"
	},
	{
		name: "Project",
		isActive: true,
		startDate: "2019-01-01",
		endDate: "2021-01-01",
		description: "Description...",
		highlights: [
			"Won award at AIHacks 2016"
		],
		url: "https://project.com/"
	},
	{
		name: "Project",
		isActive: true,
		startDate: "2019-01-01",
		endDate: "2021-01-01",
		description: "Description...",
		highlights: [
			"Won award at AIHacks 2016"
		],
		url: "https://project.com/"
	}
];

const $$Astro$c = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Experiencia laboral", "data-astro-cid-ghubstuj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-ghubstuj> ${work.map(({ name, startDate, endDate, position, summary, highlights }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
    const years = `${startYear} - ${endYear}`;
    return renderTemplate`<li data-astro-cid-ghubstuj> <article data-astro-cid-ghubstuj> <header data-astro-cid-ghubstuj> <div data-astro-cid-ghubstuj> <h3 data-astro-cid-ghubstuj>${name}</h3> <h4 data-astro-cid-ghubstuj>${position}</h4> </div> <time data-astro-cid-ghubstuj>${years}</time> </header> <p data-astro-cid-ghubstuj>${highlights}</p> <footer data-astro-cid-ghubstuj> <p data-astro-cid-ghubstuj>${summary}</p> </footer> </article> </li>`;
  })} </ul> ` })} `;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/components/sections/Experience.astro", void 0);

const $$Astro$b = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$About;
  const { summary } = basics;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Sobre mi" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p> ${summary} </p> ` })}`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/components/sections/About.astro", void 0);

const $$Astro$a = createAstro();
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Education;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Education", "data-astro-cid-qtcj2w7e": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-qtcj2w7e> ${education.map(({ institution, area, studyType, courses, startDate, endDate }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
    return renderTemplate`<li data-astro-cid-qtcj2w7e> <article data-astro-cid-qtcj2w7e> <header data-astro-cid-qtcj2w7e> <div data-astro-cid-qtcj2w7e> <h3 data-astro-cid-qtcj2w7e>${institution}</h3> <h4 data-astro-cid-qtcj2w7e>${studyType}</h4> <h4 data-astro-cid-qtcj2w7e>${area}</h4> </div> <div data-astro-cid-qtcj2w7e> <time${addAttribute(startDate, "datetime")}${addAttribute(startDate, "data-title")} data-astro-cid-qtcj2w7e> ${startYear} </time> ${" - "} <time${addAttribute(endDate, "datetime")}${addAttribute(endDate, "data-title")} data-astro-cid-qtcj2w7e> ${endYear} </time> </div> </header> <footer data-astro-cid-qtcj2w7e> <p data-astro-cid-qtcj2w7e>${courses}</p> </footer> </article> </li>`;
  })} </ul> ` })} `;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/components/sections/Education.astro", void 0);

const $$Astro$9 = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-4"><title>Mail Icon</title><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/icons/Mail.astro", void 0);

const $$Astro$8 = createAstro();
const $$Phone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Phone Icon</title><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/icons/Phone.astro", void 0);

const $$Astro$7 = createAstro();
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/icons/GitHub.astro", void 0);

const $$Astro$6 = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/icons/linkedIn.astro", void 0);

const $$Astro$5 = createAstro();
const $$WorldMap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$WorldMap;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path> </svg>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/icons/WorldMap.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, label, image, location, email, profiles, phone } = basics;
  const { city, region } = location;
  const SOCIAL_ICONS = {
    GitHub: $$GitHub,
    linkedIn: $$LinkedIn
    //X,
  };
  const linkedInfo = profiles.find(({ network }) => network === "LinkedIn");
  const linkedUrl = linkedInfo?.url;
  const printInfo = [email, phone, linkedUrl].filter(Boolean).join(" \u2022 ");
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-anhloy43> <div class="info" data-astro-cid-anhloy43> <h1 data-astro-cid-anhloy43>${name}</h1> <h2 data-astro-cid-anhloy43>${label}</h2> <span data-astro-cid-anhloy43> <!-- Icono --> ${renderComponent($$result2, "WorldMap", $$WorldMap, { "data-astro-cid-anhloy43": true })} ${city}, ${region} </span> <footer class="print" data-astro-cid-anhloy43> ${printInfo} </footer> <footer class="no-print" data-astro-cid-anhloy43> <!-- PARA IMPRIMIR --> ${email && renderTemplate`<a${addAttribute(`mailto:${email}`, "href")}${addAttribute(`Enviar un correo electronico a ${name} al correo ${email}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Mail", $$Mail, { "data-astro-cid-anhloy43": true })} </a>`} ${phone && renderTemplate`<a${addAttribute(`tel:${phone}`, "href")}${addAttribute(`Llamar por telefono a ${name} al numero ${phone}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Phone", $$Phone, { "data-astro-cid-anhloy43": true })} </a>`} ${profiles.map(({ network, url, username }) => {
    const Icon = SOCIAL_ICONS[network];
    return renderTemplate`<a${addAttribute(url, "href")}${addAttribute(`Visitar el perfil de ${name} en ${network}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-anhloy43": true })} </a>`;
  })} </footer> </div> <figure data-astro-cid-anhloy43> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} data-astro-cid-anhloy43> </figure> </div> ` })} `;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/components/sections/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Proyectos", "data-astro-cid-44zkpkd5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-44zkpkd5> ${projects.map(({ url, description, highlights, name, isActive }) => {
    return renderTemplate`<li data-astro-cid-44zkpkd5> <article data-astro-cid-44zkpkd5> <header data-astro-cid-44zkpkd5> <h3 data-astro-cid-44zkpkd5> <a${addAttribute(url, "href")}${addAttribute(`Ver el proyecto ${name}`, "title")} data-astro-cid-44zkpkd5> ${name} </a> ${isActive && renderTemplate`<span data-astro-cid-44zkpkd5>&bull;</span>`} </h3> <p data-astro-cid-44zkpkd5>${description}</p> </header> <footer data-astro-cid-44zkpkd5> ${highlights.map((highlight) => {
      return renderTemplate`<span data-astro-cid-44zkpkd5>${highlight}</span>`;
    })} </footer> </article> </li>`;
  })} </ul> ` })} `;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/components/sections/Projects.astro", void 0);

const $$Astro$2 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Habilidades", "data-astro-cid-sye7xtqh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-sye7xtqh> ${skills.map(({ name }) => renderTemplate`<li data-astro-cid-sye7xtqh> <span data-astro-cid-sye7xtqh>${name}</span> </li>`)} </ul> ` })} `;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/components/sections/Skills.astro", void 0);

const $$Astro$1 = createAstro();
const $$KeyboardManager = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$KeyboardManager;
  const { profiles } = basics;
  const SOCIAL_ICONS = {
    GitHub: `<svg
    style="margin-right: 10px"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ><title>GitHub</title><path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    ></path></svg
    >
    `,
    linkedIn: `<svg
    style="margin-right: 10px"
    height="16"
    width="16"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ><title>LinkedIn</title><path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    ></path></svg
    >`
  };
  const profilesInfo = profiles.map(({ network, url }) => {
    const icon = SOCIAL_ICONS[network];
    const firstLetter = network[0].toUpperCase();
    return {
      id: network,
      section: "Social",
      title: `Visitar ${network}`,
      url,
      icon,
      hotkey: `ctrl+${firstLetter}`
    };
  });
  return renderTemplate`${maybeRenderHead()}<footer class="no-print" data-astro-cid-5uazswxx>
Pulsa: <kbd data-astro-cid-5uazswxx>Ctrl</kbd> + <kbd data-astro-cid-5uazswxx>K</kbd> para abrir la paleta de comandos 😎 .
</footer> ${renderComponent($$result, "ninja-keys", "ninja-keys", { "data-info": JSON.stringify(profilesInfo), "placeholder": "Buscar comando", "hideBreadcrumbs": true, "data-astro-cid-5uazswxx": true })}  `;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/components/KeyboardManager.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { name, label } = basics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Portafolio de ${name} - ${label}`, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Education", $$Education, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "KeyboardManager", $$KeyboardManager, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/pages/index.astro", void 0);

const $$file = "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
