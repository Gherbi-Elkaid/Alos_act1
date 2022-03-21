var unirest = require('unirest') 
var req = unirest("GET","https://api.json-generator.com/templates/dkWitr4qEUIi/data")
req.headers({
    "cache-control":"no-cach",
    'Authorization': 'Bearer ubln5bvgtp6jri6lyy5407fyrr4malqcxd23l7oz'
})

console.log("question3 ==> la ligne 6 indique que c'est de renvoyer systématiquement la requête au serveur et ne servir une éventuelle version en cache que dans le cas où le serveur le demande.");


req.end(function(res){
    if(res.err) throw new Error(res.error)
    console.log("Data Table");
    console.table(req.body);

   

    console.log("les 10 premier hotel");
    for(let i=0 ; i<=10;i++){
        console.log(i);
        console.table(res.body[i]);
    }
    

    console.log("les hotels qui commence par M");
    console.table(res.body.filter(x=> x.nom = "m"))

    console.log(res.body.length)
})