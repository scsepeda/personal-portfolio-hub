import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Server, Cloud, Database } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

function SkillCategory({ title, icon, skills, color }: SkillCategoryProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className={`text-2xl ${color} mr-3`}>{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">
            What I have used in production work
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          <SkillCategory
            title="Frontend"
            icon={<Palette />}
            skills={skills.frontend}
            color="text-primary"
          />
          <SkillCategory
            title="Backend"
            icon={<Server />}
            skills={skills.backend}
            color="text-accent"
          />
          <SkillCategory
            title="Cloud & DevOps"
            icon={<Cloud />}
            skills={skills.cloud}
            color="text-primary"
          />
          <SkillCategory
            title="Data & Messaging"
            icon={<Database />}
            skills={skills.database}
            color="text-accent"
          />
        </div>
      </div>
    </section>
  );
}
