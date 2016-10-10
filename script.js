function whenClicked() {
  console.log("running function")
  return "1111"
}

var a = whenClicked()

console.log("running function")
return "1111"


var b = whenClicked

console.log(a())
console.log(b())
