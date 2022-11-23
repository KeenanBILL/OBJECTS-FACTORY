// let address = new Object();

// address.street = 'Accordian'
// address.zip-code = 4520
// address.city = 'CapeTown'

// function showAddress ()

// createAddress

// console.log(address)

let address = {
    street:"Bagle Road",
    city:"Cape Town",
    zipcode:"6590",
   
    };

    function showAddress(){

      console.log (address);

    };

    showAddress();
    

//exercise 2//

let blogpost = {
  title: 'Mentality',
  body: 'Let\'s talk about your mental issues',
  authorship: 'Keenan',
  views: 500,
  comments:[

    comment1 = {

    body: 'Joke thing',
    author:'Keenan O'
    }
  ],

isLive: true

};

console.log (blogpost);

function createAddress (street, city, zipcode) {
  return {
    street,
    city,
    zipcode
  }
}

const address1 = createAddress ('Jungle Road', 'Scandavie', 4590);
console.log (address1);