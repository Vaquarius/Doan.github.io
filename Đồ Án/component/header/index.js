let header = $('#header')

header.append(`
    <div class="nav">
        <div class="toggle-menu">
            <i id="toggle-menu" class="fas fa-bars toogle-menu"></i>
            
        </div>
                
        <div class="logo">
            <a href="../../page/trang chủ/trangchu.html"><img src="../../IMG/Vaquaria.png" alt="logo"></a>
        </div>
                
        <div id="main-menu" class="main-menu">
            <ul id="marker" class="menu">
                <div class="btn">
                    <a class="menudropdown" href="../../page/Sản Phẩm/sanpham.html" >Sản Phẩm</a><i class="fas fa-caret-up"></i>
                        <ul>
                            <li><a href="../../page/Sản Phẩm/sanpham.html">DJ Equipments</a></li>
                            <li><a href="../../page/Sản Phẩm/sanpham.html">Studio Gears</a></li>
                            <li><a href="../../page/Sản Phẩm/sanpham.html">Headphones</a></li>
                            <li><a href="../../page/Sản Phẩm/sanpham.html">Audio Seakers</a></li>
                            <li><a href="../../page/Sản Phẩm/sanpham.html">Accessories</a></li>
                        </ul>
                </div>                                               
                <div class="btn">
                    <a class="menuNav__link" href="" >Tin Tức</a>   
                </div>
                <div class="btn">
                    <a class="menuNav__link" href="" >Hỗ Trợ</a>
                </div> 
                <div class="btn">
                    <a class="menuNav__link" href="" >Liên Hệ</a> 
                </div>
            </ul>
            <div class="sup-menu">
                <div id="icon-search" class="search">
                    <div class="input">
                        <input type="text" placeholder="search" id="mysearch">
                        <div class="clear" onclick="document.getElementById('mysearch').value=''"></div>
                    </div>
                    <div  class="icon"><i class="fas fa-search fa-lg"></i></div>
                </div>
                <div class="cart" >
                    <a href="" title="Cart">
                        <i class="fab fa-opencart fa-lg"></i>
                        <span class="cart__batch">2</span>
                    </a>
                </div>
                <div class="user"><a  href="" title="User"><i class="fas fa-user fa-lg"></i></a></div>
            </div>        
        </div>

    </div>
`)
let icon = document.querySelector ('.icon');
let search = document.querySelector ('.search');
icon.onclick = function () {
    search.classList.toggle ('active')
}

let isOpen = false
let mainMenu = $('#main-menu')
let toggleMenu = $('#toggle-menu') 
let iconSearch = $('icon-search')
toggleMenu.click((event)=>{
    // show menu
    if(!isOpen) {
        // show menu
        mainMenu.animate({
            left: 0,
        },'slow');
        // change icon
        toggleMenu.removeClass( "fa-bars" ).addClass( "fa-times" )
        isOpen = true
    } else {
        mainMenu.animate({
            left: '-100%',
        },'slow');
        toggleMenu.removeClass( "fa-times" ).addClass( "fa-bars" )
        isOpen = false
    }

})

$(document).click((event)=> {
    let elementClick = event.target
    if(elementClick.id !== 'main-menu' && elementClick.id !== 'toggle-menu' && elementClick.id !== 'icon-search') {
        mainMenu.animate({
            left: '-100%',
        },'slow');
        toggleMenu.removeClass( "fa-times" ).addClass( "fa-bars" )
        isOpen = false
    } 
})