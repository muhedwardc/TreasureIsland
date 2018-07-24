document.addEventListener('DOMContentLoaded', function() {
    // navigator
    var dt = document.querySelectorAll('.dropdown-trigger');
    var dtm = document.querySelectorAll('.dropdown-trigger-mobile');
    var dtinstance = M.Dropdown.init(dt, {
        alignment: 'right'
    });
    var dtminstance = M.Dropdown.init(dtm, {
        alignment: 'left'
    })

    // sidenav
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'left',
        draggable: true
    });
});