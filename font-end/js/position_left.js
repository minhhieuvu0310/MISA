/**
 * Thực hiện dịch chuyển vị trí siderbar-left
 * Author: VMHieu
 */
 try {
    var content__left = document.getElementById('content-left');
    var height_left = content__left.clientWidth;
    var btn__left = document.getElementById('siderbar-left__postion');
    var filter = document.getElementById('filter');
    btn__left.addEventListener("click",function(){
        var kt_left = btn__left.firstElementChild.classList.contains('display-none');
        console.log(kt_left);
        if (!kt_left) {
            btn__left.firstElementChild.classList.add('display-none');
            btn__left.lastElementChild.classList.remove('display-none');
            filter.classList.add('display-none');
            content__left.style.width = '0'
        } else {
            btn__left.firstElementChild.classList.remove('display-none');
            btn__left.lastElementChild.classList.add('display-none');
            filter.classList.remove('display-none');
            content__left.style.width = `${height_left}px`;
        }
    })
} catch (error) {
    console.log(error);
}