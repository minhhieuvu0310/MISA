for (const selected of document.querySelectorAll(".combobox__selected")) {
    selected.addEventListener("click", function () {
        var button = this.parentNode.querySelector('.combobox__button');
        var option = this.parentNode.querySelector('.combobox__option-list');
        var kt = button.classList.contains('combobox__btn-open');
        if (!kt) {
            button.classList.add('combobox__btn-open');
            option.classList.add('display-block');
        }
        else {
            button.classList.remove('combobox__btn-open');
            option.classList.remove('display-block');
        }
    })
}



for (const option of document.querySelectorAll(".combobox__option-item")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('combobox__option-item--active')) {
            var kt = this.parentNode.querySelector('.combobox__option-item.combobox__option-item--active');
            if (kt == null) {
                this.classList.add('combobox__option-item--active');
                this.parentNode.parentNode.querySelector('.combobox__selected .combobox__input input').value = this.textContent.trim();
                this.parentNode.parentNode.querySelector('.combobox__option-list.display-block').classList.remove('display-block');
                this.parentNode.parentNode.querySelector('.combobox__button.combobox__btn-open').classList.remove('combobox__btn-open');
            }
            else {
                this.parentNode.querySelector('.combobox__option-item.combobox__option-item--active').classList.remove('combobox__option-item--active');
                this.classList.add('combobox__option-item--active');
                this.parentNode.parentNode.querySelector('.combobox__selected .combobox__input input').value = this.textContent.trim();
                console.log(this.parentNode.parentNode.querySelector('.combobox__selected .combobox__input input').value)
                this.parentNode.parentNode.querySelector('.combobox__option-list.display-block').classList.remove('display-block');
                this.parentNode.parentNode.querySelector('.combobox__button.combobox__btn-open').classList.remove('combobox__btn-open');
            }
        }
    })
}