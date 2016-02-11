
//
// USAGE: resultString = ReplaceParams(quoteString, param1, param2, ... paramN);
//
//  Replaceable params in a string are specified by "%<param-num><optional-placeholder>%".  <param-num> should start with 1 and increment by 1.
//  i.e., "Now is the %1time% for all %2good% %3men% to come to the %4aid% of their %5country%."
//
function ReplaceParams() {
    var result = arguments[0];
    for (var iArg = 1; iArg < arguments.length; iArg++) {       // Start at second arg (first arg is the pattern)
        var pattern = new RegExp('%' + iArg + '\\w*%');
        result = result.replace(pattern, arguments[iArg]);
    }
    return result;
}


var listItemsForSale = [];
var listShoppingCart = [];

function buildForSaleList() {
    //for (i = 1; i <= 25; i++) {
    //    image = "images/drawing/thumbs/artwork_" + i + ".jpg"
    //    listItemsForSale.push(image);
    //}
    for (i = 1; i <= 10; i++) {
        image = "images/watercolor/thumbs/artwork_" + i + ".jpg"
        listItemsForSale.push(image);
    }
    for (i = 1; i <= 8; i++) {
        image = "images/oil/thumbs/artwork_" + i + ".jpg"
        listItemsForSale.push(image);
    }
}


function paintForSaleHTML() {
    var imagesHTML = "";
    for (i in listItemsForSale) {
        imagesHTML += "<img src='" + listItemsForSale[i] + "' onclick='addImageToCart(\"" + listItemsForSale[i] + "\")' />"
    }
    $("#divForSale").html(imagesHTML);
}


function paintShoppingCartHTML() {
    var imagesHTML = "";
    for (i in listShoppingCart) {
        imagesHTML += "<img src='" + listShoppingCart[i] + "' onclick='removeImageFromCart(\"" + listShoppingCart[i] + "\")' />"
    }
    $("#divCart").html(imagesHTML);
}


function addImageToCart(imageUrl) {
    // Remove item from ForSale list
    var elemToRemove = -1;
    for (i in listItemsForSale) {
        if (listItemsForSale[i] == imageUrl) {
            elemToRemove = i;
            break;
        }
    }
    if (elemToRemove != -1) {
        listItemsForSale.splice(elemToRemove, 1);
        paintForSaleHTML();
    }

    // Add it to shopping cart
    listShoppingCart.push(imageUrl);
    paintShoppingCartHTML();
}


function removeImageFromCart(imageUrl) {
    // Remove item from shopping cart list
    var elemToRemove = -1;
    for (i in listShoppingCart) {
        if (listShoppingCart[i] == imageUrl) {
            elemToRemove = i;
            break;
        }
    }
    if (elemToRemove != -1) {
        listShoppingCart.splice(elemToRemove, 1);
        paintShoppingCartHTML();
    }

    // Add it back to for-sale list
    listItemsForSale.push(imageUrl);
    paintForSaleHTML();
}


window.onload = function () {
    buildForSaleList();
    paintForSaleHTML();
    paintShoppingCartHTML();
}





















