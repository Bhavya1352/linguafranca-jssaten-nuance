import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Users } from "lucide-react";

const JoinForm = () => {
  return (
    <section id="join-form" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground">
              Ready to Join?
            </h2>
            <p className="font-poppins text-lg text-muted-foreground">
              Take the first step towards an amazing literary journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Join Lingua Franca
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="year">Year</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1st">1st Year</SelectItem>
                        <SelectItem value="2nd">2nd Year</SelectItem>
                        <SelectItem value="3rd">3rd Year</SelectItem>
                        <SelectItem value="4th">4th Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="branch">Branch</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cse">CSE</SelectItem>
                        <SelectItem value="ece">ECE</SelectItem>
                        <SelectItem value="me">ME</SelectItem>
                        <SelectItem value="ce">CE</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="department">Preferred Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="editorial">Editorial</SelectItem>
                      <SelectItem value="designing">Designing</SelectItem>
                      <SelectItem value="management">Management</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="why">Why do you want to join? (Optional)</Label>
                  <Textarea id="why" placeholder="Tell us about your interests..." />
                </div>
                
                <Button className="w-full group" size="lg">
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>WhatsApp Group:</strong><br />
                      <span className="text-muted-foreground">Join our official group for updates</span>
                    </div>
                    <div>
                      <strong>Instagram:</strong><br />
                      <span className="text-muted-foreground">@linguafranca_jssaten</span>
                    </div>
                    <div>
                      <strong>Email:</strong><br />
                      <span className="text-muted-foreground">linguafranca@jssaten.ac.in</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-4">What Happens Next?</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>✅ We'll review your application</div>
                    <div>✅ You'll get a call/message within 2-3 days</div>
                    <div>✅ Brief interview (just a friendly chat!)</div>
                    <div>✅ Welcome to the family! 🎉</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;