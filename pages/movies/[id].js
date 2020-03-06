import React from "react";
import axios from "axios";

import {H1} from '../components/H1'
import {Info} from '../components/Info'

function MoviesDetail(props) {
    return (
        <div>
        <H1>
            {props.original_title}
        </H1>
        <Info>
            Data de lançamento: {props.release_date}
            <br></br>
            Média de votação: {props.vote_average}
        </Info>
        </div>
    );
}

MoviesDetail.getInitialProps = async ({query}) => {
    const resultado = await axios('http://localhost:3000/api/movies/' + query.id);
    return {original_title: resultado.data.original_title, release_date: resultado.data.release_date,
    vote_average: resultado.data.vote_average};
};

export default MoviesDetail;