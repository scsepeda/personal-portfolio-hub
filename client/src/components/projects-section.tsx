import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Database, GitBranch, Monitor } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const projectIcons = {
  microservices: <Layers className="text-4xl" />,
  etl: <Database className="text-4xl" />,
  devops: <GitBranch className="text-4xl" />,
  enterprise: <Monitor className="text-4xl" />,
};

const projectGradients = {
  microservices: "from-primary to-accent",
  etl: "from-accent to-primary",
  devops: "from-green-500 to-blue-500",
  enterprise: "from-purple-500 to-pink-500",
};

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Showcase of technical achievements and innovations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Project visual header */}
              <div className={`h-48 bg-gradient-to-br ${projectGradients[project.type as keyof typeof projectGradients]} flex items-center justify-center`}>
                <div className="text-center text-white">
                  {projectIcons[project.type as keyof typeof projectIcons]}
                  <p className="text-lg font-semibold mt-4 capitalize">
                    {project.type === "etl" ? "ETL Pipeline" : project.type.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  {project.highlights.map((highlight, index) => (
                    <span key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
