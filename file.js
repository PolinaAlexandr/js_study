
//    render: function (selector){
//        let menu = [];
//        $.each(this.menu, function(index, menuitem){
//            let submenu = [];
//            if (menuitem && menuitem.submenu){
//                $.each(menuitem.submenu, function(index, submenuitem) {
//                    submenu.push($('<li>').html($(submenuitem).name))
//                })
//            };
//            if (submenu){
//                let $_ul_submenu = $(<ul>)
//                let $_li_menu = &(<li>)
//            menu.push($_li_menu.append($_ul_submenu.append(submenu)))
//            } else {
//                menu.push($('<li>').html($(menuitem).name))
//            }
//        });
//
//        let res_menu = $('<li>').append(menu)
//        $(selector).append(res_menu)
//    });

//}

// alert('Maris in da holl!!!');
// document.addEventListener('click', function (event) {
//     // console.log(event.currentTarget)
//
// });

// $('input.test_text').change(function (event) {
//     // console.log($(event.currentTarget).val())
//     console.log('hell')
// });
//
$(document).ready(function () {
    // $('#submit').on('click', function (event) {
    // event.stopPropagation();
    // event.preventDefault();
    // console.log($('#myForm'));
    // });
    // $.each($('input.Text'), function (index, element) {
    //     let split_name = $(element).attr('name').split('_')[1];
    //     switch (split_name) {
    //         case '1': {
    //             $(element).on('click', function () {
    //                 alert('We gonna die!')
    //             })
    //         }
    //         case '2': {
    //             $(element).on('change', function () {
    //                 // $($('input.Text')[0]).attr('value', 'Дратути')
    //                 $($('input.Text')[0]).val('Дратути')
    //             })
    //         }
    //         case '3': {
    //             $(element).on('change', function () {
    //                 console.log($(this).val());
    //                 // document.getElementById('div').innerHTML("<b>" + $(this).val().toString() + "</b>")
    //                 // document.getElementById('div').innerHTML = s
    //                 let s = "<b>" + $(this).val() + "</b>";
    //                 $("#div").html(s)
    //             })
    //         }
    //             break;
    //     }
    // })

// $("input").change(function() {
//   alert( "Handler for .change() called." );
// });

window.menuICode = {
    menu: [
        {
            name: 'Menu 1',
            submenu: [{name: 'Menu 1 - SubMenu 1'}, {name: 'Menu 1 - SubMenu 2'}, {name: 'Menu 1 - SubMenu 3'}, ]
        },
        {
            name: 'Menu 2',
            submenu: [{name: 'Menu 2 - SubMenu 1'}, {name: 'Menu 2 - SubMenu 2'}]
        },
        {
            name: 'Menu 3',
            submenu: [{name: 'Menu 3 - SubMenu 1'}, {name: 'Menu 3 - SubMenu 2'}, {name: 'Menu 3 - SubMenu 3'}, {name: 'Menu 3 - SubMenu 4'}, ]
        },
    ],

    render: function (selector) {
        let menu = [];
        $.each(this.menu, function (index, menuItem) {
            let subMenu = [];
            if (menuItem && menuItem.submenu) {
                $.each(menuItem.submenu, function (index, subMenuItem) {
                    subMenu.push($('<li>').html(subMenuItem.name))
                })
            }
            menu.push($('<li>').html(menuItem.name))
            if (subMenu) {
                let $ulMenu = $('<ul>');
                menu.push($ulMenu.append(subMenu));
            }
        });
        let html = $('<ul>').append(menu);
        $(selector).append(html);
    }
}


});