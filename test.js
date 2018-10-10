 function initial(){
                  var aSection=$('.card')
                  var height=20
                 if($(window).width()>=768)height=500

                

                  aSection.each(function(i,elem){
                        if(i==0) $(this).height(500)
                          else $(this).height(height)
                 })

                  //else collapse(400)
      }
      $(window).resize(function(){
          //bindCollapse();
            initial();

      }); 
       
      $(document).ready(function(){
            //bindCollapse();
             initial();
             
            $('.row').on('click','.btnCollapse',function(){



                  $('.btnCollapse span').each(function(){

                      $(this).removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down')
                 })
                  var aSection=$('.card') 
                   aSection.each(function(){
                       $(this).height(20)

                         
                 })


              $(this).parent().parent().height(500);

              console.log($(this).find('span').addClass('glyphicon-menu-up'))
            });
      });