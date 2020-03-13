$(document).ready(function () {
    $('#link').on('click', function () {
        window.menuICode.render('#div')
        // event.preventDefault();
        // $('#myForm').submit();
//        console.log(menu)
    });

    $('#test_link').on('click', window.menuICode._onTestLinkClick.bind(window.menuICode));
});