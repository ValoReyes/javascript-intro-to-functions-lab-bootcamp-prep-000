function shout(string) {
return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
<<<<<<< HEAD
  if (string === string.toLowerCase()) {
return "I can't hear you!"
}
if (string === string.toUpperCase()) {
  return "YES INDEED!"
}
if (string === ("I love you, Grandma."))
return 'I love you, too.'
}
=======
  if string === string.toLowerCase() {
console.log('I can\'t hear you!') expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
}}
>>>>>>> 71ac4cfa80db5983d42db896502a0d15f110878c
