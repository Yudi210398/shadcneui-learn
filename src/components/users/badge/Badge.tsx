import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BadgeCheck, Shield } from "lucide-react";

export default function BadgesUser() {
  return (
    <div className="flex gap-4 mt-4">
      <HoverCard>
        <HoverCardTrigger>
          <BadgeCheck
            size={36}
            className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 hover:cursor-pointer"
          />
        </HoverCardTrigger>
        <HoverCardContent>
          <h1 className="font-bold mb-2">Verified User</h1>
          <p className="text-sm text-muted-foreground">
            This user has been verified by the admin
          </p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          <Shield
            size={36}
            className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 hover:cursor-pointer"
          />
        </HoverCardTrigger>
        <HoverCardContent>
          <h1 className="font-bold mb-2">Verified User</h1>
          <p className="text-sm text-muted-foreground">Shield Data</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
