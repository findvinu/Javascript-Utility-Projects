/* const register = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user register");
           resolve('sucess')
          }, 3000);
    })
};

const sendEmail = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {        
          //  return  reject('error while sending email');
            console.log("email send");
            resolve()
          }, 2000);
    })
};

const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login successfully");
            resolve();
          }, 6000);
    })
};

const getUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("get user data");
            resolve();
          }, 3000);
    })
};

const displayUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("display user data");
            resolve();
          }, 3000);
    })
}; */

// callback hell
/* register(() => {
  sendEmail(() => {
    login(() => {
      getUserData(() => {
        displayUserData();
      });
    });
  });
}); */

// promiss
/* register()
.then(sendEmail)
.then(login)
.then(getUserData)
.then(displayUserData)
.catch((err) => {
    console.log('Error', err)
})
 */

// async awais

/* async function asynFunc() {
   try {
    const message = await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
    console.log(message)
   } catch(err){
    console.log(err)
    throw new Error();
   }
}

asynFunc()
.then(() => {
    console.log('all done')
}).catch((err) =>{
    console.log(err)
})

console.log("other application works");


// call back 
function handleCallback(successCallback, errorCallback){

  // const success = doWork()
  
  if('success'){
    successCallback()
  } else {
    errorCallback()
  }
}

handleCallback(() => {
  console.log('success')
}, () => {
  console.error('error')
}
)

// promiss 
const dosomething = () => {
const callback = () =>{

}
}
function handlePromise(){
  return new Promise((resolve, reject) => {
  const success = doWork()
  if(success){
    resolve()
  } else {
    reject()
  }
  })
}

const promis = handlePromise()
promis.then(() =>{
  console.log('success')
}).catch(()=>{
  console.log('error')
}) */

// promiss chaining
/* 
function one(callback){
  dosomething()
  callback()
}

function two(callback){
  dosomething()
  callback()
}

function three(callback){
  dosomething()
  callback()
}

one(()=> {
  two(() => {
    three(()=>{
      console.log('we did them all')
    })
  })
}) */

/* function one(){
  return new Promise(resolve => {
    dosomething()
    resolve()
  })
}

function two(){
  return new Promise(resolve =>{
    dosomething()
    resolve()
  })
}

function three(){
  return new Promise(resolve => {
    dosomething()
    resolve()
  })
}

one().then(()=>{
  return two()
}).then(()=>{
  return three()
}).then(()=>{
  console.log('we did them all')
})

one()
.then(two)
.then(three)
.then(()=>{
  console.log('we did them all')
})

// Advance promiss feature
handlePromise()
.then(amount => {
  console.log('test')
}).catch(reason => {
  console.log('Error')
}).finally(()=>{
  console.log('this always run')
})

// promis all

function one(){
  return new Promise(resolve => {
    dosomething()
    resolve('From one')
  })
}

function two(){
  return new Promise(resolve => {
    dosomething()
    resolve('From two')
  })
}

Promise.all([
  one(),
  two()
]).then(message => {
  // ['From one', 'From two']
}).catch(error => {
  // First error if any error
})

Promise.allSettled([
  one(),
  two(),
]).then(message => {
  console.log(message)
  //  [
  //   { status : "fulfilled", value: "From one"},
  //   { status : "fulfilled", value: "From two"}
  // ] 
})

Promise.any([
  one(),
  two(),
]).then(firstMessage => {
  // Message from whichever resolve first
}).catch(error => {
  // Generic error saying all promiss failed
})

Promise.race([
  one(),
  two(),
]).then(firstMessage =>{
   // Message from first promise to finish if it was a success
}).catch(firstError => {
   // Message from first promise to finish if it was an error
})

Promise.resolve(200).then(amount => {
  console.log(amount)
  // 200
})

Promise.reject("Error").catch(message => {
  console.log("Error", message)
  // Error
})

// ------ Promiss practice ------
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if(a == 2){
    resolve('success')
  } else {
    reject('failed')
  }
})

p.then(message => {
  console.log(`this is ${message}`)
}).catch(error => {
  console.log(`this is ${error}`)
}) 

// call back example

const userLeft = false;
const userWatching = false; */

