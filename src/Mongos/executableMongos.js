var db=connect("ecommerce");
var clients =db.Clients.find( {$or:[{nom : "Timera" },
{Adress :"yafera"}]}
);
clients.forEach(function(client) {
    printjson(client)
    
});
