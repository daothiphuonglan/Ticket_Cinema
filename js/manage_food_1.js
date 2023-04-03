//const menu = [
    {
      id: 1,
      name: "Pham Bao Vy",
      category: "Women",
      age: 20,
      img: "https://file.hstatic.net/1000230897/article/4_grande.jpg",
      desc: `Lorem ipsum dolor sit amet, enim ad minim veniam, quis nostrud exercitation `,
    },
    {
      id: 2,
      name: "Huynh Manh Dung",
      category: "Man",
      age: 13.99,
      img: "https://media.istockphoto.com/id/1388645967/photo/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.jpg?b=1&s=170667a&w=0&k=20&c=iSQUfWESVgOxHtV5X7lrNxxzaf4b7fMrmI3dXxrFNbQ=",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      name: "Le Tri Dung",
      category: "Man",
      age: 30,
      img: "https://i.pinimg.com/236x/58/e1/e2/58e1e2dc4aa65e033a67394c9309b6ea.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      name: "Le Thuy Minh Anh",
      category: "Women",
      age: 20,
      img: "https://thumbs.dreamstime.com/b/sad-autumn-girl-fun-red-hair-forest-yellow-maple-leaves-lying-128907576.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      name: "Vo Van Lam",
      category: "Man",
      age: 30,
      img: "https://cafebiz.cafebizcdn.vn/2018/photo-9-1515677096300.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      name: "Duong Tue Anh ",
      category: "Women",
      age: 56,
      img: "https://cafebiz.cafebizcdn.vn/2018/photo-1-1515677096294.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      name: "Ngo Bao Thanh ",
      category: "Man",
      age: 35,
      img: "https://hanoispiritofplace.com/wp-content/uploads/2017/03/hinh-anh-girl-xinh-han-quoc.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      name: "Nghiem Thuy Hien",
      category: "Women",
      age: 18,
      img: "https://ordinaryofficial.vn/wp-content/uploads/2022/12/gai-han-toc-ngan.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      name: "Gia Duc Huy",
      category: "Man",
      age: 16.99,
      img: "https://kenh14cdn.com/2018/photo-4-1515626264423.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      name: "Truong Tue Chau",
      category: "Man",
      age: 22.99,
      img: "https://naturerepublicstore.vn/wp-content/uploads/2017/06/my-pham-han-quoc-2.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
 // ];

  var users = 'http://localhost:3000/user'


  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });

  // call API
 

   

  // End API
  
  function diplayMenuItems(menuItems) {
    
    fetch (users)
    .then(response=>response.json())
    .then (users=>{
    let displayMenu = user.map(function (item) {
    return `<article class="menu-item">
      
            <img src=${item.img} alt=${item.name} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.name}</h4>
                <h4 class="price">${item.age} years old</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
)}
    
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }