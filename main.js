(function (window, document) {
    //전역에 적용하지 못하게 모듈화하는 방식
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); // 조건에 해당하는 선택자를 ArrayLike로 반환해줌
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document);
