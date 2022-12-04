// complete the given function

function palindrome(str){
const ltorArray = str.split('');
const rtolArray = ltorArray.reverse();
const rtolString = ltorArray.join('');
if(str == rtolString) {
    return true;
  }
 else return false;
}
module.exports = palindrome
