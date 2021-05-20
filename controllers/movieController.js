const axios = require('axios');

class Film {


    async searchMovieByTitle(movie) {
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${movie}`);
        return res.data;
    }

    async findTopRated() {
        let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;
    }

    async searchById(id) {
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        return res.data;
    }

    async searchByGenreName(nombreGenero) {
        let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        let arrayGenre = res.data.genres;
        // console.log(arrayGenre);
        // console.log(`Esto es por [id] ${arrayGenre.id}`);
        // console.log(`Esto es por [0] ${arrayGenre[0].name}`);
        // let nombreGenero='Adventure';
        for (let i in arrayGenre) {
            //console.log(arrayGenre[i].name);
            console.log('red alert')
            if (nombreGenero == arrayGenre[i].name) {
                console.log(i);
                let code1 = arrayGenre[i].id;
                console.log(code1)
                let res2 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${code1}`);
                console.log(res2.data);
                return res2.data;
            }
        }
    }

    async searchByCode(code) {
        let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${code}`);
        return res.data;
    }


    async findNowPlaying() {
        let res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;
    }

}

let movieController = new Film();

module.exports = movieController;
