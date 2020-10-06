//console.log('Hello World');
function func1() {
    console.log('func1 is running');
};
var user = new Promise((resolver, reject)=> {
    console.log('step 1 running');
    if(!true){
        resolver(console.log('resolver ran.'));
    }
    else {
        reject(console.log('reject ran'));
    }
}).then((data)=> {
    func1();
}).catch((e) =>{
    console.log('error');
});