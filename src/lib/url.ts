/** Prefixes an internal path with the configured `base`, so the site works at "/" or "/portfolio/". */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

export const SITE = {
  name: 'Mathis Charlo',
  title: 'Mathis Charlo | Mechanical Engineering & Numerical Modelling',
  description:
    "Portfolio of Mathis Charlo, engineering student at ESILV Paris (Mechanical Engineering & Numerical Modelling, Double Master's in Aerospace & Defence). A selection of CFD, FEA, materials and space projects. Open to VIE and full-time roles after my master's.",
  email: 'mathis.charlo@edu.devinci.fr',
  linkedin: 'https://www.linkedin.com/in/mathischarlo',
  linkedinLabel: 'linkedin.com/in/mathischarlo',
  cv: 'cv/Mathis-Charlo-CV.pdf',
};
