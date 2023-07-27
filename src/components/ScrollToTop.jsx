import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ pathname , search }) {

  console.log(pathname , search );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname , search]);

  return null;
}