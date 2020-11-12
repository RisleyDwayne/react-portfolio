const base = process.env.NODE_ENV === "production" ? "/react-portfolio" : "";
export const HOME_PATH = base || "/";
export const PORTFOLIO_PATH = base + "/portfolio";
export const SKILLS_PATH = base + "/skills"; 