$("#menu-dropdown").click(function(){
    if($("#responsive-menu").css("display") === "flex"){
        $("#responsive-menu").css("display", "none")
    }else{
        $("#responsive-menu").css("display", "flex")
    }
})
window.onload = setCartCount

function setCartCount(){
    var productList = window.localStorage.getItem('product-list');
        productList = productList === null || productList === '' ? [] : productList;
        productList = productList.length > 0 ? JSON.parse(productList) : [];

    var totalCount = 0;
        for(var i=0; i<productList.length; i++) {
            totalCount = totalCount + productList[i].count;
        }
        $('#cart-count').html(totalCount);
}