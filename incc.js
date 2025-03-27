$("document").ready(function(){
	$('.codepic').hover(function(){$('.code').fadeIn()},function(){$('.code').fadeOut()});
	$('.backup').click(function(){
		$('body,html').animate({scrollTop:0},500)
	});
	$(".backup").hide();
	$(function() {
		$(window).scroll(function(){
			if ($(window).scrollTop()>500){
				$(".backup").fadeIn(1000);
			}else{
				$(".backup").fadeOut(1000);
			}
		});
	});
							 
  var pgname = document.location.href; 	
	  pgname=pgname.replace(/\?.*$/,'')
	  pgname=pgname.replace(/^.*\//,'')

  //scrolling("noticeCon","noticeCon1","noticeCon2");
  $("#noticeCon2 a").css("color","#00483a");

  $(".nav li:last-child").css("border-right","none");
  $(".proList dl:nth-child(3n)").css("margin-right","0");	
  $(".proList dl").hover(function(){$(this).find("dt").css("border","1px solid #28ad93");},function(){$(this).find("dt").css("border","1px solid #c9c9c9");});
 
   
   	$(".procla_list > ul > li ").click(function(){
		$(this).next("ul").slideToggle();
	});
	$(".leftnews_list li:last-child").css("border-bottom","none");
	$(".pic1:nth-child(3n)").css("margin-right","0");
	$(".pglist ul li").not(".on").not(".last").not(".next").hover(function(){ $(this).addClass("on");},function(){$(this).removeClass("on");})
	$("http://www.xueshengweb520.com/hb/hbchanpin/js/.pglist ul li.last").hover(function(){
		  $(this).css({background:"url(/theme/TP000004/images/lastBg2.jpg) 6px center no-repeat #187462"}).find("a").css({color:"#fff"});
	 },function(){
		   $(this).css({background:"url(/theme/TP000004/images/lastBg.jpg) 6px center no-repeat #fff"}).find("a").css({color:"#707070"});
	 })
	$("http://www.xueshengweb520.com/hb/hbchanpin/js/.pglist ul li.next").hover(function(){
		  $(this).css({background:"url(/theme/TP000004/images/nextBg2.jpg) 56px center no-repeat #187462"}).find("a").css({color:"#fff"});
	 },function(){
		   $(this).css({background:"url(/theme/TP000004/images/nextBg.jpg) 56px center no-repeat #fff"}).find("a").css({color:"#707070"});
	 })

  
});


$("document").ready(function(){
	//case
	var page=1;
	var i=1;
	var box=$('.honorPiclist ul');
	var n=$('.honorPiclist li').length;
	var h=$('.honorPiclist li').width();
	var pagetotal=Math.ceil(n/i);
	$('.left').bind('click',upwardsfn);
	$('.right').bind('click',downfn);	
	function upwardsfn(){
		if(page>1){
			box.animate({ marginLeft : '+='+h }, "slow");
			page--;
			$(".right").find("img").attr('src','../../../theme/TP000004/images/rightG.jpg');	
			if(page<=1){
				$('.left').find("img").attr('src','../../../theme/TP000004/images/leftB.jpg');
			}else{
				$('.left').find("img").attr('display','../../../theme/TP000004/images/leftG.jpg');	
			}
		}
	}
	function downfn(){
		if(pagetotal>page){
			box.animate({ marginLeft : '-='+h }, "slow");
			page++;
			$(".left").find("img").attr('src','../../../theme/TP000004/images/leftG.jpg');	
			if(page>=pagetotal){
				$('.right').find("img").attr('src','../../../theme/TP000004/images/rightB.jpg');
			}else{
				$('.right').find("img").attr('src','../../../theme/TP000004/images/rightG.jpg');	
			}
		}
	}

});
//导航定位
function dingwei(){
	var nav = document.getElementById("nav"); 
	var links = nav.getElementsByTagName("li"); 
	var lilen =$("#nav").find("a");
	var st2=new Array();
	var str1=new Array();
	var urrenturl = document.location.href; 	
	st2= urrenturl.split("_")
	var last = 0; 
	for (var i=0;i<links.length;i++) 
	{ 
	    linkurl =  lilen[i].getAttribute("rel"); 
		str1 = linkurl.split("/");
		var length2 = str1.length-1;
		str11 = str1[length2].split(".");
		 if(st2[0].indexOf(str11[0])!=-1) 
			{ 
			 last = i; 
			}
	} 
	links[last].className = "menu";
}
function scrolling(a,b,c){
	var speedp=30;
	var tabp=document.getElementById(a);
	var tab1p=document.getElementById(b);
	var tab2p=document.getElementById(c);
	tab2p.innerHTML=tab1p.innerHTML;
	function Marqueep(){
	if(tab2p.offsetWidth-tabp.scrollLeft<=0)
	tabp.scrollLeft-=tab1p.offsetWidth
	else{
	tabp.scrollLeft++;
	}
	}
	var MyMarp=setInterval(Marqueep,speedp);
	tabp.onmouseover=function() {clearInterval(MyMarp)};
	tabp.onmouseout=function() {MyMarp=setInterval(Marqueep,speedp)};
}

