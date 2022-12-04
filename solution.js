// complete the given function

function palindrome(str){
    const lowerStr = str.toLowerCase();
    const ltrArray = lowerStr.split('');
    const rtlArray = ltrArray.reverse();
    const reverseStr = rtlArray.join('');
    if(lowerStr != reverseStr) {
        return false
    }
  return true;
}
module.exports = palindrome
