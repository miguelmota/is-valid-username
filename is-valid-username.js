(function(){

  function isValidUsername(v) {
    if (!v) return false;
    var re = /^[a-zA-Z0-9]+$/;
    return re.test(v);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isValidUsername;
  } else {
    window.isValidUsername = isValidUsername;
  }

})();
