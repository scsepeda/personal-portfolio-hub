import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Palette, Server, Cloud, Database } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  color: string;
}

function SkillCategory({ title, icon, skills, color }: SkillCategoryProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Card ref={ref} className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className={`text-2xl ${color} mr-3`}>{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-item">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress 
                value={isVisible ? skill.level : 0} 
                className="h-2"
                style={{
                  transition: `all 1s ease-in-out ${index * 0.1}s`,
                }}
              />
            </div>
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
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive skill set across the full technology stack
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
            title="Database"
            icon={<Database />}
            skills={skills.database}
            color="text-accent"
          />
        </div>
      </div>
    </section>
  );
}
