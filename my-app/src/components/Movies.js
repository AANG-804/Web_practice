import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div id={id}>
            <img src={coverImg} alt=""></img>
            <h2>
              <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
              {genres.length>0 ? (genres.map((genre, index) => (
                <li key={index}>{genre}</li>)
              )):<li>No Genre Data</li>}
            </ul>
            <hr />
            <br />
          </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
}

export default Movie