function calcSumToN(n) {
    var sum = 0;
    for (var i = 1; i < n; i++) {sum += i;}
    return sum;
  }
  var n = 17;
  var mySum = calcSumToN(5);
  console.log(n, mySum, sum);