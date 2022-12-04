// complete the given function

function palindrome(str){
    const ltrArray = string.split('');
    const rtlArray = ltrArray.reverse();
    const reverseStr = rtlArray.join('');
    if(str !== reverseStr) {
        return false
    }
  return true;
}
module.exports = palindrome
