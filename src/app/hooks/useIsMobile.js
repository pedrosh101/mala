// hooks/useIsMobile.js
import { useState, useEffect } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Adiciona um listener para o evento de resize da janela
    handleResize(); // Verifica o tamanho da janela inicialmente
    window.addEventListener('resize', handleResize);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}
