// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

const errMessage = document.querySelector("#modal")
errMessage.className = "hidden"

const heart = document.querySelector(".like-glyph")

heart.addEventListener("click", (event) => {
  console.log(event)
  const serverRes = mimicServerCall()
  serverRes.then((data) => {
    console.log(data)
    if (heart.className === "activated-heart") {
      return heart.className = ""
    }
    else {
      return heart.className = "activated-heart"
    }
  }
  )

  serverRes.catch((data) => {
    console.log(data)
    return errMessage.className = " "
  })
  console.log(mimicServerCall());
  setTimeout(() => errMessage.className = "hidden", 3000) 
})

// mimicServerCall()
// .then()
// .catch()
  // serverRes.then((data) => {if (data.PromiseState = "fulfilled") {return heart.className = "activated-heart"}})
  // serverRes.catch((data) => {if (data.PromiseState = "rejected") {return errMessage.className = ""}})