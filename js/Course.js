$(document).ready(function () {
    // alert('ready')
    if(!localStorage.getItem('likes')){
        let likesArr = [310, 300, 350, 290, 285, 320, 333, 250, 280]
        likesStr = JSON.stringify(likesArr)
        localStorage.setItem('likes', likesStr)
    }
    
    
    let likes = $('div.card p.likes')
    likes.each(function(){
        let like = $(this)
        console.log(like)
        like.click(function(){
            let wtf = $(this).find('span')
            let num = parseInt(wtf.text())
            $(this).toggleClass('liked');
            if($(this).hasClass('liked')){
                wtf.text(num+1)
            }else{
                wtf.text(num-1)
            }
            
        })
    })

});