module.exports.add = (a,b) => a + b;
module.exports.square = (a) => a * a;

module.exports.square = (a,cb) =>{
    setTimeout(()=>{
        cb(a*a);
    },1000)
}
module.exports.setName = (nameObj, fullName) => {
   let names = fullName.split (' ');
   nameObj.first = names[0];
   nameObj.last = names[1];
   return nameObj;
}