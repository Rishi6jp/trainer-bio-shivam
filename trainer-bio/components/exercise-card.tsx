import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ExerciseCardProps {
  title: string
  description: string
  image: string
  price: string
}

export function ExerciseCard({ title, description, image, price }: ExerciseCardProps) {
  return (
    <Card className="overflow-hidden border-beige-medium">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="text-sm font-medium text-beige-dark">{price}</div>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <Button variant="outline" size="sm" className="w-full border-beige-dark text-beige-dark hover:bg-beige-light">
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}

