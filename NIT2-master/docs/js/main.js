var amount = 0;
var sel = document.getElementById('cartCount');
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', check)
} else {
    check()
}

function check() {
    var add = document.getElementsByClassName('button')
    for (var i = 0; i < add.length; i++) {
        var btn = add[i];
        btn.onclick = function(event){
            var parentElement = event.target.parentElement.parentElement;
            var name = parentElement.getElementsByClassName('name')[0].innerText;
            var price;
            try {
                price = parentElement.getElementsByClassName('new__price')[0].innerText;
            }catch (e) {
                price = parentElement.getElementsByClassName('price')[0].innerText;
            }
            var image = parentElement.getElementsByClassName('ddd')[0].src;
            var remove = document.getElementsByClassName('btn-danger')
            for (var i = 0; i < remove.length; i++) {
                var button = remove[i];
                button.addEventListener('click', removeItem);
            }
            var amountOf = document.getElementsByClassName('cart-quantity-input')
            for (var i = 0; i < amountOf.length; i++) {
                var input = amountOf[i]
                input.addEventListener('change', amountChange)
            }
            addItem(name, price, image);
            updateCartTotal();
        }
    }
}
function removeItem(event) {
    console.log(123123)
    amount--;
    sel.innerHTML=amount;
    event.target.parentElement.parentElement.remove()
    updateCartTotal()
}
function amountChange(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        removeItem(event);
    }
    updateCartTotal()
}
function updateCartTotal() {
    var remove = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < remove.length; i++) {
        var button = remove[i];
        button.addEventListener('click', removeItem);
    }
    var amountOf = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < amountOf.length; i++) {
        var input = amountOf[i]
        input.addEventListener('change', amountChange)
    }
    var item = document.getElementsByClassName('cart-items')[0];
    var rows = item.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var priceE = row.getElementsByClassName('cart-price')[0];
        var price = parseFloat(priceE.innerText.replace('$', ''));
        var number = row.getElementsByClassName('cart-quantity-input')[0].value;
        total = total + (price * number)
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = total+' грн';
    var test = document.getElementsByClassName('cart-quantity-input');
    amount = 0;
    for (var g = 0; g < test.length; g++) {
        amount +=Number.parseInt( test[g].value);
    }
    sel.innerHTML=amount;
}
function addItem(title, price, imageSrc) {
    var row = document.createElement('div')
    row.classList.add('cart-row')
    var items = document.getElementsByClassName('cart-items')[0]
    var itemNames = items.getElementsByClassName('cart-item-title')
    for (var i = 0; i < itemNames.length; i++) {
        if (itemNames[i].innerText === title) {
            alert('Sorry, this item is already in cart');
            return;
        }
    }
    row.innerHTML = `<div class="cart-item cart-column">
                                 <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                                  <span class="cart-item-title">${title}</span>
                         </div>
                         <span class="cart-price cart-column">${price}</span>
                         <div class="cart-quantity cart-column">
                                <input class="cart-quantity-input" type="number" value="1">
                                <button class="btn btn-danger" type="button">REMOVE</button>
                                  </div>`;
    items.append(row);
   row.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItem);
    row.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', amountChange);
}
function check() {

}
!function (t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {i: o, l: !1, exports: {}};
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: o})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag,
            {value: "Module"}),
            Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) n.d(o, r, function (e) {
            return t[e]
        }.bind(null, r));
        return o
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e) {
    var n = [], o = 1;

    function r() {
        var t = document.getElementById("products");
        t.innerHTML = " ";
        for (var e = 0; e < n.length; e++) {
            var o = "";
            null != n[e].special_price && (o = "Special price: " + n[e].special_price), t.innerHTML += '<div class="col-md-4 container-product"><div class="product"><button style="border: none" class="btn" data-toggle="modal" data-target="#container-products' + n[e].id + '"><img src="' + n[e].image_url + '" class="img-fluid" style="max-height: 200px"></button><div class="modal" id="container-products' + n[e].id + '" style="background-color: rgba(0, 0, 0, 0.3)"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">' + n[e].name + '</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body">' + n[e].description + '<img src="' + n[e].image_url + '" class="img-fluid" style="max-height: 250px"></div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div></div></div></div></div><div class="text-product"><p>' + n[e].name + "</p><br>" + n[e].price + " UAH<br>" + o + '</div><div class="button-group"><button class="btn red-button addToCart" id = ' + n[e].id + ' style="width: 90%">Buy</button></div></div>'
        }
    }

    jQuery.ajax({
        url: "https://nit.tron.net.ua/api/product/list",
        method: "get",
        dataType: "json",
        success: function (t) {

            var e = 0;
            for (e = 0; e < t.length; e++) n.push(t[e]);
            r()
        },
        error: function (t) {
            alert("An error occured: " + t.status + " " + t.statusText)
        }
    });
    var a = [];

    function i() {
        document.getElementById("simpleModal").style.display = 'none';
    }

    jQuery.ajax({
        url: "https://nit.tron.net.ua/api/category/list",
        method: "get",
        dataType: "json",
        success: function (t) {
            a = [];
            for (var e = 0; e < t.length; e++) a.push(Object.create(t[e]));
            !function () {
                var t = document.getElementById("categoriesList");
                t.innerHTML += '<option value="0">  All </option>';
                for (var e = 0; e < a.length; e++) t.innerHTML += '<option value="' + a[e].id + '">' + a[e].name + "</option>"
            }()
        },
        error: function (t) {
            alert("An error occured: " + t.status + " " + t.statusText)
        }
    }), $(document).on("click", ".addToCart", function () {

        !function (t) {

            o = document.getElementById("categoriesList").value, jQuery.ajax({

                url: "https://nit.tron.net.ua/api/product/list/category/" + o,
                method: "get",
                dataType: "json",
                success: function (e) {

                    for (var n = 0; n < e.length; n++) if (e[n].id == t) {
                        c.push(e[n]);
                        break
                    }
                    !function () {

                        document.getElementById("cartCount").innerHTML = c.length;
                        var t = document.getElementById("cartPopup");
                      //  t.innerHTML = "";
                        for (var e = 0, n = 0, o = 0; o < c.length; o++) {
                            n = null != c[o].special_price ? c[o].special_price : c[o].price, e += Number(n);
                            for (var r = !1, a = 0; a < u.length; a++) if (c[o].id === u[a].id) {
                                r = !0;
                                break
                            }
                            r || u.push(c[o])

                        }
                        for (var i = 0, o = 0; o < u.length; o++) {
                            for (var l = 0, a = 0; a < c.length; a++) u[o].id === c[a].id && l++, u[o].count = l;
                            i = null != u[o].special_price ? u[o].special_price : u[o].price,
                           //     console.log(u[o])
                           addItem(u[o].name,i,u[o].image_url);

                        }
                            t.innerHTML += '<div class="send"><p class="form">Your name</p>' +
                            '<input type="text" id="name"><p class="form">Your email</p><input type="text" id="email">' +
                            '<p class="form">Your phone number</p><input type="text" id="phone"> <br><button type="submit" ' +
                                'class="btn red-button submit"> Submit </button> </div>'
                        check();
                    }()
                },
                error: function (t) {
                    alert("An error occured: " + t.status + " " + t.statusText)
                }
            })

        }($(this).attr("id"))

    }), $(document).on("click", ".openCart", function () {
        document.getElementById("simpleModal").style.display = 'block';
    }), $(document).on("click", ".closeCat", function () {
        i()
    }), $(document).on("change", ".changeCat", function () {
        o = document.getElementById("categoriesList").value, jQuery.ajax({
            url: "https://nit.tron.net.ua/api/product/list/category/" + o,
            method: "get",
            dataType: "json",
            success: function (t) {
                n = [];
                for (var e = 0; e < t.length; e++) n.push(t[e]);
                r()
            },
            error: function (t) {
                alert("An error occured: " + t.status + " " + t.statusText)
            }
        })
    }), $(document).on("click", ".submit", function () {
        !function () {
            var t = document.getElementById("name").value, e = document.getElementById("phone").value,
                n = document.getElementById("email").value, o = {};
            for (var r in o = {
                name: t,
                phone: e,
                email: n,
                token: "aaHcxyieBlPb8SQf9oBk"
            }, Object.keys(u)) o["products[" + u[r].id + "]"] = u[r].count;
            $.ajax({
                url: "https://nit.tron.net.ua/api/order/add",
                method: "post",
                data: o,
                dataType: "json",
                success: function (t) {
                    console.log(t), alert("Your order is accepted"), $("#name").val(""), $("#phone").val(""), $("#email").val(""), c = [];
                    var e = document.getElementById("cartPopup");
                    e.innerHTML = "Your cart is empty"
                }
            })
        }()
    }), window.onclick = function (t) {
       // t.clientX > 500 && i()
    };
    var c = [];
    var u = []
}]);
window.addEventListener('click', function (e) {

    var modal = document.getElementById('simpleModal');
    if(e.target===modal){
        modal.style.display = 'none';
    }
});