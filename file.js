$(document).ready(function () {
//    $('#submit').on('click', function (event) {
//        event.stopPropagation();
//        event.preventDefault();
//    $('#link').on('click', function (event) {
//        event.stopPropagation();
//        event.preventDefault();
//        $('form').submit();
//    });
//    $('.text').on('click', function (event) {
////        event.stopPropagation();
////        event.preventDefault();
////        $('form').submit();
//
//
//        };
//        };
//    });
    $.each($('input.text'), function (index, element){
        let name = $(element).attr('name');
        let splited_name = name.split('_');
        switch(splited_name[1]){
            case "1":
                $(element).on('click', function (event){
                    window.alert("Hello world!");
                    alert("Hello world!");
                });
                break;
            case "2":
                $(element).on('change', function (event){
                    $($('input.text')[0]).val('здравствуйте');
                });
                break;
            case "3":
                $(element).on('change', function (event){
//                    document.getElementById('div').innerHTML = innerHTML(
//                    div)
                    document.getElementById('div').innerHTML = '<b>' + $(this).val() + '</b>'
                })
                break;
        }
    });
});