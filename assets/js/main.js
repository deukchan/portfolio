$(function(){
   
    



    /**
     * @버튼종류에따른필터
     */
    $('.sort-area button').click(function(){
        dataVal = $(this).data('filter');
        $(this).addClass('on').siblings().removeClass('on')
        $('.project-item').removeClass('on');
        if(dataVal == 'all'){
            $('.project-item').addClass('on');
        }else{
            $('.project-item').each(function(i,el){
                if($(this).data('filter').indexOf(dataVal) >= 0 ){
                    $(this).addClass('on')
                }
            })
        }
    })

    $('.sort-area button:first-child').trigger('click')


    /**
     * @grid교체
     */
    $('.set-area button').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        if($(this).hasClass('grid-two')){
            $('.project-list').addClass('sort');
        }else{
            $('.project-list').removeClass('sort');
        }
    })





});