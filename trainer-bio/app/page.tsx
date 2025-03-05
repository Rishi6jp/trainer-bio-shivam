import { Dumbbell, Mail, MapPin, Phone, Star, Users, Award, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { ExerciseCard } from "@/components/exercise-card"
import { WorkoutPlan } from "@/components/workout-plan"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-cream">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-beige-dark" />
            <span className="text-xl font-bold">FitPro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#workout-plans" className="text-sm font-medium hover:underline underline-offset-4">
              Workout Plans
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex bg-beige-dark hover:bg-beige-medium text-black">
            <Link href="#contact">Book a Session</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden border-beige-dark text-beige-dark">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Trainer in action"
            width={1200}
            height={600}
            className="w-full h-[500px] object-cover"
            priority
          />
          <div className="container relative z-20 -mt-[400px] pb-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Alex Johnson</h1>
              <p className="mt-4 text-xl">Certified Personal Trainer & Nutrition Specialist</p>
              <p className="mt-4 max-w-md text-gray-200">
                Transforming lives through personalized fitness coaching and evidence-based nutrition strategies for
                over a decade.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-beige-medium hover:bg-beige-dark text-black">
                  <Link href="#contact">Book a Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white/20 border-beige-light"
                >
                  <Link href="#services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-beige-light/30">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-beige-medium/40 rounded-full -z-10" />
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Alex Johnson"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover border-4 border-beige-medium"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-beige-medium/40 rounded-full -z-10" />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                  <div className="mt-1 h-1 w-20 bg-beige-dark rounded-full" />
                </div>
                <p className="text-muted-foreground">
                  With over a decade of experience in personal training and nutrition coaching, I've helped hundreds of
                  clients transform their bodies and lives. My approach combines science-based training methods with
                  personalized nutrition strategies to deliver sustainable results.
                </p>
                <p className="text-muted-foreground">
                  I believe fitness should be accessible to everyone, regardless of their starting point. Whether you're
                  a beginner looking to get started or an experienced athlete aiming to break through plateaus, I'll
                  create a customized plan to help you succeed.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-beige-medium/50">
                      <Users className="h-5 w-5 text-beige-dark" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Clients Trained</p>
                      <p className="font-medium">500+</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-beige-medium/50">
                      <Star className="h-5 w-5 text-beige-dark" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Experience</p>
                      <p className="font-medium">10+ Years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-beige-medium/50">
                      <Award className="h-5 w-5 text-beige-dark" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Certifications</p>
                      <p className="font-medium">Multiple</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-beige-medium/50">
                      <BookOpen className="h-5 w-5 text-beige-dark" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Specializations</p>
                      <p className="font-medium">3+</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-3">My Fitness Philosophy</h3>
                  <p className="text-muted-foreground">
                    I believe in a holistic approach to fitness that combines proper training, nutrition, recovery, and
                    mindset. My programs are designed to not only transform your body but also improve your overall
                    quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="py-16 md:py-24 bg-cream">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Certifications & Specializations</h2>
              <div className="mt-1 h-1 w-20 bg-beige-dark rounded-full mx-auto" />
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Professional certifications and specialized training that enable me to provide expert guidance for your
                fitness journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-beige-medium">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige-light mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-beige-dark"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">NASM Certified Personal Trainer</h3>
                  <p className="text-muted-foreground mt-2">
                    Certified by the National Academy of Sports Medicine with specialization in corrective exercise
                    techniques and performance enhancement.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-beige-medium">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige-light mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-beige-dark"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Precision Nutrition Level 2</h3>
                  <p className="text-muted-foreground mt-2">
                    Advanced nutrition coaching certification with focus on behavior change and personalized nutrition
                    strategies for optimal health and performance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-beige-medium">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige-light mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-beige-dark"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">NSCA Strength & Conditioning Specialist</h3>
                  <p className="text-muted-foreground mt-2">
                    Specialized in designing and implementing safe and effective strength training programs for athletes
                    and fitness enthusiasts at all levels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-beige-light/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Services & Programs</h2>
              <div className="mt-1 h-1 w-20 bg-beige-dark rounded-full mx-auto" />
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Customized fitness and nutrition programs designed to meet your specific goals and lifestyle needs.
              </p>
            </div>

            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-beige-light">
                <TabsTrigger value="personal">Personal Training</TabsTrigger>
                <TabsTrigger value="group">Group Classes</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition Coaching</TabsTrigger>
              </TabsList>
              <TabsContent value="personal" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ExerciseCard
                    title="One-on-One Training"
                    description="Personalized training sessions tailored to your specific goals, fitness level, and preferences. Includes form correction and progressive programming."
                    image="/placeholder.svg?height=300&width=400"
                    price="$85 / session"
                  />
                  <ExerciseCard
                    title="Strength Training"
                    description="Build muscle, increase strength, and improve body composition with targeted resistance training programs designed for your specific goals."
                    image="/placeholder.svg?height=300&width=400"
                    price="$75 / session"
                  />
                  <ExerciseCard
                    title="Functional Fitness"
                    description="Improve everyday movement patterns and prevent injuries with functional training exercises that enhance mobility, stability, and core strength."
                    image="/placeholder.svg?height=300&width=400"
                    price="$75 / session"
                  />
                </div>
              </TabsContent>
              <TabsContent value="group" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ExerciseCard
                    title="HIIT Classes"
                    description="High-intensity interval training classes designed to maximize calorie burn and improve cardiovascular fitness in an energetic group setting."
                    image="/placeholder.svg?height=300&width=400"
                    price="$25 / class"
                  />
                  <ExerciseCard
                    title="Circuit Training"
                    description="Full-body workouts that combine strength and cardio exercises for maximum efficiency and results in a supportive group environment."
                    image="/placeholder.svg?height=300&width=400"
                    price="$20 / class"
                  />
                  <ExerciseCard
                    title="Core & Mobility"
                    description="Focus on core strength, flexibility, and mobility to improve posture, reduce pain, and enhance overall movement quality and body awareness."
                    image="/placeholder.svg?height=300&width=400"
                    price="$20 / class"
                  />
                </div>
              </TabsContent>
              <TabsContent value="nutrition" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ExerciseCard
                    title="Nutrition Assessment"
                    description="Comprehensive analysis of your current eating habits, nutritional needs, and areas for improvement with actionable recommendations."
                    image="/placeholder.svg?height=300&width=400"
                    price="$150 / session"
                  />
                  <ExerciseCard
                    title="Meal Planning"
                    description="Customized meal plans based on your preferences, dietary restrictions, and fitness goals with grocery lists and recipe suggestions."
                    image="/placeholder.svg?height=300&width=400"
                    price="$200 / month"
                  />
                  <ExerciseCard
                    title="Ongoing Nutrition Coaching"
                    description="Regular check-ins, adjustments, and support to help you develop sustainable eating habits that support your health and fitness goals."
                    image="/placeholder.svg?height=300&width=400"
                    price="$300 / month"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="workout-plans" className="py-16 md:py-24 bg-cream">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Sample Workout Plans</h2>
              <div className="mt-1 h-1 w-20 bg-beige-dark rounded-full mx-auto" />
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Browse through sample workout plans for different fitness levels. Your personalized plan will be
                tailored to your specific goals and needs.
              </p>
            </div>
            <WorkoutPlan />
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-beige-light/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Client Testimonials</h2>
              <div className="mt-1 h-1 w-20 bg-beige-dark rounded-full mx-auto" />
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Hear what my clients have to say about their fitness journey and results.
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-cream">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                <div className="mt-1 h-1 w-20 bg-beige-dark rounded-full" />
                <p className="mt-4 text-muted-foreground">
                  Ready to start your fitness journey? Contact me for a free consultation to discuss your goals and how
                  I can help you achieve them.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-beige-light">
                      <Phone className="h-5 w-5 text-beige-dark" />
                    </div>
                    <div>
                      <p className="font-medium">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-beige-light">
                      <Mail className="h-5 w-5 text-beige-dark" />
                    </div>
                    <div>
                      <p className="font-medium">alex@fitprotrainer.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-beige-light">
                      <MapPin className="h-5 w-5 text-beige-dark" />
                    </div>
                    <div>
                      <p className="font-medium">123 Fitness Street, Healthville, CA 90210</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold">Operating Hours</h3>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-muted-foreground">6:00 AM - 8:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-muted-foreground">8:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Sunday</p>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-beige-medium/20 border-beige-medium">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-beige-dark" />
            <span className="text-xl font-bold">FitPro</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-beige-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-beige-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-beige-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

