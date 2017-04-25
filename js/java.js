$(document).ready(function(){

var juicebox = $('#juicebox');
var singlewaffle = $('#singlewaffle');
var hotpocket = $('#hotpocket');
var wetbread = $('#wetbread');


var juiceboxprice = parseFloat($("#juiceboxprice").html(), 10);
var singlewaffleprice = parseFloat($("#singlewaffleprice").html(), 10);
var hotpocketprice = parseFloat($("#hotpocketprice").html(), 10);
var wetbreadprice = parseFloat($("#wetbreadprice").html(), 10);


var juiceboxcount = 0;
var singlewafflecount = 0;
var hotpocketcount = 0;
var wetbreadcount = 0;

var firstitem = true;



var submit = $('#submitOrder');

var namefield = $('#icon_prefix');
var phonefield = $('#icon_telephone');
var addressfield = $('#icon_address');

console.log(submit);

juicebox.on('click', event, function(event){
    console.log(event.target.innerText);
    if(event.target.innerText == "PURCHASE"){                 //if you clicked the purchse btn
      if(firstitem ==  true){                                 // if this is the first item being purchased
        juiceboxcount = juiceboxcount + 1;                                           // increase the count by one (at the beginning because in a moment it gets added to the field)
        var item = $("#orderlist").children('tr').children('td')[0];                //(since its the first item) grab the table columns of the first row to add the info to
        var count = $("#orderlist").children('tr').children('td')[1];
        var price =$("#orderlist").children('tr').children('td')[2];
        item.innerHTML = "A Box of Juice";                                          // adding the info to the first row
        count.innerHTML = juiceboxcount;
        price.innerHTML = ('$' +juiceboxprice);
        count.id = 'juiceboxcount';                    // an id on the food item in the order list to find easier (not used i think)
        firstitem = 'juicebox';                         // sets the first item variable to the food for reference if you want more (on the first item purchased) used to refer to later when buying more
        console.log('has inner text??');
      }
      else if (juiceboxcount == 0){                   //if its not the first item, but havent asked for one yet
        juiceboxcount = juiceboxcount +1;
        newrowJB = $('<tr>');                             // no var on these 4 trying to make them gloab, an accessable when buying more than one item
        newitemJB = $('<td>');                            // creates new row and 3 columns with the info
        newcountJB = $('<td>');
        newpriceJB = $('<td>');

        newrowJB.append(newitemJB);                       // appending the columns show they show in the webpage
        newrowJB.append(newcountJB);
        newrowJB.append(newpriceJB);
        newcountJB.id = 'juiceboxcount';                  // tried to add an ID to the count field to increment it when buying more (dont think its being used)
        newitemJB.html("Box of Juice");                   // adding the info
        newcountJB.html(juiceboxcount);
        newpriceJB.html("$" + juiceboxprice);


        $('#orderlist').append(newrowJB);                       // attaches to the web page
      }
      else if (juiceboxcount != 0){                       // if you want more of the item
        if(firstitem == 'juicebox'){                    // if this was the first item you asked for (because theres two ways to find the field with the item count depending on if it was the first item asked for, or not)
          juiceboxcount = juiceboxcount +1;
          $("#orderlist").children('tr').children('td')[1].innerHTML = juiceboxcount;   // basically updates with the new quantity desired
        }
        else {
          juiceboxcount = juiceboxcount +1;
          newcountJB.html(juiceboxcount);                   // sets in field value to the updated count, by using the global variable created when the item was asked for the first time

        }

      }
    }
    total();                                                    // TODO can i have a function called at the end of the event function that would update the subtotal, tax and total? (thinking that the format would be the same fr each event listener ((easy to copy paste)))

});
singlewaffle.on('click', event, function(event){
    console.log(event.target.innerText);
    if(event.target.innerText == "PURCHASE"){
      if(firstitem == true){
        singlewafflecount = singlewafflecount +1;
        var item = $("#orderlist").children('tr').children('td')[0];
        var count = $("#orderlist").children('tr').children('td')[1];
        var price =$("#orderlist").children('tr').children('td')[2];
        item.innerHTML = "A Single Waffle";
        count.innerHTML = singlewafflecount;
        price.innerHTML = ('$' + singlewaffleprice);
        count.id = 'singlewafflecount';
        firstitem = 'singlewaffle';
        console.log(firstitem);
      }
      else if(singlewafflecount == 0){
        console.log('not first item');
        singlewafflecount = singlewafflecount +1;
        newrowSW = $('<tr>');
        newitemSW = $('<td>');
        newcountSW = $('<td>');
        newpriceSW = $('<td>');
        newrowSW.append(newitemSW);
        newrowSW.append(newcountSW);
        newrowSW.append(newpriceSW);

        newitemSW.html("A Single Waffle");
        newcountSW.html(singlewafflecount);
        newpriceSW.html("$" + singlewaffleprice);
        newcountSW.id = 'singlewafflecount';


        $('#orderlist').append(newrowSW);
      }
      else if (singlewafflecount !=0){
        if(firstitem == 'singlewaffle'){
          console.log('was first item');
          singlewafflecount = singlewafflecount +1;
          $("#orderlist").children('tr').children('td')[1].innerHTML = singlewafflecount;
        }
        else {
          singlewafflecount = singlewafflecount +1;
          newcountSW.html(singlewafflecount);
        }
      }
    }
    total();
});
hotpocket.on('click', event, function(event){
    if(event.target.innerText == "PURCHASE"){                 //if you clicked the purchse btn
      if(firstitem == true){
        hotpocketcount = hotpocketcount + 1;                                          // if its the first item
        var item = $("#orderlist").children('tr').children('td')[0];
        var count = $("#orderlist").children('tr').children('td')[1];
        var price =$("#orderlist").children('tr').children('td')[2];
        item.innerHTML = "Meat Pocket";
        count.innerHTML = '1';
        price.innerHTML = hotpocketprice;
        count.id = 'hotpocketcount';
        firstitem = 'hotpocket';
        console.log();
      }
      else if( hotpocketcount == 0){
        hotpocketcount = hotpocketcount +1;
        newrowHP = $('<tr>');
        newitemHP = $('<td>');
        newcountHP = $('<td>');
        newpriceHP = $('<td>');
        newrowHP.append(newitemHP);
        newrowHP.append(newcountHP);
        newrowHP.append(newpriceHP);
        newcountHP.id = 'hotpocketcount';
        newitemHP.html("Meat Pocket");
        newcountHP.html(hotpocketcount);
        newpriceHP.html("$" + hotpocketprice);
        $('#orderlist').append(newrowHP);
      }
      else if (hotpocketcount != 0){
        if(firstitem == 'hotpocket'){
          hotpocketcount = hotpocketcount +1;
          $("#orderlist").children('tr').children('td')[1].innerHTML = hotpocketcount;
        }
        else {
          hotpocketcount = hotpocketcount +1;
          newcountHP.html(hotpocketcount);
        }
      }

    }
    total();
});
wetbread.on('click', event, function(event){
    console.log(event.taget);
    if(event.target.innerText == "PURCHASE"){                 //if you clicked the purchse btn
      if(firstitem == true){
        wetbreadcount = wetbreadcount +1;                                          // if its the first item
        var item = $("#orderlist").children('tr').children('td')[0];
        var count = $("#orderlist").children('tr').children('td')[1];
        var price =$("#orderlist").children('tr').children('td')[2];
        item.innerHTML = "Saturated Bread";
        count.innerHTML = wetbreadcount;
        console.log(wetbreadprice);
        price.innerHTML = ('$' + wetbreadprice);
        count.id = 'wetbreadcount';
        firstitem = 'wetbread';
      }
      else if (wetbreadcount == 0){
        newrowWB = $('<tr>');
        newitemWB = $('<td>');
        newcountWB = $('<td>');
        newpriceWB = $('<td>');
        newrowWB.append(newitemWB);
        newrowWB.append(newcountWB);
        newrowWB.append(newpriceWB);
        newcountWB.id = 'wetbreadcount';
        newitemWB.html("Wet Bread");
        newcountWB.html(wetbreadcount);
        newpriceWB.html("$" + wetbreadprice);
        wetbreadcount = wetbreadcount +1;
        $('#orderlist').append(newrowWB);
      }
      else if (wetbreadcount !=0){
        if (firstitem == 'wetbread'){
          wetbreadcount = wetbreadcount +1;
          $("#orderlist").children('tr').children('td')[1].innerHTML = wetbreadcount;
        }
        else {
          wetbreadcount = wetbreadcount +1;
          newcountWB.html(wetbreadcount);
        }
      }
    }
    total();
});

function total(){

  var juicebox = juiceboxcount * juiceboxprice;
  var singlewaffle = singlewafflecount * singlewaffleprice;
  var hotpocket = hotpocketcount * hotpocketprice;
  var wetbread = wetbreadcount * wetbreadprice;
  var subtotal = (juicebox + singlewaffle + hotpocket + wetbread)

  var subtotalfield = $('#subtotal')[0];
  subtotalfield.innerHTML = '$' + subtotal.toFixed(2);

  var taxfield = $('#tax')[0];
  var tax = subtotal * 0.1;
  taxfield.innerHTML = '$' +tax.toFixed(2);

  var total = tax + subtotal;
  var totalfield = $('#total')[0];
  totalfield.innerHTML = '$' + total.toFixed(2);

}


submit.on('click', event, function(event){
  if (juiceboxcount == 0 && singlewafflecount == 0 && hotpocketcount == 0 && wetbreadcount == 0){
    Materialize.toast('You havent requested any snacks', 4000);
  }
  else if (namefield.val() == '' || phonefield.val()=='' || addressfield.val()==''){
    Materialize.toast('You have not entered all the person information', 4000);
  }
  else {

    Materialize.toast('Your order has been paced', 4000);
  }

});


$(".food").sideNav();
$(".home").sideNav();



// console.log(field);









});
