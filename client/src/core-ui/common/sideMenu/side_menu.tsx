import { motion } from "framer-motion";
import { useState } from "react";
import MenuItem from "./menu_item";
import { MenuToggle } from "./menu_toggle";

type Props = {};

export default function SideBar({}: Props) {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((show) => !show);
  };
  return (
    <div>
      <motion.nav
        className="nav_bar"
        animate={show ? "open" : "closed"}
        variants={variants}
      >
        <motion.div className="inner_nav">
          <MenuItem />
        </motion.div>
      </motion.nav>
      <MenuToggle toggle={toggle} show={show} />
    </div>
  );
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
