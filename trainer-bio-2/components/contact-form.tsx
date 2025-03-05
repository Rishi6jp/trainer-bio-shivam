"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label""use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    goals: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        goals: "",
      })
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 bg-beige-light/30 rounded-lg border border-beige-medium">
        <div className="h-12 w-12 rounded-full bg-beige-medium/50 flex items-center justify-center">
          <CheckCircle2 className="h-6 w-6 text-beige-dark" />
        </div>
        <h3 className="text-xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground">
          Your message has been received. I'll get back to you within 24 hours to discuss your fitness journey.
        </p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-beige-dark hover:bg-beige-medium text-black">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-beige-light/30 rounded-lg border border-beige-medium">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-beige-medium focus:border-beige-dark focus:ring-beige-dark"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-beige-medium focus:border-beige-dark focus:ring-beige-dark"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="border-beige-medium focus:border-beige-dark focus:ring-beige-dark"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In</Label>
        <Select onValueChange={handleSelectChange} value={formData.service}>
          <SelectTrigger className="border-beige-medium focus:ring-beige-dark">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personal">Personal Training</SelectItem>
            <SelectItem value="group">Group Classes</SelectItem>
            <SelectItem value="nutrition">Nutrition Coaching</SelectItem>
            <SelectItem value="combined">Combined Training & Nutrition</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="goals">Your Fitness Goals</Label>
        <Input
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          placeholder="e.g., Weight loss, muscle gain, improved endurance"
          className="border-beige-medium focus:border-beige-dark focus:ring-beige-dark"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your fitness background, any injuries, or specific concerns"
          className="border-beige-medium focus:border-beige-dark focus:ring-beige-dark"
        />
      </div>
      <Button type="submit" className="w-full bg-beige-dark hover:bg-beige-medium text-black">
        Send Message
      </Button>
    </form>
  )
}


import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console  => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      })
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground">
          Your message has been received. I'll get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In</Label>
        <Select onValueChange={handleSelectChange} value={formData.service}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personal">Personal Training</SelectItem>
            <SelectItem value="group">Group Classes</SelectItem>
            <SelectItem value="nutrition">Nutrition Coaching</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          required 
        />
      </div>
      <Button type="submit" className="w-full">Send Message</Button>
    </form>
  )
}\

