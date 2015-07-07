function produkts(callback) {

    $.getJSON("/getProducts", function(result) {
        var $html = $('<ul class="cart-list"></ul>');


        result.Products.forEach(function(data) {

            var $elem = '<li class="products-list-item"' +
                'id="' + data._id + '">' +
                '<div>' + data.name + '</div>'
            '</li>';

            $elem = $($elem);

            var $button = $('<div>' + '<button ' + ' id="' + data._id + '" ' + '> Agregar al Carrito </button>').click(function(e) {

                $.getJSON( "/getUserCart", function( data ) {
                var items = [];
                $.each( data, function( key, val ) {
                items.push( "<li id='" + key + "'>" + val + "</li>" );
                });
 
                $( "<ul/>", {
                "class": "my-new-list",
                html: items.join( "" )
                }).appendTo( "body" );
            });


            });

            $elem.append($button);
            $html.append($elem);
        });



        callback($html);

    });

};

var rat = [];


function getUserCart(callback) {

    $.getJSON("/getUserCart", function(result) {
        var $html = $('<ul class="cart-list"></ul>');


        result.Cart.forEach(function(data) {

            var $elem = '<li class="cart-list-item"' +
                'id="' + data._id + '">' +
                '<div>' + data.name + '</div>'
            '</li>';

            $elem = $($elem);


            var $button = $('<div>' + '<button ' + ' id="' + data._id + '" ' + '> Eliminar </button>').click(function(e) {
                console.log(rat);


            });

            $elem.append($button);
            $html.append($elem);
        });

        callback($html);

    });

};


$(document).ready(function() {

    produkts(function(dom) {
        $('.products-module').append(dom);
    });
    getUserCart(function(dom) {
        $('.cart-module').append(dom);
    });

});