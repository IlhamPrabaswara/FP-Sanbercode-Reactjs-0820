import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { AuthContext } from '../components/authcontext'


const MovieDetail = () => {
    let { id } = useParams()
    const [user] = useContext(AuthContext)
    const [movie, setMovie] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if (movie === null) {
            axios
                .get(`https://backendexample.sanbersy.com/api/data-movie/${id}`, { headers: { "Authorization": `Bearer ${user.token}` } })
                .then((res) => setMovie(res.data))
                .catch((err) => console.log(err))
        }
    }

    )

    return (
        <>
            {movie !== null && (
                <section>
                    <img alt="poster" className="detail" src={movie.image_url} />
                    <h1>{movie.title}</h1>
                    <h2><span role="img" aria-label="stars">⭐</span>{movie.rating}</h2>
                    <p>Genre: {movie.genre}</p>
                    <p>Tahun Release: {movie.year}</p>
                    <p>Durasi: {((movie.duration) / 60).toFixed(2)} jam</p>
                    <p className="desc">Deskripsi: {movie.description}</p>
                    <p>Review: </p>
                    <p>{movie.review}</p>
                    <Button size="sm" type="secondary" onClick={() => history.goBack()}>← Back</Button>
                </section>
            )}
        </>
    )
}

export default MovieDetail