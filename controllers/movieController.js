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



}

let movieController = new Film();

module.exports = movieController;