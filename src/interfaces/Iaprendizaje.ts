export interface Aprendizaje{
    nombre: string;
    activo: boolean;
    imagen: string;
    lista: Lista[];
  }

  export interface Lista{
    texto_es: string;
    texto_en: string;
    imagen: string;
    vocal: boolean;
  }