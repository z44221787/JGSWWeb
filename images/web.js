$(function(){

	$('.dypR>.XxKbt>span').eq(0).addClass('active');
	$('.dypR>ul.XxKul').eq(0).show();
	$('.dypR>.XxKbt>span').mouseover(GgXxk);

	$('.dypL>.XxKbt>span').eq(0).addClass('active');
	$('.dypL>ul.XxKul').eq(0).show();
	$('.dypL>.XxKbt>span').mouseover(GgXxk);

	$('.Yw_new>.XxKbt>span').eq(0).addClass('active');
	$('.Yw_new>ul.XxKul').eq(0).show();
	$('.Yw_new>.XxKbt>span').mouseover(GgXxk);

	$('#zxdt>.XxKbt>span').eq(0).addClass('active');
	$('#zxdt>ul.XxKul').eq(0).show();
	$('#zxdt>.XxKbt>span').mouseover(GgXxk);

	$('#gzhy>.XxKbt>span').eq(0).addClass('active');
	$('#gzhy>ul.XxKul').eq(0).show();
	$('#gzhy>.XxKbt>span').mouseover(GgXxk);

	$('#bszl>.XxKbt>span').eq(0).addClass('active');
	$('#bszl>ul.XxKul').eq(0).show();
	$('#bszl>.XxKbt>span').mouseover(GgXxk);

	$('#zcjdwj>.XxKbt>span').eq(0).addClass('active');
	$('#zcjdwj>ul.XxKul').eq(0).show();
	$('#zcjdwj>.XxKbt>span').mouseover(GgXxk);

	$('#rsysjs>.XxKbt>span').eq(0).addClass('active');
	$('#rsysjs>ul.XxKul').eq(0).show();
	$('#rsysjs>.XxKbt>span').mouseover(GgXxk);



	function GgXxk(){
		$(this).addClass('active').siblings('span').removeClass('active');
		$(this).parent('div.XxKbt').siblings('ul').eq($(this).parent('div.XxKbt').find('span').index(this)).show().siblings('ul.XxKul').hide();
	};

	//子页面左边列表同步高度
	$('.listR').height()>$('.listL').height() ? $('.listL').height($('.listR').height()) :  '';

	//导航栏摘要式显隐
	$('.navN>ul>li').hover(ZdomShow,ZdomHide);

	function ZdomShow(){
		$(this).addClass('active')
		$(this).find('div.Zdom').show();
	};

	function ZdomHide(){
		$(this).removeClass('active')
		$(this).find('div.Zdom').hide();	
	};

	//图片链接滚动
	var dom=$('.threeK');
	var IfI=0;
	function lg3(dom){
		var domli=dom.children('ul').children('li');
		if(domli.length>3){

			domli.parent('ul').before('<span class="prev glyphicon glyphicon-chevron-left"></span>');
			domli.parent('ul').after('<span class="next glyphicon glyphicon-chevron-right"></span>');

		}else{
			return;
		}
	}lg3(dom);

	function SpanClick(){

		var ImgLiW=dom.children('ul').children('li').eq(0).outerWidth(true);
		var ImgLiL=dom.children('ul').children('li').length;

		if($(this).is('.prev')){
			
			IfP(ImgLiL);

		}else if($(this).is('.next')){
			IfN(ImgLiL);
		}

		$(this).siblings('ul').animate({
				"left":IfI*ImgLiW*(-1)+30
			});


	};

	function IfP(ImgLiL){
		if(IfI>0){
			IfI--;
		}else{
			IfI=ImgLiL-3;
		}
		return IfI
	};

	function IfN(ImgLiL){
		if(IfI<ImgLiL-3){
			IfI++;
		}else{
			IfI=0;
		}
		return IfI
	};

	var SetDsqT=setTimeout(SetDsq,5000);

	dom.children('span').click(SpanClick);

	function SetDsq(){
		dom.children('span.next').click();
		SetDsqT=setTimeout(SetDsq,5000)
	};

	
	dom.hover(function(){
		clearTimeout(SetDsqT);
	},function(){
		SetDsqT=setTimeout(SetDsq,5000);
	})

	
})


//图标css动画
 $(function(){
		  	$('.navN ul li a,.WsbsL ul li a').hover(function(){
				$(this).children("em").addClass("animated rotateIn")
			  },function(){
				 $(this).children("em").removeClass("animated rotateIn")
			  })
		  })
		  
//搜索添加进入动画
     $(function(){
    $('.search').addClass('animated bounceInRight')
	  })
	  
