const axios = require('axios');

class Film {

    
    async searchMovieByTitle(movie){
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${movie}`);
        return res.data;
    }

    async findTopRated(){
        let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;
    }

    async searchById(id){
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        return res.data;
    }

    async searchByGenreName(){
        let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        let arrayGenre = res.data.genres;
        console.log(arrayGenre);
        // console.log(`Esto es por [id] ${arrayGenre.id}`);
        console.log(`Esto es por [0] ${arrayGenre[0].name}`);
        let genre = [];
        for (let i in arrayGenre){
            console.log(arrayGenre[i].name);
            genre.push(arrayGenre[i].name);
            
        }
        console.log(genre);






        return arrayGenre;
    }


}

let movieController = new Film();

module.exports = movieController;