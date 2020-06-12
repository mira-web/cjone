/* custom.js */

$(document).ready(function(){
	
	$(window).resize(function(){  
		var wt = $(window).width();
        
        if(wt<=767){
            $(".header_wrap").css("height","54px");
        }else{
            $(".header_wrap").css("height","120px");
        }
	});
    
    
    
     /*고객센터*/
    $(".customer a").click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass("on");
        $(this).children().toggleClass("on");
    });
    
     /*주메뉴*/
    $(".gnb > ul > li > a").bind("mouseover focus",function(){
        if($(".search").is(":visible")){
            $(".search").removeClass("on");
            $(".search a").removeClass("on");
            $(".search_box").removeClass("on");
            $(".formWrap").removeClass("on");
        }
        $(".header_wrap").stop().animate({"height":"430px"},100,function(){
            $(".gnb > ul > li > ul").css("display","block");
        });
       
    });
    $(".gnb").bind("mouseleave blur",function(){
        $(".header_wrap").stop().animate({"height":"120px"},100,function(){
            $(".gnb > ul > li > ul").css("display","none");
        });
    });
    
    
    /*검색*/
    $(".search").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on");
        $(".search a").toggleClass("on");
        $(".search_box").toggleClass("on");
        $(".formWrap").toggleClass("on");
    });
    
     /*애니메이션 appear 반복 이미지*/
    var appear = "";
    for(var k=0; k<57; k++){
        if(k<10){
            appear += "<img src='images/appear/appear_0000"+k+".png' />";
        }else{
            appear += "<img src='images/appear/appear_000"+k+".png' />";
        }
    }
    $(".animation .appear").html(appear);
    
    /*애니메이션 loop 반복 이미지*/
    var loop = "";
    for(var k=0; k<82; k++){
        if(k<10){
            loop += "<img src='images/loop/loop_0000"+k+".png' />";
        }else{
            loop += "<img src='images/loop/loop_000"+k+".png' />";
        }
    }
    $(".animation .loop").html(loop);
    
    /*애니메이션 효과*/
    for(var k=0; k<57; k++){
        $(".animation > .appear > img").eq(k).css({"animation":"ani2 2.85s linear "+(k*0.05)+"s 1 normal"});
    }
    
    for(var k=0; k<82; k++){
        $(".animation > .loop > img").eq(k).css({"animation":"ani2 4.1s linear "+(k*0.05)+"s infinite normal"});
    }
    
    
    
     /*모바일메뉴 - 열고 닫기*/
    $(".viewNavi").click(function(e){
        e.preventDefault();
        
    if($(".search").is(":visible")){
        $(".search").removeClass("on");
        $(".search a").removeClass("on");
        $(".search_box").removeClass("on");
        $(".formWrap").removeClass("on");
    }
        
        $(".navi").addClass("on");
        $(".bg_mobile").addClass("on");
        $(".close").toggleClass("on");
    });
    
    
    $(".close").click(function(e){
        e.preventDefault();
        $(this).addClass("on");
        $(".navi").removeClass("on");
        $(".bg_mobile").removeClass("on");
        $(".close").removeClass("on");
    });
    
    
     /*모바일메뉴 - 고객센터*/
    $("li.cs_center a").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on");
        $(this).next().toggleClass("on");
    });
    
    /*모바일메뉴 - 주메뉴*/
     $(".snb > ul > li > a").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on");
        $(this).next().toggleClass("on");
    });     
         
    
    /*배너*/
    var $bnnNum=0;
    
    $("a.next").click(function(e){
        e.preventDefault();
        if($bnnNum>=6) return false;
        $bnnNum++;
        $book_w = $("section.banner").width();
       
        $("div.banner_frame").stop().animate({"left":-$book_w*$bnnNum},300,"linear",function(){
            if($("div.banner_frame>section").eq($bnnNum).hasClass("black")){
                $(".arrow a").addClass("black");
                $(".play a").addClass("black");
                $(".roll li a").addClass("black");
                $(".roll li a").removeClass("on");
                $(".roll li a").eq($bnnNum).addClass("on");
                
            }else{
                $(".arrow a").removeClass("black");
                $(".play a").removeClass("black");
                $(".roll li a").removeClass("black");
                $(".roll li a").removeClass("on");
                $(".roll li a").eq($bnnNum).addClass("on");
                
            }
        });    
    });
    
    $("a.prev").click(function(e){
        e.preventDefault();
        if($bnnNum<=0) return false;
        $bnnNum--;
        
        $("div.banner_frame").stop().animate({"left":-$book_w*$bnnNum},300,"linear",function(){
            if($("div.banner_frame > section").eq($bnnNum).hasClass("black")){
                $(".arrow a").addClass("black");
                $(".play a").addClass("black");
                $(".roll li a").addClass("black");
                $(".roll li a").removeClass("on");
                $(".roll li a").eq($bnnNum).addClass("on");
                
            }else{
                $(".arrow a").removeClass("black");
                $(".play a").removeClass("black");
                $(".roll li a").removeClass("black");
                $(".roll li a").removeClass("on");
                $(".roll li a").eq($bnnNum).addClass("on");
               
            }
        });
    });
    
     
    /*auto 배너*/
    var $bnnNum=0;
    var $maxbnnNum=6;
    
    function autoBanner(){
        $bnnNum++;
        if($bnnNum>$maxbnnNum) {$bnnNum=0;}
        
        $book_w = $("section.banner").width();
        
        $("div.banner_frame").animate({"left":-$book_w*$bnnNum},300,"linear",function(){
            if($("div.banner_frame>section").eq($bnnNum).hasClass("black")){
                $(".arrow a").addClass("black");
                $(".play a").addClass("black");
                $(".roll li a").addClass("black");
                $(".roll li a").removeClass("on");
                $(".roll li a").eq($bnnNum).addClass("on");
            }else{
                $(".arrow a").removeClass("black");
                $(".play a").removeClass("black");
                $(".roll li a").removeClass("black");
                $(".roll li a").removeClass("on");
                $(".roll li a").eq($bnnNum).addClass("on");
            }
        });
        
    }
    
    var $autoBnn = setInterval(autoBanner,2500);
    
    
    /*배너 재생 멈춤 버튼*/
    var flag = true;
    $(".play").click(function(){
        if(flag){
            $(this).removeClass("play");
            $(this).addClass("stop");
            clearInterval($autoBnn);
            flag = false;
        }else{
            $(this).removeClass("stop");
            $(this).addClass("play");
            $autoBnn = setInterval(autoBanner,3000);
            flag = true;
        }
    });   
    
    /*퀵메뉴 반복 이미지*/
    var img1 = "";
    for(var i=0; i<=19; i++){
        if(i<10){
		img1 += "<img src='images/service/quick01_0000"+i+".png' />"; 
		}else{
		img1 += "<img src='images/service/quick01_000"+i+".png' />"; 
		}
    }
    $(".quick01 > a > span").html(img1);
    
    var img2 = "";
    for(var i=0; i<=19; i++){
        if(i<10){
		img2 += "<img src='images/service/quick02_0000"+i+".png' />"; 
		}else{
		img2 += "<img src='images/service/quick02_000"+i+".png' />"; 
		}
    }
    $(".quick02 > a > span").html(img2);
    
    
        var img3 = "";
        for(var i=0; i<=19; i++){
        if(i<10){
		img3 += "<img src='images/service/quick03_0000"+i+".png' />"; 
		}else{
		img3 += "<img src='images/service/quick03_000"+i+".png' />"; 
		}
    }
    $(".quick03 > a > span ").html(img3);
    
    var img4 = "";
        for(var i=0; i<=19; i++){
        if(i<10){
		img4 += "<img src='images/service/quick04_0000"+i+".png' />"; 
		}else{
		img4 += "<img src='images/service/quick04_000"+i+".png' />"; 
		}
    }
    $(".quick04 > a > span").html(img4);
    
    
    /*퀵메뉴 애니메이션*/
    $("#content1 > section > article > a >span").hover(function(){
          for(var i=0;i<=19; i++){
            $(this).children("img").eq(i).css({"animation":"loop 1s linear "+(i*0.05)+"s 1 normal"});
        }
    },function(){
        for(var i=0;i<=19; i++){
            $(this).children("img").eq(i).css({"animation":"none"});
        }
    });
    
    /* content3 탭메뉴 */
    $(".content3_inner > section > h3 > a").bind("click focus",function(e){
        e.preventDefault();
        
        $(".content3_inner > section > h3 > a").removeClass("on");
        $(this).addClass("on");
        $(".content3_inner > section > h3 > a").parent().next().removeClass("on");
        $(this).parent().next().addClass("on");
    });
    
    
    /*패밀리 사이트*/
    $("li.family a").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on");
        $(this).parent().toggleClass("on");
    });
    
 
    
}); //document
