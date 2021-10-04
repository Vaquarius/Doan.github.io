function changeColor(event){
    document.querySelectorAll('span.active').forEach(function(item)
    {
        item.classList.remove('active')
    })
    event.target.classList.add('active')
}
const list_item = $("#productlist_item");
const paging_dom = $('#paging')
let list_Product = [{
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Denon san pham moi ko sale off trang 1",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 10000000,
    isNew: true,
    saleOff: false,
    like_new: false,
    brandNew: "Denon",
  },
  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Akai new co sale off",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 7000000,
    isNew: true,
    saleOff: true,
    like_new: false,
    brandNew: "Akai",
  },
  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Numark 99% co sale off DJ Player",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 8000000,
    isNew: false,
    saleOff: true,
    like_new: true,
    brandNew: "Numark",
  },
  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Numark 99% co sale off DJ Player",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 9000000,
    isNew: true,
    saleOff: true,
    like_new: false,
    brandNew: "Denon",
  },
  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Numark 99% co sale off DJ Player trang 2",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 75000000,
    isNew: true,
    saleOff: true,
    like_new: false,
    brandNew: "Denon",
  },
  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Numark 99% co sale off DJ Player",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 8000000,
    isNew: false,
    saleOff: true,
    like_new: true,
    brandNew: "Numark",
  },

  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Numark 99% co sale off DJ Player",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 8000000,
    isNew: false,
    saleOff: true,
    like_new: true,
    brandNew: "Numark",
  },
  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Denon san pham moi ko sale off",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 10000000,
    isNew: true,
    saleOff: false,
    like_new: false,
    brandNew: "Denon",
  },
  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Numark 99% co sale off DJ Player trang 3",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 8000000,
    isNew: false,
    saleOff: true,
    like_new: true,
    brandNew: "Numark",
  },
  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Numark 99% co sale off DJ Player",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 8000000,
    isNew: false,
    saleOff: false,
    like_new: true,
    brandNew: "Akai",
  },
  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Numark 99% co sale off DJ Player",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 8000000,
    isNew: false,
    saleOff: true,
    like_new: true,
    brandNew: "Numark",
  },
  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Akai new co sale off",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 7000000,
    isNew: true,
    saleOff: true,
    like_new: false,
    brandNew: "Akai",
  },
  {
    img: "../../IMG/DenonDJ-img-SC5000MTopIntro-removebg-preview.png",
    title: "Denon 99% co sale off",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    price: 30000000,
    isNew: false,
    saleOff: true,
    like_new: true,
    brandNew: "Denon",
  },
];
let filters = {
    price: -1,
    new: -1,
    brandNew: -1,
    rangePrice: {
    from: -1,
    to: -1
    }
  };
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  
  let perPage = 10
  let currentPage = 1
  let totalItem = list_Product.length // 13
  let totalPage = totalItem % perPage > 0 ? (Math.floor(totalItem / perPage)) + 1 : Math.floor(totalItem / perPage)
  
  const renderList = (list) => {
    let str = "";
    let lastIndex = (perPage * currentPage) - 1
    let fisrtIndex = lastIndex - perPage - 1 >= 0 ? lastIndex - perPage - 1 : 0
    let currentList = [...list].splice(fisrtIndex, perPage)
    currentList.forEach((item) => {
      str += `
        <div class="product-card">
            <a href="">
                <img class="product_background" src="${item.img}" alt="">
                <div class="product-card-content">
                    <h5>${item.title}</h5>
                    <div class="product-card-color">
                        <p>Color :</p>
                        <span class="circle-white active" onclick="changeColor(event)"></span>
                        <span class="circle-black" onclick="changeColor(event)"></span>
                    </div>
                    <div class="product-card-price">
                        <p>${formatter.format(
                            item.price
                          )}</p>
                    </div>
                    <a class="btn-cart" href="">Add To Cart</a>
                </div>
            </a>       
        </div>
        `;
    });
    return str;
    
  };
  
  const filterList = (list) => {
    console.log(`list`, list)
    let els = renderList(list);
    list_item.html("");
  
    list_item.append(`
    ${els}
    `);
    updatePaging()
  };
  filterList(list_Product);
  
  const handleFilterByPrice = (data, order) => {
    let newData;
    if (order === 1) {
      // filter price nho hon 10 trieu
      newData = data.filter((item) => {
        return item.price < 10000000;
      });
    }
    if (order === 2) {
      // filter price tu 10 - 20 trieu
      newData = data.filter((item) => {
        return item.price >= 10000000 && item.price <= 20000000;
      });
    }
    if (order === 3) {
      // filter price tu 20 - 50 trieu
      newData = data.filter((item) => {
        return item.price >= 20000000 && item.price <= 50000000;
      });
    }
    if (order === 4) {
      // filter price hon 50 trieu
      newData = data.filter((item) => {
        return item.price > 50000000;
      });
    }
    return newData;
  };
  const handleFilterByNew = (data, order) => {
    // xu ly filter by new
    let newData;
    if (order === 1) {
      newData = data.filter((item) => {
        return item.isNew;
      });
    }
    if (order === 2) {
      newData = data.filter((item) => {
        return item.saleOff;
      });
    }
    if (order === 3) {
      newData = data.filter((item) => {
        return item.like_new;
      });
    }
    return newData;
  };
  const handleFilterByBrandNew = (data, order) => {
    let newData;
    if (order === 1) {
      newData = data.filter((item) => {
        return item.brandNew === "Denon";
      });
    }
    if (order === 2) {
      newData = data.filter((item) => {
        return item.brandNew === "Pioneer";
      });
    }
    if (order === 3) {
      newData = data.filter((item) => {
        return item.brandNew === "Numark";
      });
    }
    if (order === 4) {
      newData = data.filter((item) => {
        return item.brandNew === "Akai";
      });
    }
    return newData;
  };
  
  const handleFilterByRangePrice = (data, rangePrice) => {
    const {
      from,
      to
    } = rangePrice // let from = rangePrice.from
    let newData;
    newData = data.filter((item) => {
      return item.price >= from && item.price <= to
    });
    return newData
  }
  
  const handleFilter = () => {
    // làm nhiệm vụ filter theo object filters
    let newData = [...list_Product];
    for (let f in filters) {
      if (filters[f] === -1) {
        delete filters[f];
      }
    }
  
    // check validatetion range
  
    if (filters.rangePrice.from && filters.rangePrice.to &&
      filters.rangePrice.from !== -1 && filters.rangePrice.to !== 1 &&
      (filters.rangePrice.from >= filters.rangePrice.to)) {
      alert('from price must be less than to price')
      return
    } else if (filters.rangePrice.from && filters.rangePrice.to &&
      filters.rangePrice.from !== -1 && filters.rangePrice.to !== 1 &&
      (filters.rangePrice.from < filters.rangePrice.to)) {
      // reset cac radio o tren
      let allPrice = $('.price_input')
      allPrice.each(function (index, item) {
        item.checked = false
      });
      // delete key price
      delete filters.price
    }
  
  
  
    for (let f in filters) {
      if (f === "price") {
        newData = handleFilterByPrice(newData, filters[f]);
      }
      if (f === "new") {
        newData = handleFilterByNew(newData, filters[f]);
      }
      if (f === "brandNew") {
        newData = handleFilterByBrandNew(newData, filters[f]);
      }
      if (f === "rangePrice" && filters.rangePrice.from && filters.rangePrice.to &&
        filters.rangePrice.from !== -1 && filters.rangePrice.to !== 1 &&
        (filters.rangePrice.from < filters.rangePrice.to)) {
        newData = handleFilterByRangePrice(newData, filters[f]);
      }
  
    }
    filterList(newData);
  };
  
  const filterByPrice = (dom) => {
    const order = +dom.value
    filters.price = order;
    // reset input range
    $('#from_price').val('')
    $('#to_price').val('')
    delete filters.rangePrice.from
    delete filters.rangePrice.to
    handleFilter();
  };
  const filterByNew = (order) => {
    filters.new = order;
    handleFilter();
  };
  const filterByBrandNew = (dom) => {
    const order = +dom.value
    filters.brandNew = order;
    handleFilter();
  };
  
  
  
  const changePriceRange = (dom) => {
    const name = dom.name
    const value = +dom.value
    if (name === 'from') {
      filters.rangePrice.from = value
    } else {
      filters.rangePrice.to = value
    }
  }
  
  
  const changePage = (page) => {
    currentPage = page
    filterList(list_Product)
  }
  
  const previousPage = () => {
    if (currentPage === 1) {
      return
    }
    currentPage = currentPage - 1
    filterList(list_Product)
  }
  
  const nextPage = () => {
    if (currentPage === totalPage) {
      return
    }
    currentPage = currentPage + 1
    filterList(list_Product)
  }
  
  function renderPage() {
    let str = ''
  
    for (let i = 1; i <= totalPage; i++) {
      str += `<li onclick="changePage(${i})" class="page-item ${currentPage === i ? 'active': ''}"><a class="page-link" href="#productlist_item">${i}</a></li>`
    }
    return str
  }
  
  function updatePaging() {
    paging_dom.html('')
    paging_dom.append(`
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li onclick="previousPage()" class="page-item"><a class="page-link" href="#productlist_item">Previous</a></li>
        ${renderPage()}
        <li onclick="nextPage()" class="page-item"><a class="page-link" href="#productlist_item">Next</a></li>
      </ul>
    </nav>
    `)
  }