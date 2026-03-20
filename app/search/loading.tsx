import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      arial-label="Loading"
      className={cn("size-8 animate-spin", className)}
      {...props}
    />
  )
}

export default function Loading() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  )
}
