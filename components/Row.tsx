import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import { Movie } from "../typings"

interface Props {
    title: string,
    movies: Movie[]
}

function Row({title, movies}: Props) {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
        <h2>{title}</h2>
        <div className="group relative md:-ml-2">
            <ChevronLeftIcon className="top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"/>
            <ChevronRightIcon className="top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"/>
        </div>
    </div>
  )
}

export default Row