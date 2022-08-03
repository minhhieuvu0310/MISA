/**
 * Thực hiện dịch chuyển vị trí siderbar-right
 * Author: VMHieu
 */
try {
    var content__right = document.getElementById('content-right');
    var height = content__right.clientWidth;
    // var siderbar__right = document.getElementById('siderbar-right');
    var btn__position = document.getElementById('siderbar-right__postion');
    btn__position.addEventListener("click", function () {
        var kt = btn__position.firstElementChild.classList.contains('display-none');
        // console.log(kt);
        if (!kt) {
            btn__position.firstElementChild.classList.add('display-none');
            btn__position.lastElementChild.classList.remove('display-none');
            // siderbar__right.style.transform = 'translateX(100%)';
            content__right.style.width = '0'
        } else {
            btn__position.firstElementChild.classList.remove('display-none');
            btn__position.lastElementChild.classList.add('display-none');
            // siderbar__right.style.transform = 'translateX(0)'
            content__right.style.width = `${height}px`;
        }
    })
} catch (error) {
    console.log(error);
}