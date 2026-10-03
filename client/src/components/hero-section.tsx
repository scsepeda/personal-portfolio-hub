import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import profileImage from "@assets/76718766b21c13c2938e61b5dcf1a822.jpeg";

export function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-background to-muted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Samantha</span>
              <span className="text-primary"> Sepeda</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
              {personal.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {personal.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>{personal.phone}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href={`mailto:${personal.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={personal.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Professional photo */}
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
                <img 
                  src={profileImage} 
                  alt="Samantha Sepeda - Senior Fullstack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
