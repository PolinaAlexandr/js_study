
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
menu: [{
            name: 'Menu 1',
            class: 'text-primary',
            href: '#',
            id: 1,
            menu: [{
                name: 'Menu 1 - SubMenu 1',
                class: 'text-success',
                href: '1_1.html',
                id: 11,
            },{
                name: 'Menu 1 - SubMenu 2',
                class: 'text-success',
                href: '1_2.html',
                id: 12,
            },{
                name: 'Menu 1 - SubMenu 3',
                class: 'text-secondary',
                href: '#',
                id: 13,
                menu: [{
                    name: 'Menu 1 - SubMenu 3 - SubSubMenu 1',
                    class: 'text-danger',
                    href: '1_3_1.html',
                    id: 131,
                },{
                    name: 'Menu 1 - SubMenu 3 - SubSubMenu 2',
                    class: 'text-danger',
                    href: '1_3_2.html',
                    id: 132,
                },{
                    name: 'Menu 1 - SubMenu 3 - SubSubMenu 3',
                    class: 'text-danger',
                    href: '1_3_3.html',
                    id: 133,
                }]
            }]
        },
        {
            name: 'Menu 2',
            class: 'text-primary',
            href: '#',
            id: 2,
            menu: [
                {
                    name: 'Menu 2 - SubMenu 1',
                    class: 'text-success',
                    href: '2_1.html',
                    id: 21,
                },
                {
                    name: 'Menu 2 - SubMenu 2',
                    class: 'text-success',
                    href: '2_2.html',
                    id: 22,
                }
                ]
        },
        {
            name: 'Menu 3',
            class: 'text-primary',
            href: '#',
            id: 23,
            menu: [{
                name: 'Menu 3 - SubMenu 1',
                class: 'text-success',
                href: '3_1.html',
                id: 31,
            }, {
                name: 'Menu 3 - SubMenu 2',
                class: 'text-success',
                href: '3_2.html',
                id: 32,
            }, {
                name: 'Menu 3 - SubMenu 3',
                class: 'text-success',
                href: '3_3.html',
                id: 33,
            }, {
                name: 'Menu 3 - SubMenu 4',
                class: 'text-success',
                href: '3_4.html',
                id: 34,
            }, ]
        }],


    render: function (selector) {
//        let menu = [];
//        $.each(this.menu, function (index, menuItem) {
//            let subMenu = [];
//            if (menuItem && menuItem.menu) {
//                $.each(menuItem.menu, function (index, subMenuItem) {
//                    subMenu.push($('<li>').html(subMenuItem.name))
//                })
//            }
//            menu.push($('<li>').html(menuItem.name))
//            if (subMenu) {
//                let $ulMenu = $('<ul>');
//                menu.push($ulMenu.append(subMenu));
//            }
//        });
        let menu = _.map(this.menu, this._renderMenuItem.bind(this));
        let html = $('<ul>').append(menu);
        $(selector).html('');
        $(selector).append(html);
    },

    _renderMenuItem: function (menu){
        let resultMenu = this._renderMenuElement(menu);
        if (menu.menu) {
            resultMenu.append($('<ul>').append(_.map(menu.menu, this._renderMenuItem.bind(this))));
        }
        return resultMenu;
    },

    _renderMenuElement : function (menu) {
        let $_a = $('<a>');
        if (menu.class) {
            $_a.addClass(menu.class);
        }
        if (menu.name) {
            $_a.html(menu.name);
        }
        if (menu.href) {
            $_a.attr('href', menu.href);
        }
        if (menu.id) {
            $_a.data('id', menu.id);
        }
        let resultMenu = $('<li>').append($_a);
        return resultMenu;
    },

//data-
     _onTestLinkClick : function (event) {
        console.log(event)
        console.log(this)
        alert("Test click")
    }
}


});