/* function userWatchingVideo(callBack, errorCallback){
  if(userLeft){
    errorCallback({
      name: 'userLeft',
      message: ':('
    })
  } else if(userWatchingVideo){
    errorCallback({
      name: 'User watch',
      message: 'web d simplyfy'
    })
  }else {
    callBack('thumb and subcribe')
  }
}

userWatchingVideo(message =>{
  console.log('Success ----' + message)
},error => {
  console.log(error.name + ' ' + error.message)
}) */

// convert above in Promiss

/* function userWatchingVideoPromise(){
  return new Promise((resolve, reject) => {
    if(userLeft){
      reject({
        name: 'userLeft',
        message: ':('
      })
    } else if(userWatching){
      reject({
        name: 'User watch',
        message: 'web d simplyfy'
      })
    } else {
      resolve('thumb and subcribe')
    }
  })
}

userWatchingVideoPromise().then((message) => {
  console.log('this is promiss success ' + message)
}).catch((error) => {
  console.log('this is reject promiss' + error.name + ' ' + error.message)
})

// -----------------------------------
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 recorded')  
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 recorded')
})

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {
  console.log( message )
}).catch(error => {
  console.log('error show in last promiss' + error )
})


// ---------------------------------
function makeRequest(location){
  return new Promise((resolve, reject)=>{
    console.log(`Making request to ${location}`)
    if(location === 'Google'){
      resolve('Google say hi')
    } else {
      reject('We can only talk to google')
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
     console.log('Processing response')
     resolve(`Extra Information ${response}`)
  })
}

makeRequest('Facebook')
.then(response => {
  console.log('Response Received')
  return processRequest(response)
}).then(ProcessedResponse =>{
  console.log(ProcessedResponse)
}).catch(err => {
  console.log(err)
})

// --------- Async/Await ------------
async function doWork(){
  const response = await makeRequest('Google')
  console.log('Response Received')
 const ProcessedResponse = processRequest(response)
 console.log(ProcessedResponse)
}

doWork() */

// --------------------------

/* function printName(name, callBack){
    callBack(name)
 }

 function printNameHandler(x){
  console.log("Hello " + x)
 }


 printNameHandler('Vinod', printNameHandler ) 

 // -------------------
 function print(variable){
  let c = 3;
  return function func(variable2){
    console.log(variable);
    console.log(variable2);
    console.log(c);
  }
 }

 let a = print(1)

 a(2)

 // -------

 const ar = [1,2,3,7,8,]

 ar.forEach(ele => {
  console.log(ele  * 2)
 })

 console.log(ar)

 const items = [
  { price : 10 },
  { price : 20 },
  { price : 14 },
  { price : 1 },
  { price : 6 },
  ]


  const totalSum = items.reduce((sum, number) => {
    return sum + number.price
  }, 0)
  
  console.log(totalSum) */
/* 
  const divWithId = document.querySelector('#div-id')
  
  divWithId.style.color = 'red'
  divWithId.style.fontSize = '30px'

  const divWithClass = document.getElementsByClassName('div-class')

  const divWithClassArray = Array.from(divWithClass)

  divWithClassArray.forEach(element => {
    element.style.color = 'green'
  }); */

/* const buttons = document.querySelectorAll('button')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const currentClickes = parseInt(button.dataset.clicks)

      button.dataset.clicks = currentClickes + 1
    })
  })
 */

const form = document.querySelector("#new-item-form");
const input = document.querySelector("#item-input");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("item-list");
  list.append(item);

  input.value = "";

  item.addEventListener("click", () => {
    list.removeChild(item);
  });

  console.log(item);
});
