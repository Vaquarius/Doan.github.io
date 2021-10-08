let header = $('#header')

header.append(`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="logo">
                <a href="../../page/trang chủ/trangchu.html"><img src="../../IMG/Vaquaria.png" alt="logo"></a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="../../page/trang chủ/trangchu.html">Trang Chủ</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sản Phẩm
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="../../page/Sản Phẩm/sanpham.html">DJ Equipments</a></li>
                  <li><a class="dropdown-item" href="../../page/Sản Phẩm/sanpham.html">Studio Gears</a></li>
                  <li><a class="dropdown-item" href="../../page/Sản Phẩm/sanpham.html">Headphones</a></li>
                  <li><a class="dropdown-item" href="../../page/Sản Phẩm/sanpham.html">Audio Seakers</a></li>
                  <li><a class="dropdown-item" href="../../page/Sản Phẩm/sanpham.html">Accessories</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link">Tin Tức</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Hỗ Trợ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Liên Hệ</a>
              </li>
            </ul>
            <div class="cart" >
                <a href="" title="Cart">
                    <i class="fab fa-opencart fa-lg"></i>
                    <span class="cart__batch">2</span>
                </a>
            </div>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit"><i class="fas fa-search fa-lg"></i></button>
              
            </form>
            
          </div>
        </div>
      </nav>   
`)