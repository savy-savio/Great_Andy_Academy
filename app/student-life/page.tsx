import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Music, Code, FlaskRoundIcon as Flask, Coins, Shirt, Expand } from "lucide-react"

export default function StudentLifePage() {
  const clubs = [
    {
      title: "Debate & Literary Club",
      description:
        "Sharpening minds through public speaking, essay writing, debates, and spelling bees. This club boosts confidence, communication skills, and critical thinking.",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-200",
      image: "/placeholder.svg?height=200&width=300&text=Debate+Club",
    },
    {
      title: "Music & Drama Club",
      description:
        "Students explore their creativity through singing, instrumentals, stage plays, and cultural performances, perfect for building expression, confidence, and teamwork.",
      icon: Music,
      color: "from-purple-500 to-pink-500",
      lightColor: "bg-purple-50",
      borderColor: "border-purple-200",
      image: "/placeholder.svg?height=200&width=300&text=Music+Club",
    },
    {
      title: "ICT & Innovation Club",
      description:
        "A space for young tech enthusiasts to explore coding, robotics, AI, cybersecurity, and multimedia communication, guided by skilled instructors.",
      icon: Code,
      color: "from-cyan-500 to-blue-500",
      lightColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      image: "/placeholder.svg?height=200&width=300&text=ICT+Club",
    },
    {
      title: "Science & STEM Club",
      description:
        "Designed to spark curiosity in the sciences, this club engages students in experiments, science fairs, and innovation challenges.",
      icon: Flask,
      color: "from-green-500 to-emerald-600",
      lightColor: "bg-green-50",
      borderColor: "border-green-200",
      image: "/placeholder.svg?height=200&width=300&text=Science+Club",
    },
    {
      title: "Young Entrepreneurs Club",
      description:
        "Promoting financial literacy and entrepreneurial thinking, this club empowers students to create business ideas, manage projects, and learn the value of money.",
      icon: Coins,
      color: "from-amber-500 to-orange-600",
      lightColor: "bg-amber-50",
      borderColor: "border-amber-200",
      image: "/placeholder.svg?height=200&width=300&text=Entrepreneurs+Club",
    },
    {
      title: "Home Economics & Fashion Club",
      description:
        "From sewing to baking, this hands-on club helps students learn essential life skills and express their creativity through fashion and food.",
      icon: Shirt,
      color: "from-rose-500 to-red-600",
      lightColor: "bg-rose-50",
      borderColor: "border-rose-200",
      image: "/placeholder.svg?height=200&width=300&text=Fashion+Club",
    },
  ]

  const galleryImages = [
    {
      src: "/student_doctors.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/student_engineers.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/sport.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/playground.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/student_nurse.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/catering.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/cultural.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/exam.jpeg",
      alt: "",
      caption: "",
    },
    {
      src: "/gal1.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/gal2.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/gal3.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/gal4.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/gal5.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/gal6.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/gal7.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/gal8.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/gal9.jpg",
      alt: "",
      caption: "",
    },
    {
      src: "/gal10.jpg",
      alt: "",
      caption: "",
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/student.jpg" alt="Student Life at Greatandy International Academy" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container text-center text-white px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Life</h1>
            <p className="text-xl max-w-3xl mx-auto">Where Learning Meets Purpose and Possibility</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white md:px-[45px]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Student Experience
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Life at Greatandy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Greatandy International Academy, student life is vibrant, balanced, and purpose-driven. Beyond
                  academics, we nurture an environment where students grow intellectually, socially, emotionally, and
                  morally.
                </p>
                <p>
                  Our environment is more than a school, it's a community where friendships are formed, talents are
                  discovered, values are shaped, and leaders are born.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image src="/student_life.jpeg" alt="Students at Greatandy" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/50 md:px-[45px]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Approach</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                A Culture of Excellence and Discipline
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our motto, "Bringing Up Greater Academicians and Disciplined Personnel," is not just a slogan, it's a
                lifestyle.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Academic Enrichment</h3>
                <p className="text-muted-foreground">
                  From interactive lessons to science fairs and quiz competitions, students engage in activities that
                  challenge the mind and encourage curiosity. We celebrate academic achievement while supporting every
                  learner's journey at their pace.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Spiritual & Moral Values</h3>
                <p className="text-muted-foreground">
                  Rooted in strong moral foundations, our students are nurtured to become not only educated, but also
                  upright and compassionate individuals. Morning devotions, value-based assemblies, and guidance
                  sessions form a vital part of student life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Skill Development & Innovation</h3>
                <p className="text-muted-foreground">
                  Through our special programmes - Catering, Fashion Design, ICT, Agriculture and Financial
                  Literacy—students gain hands-on experience and career-shaping skills that prepare them for life beyond
                  the classroom.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Leadership Opportunities</h3>
                <p className="text-muted-foreground">
                  We believe in raising future leaders. Through student councils, prefect positions, public speaking,
                  and project-based learning, our learners gain confidence, vision, and a sense of purpose.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">A Safe, Supportive Environment</h3>
                <p className="text-muted-foreground">
                  We provide a secure and inclusive atmosphere where students feel valued, heard, and motivated. Our
                  boarding facility offers a home-away-from-home experience with dedicated care from trained staff.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-medium mb-4">
              At Greatandy International Academy, every child is seen, heard, and celebrated.
            </p>
            <p className="text-lg font-bold text-primary">We don't just teach students, we inspire greatness.</p>
          </div>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 md:px-[45px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Extracurricular
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Clubs & Activities</h2>
              <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Igniting Passion. Building Confidence. Unleashing Talent.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${club.color} opacity-90`}></div>
                  <Image
                    src={club.image || "/placeholder.svg"}
                    alt={club.title}
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <club.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-6 border-t-4 ${club.borderColor}`}>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {club.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{club.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary/30"></div>
                      ))}
                    </div>
                    {/* <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg text-lg">
              <Link href="/clubs" className="flex items-center">
                Explore All Clubs
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-muted/80 md:px-[45px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Student Showcase
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Life at Greatandy</h2>
              <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Glimpses of our vibrant school community in action.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{image.caption}</h3>
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-white/80 text-sm">{image.alt}</p>
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Expand className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-lg text-lg"
            >
              <Link href="/gallery" className="flex items-center">
                View Full Gallery
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 bg-white md:px-[45px]" id="blogs">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Latest Updates</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blogs</h2>
              <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay connected with our latest school activities, events, and student achievements.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Social Media Call to Action */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8 border border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy-blue mb-2">Stay Connected with Us!</h3>
                <p className="text-lg font-semibold text-primary mb-4">PLEASE FOLLOW, LIKE, AND SHARE</p>
                <p className="text-muted-foreground">
                  Join our online community and never miss an update about school events, student achievements, and
                  exciting activities.
                </p>
              </div>

              <div className="flex justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-lg">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-blue-600 font-medium">Follow</span>
                </div>
                <div className="flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-lg">
                  <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-red-600 font-medium">Like</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-lg">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92S19.61 16.08 18 16.08z" />
                  </svg>
                  <span className="text-green-600 font-medium">Share</span>
                </div>
              </div>
            </div>

            {/* Facebook Videos */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* First Facebook Video */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 overflow-hidden">
                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Press Club Activities</h3>
                        <p className="text-white/80 text-sm">Greatandy International Academy</p>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Watch our students showcase their talents in music and performance through our Press Club
                    activities.
                  </p>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link
                      href="https://www.facebook.com/share/v/15H6tbVZ78/?mibextid=oFDknk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Watch on Facebook
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Second Facebook Video */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 overflow-hidden">
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">School Highlights</h3>
                        <p className="text-white/80 text-sm">Greatandy International Academy</p>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Discover more exciting moments and achievements from our vibrant school community.
                  </p>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Link
                      href="https://www.facebook.com/share/v/196DeTs4b2/?mibextid=oFDknk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Watch on Facebook
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Additional Social Media Engagement */}
            <div className="mt-12 text-center bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl p-8 border border-primary/20">
              <h4 className="text-xl font-bold text-navy-blue mb-4">Join Our Online Community</h4>
              <p className="text-muted-foreground mb-6">
                Follow us on social media for daily updates, student achievements, event announcements, and
                behind-the-scenes moments from Greatandy International Academy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Follow on Facebook
                </Button>
                <Button variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-50">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                  Follow on Instagram
                </Button>
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                  </svg>
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Join Our Vibrant Community
          </h2>
          <p className="max-w-[700px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
            Experience the Greatandy difference firsthand. Schedule a visit or apply for admission today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
