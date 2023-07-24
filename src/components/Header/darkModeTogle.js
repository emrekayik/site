import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

function DarkModeTogle() {
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    if (theme === 'system') {
      setTheme('light');
    }
  }, [systemTheme]);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <motion.div
      className={`${
        theme === 'dark' ? 'dark' : 'light'
      } cursor-pointer flex items-center justify-center`}
      onClick={() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
      }}
      whileHover={{
        scale: [1, 1.4, 1.2],
        rotate: [0, 10, -10, 0],
        transition: {
          duration: 0.2,
        },
      }}
    >
      {currentTheme === 'dark' ? (
        <i className="gg-sun transition-all duration-300 ease-in-out"></i>
      ) : (
        <i className="gg-moon transition-all duration-300 ease-in-out"></i>
      )}
    </motion.div>
  );
}
export default DarkModeTogle;
