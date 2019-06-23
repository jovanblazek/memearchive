$(document).ready(function() {
    $('#material-tabs').each(function() {

        var $active, $content, $links = $(this).find('a');

        $active = $($links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        $links.not($active).each(function() {
                $(this.hash).hide();
        });

        $(this).on('click', 'a', function(e) {

                $active.removeClass('active');
                $content.hide();

                $active = $(this);
                $content = $(this.hash);

                $active.addClass('active');
                $content.show();

                e.preventDefault();
        });
        
        $(".container").swipe({

            swipe:function(event, direction) 
            {
                
                if(direction === "left")
                {
                    var $newActive, $newContent;
                    if($("#tab1-tab").hasClass("active"))
                    {
                        console.log("active 1");
                        $newActive = $("#tab2-tab");
                        $newContent = $("#tab2");
                    }
                    else if($("#tab2-tab").hasClass("active"))
                    {
                        console.log("active 2");
                        $newActive = $("#tab3-tab");
                        $newContent = $("#tab3");
                    }
                    else
                    {
                        console.log("active 3");
                        $newActive = $("#tab3-tab");
                        $newContent = $("#tab3");
                    }
                        
                    
                    //console.log($newActive);
                    //console.log($newContent);
                    
                    $active.removeClass('active');
                    $content.hide();

                    $active = $newActive;
                    $content = $newContent;

                    $active.addClass('active');
                    $content.show();

                    event.preventDefault();
                }
                
                if(direction === "right")
                {
                    var $newActive, $newContent;
                    if($("#tab1-tab").hasClass("active"))
                    {
                        console.log("active 1");
                        $newActive = $("#tab1-tab");
                        $newContent = $("#tab1");
                    }
                    else if($("#tab2-tab").hasClass("active"))
                    {
                        console.log("active 2");
                        $newActive = $("#tab1-tab");
                        $newContent = $("#tab1");
                    }
                    else
                    {
                        console.log("active 3");
                        $newActive = $("#tab2-tab");
                        $newContent = $("#tab2");
                    }
                        
                    
                    //console.log($newActive);
                    //console.log($newContent);
                    
                    $active.removeClass('active');
                    $content.hide();

                    $active = $newActive;
                    $content = $newContent;

                    $active.addClass('active');
                    $content.show();

                    event.preventDefault();
                }
                
                
            },
            
        });
            
            
    });
}); 