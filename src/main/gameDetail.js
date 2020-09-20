import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { AuthContext } from '../components/authcontext'




const GameDetail = () => {
    let { id } = useParams()
    const [user] = useContext[AuthContext]
    const [game, setGame] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if (game === null) {
            axios
                .get(`https://backendexample.sanbersy.com/api/games/${id}`, { headers: { "Authorization": `Bearer ${user.token}` } })
                .then((res) => setGame(res.data))
                .catch((err) => console.log(err))
        }
    }

    )

    return (
        <>
            {game !== null && (
                <section>
                    <img alt="poster" className="detail" src={game.image_url} />
                    <h1 style={{ textAlign: "left" }}>{game.name}</h1>
                    <p>Genre: {game.genre}</p>
                    <p>Single Player: {game.singlePlayer === 1 ? "✅" : "❌"}</p>
                    <p>Multiplayer: {game.multiplayer === 1 ? "✅" : "❌"}</p>
                    <p>Platform: {game.platform}</p>
                    <p>Release: {game.release}</p>
                    <Button size="sm" type="secondary" onClick={() => history.goBack()}>← Back</Button>
                </section>

            )}
        </>
    )
}

export default GameDetail