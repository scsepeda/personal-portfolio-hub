import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Shield, Database, UserCheck, CreditCard, Cloud } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const certificationIcons = {
  cloud: <Cloud className="text-blue-500" />,
  shield: <Shield className="text-red-500" />,
  database: <Database className="text-blue-600" />,
  "user-shield": <UserCheck className="text-green-500" />,
  passport: <CreditCard className="text-purple-500" />,
};

export function EducationSection() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground">
            Continuous learning and professional development
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-3xl text-primary mr-4" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold mb-2">{education.degree}</h4>
                <p className="text-lg text-foreground mb-2">{education.school}</p>
                <p className="text-muted-foreground mb-2">{education.location}</p>
                <div className="flex items-center space-x-4 mb-6">
                  <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">
                    {education.honors}
                  </Badge>
                  <span className="text-muted-foreground">{education.period}</span>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-3">Honors & Awards:</h5>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    {education.awards.map((award, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="text-3xl text-accent mr-4" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 p-3 bg-card rounded-lg border"
                  >
                    <div className="mt-1">
                      {certificationIcons[cert.icon as keyof typeof certificationIcons]}
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
