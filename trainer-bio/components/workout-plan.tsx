import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Dumbbell, Flame, Target } from "lucide-react"

interface ExerciseProps {
  name: string
  sets: string
  reps: string
  rest: string
}

function Exercise({ name, sets, reps, rest }: ExerciseProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div className="font-medium">{name}</div>
      <div className="flex items-center gap-4 text-sm">
        <div className="text-muted-foreground">{sets} sets</div>
        <div className="text-muted-foreground">{reps}</div>
        <div className="text-muted-foreground">{rest} rest</div>
      </div>
    </div>
  )
}

export function WorkoutPlan() {
  return (
    <Tabs defaultValue="beginner" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8 bg-beige-light">
        <TabsTrigger value="beginner">Beginner</TabsTrigger>
        <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>

      <TabsContent value="beginner" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-beige-medium">
            <CardHeader className="bg-beige-light rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle>Full Body Workout</CardTitle>
                <Badge className="bg-beige-dark hover:bg-beige-dark">Day 1</Badge>
              </div>
              <CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4" />
                  <span>45 minutes</span>
                  <Flame className="h-4 w-4 ml-2" />
                  <span>Medium Intensity</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Goal: Build foundational strength</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Equipment: Dumbbells, Bench</span>
                </div>
              </div>

              <div className="space-y-1">
                <Exercise name="Goblet Squats" sets="3" reps="10-12 reps" rest="60 sec" />
                <Exercise name="Dumbbell Bench Press" sets="3" reps="10-12 reps" rest="60 sec" />
                <Exercise name="Dumbbell Rows" sets="3" reps="10-12 reps" rest="60 sec" />
                <Exercise name="Dumbbell Shoulder Press" sets="2" reps="10-12 reps" rest="60 sec" />
                <Exercise name="Plank" sets="3" reps="30 sec hold" rest="45 sec" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-beige-medium">
            <CardHeader className="bg-beige-light rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle>Lower Body Focus</CardTitle>
                <Badge className="bg-beige-dark hover:bg-beige-dark">Day 2</Badge>
              </div>
              <CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4" />
                  <span>40 minutes</span>
                  <Flame className="h-4 w-4 ml-2" />
                  <span>Medium Intensity</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Goal: Lower body strength & stability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Equipment: Dumbbells, Resistance Band</span>
                </div>
              </div>

              <div className="space-y-1">
                <Exercise name="Bodyweight Squats" sets="3" reps="15 reps" rest="45 sec" />
                <Exercise name="Walking Lunges" sets="3" reps="10 each leg" rest="60 sec" />
                <Exercise name="Glute Bridges" sets="3" reps="15 reps" rest="45 sec" />
                <Exercise name="Calf Raises" sets="3" reps="15 reps" rest="45 sec" />
                <Exercise name="Banded Side Steps" sets="2" reps="15 each side" rest="45 sec" />
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="intermediate" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-beige-medium">
            <CardHeader className="bg-beige-light rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle>Upper Body Push</CardTitle>
                <Badge className="bg-beige-dark hover:bg-beige-dark">Day 1</Badge>
              </div>
              <CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4" />
                  <span>55 minutes</span>
                  <Flame className="h-4 w-4 ml-2" />
                  <span>High Intensity</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Goal: Upper body strength & muscle development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Equipment: Barbell, Dumbbells, Bench</span>
                </div>
              </div>

              <div className="space-y-1">
                <Exercise name="Bench Press" sets="4" reps="8-10 reps" rest="90 sec" />
                <Exercise name="Incline Dumbbell Press" sets="3" reps="10 reps" rest="75 sec" />
                <Exercise name="Overhead Press" sets="3" reps="8-10 reps" rest="75 sec" />
                <Exercise name="Tricep Dips" sets="3" reps="10-12 reps" rest="60 sec" />
                <Exercise name="Lateral Raises" sets="3" reps="12-15 reps" rest="60 sec" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-beige-medium">
            <CardHeader className="bg-beige-light rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle>Upper Body Pull</CardTitle>
                <Badge className="bg-beige-dark hover:bg-beige-dark">Day 2</Badge>
              </div>
              <CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4" />
                  <span>50 minutes</span>
                  <Flame className="h-4 w-4 ml-2" />
                  <span>High Intensity</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Goal: Back strength & muscle development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Equipment: Barbell, Dumbbells, Pull-up Bar</span>
                </div>
              </div>

              <div className="space-y-1">
                <Exercise name="Pull-ups/Assisted Pull-ups" sets="4" reps="8-10 reps" rest="90 sec" />
                <Exercise name="Bent Over Rows" sets="3" reps="10 reps" rest="75 sec" />
                <Exercise name="Lat Pulldowns" sets="3" reps="10-12 reps" rest="75 sec" />
                <Exercise name="Face Pulls" sets="3" reps="12-15 reps" rest="60 sec" />
                <Exercise name="Bicep Curls" sets="3" reps="12 reps" rest="60 sec" />
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="advanced" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-beige-medium">
            <CardHeader className="bg-beige-light rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle>Power & Strength</CardTitle>
                <Badge className="bg-beige-dark hover:bg-beige-dark">Day 1</Badge>
              </div>
              <CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4" />
                  <span>65 minutes</span>
                  <Flame className="h-4 w-4 ml-2" />
                  <span>Very High Intensity</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Goal: Maximal strength & power development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Equipment: Full gym access</span>
                </div>
              </div>

              <div className="space-y-1">
                <Exercise name="Barbell Back Squats" sets="5" reps="5 reps" rest="2-3 min" />
                <Exercise name="Deadlifts" sets="5" reps="5 reps" rest="2-3 min" />
                <Exercise name="Weighted Pull-ups" sets="4" reps="6-8 reps" rest="2 min" />
                <Exercise name="Barbell Bench Press" sets="5" reps="5 reps" rest="2 min" />
                <Exercise name="Weighted Dips" sets="3" reps="8 reps" rest="90 sec" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-beige-medium">
            <CardHeader className="bg-beige-light rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle>Hypertrophy Focus</CardTitle>
                <Badge className="bg-beige-dark hover:bg-beige-dark">Day 2</Badge>
              </div>
              <CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4" />
                  <span>60 minutes</span>
                  <Flame className="h-4 w-4 ml-2" />
                  <span>High Intensity</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Goal: Muscle growth & definition</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-beige-dark" />
                  <span className="font-medium">Equipment: Full gym access</span>
                </div>
              </div>

              <div className="space-y-1">
                <Exercise name="Bulgarian Split Squats" sets="4" reps="10-12 each leg" rest="90 sec" />
                <Exercise name="Romanian Deadlifts" sets="4" reps="10-12 reps" rest="90 sec" />
                <Exercise name="Incline Dumbbell Press" sets="4" reps="10-12 reps" rest="75 sec" />
                <Exercise name="Cable Rows" sets="4" reps="10-12 reps" rest="75 sec" />
                <Exercise name="Lateral Raises" sets="3" reps="12-15 reps" rest="60 sec" />
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}

