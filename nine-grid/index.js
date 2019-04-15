window.onload=function(){
    var grids=document.getElementById("grid").getElementsByTagName("div"),
        start=document.getElementById("start"),
        end=document.getElementById("end"),
        inter;
        start.onclick=setInter;
        end.onclick=clearInter;
        // 封装一个九宫格闪动函数；
        function setInter(){
            inter=setInterval(function(){
                for(var i=0; i<grids.length; i++){
                    grids[i].style.backgroundColor="#fea600";
                }
                var arr=new Array(),
                    a,r,g,b;
                arr=getGrids();
                console.log(arr);
                for(var k=0 ; k<arr.length ; k++){
                a=arr[k];
                r=getColor(),
                g=getColor(),
                b=getColor();
                grids[a].style.backgroundColor="rgb("+r+","+g+","+b+")";
            } 
        },1000);
    }
        // 封装一个九宫格清除清除闪动并恢复原状的函数；
        function clearInter(){
            clearInterval(inter);
            for(var i=0; i<grids.length; i++){
                grids[i].style.background="#fea600";
            }
        }

        // 为九宫格添加编号。
        for(var i=0; i<grids.length ; i++){
            grids[i].setAttribute("num",i);
        }
        // 封装一个获取颜色值得函数
        function getColor(){
            var a=Math.floor(255*Math.random());
            return a;
        }
        // 封装一个随机选取三个九宫格的函数，返回一个数组
        function getGrids(){
            var ar=new Array();
            for(var j=0 ; j<3 ; j++){
                var ran= Math.floor(9*Math.random());
                    ar[j]=ran;
                if(j==1){
                    while(ar[0]==ar[1]){
                         ran= Math.floor(9*Math.random());
                         ar[j]=ran;
                    }
                }
                if(j==2){
                    while(ar[0]==ar[2] || ar[1]==ar[2]){
                         ran= Math.floor(9*Math.random());
                         ar[j]=ran;
                    }
                }
                
            }
            return ar;
        }

}