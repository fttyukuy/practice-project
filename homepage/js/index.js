/*
步骤：1.为每屏添加动画
	  2.导航栏随每屏移动
	  3.为导航栏添加点击事件
 */


// 1.1获取需要动画的元素
var setAnimateElement = {
	".header" : [
		'.header'
	],
	".screen-1" : [
		'.screen-1__heading' ,
		'.screen-1__subheading'
	],
	".screen-2" : [
		'.screen-2__heading' , 
		'.screen-2__subheading' ,
		'.screen-2__dividebar' , 
		'.screen-2__person' ,
		'.screen-2__rocket' 
	],
	".screen-3" : [
		'.screen-3__heading' , 
		'.screen-3__subheading' ,
		'.screen-3__dividebar' , 
		'.screen-3__itembox' ,
		'.screen-3__img' 
	],
	".screen-4" : [
		'.screen-4__heading' , 
		'.screen-4__subheading' ,
		'.screen-4__dividebar' , 
		'.screen-4__item-1' ,
		// '.screen-4__item-2' ,
		'.screen-4__item-3' ,
		'.screen-4__item-4' 
	],
	".screen-5" : [
		'.screen-5__heading' , 
		'.screen-5__subheading' ,
		'.screen-5__dividebar' ,
		'.screen-5__img'  
	]

};
var outlineItem = getEleAll(".outline__item");//获取侧边导航栏元素
var headerItem = getEleAll(".header__item");//h获取顶部导航栏元素
//页面加载完成后，为顶部和第一屏添加动画
window.onload = function(){
	setTimeout(function(){
		setAnimate(".header");
		setAnimate(".screen-1");
},500)
}
//添加滚动事件，滚动到一定位置执行动画
window.onscroll = function(){
	var top = document.documentElement.scrollTop;
	console.log(top);
	if(top > 80){
		addCls(getEle(".header") , "header--fixed");
	}
	else{
		delCls(getEle(".header" ), "header--fixed");
	}
	if(top <= (1*640-100)){
		setMoveBar(0);
	}
	if(top > (1*640-100)){
		//debugger;
		setAnimate(".screen-2")
		setMoveBar(1);
	}
	if(top > (2*640-100)){
		setAnimate(".screen-3")
		setMoveBar(2);
	}
	if(top > (3*640-100)){
		setAnimate(".screen-4")
		setMoveBar(3);
	}
	if(top > (4*640-100)){
		setAnimate(".screen-5")
		setMoveBar(4);
	}
}

//滑动条随鼠标移动; 点击相应的导航条跳转到相应的屏
	for(var i = 0 ; i<headerItem.length-1 ; i++){
		headerItem[i].setAttribute("num" , i);
		outlineItem[i].setAttribute("num" , i);
		headerItem[i].onmouseover = function(){
			var num = getAtt(this , "num");
			setMoveBar(num);
		}
		headerItem[i].onclick = function(){
			var num = getAtt(this , "num");
			location.href = "#"+num;
		}
		outlineItem[i].onclick = function(){
			var num = getAtt(this , "num");
			location.href = "#"+num;
		}
	}

//获取每屏并为每屏添加id属性
var count = 0;
for(var k in setAnimateElement){
	if(k==".header"){ continue;}
	else{
		var screen = getEle(k);
		screen.id = count;
		count++;
	}
}

//点击六屏按钮 跳转到顶部
var button = getEle(".screen-6__button");
button.onclick = function(){
	location.href = "#0";
}
// 滑动条滚动函数
function setMoveBar(index){
	var moveBar = getEle(".header__movebar");
	moveBar.style.right = 560-index*96+"px";
}
//封装一个为元素添加动画的函数
function setAnimate(screenCls){
	var eleCls=setAnimateElement[screenCls];
	for(var i =0 ; i <eleCls.length ; i++){
		var element = getEle(eleCls[i]);
		addCls(element , eleCls[i].substr(1)+"-animate-done");
	}
}

//封装一个获取一个元素节点的函数
function getEle(name){
	return document.querySelector(name);
}
//封装一个获取元素节点集合的函数
 function getEleAll(name){
 	return document.querySelectorAll(name);
 }

 //封装一个获取元素属性值的函数
 function getAtt(element , attName){
 	return element.getAttribute(attName);
 }

 //封装一个获取元素class 属性值的函数
 function getCls(element){
 	return element.getAttribute("class");
 }

 //封装一个为元素添加 class 属性值的函数
 function addCls(element , clsName){
 	var cls = getCls(element);
 	if(cls.indexOf(clsName)==-1){
 		element.setAttribute("class" , cls+" "+clsName);
 	}
 	else{
 		element.setAttribute("class" , cls);
 	}
 }

 //封装一个为元素删除 class 属性值的函数
 function delCls(element , clsName){
 	var cls = getCls(element);
 	if(cls.indexOf(clsName)>-1){
 		element.setAttribute("class" , cls.replace(" "+clsName , ""));
 	}
 	else{
 		element.setAttribute("class" , cls);
 	}
 }
