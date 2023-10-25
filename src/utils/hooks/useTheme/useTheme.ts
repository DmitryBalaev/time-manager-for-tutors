import { useLayoutEffect, useState } from "react";

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'

export const useTheme = () => {
  const localStorageTheme = localStorage.getItem('data-theme') 
  const [theme, setTheme] = useState<'dark' | 'light'| string>(localStorageTheme || defaultTheme);
 
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('data-theme', theme)
  }, [theme])

  return {theme, setTheme}
};
