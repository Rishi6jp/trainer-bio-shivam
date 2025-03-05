"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Weight Loss Client",
    content:
      "Working with Alex has been life-changing. I've lost 30 pounds in 6 months and feel stronger than ever. The personalized approach made all the difference.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Strength Training Client",
    content:
      "After struggling with plateaus for years, Alex helped me break through and add 50 pounds to my deadlift in just 3 months. The programming is excellent.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Nutrition Coaching Client",
    content:
      "The nutrition coaching has completely changed my relationship with food. I'm eating better, have more energy, and finally understand how to fuel my body properly.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Post-Rehab Client",
    content:
      "After my shoulder surgery, I was afraid to get back to training. Alex designed a program that helped me rebuild strength safely and I'm now pain-free.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleTestimonials = 3
  const maxIndex = testimonials.length - visibleTestimonials

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(maxIndex)
    }
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
              <Card className="h-full border-beige-medium">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover border-2 border-beige-medium"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-beige-medium absolute -top-2 -left-2" />
                    <p className="relative z-10 text-muted-foreground">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full border-beige-dark text-beige-dark hover:bg-beige-light"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonials</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full border-beige-dark text-beige-dark hover:bg-beige-light"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonials</span>
        </Button>
      </div>
    </div>
  )
}

