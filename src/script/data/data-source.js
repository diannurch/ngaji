class DataSource {
  static searchSurah(keyword) {
    return fetch(`https://api.banghasan.com/quran/format/json/surat/${keyword}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson.meals ) {
        return Promise.resolve(responseJson.meals );
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }
}
 
export default DataSource;
