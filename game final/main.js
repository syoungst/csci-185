function showNext(selectorHide, selectorShow, youtube=null) {
    // hide the old screen:
    document.querySelector(selectorHide).classList.remove('show');

    // show the new screen:
    document.querySelector(selectorShow).classList.add('show');

    if(youtube != null) {
    document.querySelector('#youtube').innerHTML=`
    <iframe width="560" height="315" src="${youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `
    } else {
        document.querySelector('#youtube').innerHTML=``;   
    }

    
}