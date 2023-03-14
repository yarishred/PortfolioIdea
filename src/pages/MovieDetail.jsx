import React, { useState, useEffect } from "react";

//Import Styled Components
import {
  Awards,
  HeadLine,
  ImageDisplay,
  MovieDetails,
  StyledAward,
} from "../styles";

//Import React Router
import { useNavigate, useLocation } from "react-router-dom";

//Import State
import { MovieState } from "../utils/MovieState";

//Import Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation/animation";

export const MovieDetail = () => {
  const navigate = useNavigate();
  const url = useLocation().pathname;
  console.log(url);
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect when the movie and url change
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  console.log(movie);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {movie && (
        <MovieDetails>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award {...award} key={award.title} />
            ))}
          </Awards>
          <ImageDisplay>
            <p>{movie.description}</p>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </MovieDetails>
      )}
    </motion.div>
  );
};

//Award Component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line">
        <p>{description}</p>
      </div>
    </StyledAward>
  );
};
