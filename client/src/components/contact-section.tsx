import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const RESUME_URL = "https://drive.google.com/file/d/1q30N8DDOWC9K0gdRVPjLDtaQ42UjMyDn/view?usp=sharing";

export function ContactSection() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-16 bg-card">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">
            The fastest way to reach me is email or LinkedIn
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="text-primary" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <a 
                href={`mailto:${personal.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {personal.email}
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Linkedin className="text-primary" />
            </div>
            <div>
              <p className="font-semibold">LinkedIn</p>
              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                linkedin.com/in/scsepeda
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Phone className="text-primary" />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <a 
                href={`tel:${personal.phone}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {personal.phone}
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="text-primary" />
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-muted-foreground">{personal.location}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
