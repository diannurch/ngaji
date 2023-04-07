// import surah from './surah.js';

// class DataSource {
//   static searchSurah(keyword) {
//     return new Promise((resolve, reject) => {
//       const filteredSurah = surah.filter(surah1 => surah1.nama.toUpperCase().includes(keyword.toUpperCase()));
      
//       if (filteredSurah.length) {
//         resolve(filteredSurah);
//       } else {
//         reject(`${keyword} is not found`);
//       }
//     });
//   }
// }

// export default DataSource;

class DataSource {
  static searchClub(keyword) {
    return fetch(` https://al-quran-8d642.firebaseio.com/data.json?print=pretty${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.teams) {
            return Promise.resolve(responseJson.teams);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}
 
export default DataSource;
