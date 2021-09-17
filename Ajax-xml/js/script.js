$("#HeaderTitr").typer({
    strings: [
        "با مستر صراف از قیمت لحظه ای ارز مطلع شو",
        "تغییر قیمت ها در سریع ترین زمان ممکن",
        "هر ارزی که میخواهید در اینجاست"
    ]
});

//  Responsive Navbar Menu
window.onload = $("#secNav").slideUp()
window.onresize = $("#secNav").slideUp()

$(document).ready(function (){

    $("#navButton").click(function (){
        $("#secNav").slideToggle(1000)
    })

})


var moneyTag;
var moneyItem;
var tolItem;
$.ajax({

    url: "api/Arz-Api.xml",
    type:"GET",
    success:function (data){
        moneyTag = data
        moneyItem = $(moneyTag).find("item")

        creatCard()
        // filterCard()
    },
    timeout:3000,
    error:function (){
        console.log("Error Ajax Request")
    }
})



// Creat Card
function creatCard(){

    tolItem = $(moneyItem).length


    for (let i = 0 ; i < tolItem ; i++){
$("#boxCard").append(`    <div class="h-32 bg-white z-0 relative shadow-md rounded-xl mx-1 filterbucks" data-to-filter>
                <h2 class="float-right p-1.5 pt-3.5 text-gray-700  text-sm font-bold nameArz" data-to-filter>444</h2>
                <h2 class="float-left p-1.5 pt-3.5 text-xs text-gray-700"><span class="text-gray-700 text-sm font-bold price" ></span>ریال</h2>
                <span class="block w-11/12 top-16 relative h-0.5 bg-yellow-400 mx-auto middleLine" ></span>
                <h2 class="absolute  bottom-0 p-1.5 pb-3.5 text-gray-700">  تغییرات:
                    <span class=" text-2xl relative top-1 Alamat" ></span></h2>
                <h2 class="absolute bottom-0 p-1.5 pb-3.5 left-0 change" > 13000</h2>
            </div>

`)

        $(".nameArz").last().text($(moneyItem).eq(i).find("name").text().trim())
        $(".price").last().text($(moneyItem).eq(i).find("price").text().trim())
        $(".Alamat").last().text($(moneyItem).eq(i).find("change").text().trim())
        $(".Alamat").last().attr("data-Alamat",$(moneyItem).eq(i).find("change").text().trim())
        $(".change").last().text($(moneyItem).eq(i).find("percent").text().trim())
        $(".change").last().attr("data-Alamat",$(moneyItem).eq(i).find("change").text().trim())


    }


    $('span[data-Alamat="-"]').addClass("text-red-500")
    $('span[data-Alamat="+"]').addClass("text-green-500")
    $('span[data-Alamat="0"]').addClass("text-gray-500")

    $('h2[data-Alamat="-"]').addClass("text-red-500")
    $('h2[data-Alamat="+"]').addClass("text-green-500")
    $('h2[data-Alamat="0"]').addClass("text-gray-500")

    $('h2[data-Alamat="-"]').parent().addClass("-")
    $('h2[data-Alamat="+"]').parent().addClass("plus")
    $('h2[data-Alamat="0"]').parent().addClass("0")


}





//  Filter Function
$(function($) {

    $.autofilter({

        // CSS class when shown
        showClass:'show',

        // use HTML as filter string
        htmlAsFilter:false,

        // filter string as substring
        subString:false,

        // is case sensitive?
        caseSensitive:false,

        // enable animation
        animation:true,

        // duration in ms
        duration: 500
    });

});

// Filter Card
function filterCard(){



    $("input[name='changeAl']").click(function () {


        $(moneyItem).each(function (indexChange,elementChange){


            $(moneyTag).filter(function (){
                if ($("input[name='changeAl']").val() == "+") {
                    return $(moneyTag).find("change").text().trim() == "+"
                }
                if ($("input[name='changeAl']").val() == "0") {
                    return $(moneyTag).find("change").text().trim() == "0"
                }
                if ($("input[name='changeAl']").val() == "-") {
                    return $(moneyTag).find("change").text().trim() == "-"
                }
            })
        })



    })

    creatCard()
}



//  Jqueri UI
$( function() {
    $( "#accordion" ).accordion();
} );

//  Nothing...
$(".click").click(function (){
$("#sellPrice").addClass("rounded-b-lg")
})

$("#sellPrice").click(function (){
    $("#sellPrice").removeClass("rounded-b-lg")
})



//  Image Top Of Header 
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 0){
        $(".banner").addClass('scrolled');
    }else{
        $(".banner").removeClass('scrolled');
    }
})



jQuery(document).ready(function(){
    $(".filter1").filterbucks();
});


$(document).ready(function(){
    $(document).infiniteJscroll({
        offset:0,
        topOfPage:function(){
            console.log('Scrolled to Page Top');

        },
        bottomOfPage:function(){
            console.log('Scrolled to Page Bottom');
            creatCard();
        },
        pageInit:function(){
            console.log('Initialize page');

            creatCard();
        }
    });
});

