/*
 * @Descripttion: 实现页面跳转
 * @version: 1.0
 * @Author: Ga1axy_z
 * @Date: 2021-07-27 15:16:02
 * @LastEditors: Ga1axy_z
 * @LastEditTime: 2021-08-07 16:08:30
 */
/*========================= round =========================*/
// const challengRound = localStorage.getItem('challeng_round');
// var isContinue = 0;
// function initPage (){
//     if(challengRound){
//         $(".header").slideToggle();
//     }
// }
// setTimeout(initPage, 1000);
// function changeRound (){
//     if(isContinue){
//         $(".stage0").slideToggle();
//         switch (challengRound) {
//             case "1":   $(".stage1").slideToggle(); break;
//             case "2":   $(".stage2").slideToggle(); break;
//             case "3":   $(".stage3").slideToggle(); break;
//         }
//     }
// }
// $(document).on("click", "#ContinueBtn", function(event){
//     isContinue = 1;
//     changeRound();
// });
// $(document).on("click", "#noContinueBtn", function(event){
//     isContinue = 0;
//     $(".header").slideToggle();
//     localStorage.removeItem('challeng_round');
// });
/*========================= Love0 =========================*/
$(document).on("click", ".love0", function(event){
    $(".stage0").slideToggle();
    $(".stage1").slideToggle();
    $("#BackBtn1").fadeToggle(1600);
    // localStorage.setItem('challeng_round', "1");
});
$(document).on("click", "#BackBtn1", function(event){
    $(".stage0").slideToggle();
    $(".stage1").slideToggle();
    $("#BackBtn1").fadeToggle(100); /* 优化按钮进出动画，否则会有卡顿 */
});
/*========================= Love1 =========================*/
$(document).on("click", ".love1", function(event){
    $(".box1 span").slideToggle(1500);
    $(".love_1").slideToggle(1500);
    $(".love_1").animate({
        "font-size":"5em",
    },2240);
    $(".stage1").delay(5240).slideToggle();
    $(".stage2").delay(5240).slideToggle();
    $("#BackBtn2").delay(5240).fadeToggle(1600);
    // localStorage.setItem('challeng_round', "2");
});
$(document).on("click", "#BackBtn2", function(event){
    $(".box1 span").slideToggle();
    $(".love_1").slideToggle();
    $(".stage1").slideToggle();
    $(".stage2").slideToggle();
    $("#BackBtn2").fadeToggle(100);
    $(".love_1").delay(2000).animate({"font-size":"3.5em"});    /* 将大小重置 */

    word_click = 0;
    $(".word_l").css("color","#4f4f64");
    $(".word_o").css("color","#4f4f64");
    $(".word_v").css("color","#4f4f64");
    $(".word_e").css("color","#4f4f64");
});
/*========================= Love2 =========================*/
var word_click = 0;
$(document).on("click", ".word_l", function(event){
    $(".word_l").css("color","#ff246f");
    word_click = word_click + 12;
    word_click_fun();
});
$(document).on("click", ".word_o", function(event){
    $(".word_o").css("color","#ff246f");
    word_click = word_click + 15;
    word_click_fun();
});
$(document).on("click", ".word_v", function(event){
    $(".word_v").css("color","#ff246f");
    word_click = word_click + 22;
    word_click_fun();
});
$(document).on("click", ".word_e", function(event){
    $(".word_e").css("color","#ff246f");
    word_click = word_click + 5;
    word_click_fun();
});
function word_click_fun () {
    if(word_click == 54){
        $(".wordLine4").css("margin-top","-6%");
        $(".wordLine").slideToggle(1500);
        $(".love2").delay(1500).animate({
            "margin-top":"18%",
            "font-size":"2em",
            "width":"80px",
            "height":"80px",
        },2240);
        $(".stage2").delay(5240).slideToggle();
        $(".stage3").delay(5240).slideToggle();
        $("#BackBtn3").delay(5240).fadeToggle(1600);
        // localStorage.setItem('challeng_round', "3");
    }
}
$(document).on("click", "#BackBtn3", function(event){
    word_click = 0;
    $(".wordLine4").css("margin-top","0");
    $(".word_l").css("color","#4f4f64");
    $(".word_o").css("color","#4f4f64");
    $(".word_v").css("color","#4f4f64");
    $(".word_e").css("color","#4f4f64");
    $(".wordLine").slideToggle();
    $(".stage2").slideToggle();
    $(".stage3").slideToggle();
    $("#BackBtn3").fadeToggle(100);
    $(".love2").delay(2000).animate({
        "margin-top":"10px",
        "font-size":"1.5em",
        "width":"60px",
        "height":"60px",
    });
});
/*========================= Love3 =========================*/
// + - =
var operatorClick1 = 0,operatorClick2 = 0,operatorClick3 = 0;
var Operators = ['+', '-', '×', '÷', '='];
$(document).on("click", ".Operator1", function(event){
    var Operator1 = document.getElementById('Operator1');
    operatorClick1 = (operatorClick1 + 1) % 5;
    Operator1.innerHTML = `${Operators[operatorClick1]}`;
    isOperatorRight();
})
$(document).on("click", ".Operator2", function(event){
    var Operator2 = document.getElementById('Operator2');
    operatorClick2 = (operatorClick2 + 1) % 5;
    Operator2.innerHTML = `${Operators[operatorClick2]}`;
    isOperatorRight();
})
$(document).on("click", ".Operator3", function(event){
    var Operator3 = document.getElementById('Operator3');
    operatorClick3 = (operatorClick3 + 1) % 5;
    Operator3.innerHTML = `${Operators[operatorClick3]}`;
    isOperatorRight();
})
function isOperatorRight (){
    var Operator1 = document.getElementById('Operator1');
    var Operator2 = document.getElementById('Operator2');
    var Operator3 = document.getElementById('Operator3');
    if(Operator1.innerText == "+" && Operator2.innerText == "-" && Operator3.innerText == "="){
        $(".love3").css("color","#ff246f");
        $(".Operator").slideToggle(1000);
        $(".love3").delay(1000).animate({
            "font-size":"5em",
        },2000);
        $(".stage3").delay(5240).slideToggle();
        $(".stage4").delay(5240).slideToggle();
        $("#BackBtn4").delay(5240).fadeToggle(1600);
    }
}
$(document).on("click", "#BackBtn4", function(event){
    operatorClick1 = 0;
    operatorClick2 = 0;
    operatorClick3 = 0;
    var Operator1 = document.getElementById('Operator1');
    Operator1.innerHTML = "+";
    var Operator2 = document.getElementById('Operator2');
    Operator2.innerHTML = "×";
    var Operator3 = document.getElementById('Operator3');
    Operator3.innerHTML = "÷";
    $(".love3").css("color","#b8b8c7");
    $(".love3").css({"font-size":"3.5em",});
    $(".Operator").slideToggle();
    $(".stage3").slideToggle();
    $(".stage4").slideToggle();
    $("#BackBtn4").fadeToggle(100);
});
/*========================= Love4 =========================*/
var cover4Angle = 0;
$(document).on("click", ".cover4", function(event){
    const cover4 = document.getElementById('cover4');
    cover4Angle = cover4Angle - 10;
    cover4.style.transform = `rotateZ(${cover4Angle}deg)`;
    cover4Spin();
});
function cover4Spin (){
    if(cover4Angle == -90){
        $(".love4").delay(300).animate({left:'600px',"font-size":"5em"},2000);
        $(".cover4").delay(300).slideToggle(1800);
        setTimeout(function (){$(".love4").delay(1800).css("color","#ff246f");}, 1660);
        setTimeout(function (){document.getElementById('love4').classList.toggle("animate__swing")}, 2500);
        $(".stage4").delay(5240).slideToggle();
        $(".stage5").delay(5240).slideToggle();
        $("#BackBtn5").delay(5240).fadeToggle(1600);
    }
}
$(document).on("click", "#BackBtn5", function(event){
    cover4Angle = 0;
    $(".love4").animate({left:'0',"font-size":"2.33em"});
    $(".love4").css("color","#ececf3");
    $(".cover4").css("transform","rotateZ(0deg)");
    document.getElementById('love4').classList.toggle("animate__swing");
    $(".cover4").slideToggle();
    $(".stage4").slideToggle();
    $(".stage5").slideToggle();
    $("#BackBtn5").fadeToggle(100);
});
/*========================= Love5 =========================*/
var love5Click1 = 5,love5Click2 = 2,love5Click3 = 4,love5Click4 = 0;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
$(document).on("mousedown", ".love5_1", function(event){
    var love5_1 = document.getElementById('love5_1');
    var love5_2 = document.getElementById('love5_2');
    love5_1.classList.toggle("love5_click");
    love5_2.classList.toggle("love5_click");
    love5Click2 = (love5Click2 + 1) % 26;
    love5_2.innerHTML = `${letters[love5Click2]}`;
    isOrderRight();
});
$(document).on("mouseup", ".love5_1", function(event){
    document.getElementById('love5_1').classList.toggle("love5_click");
    document.getElementById('love5_2').classList.toggle("love5_click");
});
$(document).on("mousedown", ".love5_2", function(event){
    var love5_1 = document.getElementById('love5_1');
    var love5_2 = document.getElementById('love5_2');
    var love5_3 = document.getElementById('love5_3');
    love5_1.classList.toggle("love5_click");
    love5_2.classList.toggle("love5_click");
    love5_3.classList.toggle("love5_click");
    love5Click1 = (love5Click1 + 1) % 26;
    love5Click3 = (love5Click3 + 1) % 26;
    love5_1.innerHTML = `${letters[love5Click1]}`;
    love5_3.innerHTML = `${letters[love5Click3]}`;
    isOrderRight();
});
$(document).on("mouseup", ".love5_2", function(event){
    document.getElementById('love5_1').classList.toggle("love5_click");
    document.getElementById('love5_2').classList.toggle("love5_click");
    document.getElementById('love5_3').classList.toggle("love5_click");
});
$(document).on("mousedown", ".love5_3", function(event){
    var love5_2 = document.getElementById('love5_2');
    var love5_3 = document.getElementById('love5_3');
    var love5_4 = document.getElementById('love5_4');
    love5_2.classList.toggle("love5_click");
    love5_3.classList.toggle("love5_click");
    love5_4.classList.toggle("love5_click");
    love5Click2 = (love5Click2 + 1) % 26;
    love5Click4 = (love5Click4 + 1) % 26;
    love5_2.innerHTML = `${letters[love5Click2]}`;
    love5_4.innerHTML = `${letters[love5Click4]}`;
    isOrderRight();
});
$(document).on("mouseup", ".love5_3", function(event){
    document.getElementById('love5_2').classList.toggle("love5_click");
    document.getElementById('love5_3').classList.toggle("love5_click");
    document.getElementById('love5_4').classList.toggle("love5_click");
});
$(document).on("mousedown", ".love5_4", function(event){
    var love5_3 = document.getElementById('love5_3');
    var love5_4 = document.getElementById('love5_4');
    love5_3.classList.toggle("love5_click");
    love5_4.classList.toggle("love5_click");
    love5Click3 = (love5Click3 + 1) % 26;
    love5_3.innerHTML = `${letters[love5Click3]}`;
    isOrderRight();
});
$(document).on("mouseup", ".love5_4", function(event){
    document.getElementById('love5_3').classList.toggle("love5_click");
    document.getElementById('love5_4').classList.toggle("love5_click");
});
function isOrderRight (){
    var love5_1 = document.getElementById('love5_1');
    var love5_2 = document.getElementById('love5_2');
    var love5_3 = document.getElementById('love5_3');
    var love5_4 = document.getElementById('love5_4');
    if(love5_1.innerText == "L" && love5_2.innerText == "O" && love5_3.innerText == "V" && love5_4.innerText == "E"){
        document.getElementById('content5').classList.toggle("animate__flash");
        setTimeout(function (){$(".love5_1").css("color","#ff246f");}, 2000);
        setTimeout(function (){$(".love5_2").css("color","#ff246f");}, 2500);
        setTimeout(function (){$(".love5_3").css("color","#ff246f");}, 3000);
        setTimeout(function (){$(".love5_4").css("color","#ff246f");}, 3500);
        $(".stage5").delay(6240).slideToggle();
        $(".stage6").delay(6240).slideToggle();
        $("#BackBtn6").delay(6240).fadeToggle(1600);
    }
}
$(document).on("click", "#BackBtn6", function(event){
    love5Click1 = 5;
    love5Click2 = 2;
    love5Click3 = 4;
    love5Click4 = 0;
    var love5_1 = document.getElementById('love5_1');
    var love5_2 = document.getElementById('love5_2');
    var love5_3 = document.getElementById('love5_3');
    var love5_4 = document.getElementById('love5_4');
    love5_1.innerText = "E";
    love5_2.innerText = "V";
    love5_3.innerText = "O";
    love5_4.innerText = "L";
    document.getElementById('content5').classList.toggle("animate__flash");
    $(".love5").css("color","#b8b8c7");
    $(".stage5").slideToggle();
    $(".stage6").slideToggle();
    $("#BackBtn6").fadeToggle(100);
});
/*========================= Love6 =========================*/
var words = ['l0ve', 'evol', 'evol', 'lovr', 'voel', 'iove',
             'evo1', 'lveo', 'lvoe', '1ove', 'lone', 'ovel',
             'veol', '|ove', 'loev', '1evo', 'ieov', 'evoi',
             'ioev', 'evo|', 'oevl', '1voe', 'ove1', 'leov'];
