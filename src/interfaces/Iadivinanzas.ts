export interface Adivinanzas{
    description: string;
    pista_title: string;
    solucion_title: string;
    solucion_image: string;
    alternativas: Alternativas[];
  }

  export interface Alternativas{
    nombre: string;
    imagen: string;
    voz: string;
  }