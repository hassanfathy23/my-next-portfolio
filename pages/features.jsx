import { useRouter } from "next/router"
import Spinner from "../components/UI/Spinner"

export default function Features() {
  const router = useRouter()
  return (
    <Spinner classes="h-[200px]" />
  )
}