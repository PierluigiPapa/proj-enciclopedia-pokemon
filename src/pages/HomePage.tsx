import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pokemonLogo from "../assets/pokemon-logo.svg";

const PokemonIntro = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [showStartText, setShowStartText] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 1000);
    const textTimer = setTimeout(() => setShowStartText(true), 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center flex-col">
      {showLogo && (
        <motion.img
          src={pokemonLogo}
          alt="Pokemon Logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-2/3 max-w-md"
        />
      )}
      {showStartText && (
        <motion.p
          className="text-white text-xl mt-6 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          Press Start
        </motion.p>
      )}
    </div>
  );
};

export default PokemonIntro;
