let numberOfFilms 

function start(){
    numberOfFilms = +prompt("Сколько филмов вы посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько филмов вы посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false

};


function rememberMyFilms(){
    for ( let  i = 0; i < 2; i++ ){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('Насколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('eror');
            i--;
        }
          
}

}

//rememberMyFilms();



function detectPersonalLevel() {
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >30) {
    console.log('Вы киноман');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы класический зритель');
} else {
    console.log('Произошла ошибка');
}

}

//detectPersonalLevel();

function shoMyDB (hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }

}


shoMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}
