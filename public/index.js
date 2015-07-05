var buildProdDom = function (callback){
    $.getJSON("/getproducts", function (result) {
       var html = '<div> '+
          '<ul class="products-list">';

       result.Products.forEach(function (data){
            var elem = '<li class="products-list-item"' +
             'id="'+ data._id +'">' +
             '<div>'+ data.name + '</div>' +
            '</li>';

            html += elem;
       });

       html += '</ul>' +
       '</div>';

        callback(html);
    });
};

$(document).ready(function() {
  buildProdDom(function (dom){
     $('.products-module').append(dom);
  });


});

//Formulatio de Validación

// function validateForm() {
//         var username = document.getElementById(/*"username"*/).value;
//         var password = document.getElementById(/*"password"*/).value;
//         if (username == null || username == "") {
//             alert("Por favor, poné tu Nombre de Usuario.");
//             return false;
//         }
//         if (password == null || password == "") {
//             alert("Porque favor, poné tu contraseña.");
//             return false;
//         }
//         alert("Conectado");
//         onSuccsess(client);
//     }

//     if (password == null || password == "") {
//         alert("Porque favor, poné tu contraseña.");
//         return false;
//     }
//     alert("Conectado");
//     onSuccsess(client);
// }