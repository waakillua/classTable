课表-企业号

1.获取文本长度

	var a = $(this).context.innerText.length;


2.改变表格第一列样式

	$("tr").each(function(){
           $(this).find("td").first().css("color","black");
           });

3.点击图片更换背景并用cookie保存

	$(".gooey-menu-item").click(function(){
                var temp=$(this).css('backgroundImage');   
                
		var strArr = temp.split('/');
                var tem=strArr[strArr.length-1].substring(0,strArr[strArr.length-1].length-2);//获取到图片名
            
                $(".blacktab").css({"backgroundImage":"url("+tem+")"})

                $.cookie("background",tem,{expires:7});
        });
    

                var tem=$.cookie("background");
                if(tem!=null){
                    $(".blacktab").css({"backgroundImage":"url("+tem+")"})
                }
4.将div改成js
	
		<div class="number" id="weekNumber">
                  <a class="pre" href="#"></a>
                    	第三周
                    <a class="next" href="#"> 
                    </a>
                </div>


 		titleChar="<a class=\"pre\" href=\""+preLink+"\"></a>"+
                    "第"+data.weekNumber+"周"+
                    "<a class=\"next\" href=\""+nextLink+"\">"+
                    "</a>";
		$('#weekNumber').append(titleChar);

5.与后台数据交互

      $.getJSON('callback.js',function(data){
          var jieArray=new Array();
          var charArray=new Array(11);
          for(var i=0;i<11;i++){
              jieArray[i]=new Array();
              for(var j=0;j<7;j++){
                  jieArray[i][j]='<td width=\"14%\"></td>';
              }
          }
          $.each(data,function(i,v){
              var classNode=v.classNode-1;
              var weekNode=v.week-1;
              var className;
              var a=v.courseContent.length
              switch(true){
		case 21:
                className='two';
                break;
              }
              jieArray[classNode][weekNode]="<td width=\"14%\" rowspan=\""+ v.classHourLength+"\" class=\""+className+"\">"+ v.courseContent+"</td>";
             for(var k=1;k<v.classHourLength;k++){
                  jieArray[classNode+k][weekNode]="";
              }
          });
          for(i=0;i<11;i++){
              charArray[i]="<tr><td width=\"2%\">第"+(i+1)+"节</td>"+jieArray[i].join(' ')+"</td>";
          }
          $("#classTable").html(charArray.join(''));
      })


6.弹性菜单封装
