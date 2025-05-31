import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">
            8+ years of building scalable software solutions
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={job.id} className="relative">
                <Card className="md:ml-16 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{job.title}</h3>
                        <p className="text-xl font-semibold text-foreground">{job.company}</p>
                        <p className="text-muted-foreground">{job.location}</p>
                      </div>
                      <div className="mt-2 lg:mt-0 flex flex-wrap gap-2">
                        <Badge variant={job.current ? "default" : "secondary"}>
                          {job.period}
                        </Badge>
                        {job.current && (
                          <Badge className="bg-green-500 hover:bg-green-600">
                            Current
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {job.description}
                      </p>
                      {job.responsibilities.length > 0 && (
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          {job.responsibilities.map((responsibility, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {job.achievements.length > 0 && (
                      <div className="border-t border-border pt-4">
                        <h4 className="font-semibold mb-3 text-primary">Key Accomplishments:</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          {job.achievements.map((achievement, idx) => (
                            <div key={idx} className="bg-muted rounded-lg p-4">
                              <div className="text-2xl font-bold text-green-600 mb-1">
                                {achievement.metric}
                              </div>
                              <div className="text-muted-foreground">
                                {achievement.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
