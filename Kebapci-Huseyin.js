const menu = [
  {
      id: 1,
      title: "Adana Kebap",
      price: 80,
      category: "KEBAP",
      img: "img/adana_kebap.JPG",
      desc: `Adana kebap, Adana'da yenir...`
  },
  {
      id: 2,
      title: "Cağ Kebap",
      price: 80,
      category: "KEBAP",
      img: "img/cag_kebap.jpg",
      desc: "Erzurum'dan, ağzının tadını bilenlere..."
  },
  {
      id: 3,
      title: "Yeni Dünya Kebabı",
      price: 150,
      category: "KEBAP",
      img: "img/yenidunya_kebabi.jpg",
      desc: "Yenilenen dünyada, çok eskilere dayanan mevsimsel bir lezzet..."
  },
  {
      id: 4,
      title: "Patlıcan Kebabı",
      price: 80,
      category: "KEBAP",
      img: "img/Patlıcan_kebap.jpg",
      desc: "Bilenler bilir, patlıcan kebabı efsanedir..."
  },
  {
      id: 5,
      title: "İşkembe Çorbası",
      price: 40,
      category: "CORBA",
      img: "img/iskembe_corbasi.jpg",
      desc: "Başlamak için güzel bir sebep...",
  },
  {
      id: 6,
      title: "Mercimek Çorbası",
      price: 30,
      category: "CORBA",
      img: "img/mercimek-corbasi.jpg",
      desc: "Taklitler daima aslını yaşatır..."
  },
  {
      id: 7,
      title: "Yayla Çorbası",
      price: 30,
      category: "CORBA",
      img: "img/yayla_corbasi.jpg",
      desc: "Serin yaylalardan gelen lezzet..."
  },
  {
      id: 8,
      title: "Paça",
      price: 50,
      category: "CORBA",
      img: "img/paca.jpg",
      desc: "Ağzının tadını bilenlere...",
  },
  {
      id: 9,
      title: "Fıstıklı Baklava",
      price: 60,
      category: "TATLi",
      img: "img/fistiklibaklava.jpg",
      desc: "Antep'in dillere destan lezzeti..."
  },
  {
      id: 10,
      title: "Künefe",
      price: 50,
      category: "TATLi",
      img: "img/kunefe.jpg",
      desc: "Hatay'dan has künefe..."
  },
  {
    id: 11,
    title: "Beyran",
    price: 50,
    category: "CORBA",
    img: "img/beyran-corbasi.jpg",
    desc: "Levent Bey's special :)"
  }
  
];

//Button and Menu Selection
const buttonSection = document.querySelector(".btn-container");
const menuSection = document.querySelector(".section-center");

//Button Creation
const createButtons = () => {
  let allButtons = `
    <button id="HEPSI" class="btn btn-outline-dark btn-item" type="button">
      HEPSİ
    </button>
    <button id="CORBA" class="btn btn-outline-dark btn-item" type="button">
      ÇORBA
    </button>
    <button id="KEBAP" class="btn btn-outline-dark btn-item" type="button">
      KEBAP
    </button>
    <button id="TATLi" class="btn btn-outline-dark btn-item" type="button">
      TATLI
    </button>
  `
  buttonSection.innerHTML = allButtons;
}
createButtons();

//Create Foods
const createFoods = (food) => {
  let html = `
    <div class="menu-items col-lg-6 col-sm-12">
      <img class="photo" src="${food.img}" alt="${food.title}">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${food.title}</h4>
          <h4 class="price">${food.price}</h4>
        </div>
        <div class="menu-text">${food.desc}</div>
      </div>
    </div>  
  `
  return html;
}

//List All Foods
const listAllFoods = () => {
  let allFoods="";

  menu.map(item => {
    allFoods += createFoods(item)
  })
  menuSection.innerHTML = allFoods;
}
//Show All Foods on Homepage
document.addEventListener("DOMContentLoaded",listAllFoods);

//List Korea Foods
const listCorbaFoods = () => {
  let CorbaFoods="";

  menu.map(item => {
    if(item.category === "CORBA"){
      CorbaFoods += createFoods(item)
    }
  })
  menuSection.innerHTML = CorbaFoods;
}
document.querySelector("#CORBA").addEventListener("click",listCorbaFoods);

//List Japan Foods
const listKebapFoods = () => {
  let KebapFoods="";

  menu.map(item => {
    if(item.category === "KEBAP"){
      KebapFoods += createFoods(item)
    }
  })
  menuSection.innerHTML = KebapFoods;
}
document.querySelector("#KEBAP").addEventListener("click",listKebapFoods);

//List China Foods
const listTatliFoods = () => {
  let TatliFoods="";

  menu.map(item => {
    if(item.category === "TATLi"){
      TatliFoods += createFoods(item)
    }
  })
  menuSection.innerHTML = TatliFoods;
}
document.querySelector("#TATLi").addEventListener("click",listTatliFoods);

//List All Foods When All Button is Clicked
document.querySelector("#HEPSI").addEventListener("click",listAllFoods);