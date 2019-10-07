// object destructuring
// sequelize.org

module.exports = {
  addNumbers(A, B) {
    return A + B;
  },

  subtractNumber(A, B) {
    return A - B;
  },

  stringifier(baseArray) {
    return JSON.stringify(baseArray);
  },

  stringifyAndLowerCase(baseArray) {
    return this.stringifier(baseArray).toLowerCase();
  },

  removeObjectKeys(baseArray) {
    const stringifiedArray = this.stringifyAndLowerCase(baseArray);
    return stringifiedArray.replace(/"[^"]*":/g, '');
  },

  removeQuotationsColonsAndCurlyBraces(baseArray) {
    const stringifiedAndReplacedArray = this.removeObjectKeys(baseArray);
    return stringifiedAndReplacedArray.replace(/[",{}]/g, '');
  },

  isFoundInStringifiedArray(baseArray, searchPhrase) {
    const searchedArray = this.removeQuotationsColonsAndCurlyBraces(baseArray);
    return searchedArray.indexOf(searchPhrase.toLowerCase()) > -1;
  },

  filterInStringifiedArray(baseArray, searchPhrase) {
    return baseArray.filter((item) => {
      const jsonString = JSON.stringify(item)
        .replace(/"[^"]*":/g, '')
        .replace(/[",{}]/g, '');
      return jsonString.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1;
    });
  },
};
