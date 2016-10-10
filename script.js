function whenClicked() {
  console.log("hihi")
  return "1111"
}

var a = whenClicked()
$("#button").click(a)

$("#button").click(whenClicked)