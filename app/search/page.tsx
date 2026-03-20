import { Suspense } from "react"
import { SearchResults } from "@/components/search-results"
import Loading from "./loading"

export default function SearchPage() {
  return (
    <Suspense fallback={<Loading/>}>
      <SearchResults />
    </Suspense>
  )
}
