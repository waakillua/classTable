    $(document).ready(function() {
        $(window).scroll(function(){
            var a=$(this).scrollTop();
            // console.log($(this).scrollTop()+" px");
            if(a>20){
                $(".dyaa").css({"background-color":"rgb(255,255,255)"});      
            }else
            {
                $(".dyaa").css({"background-color":"rgba(255,255,255,0.5)"});
            }
        })

    // $(document).ready(function() {
    //     $(window).scroll(function(){
    //         console.log("ss");
    //         $(".dayday").css({"background-color":"rgb(255,255,255)"});   
                       
    //     })

        // var scrolls = $(this).scrollTop();
        //     $(".context_block").each(function(){ //类名为“context_block”的块级元素
        //         var height = $(this).height();
        //         if($(this).position().top + height-60> scrolls){

         $(".gooey-menu-item").click(function(){
                console.log($(this).index());
                var index=$(this).index();
                $("#classTable").attr('class','bg'+index);
                $.cookie("background",$(this).index(),{expires:7});
        });


        var tem = $.cookie("background");
        if (tem != null) {
            $("#classTable").attr('class','bg'+tem);
        }

        var distance = 0;
        var timeInterval = 0;

        $(function($) { // 改
            $('#mycircle').css({ 'width': '.34rem', 'height': '.34rem', 'line-height': '.34rem', 'border-radius': '0' });
            $('.gooey-menu-item').css({ 'width': '.34rem', 'height': '.34rem', 'line-height': '.34rem', 'transform': 'translate3d(0px, 0px, 0px)' });
            $('#menu-open4').toggle(function() {
                $('.gooey-menu-item').each(function() {
                    distance = distance + 60;
                    timeInterval = timeInterval + 100;
                    $(this).css({ 'width': '.35rem', 'height': '.35rem', 'line-height': '.35rem', 'transform': 'translate3d(0px, ' + distance + 'px, 0px)', 'transition-timing-function': 'cubic-bezier(0.8, 0.84, 0.44, 1.3)', 'transition-duration': timeInterval + 'ms' });
                })
            }, function() {
                distance = 0;
                timeInterval = 0;
                $('.gooey-menu-item').each(function() {
                    $(this).css({ 'transform': 'translate3d(0px, 0px, 0px)', 'transition-timing-function': 'ease-out' });
                })
            })

        });

    });
