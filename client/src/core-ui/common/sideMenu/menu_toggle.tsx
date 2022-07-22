import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";

export const MenuToggle = ({ toggle, show }: any) => (
  <motion.button
    className="toggle"
    onClick={toggle}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {show ? <AiOutlineClose /> : <AiOutlineMenuFold />}
  </motion.button>
);
