import { motion } from "framer-motion";
import { useState } from "react";

type Props = {};

export default function SideBar({}: Props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <motion.nav animate={show ? "open" : "closed"} variants={variants}>
        <motion.div className="inner_nav">
          <ul>
            <li>
              <a href="">home</a>
            </li>
          </ul>
        </motion.div>
      </motion.nav>
      <motion.button
        className="toggle"
        onClick={() => setShow((show) => !show)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        toggle
      </motion.button>
    </div>
  );
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
