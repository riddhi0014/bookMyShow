import React from "react";
import { movies } from "../utils/constants";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import { get } from "mongoose";
import { getTopMoviesByVotes } from "../apis";

const Recommended = () => {

  const{data:recMovies,isError}=useQuery({
    queryKey:["recommendedMovies"],
    queryFn: async()=>{
      return await getTopMoviesByVotes();
    },
    placeholderData: keepPreviousData
  })

  if(isError){
    return <p>Error loading movies</p>;}

    console.log(recMovies);

  return (
    <div className="w-full py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="items-center flex justify-between mb-4">
          <h2 className="text-2xl font-semibold">
            Recommended Movies
          </h2>

          <span className="text-md text-red-500 cursor-pointer hover:underline font-medium">
            See All
          </span>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.map((movie, i) => (
            <div key={i} className="rounded overflow-hidden cursor-pointer">
              
              {/* Image */}
              <div className="relative">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-75 object-cover rounded"
                />
              </div>

              {/* Rating */}
              <div className="bg-black text-white text-sm px-2 py-1 flex items-center justify-between">
                <span>⭐ {movie.rating}/10</span>
                <span>{movie.votes} Votes</span>
              </div>

              {/* Title + Genre */}
              <div className="px-2 py-1">
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <p className="text-md text-gray-500">
                  {movie.genre.join( "|")}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Recommended;
