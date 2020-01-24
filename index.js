//------ bcrypt practice -----//

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's)/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

//----Technique 1 (generate a salt and hash on seperate function calls) -----//
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash)
    })
})

//----Technique 2 (auto-gen a salt and hash) -----//
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash){
    console.log(hash)
})

let hash = bcrypt.hashSync('myPlaintextPassword', 13)
console.log(hash)

let isPass = bcrypt.compareSync('Password', hash)
console.log(isPass)