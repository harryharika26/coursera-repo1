(function(){
  'use strict';
  angular.module('ShoppingListApp',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  ToBuyController.$inject=['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];


  function ToBuyController(ShoppingListCheckOffService)
  {
    var itemAdder = this;
    itemAdder.name="";
    itemAdder.quantity="";
    itemAdder.toBuy=ShoppingListCheckOffService.ItemsToBuy();

    itemAdder.checkBought =function(index)
    {
      ShoppingListCheckOffService.checkBought(index);
    };



  };
  function AlreadyBoughtController(ShoppingListCheckOffService)
  {
    var AlreadyBought = this;
    AlreadyBought.boughtItems =ShoppingListCheckOffService.AlreadyBoughtItems();
  }



  function ShoppingListCheckOffService()
  {
    var service=this;
    var toBuy=[{name: "apples", quantity:"10"},
    {name: "chocolates", quantity: "10"},
    {name: "milk", quantity: "2"},
    {name: "cookies", quantity: "3"},
    {name: "chips", quantity: "2"}];
    var boughtItems=[];



 service.ItemsToBuy = function()
 {
   return toBuy;
 };
 service.AlreadyBoughtItems=function()
 {
   return boughtItems;
 };
 service.checkBought = function(index)
 {
   var item=toBuy[index];
   boughtItems.push(item);
   toBuy.splice(index,1);
};

};






})();