var wordOrderPass;
function round6 (){
    var wordOrder = Math.floor(Math.random()*(23+1));
    wordOrderPass = wordOrder;
    var loveOrder = `#spinword${wordOrder}`;
    var loveOrder_class = `.spinword${wordOrder}`;
    for(i = 1;i <= 24;i++){
        var each = `#spinword${i}`;
        $(each).html(`${words[(wordOrder+=1) % 24]}`); 
    }
    // document.getElementById('spinword17').innerText = "love";
    $(loveOrder).html("love");
    $(loveOrder_class).toggleClass("love love6");
}
round6();
var rotateVal = 0;
function spinwords () {
    rotateVal += 22;
    $('#spinword1, #spinword3, #spinword5, #spinword8, #spinword10, #spinword12, #spinword13, #spinword15, #spinword17, #spinword20, #spinword22, #spinword24')
    .css('transform', `rotate(${rotateVal}deg)`);
    $('#spinword2, #spinword4, #spinword6, #spinword7, #spinword9, #spinword11, #spinword14, #spinword16, #spinword18, #spinword19, #spinword21, #spinword23')
    .css('transform', `rotate(-${rotateVal}deg)`); 
    for(i = 1;i <= 24;i++){
        var each = `#spinword${i}`;
        $(each).css('transition', '0.1s linear'); 
    }
}
var needReset6;
InterVal = setInterval(spinwords, 100);
$(document).on("click", ".spinword", function(event){
    if(!$(this).hasClass("love6")){
        var loveOrder_class = `.spinword${wordOrderPass}`;
        $(loveOrder_class).toggleClass("love love6");
        round6();
        $(this).css("backgroundColor","#FFCCCC");
        $(this).css("color","#ffffff");
        needReset6 = $(this);
        setTimeout(function (){
            needReset6.css('backgroundColor','#ececf3');
            needReset6.css('color','#4f4f64');
        },350);
    }
    else{
        needReset6 = $(".spinword");
        needReset6.css("backgroundColor","#FFCCCC");
        needReset6.css("color","#ffffff");
        $(this).css("backgroundColor","#ceebd4");
        $(this).css("color","#ffffff");
        setTimeout(function (){
            needReset6.css('backgroundColor','#ececf3');
            needReset6.css('color','#4f4f64');
        },2000);
    }
});
$(document).on("click", ".love6", function(event){
    clearInterval(InterVal);
    $(".love6").css("pointer-events","none");   //pointer-events 属性定义元素是否对指针事件做出反应，比如 :hover 和 click
    $(".spinword").delay(2000).slideToggle(500);
    setTimeout(function (){
        rotateVal = -22;
        spinwords();
    }, 1500);
    $(".love6").delay(400).slideToggle();
    $(".box6").delay(2333).animate({
        "height":"50%",
        "font-size":"2.33em"
    },1000);
    $(".love6").animate({
        height:"150px",
        width:"150px"
    },1000);
    setTimeout(function (){
        $(".love6").css("color","#ff246f");
        $(".love6").css("borderWidth","0");
        $(".love6").css("transition", "0.1s cubic-bezier(.13,.26,.25,1)");
    },2800);
    setTimeout(function (){$(".love6").css("pointer-events","auto");},6240);
    $(".stage6").delay(6240).slideToggle();
    $(".stage7").delay(6240).slideToggle();
    $("#BackBtn7").delay(6240).fadeToggle(1600);
    $(".love6").delay(2333).animate({height:"66px",width:"66px"},1);
});
$(document).on("click", "#BackBtn7", function(event){
    InterVal = setInterval(spinwords, 100);
    $(".spinword").slideToggle();
    $(".love6").slideToggle(1);
    $(".box6").css({"height":"66%","font-size":"1em"});
    $(".love6").css({"color":"#4f4f64","borderWidth":"2px"});
    $(".stage6").slideToggle();
    $(".stage7").slideToggle();
    $("#BackBtn7").fadeToggle(100);
    var loveOrder_class = `.spinword${wordOrderPass}`;
    $(loveOrder_class).toggleClass("love love6");
    round6();
});
/*========================= Love7 =========================*/
var circle7_1_angle = 0, circle7_2_angle = 0, circle7_3_angle = 0, circle7_4_angle = 0;
var circle7_1_word = "E", circle7_2_word = "E", circle7_3_word = "V", circle7_4_word = "V";
var circle7Words = ['L', 'E', 'V', 'O']; /* EEVV 244333 */
$(document).on("click", ".circle7_1", function(event){
    $(".circle7_1").css("transform",`rotate(${circle7_1_angle += 90}deg)`);
    $(".circle7_2").css("transform",`rotate(${circle7_2_angle -= 90}deg)`);
    isCircle7Correct();
});
$(document).on("click", ".circle7_2", function(event){
    $(".circle7_1").css("transform",`rotate(${circle7_1_angle -= 90}deg)`);
    $(".circle7_2").css("transform",`rotate(${circle7_2_angle += 90}deg)`);
    $(".circle7_3").css("transform",`rotate(${circle7_3_angle -= 90}deg)`);
    isCircle7Correct();
});
$(document).on("click", ".circle7_3", function(event){
    $(".circle7_2").css("transform",`rotate(${circle7_2_angle -= 90}deg)`);
    $(".circle7_3").css("transform",`rotate(${circle7_3_angle += 90}deg)`);
    $(".circle7_4").css("transform",`rotate(${circle7_4_angle -= 90}deg)`);
    isCircle7Correct();
});
$(document).on("click", ".circle7_4", function(event){
    $(".circle7_4").css("transform",`rotate(${circle7_4_angle += 90}deg)`);
    $(".circle7_3").css("transform",`rotate(${circle7_3_angle -= 90}deg)`);
    isCircle7Correct();
});
function isCircle7Correct (){
    circle7_1_word = `${circle7Words[((circle7_1_angle / 90 + 1) % 4 + 4) % 4]}`;
    circle7_2_word = `${circle7Words[((circle7_2_angle / 90 + 1) % 4 + 4) % 4]}`;
    circle7_3_word = `${circle7Words[((circle7_3_angle / 90 + 2) % 4 + 4) % 4]}`;
    circle7_4_word = `${circle7Words[((circle7_4_angle / 90 + 2) % 4 + 4) % 4]}`;
    if(circle7_1_word == "L"){$(".love7_l").css("color","#ff246f");}else{$(".love7_l").css("color","#b8b8c7");};
    if(circle7_2_word == "O"){$(".love7_o").css("color","#ff246f");}else{$(".love7_o").css("color","#b8b8c7");};
    if(circle7_3_word == "V"){$(".love7_v").css("color","#ff246f");}else{$(".love7_v").css("color","#b8b8c7");};
    if(circle7_4_word == "E"){$(".love7_e").css("color","#ff246f");}else{$(".love7_e").css("color","#b8b8c7");};
    if(circle7_1_word == "L" && circle7_2_word == "O" && circle7_3_word == "V" && circle7_4_word == "E"){
        $(".circle7").css("pointer-events","none");
        $(".content7").slideToggle(2000);
        setTimeout(function (){
            $(".love7word").toggleClass("love7word_change");
            $(".love7").css("padding-bottom", "20px");
            $(".love7, .love7word").css("transition", "1s ease");
        },1000);
        $(".stage7").delay(5240).slideToggle();
        $(".stage8").delay(5240).slideToggle();
        $("#BackBtn8").delay(5240).fadeToggle(1600);
        setTimeout(function (){
            $(".circle7").css("pointer-events","auto");
            $(".love7").css("padding-bottom", "0px");
            circle7_1_angle = 0;circle7_2_angle = 0;circle7_3_angle = 0;circle7_4_angle = 0;
            $(".circle7_1").css("transform",`rotate(${circle7_1_angle}deg)`);
            $(".circle7_2").css("transform",`rotate(${circle7_2_angle}deg)`);
            $(".circle7_3").css("transform",`rotate(${circle7_3_angle}deg)`);
            $(".circle7_4").css("transform",`rotate(${circle7_4_angle}deg)`);
            isCircle7Correct();
            card8Init();
        },5240);
    }
}
$(document).on("click", "#BackBtn8", function(event){
    $(".content7").slideToggle();
    $(".love7word").toggleClass("love7word_change");
    $(".stage7").slideToggle();
    $(".stage8").slideToggle();
    $("#BackBtn8").fadeToggle(100);
});
/*========================= Love8 =========================*/
var card8Click = 0;
var card8Pick = "";
var letters8 = ['Z', 'C', 'B', 'K', 'M', 'P', 'J', 'G', 'V', 'D', 'A', 'Q', 'E', 'T', 'U', 'L', 'X', 'N', 'Y', 'H', 'F', 'R', 'O', 'I'];
$(document).on("click", ".card8", function(event){
    $(this).css({"transform":"rotateY(0deg)", "color":"#4f4f64", "pointer-events":"none"});
    card8Pick += $(this).text();
    card8Click += 1;
    card8correct();
});
function card8correct (){
    if(card8Click >= 4){
        for(i = 1;i <= 24;i++){
            var each = `.card8_${i}`;
            $(each).css({"pointer-events":"none"});
        }
        card8Click = 0;
        setTimeout(function (){
            if(card8Pick == "LOVE"){
                for(i = 1;i <= 24;i++){
                    var each = `.card8_${i}`;
                    if($(each).text() == "L" || $(each).text() == "O" || $(each).text() == "V" || $(each).text() == "E"){
                        $(each).css({"color":"#ff246f"});
                    }
                }
                $(".stage8").delay(5240).slideToggle();
                $(".stage9").delay(5240).slideToggle();
                $("#BackBtn9").delay(5240).fadeToggle(1600);
                setTimeout(function (){
                    card9Init();
                },5240);
            }else {
                card8Init();
            }
            card8Pick = "";
        }, 2000);
    }
}
function card8Init (){
    var cardOrder = Math.floor(Math.random()*(23+1));
    for(i = 1;i <= 24;i++){
        var each = `.card8_${i}`;
        $(each).html(`${letters8[(cardOrder+=1) % 24]}`); 
        $(each).css({"transform":"rotateY(0deg)", "color":"#4f4f64", "pointer-events":"none"});
    }
    setTimeout(function (){
        for(i = 1;i <= 24;i++){
            var each = `.card8_${i}`;
            $(each).css({"transform":"rotateY(180deg)", "color":"#ececf3", "pointer-events":"auto"});
        }
    }, 4000);
}
$(document).on("click", "#BackBtn9", function(event){
    card8Init();
    $(".stage8").slideToggle();
    $(".stage9").slideToggle();
    $("#BackBtn9").fadeToggle(100);
});
/*========================= Love9 =========================*/
var words9_1 = ['L','E','O','V','U'], words9_2 = ['O','U','E','V','L'];
var line1_Choose = "", line2_Choose = "";
var corrcet9Num = 0;
function card9Init (){
    line1_Choose = "";
    line2_Choose = "";
    corrcet9Num = 0;
    var cardOrder = Math.floor(Math.random()*(3+1));
    for(i = 1;i <= 5;i++){
        var each = `.card9_${i}`;
        $(each).html(`${words9_1[(cardOrder+=1) % 5]}`); 
        $(each).css({"transform":"rotateY(0deg)", "color":"#b8b8c7", "pointer-events":"none"});
    }
    var cardOrder2 = Math.floor(Math.random()*(3+1));
    for(i = 6;i <= 10;i++){
        var each = `.card9_${i}`;
        $(each).html(`${words9_2[(cardOrder2+=1) % 5]}`); 
        $(each).css({"transform":"rotateY(0deg)", "color":"#b8b8c7", "pointer-events":"none"});
    }
    setTimeout(function (){
        for(i = 1;i <= 10;i++){
            var each = `.card9_${i}`;
            $(each).css({"transform":"rotateY(180deg)", "color":"#25252d", "pointer-events":"auto"});
            $(each).removeClass("animate__shakeX");
            $(each).removeClass("animate__pulse");
        }
    }, 2000);
}
$(document).on("click", ".card9-1", function(event){
    $(".card9-1").css({"pointer-events":"none"});
    $(".card9-2").css({"pointer-events":"auto"});
    $(this).css({"transform":"rotateY(0deg)", "color":"#b8b8c7"});
    line1_Choose = $(this).text();
});
$(document).on("click", ".card9-2", function(event){
    $(".card9-2").css({"pointer-events":"none"});
    $(".card9-1").css({"pointer-events":"auto"});
    $(this).css({"transform":"rotateY(0deg)", "color":"#b8b8c7"});
    line2_Choose = $(this).text();
    iscard9correct();
});
function iscard9correct (){
    if(line1_Choose == line2_Choose){
        corrcet9Num += 1;
    }else {
        for(i = 1;i <= 10;i++){
            var each = `.card9_${i}`;
            $(each).css({"pointer-events":"none"});
            $(each).addClass("animate__shakeX");
        }
        setTimeout(function (){
            card9Init();
        }, 2000);
    }
    if(corrcet9Num == 5){
        for(i = 1;i <= 10;i++){
            var each = `.card9_${i}`;
            $(each).addClass("animate__pulse");
        }
        $(".stage9").delay(5000).slideToggle();
        $(".stage10").delay(5000).slideToggle();
        $("#BackBtn10").delay(5000).fadeToggle(1600);
        setTimeout(function (){
            theEndInit();
            playSound();
        }, 5000);
    }
}
$(document).on("click", "#BackBtn10", function(event){
    card9Init();
    $(".stage9").slideToggle();
    $(".stage10").slideToggle();
    $("#BackBtn10").fadeToggle(100);
    $(".love10_l, .love10_o, .love10_v, .love10_e").css("color","#4f4f64");
});
function playSound() {
    success = document.getElementById('audio');
    success.volume = 0.3;
    success.play();
}
function theEndInit (){
    setTimeout(function (){$(".love10_l").css("color","#ff246f");}, 3000);
    setTimeout(function (){$(".love10_o").css("color","#ff246f");}, 3800);
    setTimeout(function (){$(".love10_v").css("color","#ff246f");}, 4300);
    setTimeout(function (){$(".love10_e").css("color","#ff246f");}, 4800);
}
/*========================= for ✨ =========================*/
