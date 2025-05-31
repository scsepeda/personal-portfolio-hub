import { Mail, Linkedin, Github } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">{personal.name}</p>
            <p className="text-slate-400">{personal.title}</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href={`mailto:${personal.email}`}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="text-xl" />
            </a>
            <a 
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-xl" />
            </a>
            <a 
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            &copy; 2024 {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
