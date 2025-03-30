import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import type { TeamMember as TeamMemberType } from "@/lib/types"

interface TeamMemberProps {
  member: TeamMemberType
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <Image
          src={member.avatar || "/placeholder.svg?height=300&width=300"}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="p-6">
        <h3 className="font-bold text-lg">{member.name}</h3>
        <p className="text-muted-foreground mb-4">{member.position}</p>

        <div className="flex space-x-4">
          {member.socialLinks?.facebook && (
            <a
              href={member.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
          )}
          {member.socialLinks?.twitter && (
            <a
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          )}
          {member.socialLinks?.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

