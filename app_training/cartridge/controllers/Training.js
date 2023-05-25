// 'use strict';
 
// var server = require('server');
 
 
// server.get('HelloWorld', function (req, res, next) {
//     var myvariable = "Just a string"
//     res.render("training/myfirsttemplate", { myvariable: myvariable });
//     return next();
// });
 
 
// module.exports = server.exports();


'use strict';
 
var server = require('server');
 
server.get('Basket', function (req, res, next) {
    var BasketMgr = require("dw/order/BasketMgr");
 
    var currentBasket = BasketMgr.getCurrentBasket();

    
    res.render("training/showBasket", { currentBasket : currentBasket});
     
    return next();
})


module.exports = server.exports();