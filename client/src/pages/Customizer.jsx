import { AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"
import state from "../store"

const Customizer = () => {
  const snap = useSnapshot(state)

  return <AnimatePresence></AnimatePresence>
}

export default Customizer
