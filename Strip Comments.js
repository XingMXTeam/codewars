/**
 Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

 Example:

 Given an input string of:

 apples, pears # and bananas
 grapes
 bananas !apples
 The output expected would be:

 apples, pears
 grapes
 bananas
 The code would be called like so:

 var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
 // result should == "apples, pears\ngrapes\nbananas"
 */

function solution(input, markers){
    console.log("输入："+input+"-----"+markers);

    input += "\n";
    let marker;
    for(let i = 0, len = markers.length; i < len; i++) {
      marker = markers[i];

      input = input.replace(new RegExp("(\\s*\\"+marker+".*)\\n"), function (match, $1) {
         return "\n";
      });
    }
    input =  input.substring(0, input.length - 1);
    return input;
}

console.log("输出："+solution("a #b\nc\nd $e f g", ["#", "$"]))














