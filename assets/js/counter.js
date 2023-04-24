window.addEventListener('load', function(){
    let counterArr = document.querySelectorAll('.count');
    let counterArr2 = [];
    for(let j=0; j < counterArr.length; j++){
        counterArr2[j] = counterArr[j].innerHTML;
    }
    let count = 0;
    let flag = false;
    
    for(let j=0; j < counterArr.length; j++){
        counterArr[j].innerHTML = 0;
    }

    counterArr.innerHTML = 100;

    function main(){
        if(flag){
            return;
        }
        flag = true;
        for(let i=0; i<counterArr.length ; i++){
            if (counterArr[i].innerHTML == counterArr2[i]) {
                continue;
            }
            flag = false;
            counterArr[i].innerHTML = count;
        }
        count += 1;

        setTimeout(main, 20);
    }

    // function isVisible(elem) {

    //     let coords = elem.getBoundingClientRect();

    //     let windowHeight = document.documentElement.clientHeight;

    //     // видны верхний ИЛИ нижний край элемента
    //     let topVisible = coords.top > 0 && coords.top < windowHeight;
    //     let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    //     return topVisible || bottomVisible;
    // }
    // function showVisible() {
    //     for (let count of document.querySelectorAll('.count')) {
    //             if (isVisible(count)) {
    //             // отключение кеширования
    //             // эта строка должна быть удалена в "боевом" коде
    //             realSrc += '?nocache=' + Math.random();

    //             img.src = realSrc;

    //             img.dataset.src = '';
    //         }
    //     }
    // }

    main();
});


