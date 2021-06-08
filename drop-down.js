const activeDrop = () => {
    const dropSelect = document.querySelector('.dropdown-activate');
    const selector = document.querySelector('.selector');
    const carrot = document.querySelector('.carrotimg');

    const dropSelect1 = document.querySelector('.dropdown-activate1');
    const selector1 = document.querySelector('.selector1');
    const carrot1 = document.querySelector('.carrotimg1');


    const dropSelect2 = document.querySelector('.dropdown-activate2');
    const selector2 = document.querySelector('.selector2');
    const carrot2 = document.querySelector('.carrotimg2');



    dropSelect.addEventListener('click', () => {
        selector.classList.toggle('display-yes');
        carrot.classList.toggle('invert');
        if(selector1.classList.contains("display-yes") === true){
            selector1.classList.toggle("display-yes");
            carrot1.classList.toggle('invert');
        }
        if(selector2.classList.contains("display-yes") === true){
            selector2.classList.toggle("display-yes");
            carrot2.classList.toggle('invert');
        }
    })

    dropSelect1.addEventListener('click', () => {
        selector1.classList.toggle('display-yes');
        carrot1.classList.toggle('invert');
        if(selector.classList.contains("display-yes") === true){
            selector.classList.toggle("display-yes");
            carrot.classList.toggle('invert');
        }
        if(selector2.classList.contains("display-yes") === true){
            selector2.classList.toggle("display-yes");
            carrot2.classList.toggle('invert');
        }
    })

    dropSelect2.addEventListener('click', () => {
        selector2.classList.toggle('display-yes');
        carrot2.classList.toggle('invert');
        if(selector.classList.contains("display-yes") === true){
            selector.classList.toggle("display-yes");
            carrot.classList.toggle('invert');
        }
        if(selector1.classList.contains("display-yes") === true){
            selector1.classList.toggle("display-yes");
            carrot1.classList.toggle('invert');
        }
    })
    
}
activeDrop();