let subnew = $('#new')

subnew.append(`
    <div class="new">
        <h2>Tin Tức</h2>
        
        <div id="new_content" class="container" style="background-color: white; margin-bottom: 50px;">
            <div id="newlist" class="row">
            </div>
        </div>
            
    </div>
`)
let list_item = $("#newlist");

let list_Product = [
  {
    img: "../../IMG/15_1000x750.jpg",
    title: "Denon san pham moi ko sale off",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    
  },
  {
    img: "../../IMG/15_1000x750.jpg",
    title: "Numark 99% co sale off DJ Player",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    
  },
  {
    img: "../../IMG/15_1000x750.jpg",
    title: "Numark 99% co sale off DJ Player",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    
  },
  {
    img: "../../IMG/15_1000x750.jpg",
    title: "Numark 99% co sale off DJ Player",
    des: "Professional Motorized Dual-layer DJ Media Player with 7” Touchscreen",
    
  },
  
];
let filters = {
  price: -1,
  new: -1,
  brandNew: -1,
};
// var formatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "VND",
// });

const renderList = (list) => {
  let str = "";
  list.forEach((item) => {
    str += `
      <div class="col-lg-3 col-md-3 col-sm-3">
        <div class="newcard">
            <div class="cardimg"><img src="${item.img}" alt=""></div>
            <div class="content_new">
                <p class="times">time</p>
                <h5>${item.title}</h5>
                <p>${item.des}</p>
                <a href="#">Read More</a>
            </div>
        </div>  
      </div>  
        `;
    list_item.append(str);
  });
  // <div class="newcard">
  //     <a href="">
  //         <div class="cardimg"><img src="${item.img}" alt=""></div>
  //         <div class="content_new">
  //             <p class="times">time</p>
  //             <h5>${item.title}</h5>
  //             <p>${item.des}</p>
  //             <a href="#">Read More</a>
  //         </div>
  //     </a>
  //   </div>
  return str;
};

const filterList = (list) => {
  let els = renderList(list);
  list_item.html("");

  list_item.append(`
    ${els}
  `);
};
filterList(list_Product);

// const handleFilterByPrice = (data, order) => {
//   let newData;
//   if (order === 1) {
//     // filter price nho hon 10 trieu
//     newData = data.filter((item) => {
//       return item.price < 10000000;
//     });
//   }
//   if (order === 2) {
//     // filter price tu 10 - 20 trieu
//     newData = data.filter((item) => {
//       return item.price >= 10000000 && item.price <= 20000000;
//     });
//   }
//   if (order === 3) {
//     // filter price tu 20 - 50 trieu
//     newData = data.filter((item) => {
//       return item.price >= 20000000 && item.price <= 50000000;
//     });
//   }
//   if (order === 4) {
//     // filter price hon 50 trieu
//     newData = data.filter((item) => {
//       return item.price > 50000000;
//     });
//   }
//   return newData;
// };
// const handleFilterByNew = (data, order) => {
//   // xu ly filter by new
//   let newData;
//   if (order === 1) {
//     newData = data.filter((item) => {
//       return item.isNew;
//     });
//   }
//   if (order === 2) {
//     newData = data.filter((item) => {
//       return item.saleOff;
//     });
//   }
//   if (order === 3) {
//     newData = data.filter((item) => {
//       return item.like_new;
//     });
//   }
//   return newData;
// };
// const handleFilterByBrandNew = (data, order) => {
//   let newData;
//   if (order === 1) {
//     newData = data.filter((item) => {
//       return item.brandNew === "Denon";
//     });
//   }
//   if (order === 2) {
//     newData = data.filter((item) => {
//       return item.brandNew === "Pioneer";
//     });
//   }
//   if (order === 3) {
//     newData = data.filter((item) => {
//       return item.brandNew === "Numark";
//     });
//   }
//   if (order === 4) {
//     newData = data.filter((item) => {
//       return item.brandNew === "Akai";
//     });
//   }
//   return newData;
// };

// const handleFilter = () => {
//   // làm nhiệm vụ filter theo object filters
//   let newData = [...list_Product];
//   for (let f in filters) {
//     if (filters[f] === -1) {
//       delete filters[f];
//     }
//   }
//   for (let f in filters) {
//     if (f === "price") {
//       newData = handleFilterByPrice(newData, filters[f]);
//     }
//     if (f === "new") {
//       newData = handleFilterByNew(newData, filters[f]);
//     }
//     if (f === "brandNew") {
//       newData = handleFilterByBrandNew(newData, filters[f]);
//     }
//   }
//   filterList(newData);
// };

// const filterByPrice = (order) => {
//   filters.price = order;
//   handleFilter();
// };
// const filterByNew = (order) => {
//   filters.new = order;
//   handleFilter();
// };
// const filterByBrandNew = (order) => {
//   filters.brandNew = order;
//   handleFilter();
// };

// các bước khi làm filter:
// B1: Tạo ra 1 biến tên là filters, ở dạng object = {price: 'level-2', new: 'level-1'}
// B2: Sau khi click vào các điều kiện , hoặc ô search -> biến đổi object filters cho phù hợp
// B3: Từ object filters sẽ filter mảng của mình theo điều kiện bên trong.
