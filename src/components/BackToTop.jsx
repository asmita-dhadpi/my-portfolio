import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <RiArrowUpSLine size={28} />
      </button>
    )
  );
};

export default BackToTop;
