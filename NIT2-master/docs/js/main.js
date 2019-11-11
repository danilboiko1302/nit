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
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
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
                        t.innerHTML = "";
                        for (var e = 0, n = 0, o = 0; o < c.length; o++) {
                            n = null != c[o].special_price ? c[o].special_price : c[o].price, e += Number(n);
                            for (var r = !1, a = 0; a < u.length; a++) if (c[o].id == u[a].id) {
                                r = !0;
                                break
                            }
                            r || u.push(c[o])
                        }
                        for (var i = 0, o = 0; o < u.length; o++) {
                            for (var l = 0, a = 0; a < c.length; a++) u[o].id == c[a].id && l++, u[o].count = l;
                            i = null != u[o].special_price ? u[o].special_price : u[o].price, t.innerHTML += '<a href="javascript:void(0)" class="closebtn closeCat">&times;</a><div class="row"><div class="col-8 text-left cartProduct">' + u[o].name + '</div><div class="col-2 text-center cartProduct">X' + l + '</div><div class="col-2 text-right cartProduct">' + i + "</div></div>"
                        }
                        t.innerHTML += '<div class="col-12 text-center cartProduct">Total ' + e + ".00 UAH</div><br><br><br>", t.innerHTML += '<div class="send"><p class="form">Your name</p><input type="text" id="name"><p class="form">Your email</p><input type="text" id="email"><p class="form">Your phone number</p><input type="text" id="phone"> <br><button type="submit" class="btn red-button submit"> Submit </button> </div>'
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
                token: "iuf5kCfRpfkGjMna5e19"
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