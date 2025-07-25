"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Saint {
  name: string
  feastDate: string
  shortBio: string
  patronOf: string[]
  life?: string
}

export function SaintOfDay() {
  const [saint, setSaint] = useState<Saint | null>(null)
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const fetchSaintOfDay = async () => {
      try {
        const response = await fetch('/api/saints?today=true')
        if (response.ok) {
          const saintData = await response.json()
          setSaint(saintData)
        } else {
          console.error('Failed to fetch saint of the day')
        }
      } catch (error) {
        console.error('Error fetching saint of the day:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSaintOfDay()
  }, [])

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Saint of the Day</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="h-24 flex items-center justify-center">
            <div className="animate-pulse h-4 w-32 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!saint) {
    return null
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Saint of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-2">{saint.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{saint.feastDate}</p>
        <p className="text-gray-600 mb-4">{saint.shortBio}</p>

        {expanded && saint.life && (
          <div className="text-gray-600 mb-4 animate-fadeIn">{saint.life}</div>
        )}

        {saint.patronOf && saint.patronOf.length > 0 && (
          <p className="text-sm text-gray-500 mb-4">
            <span className="font-medium">Patron of:</span> {saint.patronOf.join(", ")}
          </p>
        )}

        {saint.life && (
          <Button variant="link" className="p-0 flex items-center gap-1" onClick={toggleExpanded}>
            {expanded ? (
              <>
                Read less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Read more <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export default SaintOfDay
