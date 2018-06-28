var dns = require('dns');
var url= 'www.mum.edu';
var ipadder = dns.resolve4(url, function (err, address) {
    if (err) 
        console.log (err);
    else
        console.log('Resolved IP Address [USING RESOLVE4]: '+address);
});

const {promisify} = require('util');
const myPromise = promisify(dns.resolve4);

myPromise (url)
    .then((address)=>{console.log('Resolved IP Address [USING PROMISE]: '+address)})
    .catch((err)=>{console.log(err)});

async function myAsyncFunction(){
    try{
        var address3 = await myPromise(url);
        console.log('Resolved IP Address [USING ASYNC ... AWAIT]: '+address3);
    }catch(e){
        console.log(e);
    }
} 
myAsyncFunction();
