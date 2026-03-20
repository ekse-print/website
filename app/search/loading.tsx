import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-4">
      <LoaderIcon
        role="status"
        aria-label="Loading"
        className={cn("size-18 animate-spin text-primary [animation-duration:1.5s]")}
      />
    </div>
  )
}
