
export interface IMovie{
  _id?: string;
  title: string;
  description: string;
  releaseDate: Date;
  languages: string[];
  certification: string; // e.g., "PG-13", "R"
  genre: string[];
  director: string;
  cast: string[];
  duration: String; // in minutes
  posterUrl: string;
  rating: number; 
  votes: number;
  format?: string[]; // e.g., ["2D", "3D", "IMAX"]

}


