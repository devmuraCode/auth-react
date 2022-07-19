const product = [
    {
        id: 1,
        images: "./images/max1.jpeg",
        name: "Макси Бокс Традиция",
        info: "Информация: клаб-сендвич с курицей, картофель-фри, пепси 0,25 л, *соус на выбор, вид соуса просим указать в комментарии",
        price: 30000,
        category: "maxbox"
    },
    {
        id: 2,
        images: "./images/max2.jpeg",
        name: "Макси Бокс Популярный",
        info: "Информация: лаваш мясной classic, картофель-фри, пепси 0,25 л, *соус на выбор, вид соуса просим указать в комментарии",
        price: 35000,
        category: "maxbox"
    },
    {
        id: 3,
        images: "./images/max3.jpeg",
        name: "Макси бокс Ретро",
        info: "Информация: шаурма мясная classic, картофель-фри, пепси 0,25 л *соус на выбор, вид соуса просим указать в комментарии",
        price: 30000,
        category: "maxbox"
    },
    {
        id: 4,
        images: "./images/max4.jpeg",
        name: "Макси Бокс Тренд",
        info: "Информация: шаурма мясная classic, картофель-фри, пепси 0,25 л *соус на выбор, вид соуса просим указать в комментарии",
        price: 30000,
        category: "maxbox"
    },
    {
        id: 5,
        images: "./lav1.jpeg",
        name: " Лаваш Куриный Standart Classic",
        info: "Информация: лаваш, куриное мясо-донар,соленые  огурцы, помидор, чипсы, томатный соус, майонез",
        price: 21000,
        category: "lavash"
    },
    {
        id: 6,
        images: "./images/lav2.jpeg",
        name: "Лаваш Standart classic",
        info: "Информация: лаваш, говяжье мясо-донар, соленые  огурцы, помидор, чипсы, томатный соус, майонез ",
        price: 23000,
        category: "lavash"
    },
    {
        id: 7,
        images: "./images/lav3.jpeg",
        name: "Лаваш мясной Standart острый ",
        info: "Информация: лаваш, говяжье мясо-донар, соленые огурцы, помидор, чипсы, томатный соус, майонез, острый соус",
        price: 23000,
        category: "lavash"
    },
    {
        id: 8,
        images: "./images/lav4.jpeg",
        name: "Лаваш Куриный Standart Cheese",
        info: "Информация: лаваш, куриное мясо-донар, соленые  огурцы, помидор, чипсы, томатный соус, майонез, сыр Хохланд ",
        price: 24000,
        category: "lavash"
    },
    {
        id: 9,
        images: "./images/clab1.jpeg",
        name: "Клаб-сэндвич куриный",
        info: "Информация: тостер хлеб, куриный шницель, свежие огурцы, помидоры, соус клаб, сыр Хохланд, картофель фри",
        price: 25000,
        category: "sendvich"
    },
    {
        id: 10,
        images: "./images/clab2.jpeg",
        name: "Клаб-сэндвич куриный",
        info: "Информация: тостер хлеб, куриный шницель, свежие огурцы, помидоры, соус клаб, сыр Хохланд",
        price: 20000,
        category: "sendvich"
    },
    {
        id: 11,
        images: "./images/clab3.jpeg",
        name: "Сэндвич Classic острый",
        info: "Информация: тостер хлеб, куриный шницель, свежие огурцы, помидоры, соус острый, сыр Хохланд",
        price: 20000,
        category: "sendvich"
    },
    {
        id: 13,
        images: "./images/sha1.jpeg",
        name: "Шаурма Big",
        info: "Информация: донар булочка, говяжье  мясо-донар, соленые  огурцы, помидоры,  томатный соус",
        price: 23000,
        category: "shaurma"
    },
    {
        id: 14,
        images: "./images/sha1.jpeg",
        name: "Шаурма Standart",
        info: "Информация: донар булочка, говяжье  мясо-донар, соленые  огурцы, помидоры,  томатный соус",
        price: 19000,
        category: "shaurma"
    },
    {
        id: 15,
        images: "./images/sha2.jpeg",
        name: " Шаурма Куриная Big",
        info: "Информация: донар булочка, куриное мясо-донар, соленые  огурцы, помидор, томатный соус",
        price: 21000,
        category: "shaurma"
    },
    {
        id: 15,
        images: "./images/sha2.jpeg",
        name: " Шаурма Куриная Standart",
        info: "Информация: донар булочка, куриное мясо-донар, соленые  огурцы, помидор, томатный соус",
        price: 18000,
        category: "shaurma"
    },
    {
        id: 16,
        images: "./images/kebab1.jpeg",
        name: "Донар Кебаб мясной",
        info: "Информация: Говяжье донар-мясо, рис с кукурузой, картофель-фри, салат из красной капусты, томатный соус",
        price: 35000,
        category: "kebab"
    },
    {
        id: 17,
        images: "./images/kebab1.jpeg",
        name: "Донар Кебаб куриный",
        info: "Информация: Куриное донар-мясо, рис с кукурузой, картофель-фри, салат из красной капусты, томатный соус",
        price: 32000,
        category: "kebab"
    },
    {
        id: 18,
        images: "./images/kebab1.jpeg",
        name: "Турецский хлеб",
        info: "Информация: турецкий хлеб",
        price: 3000,
        category: "kebab"
    },
    {
        id: 19 ,
        images: "./images/xaggi1.jpeg",
        name: "Шаурма Баггет (хагги)",
        info: "Информация:  Хагги булочка, говяжье мясо-донар,соленые огурцы, помидоры, латук, томатный соус, майонез, сыр Хохланд",
        price: 26000,
        category: "xaggi"
    },
    
    {
        id: 20 ,
        images: "./images/xaggi2.jpeg",
        name: "Шаурма Баггет куриный",
        info: "Информаци:  Хагги булочка, куриное мясо-донар, соленые огурцы, помидоры, латук, томатный соус, майонез, сыр Хохланд",
        price: 23000,
        category: "xaggi"
    },
    
    {
        id: 21 ,
        images: "./images/fri.jpeg",
        name: "Картофель Фри Большой",
        info: "Информация: картофель-фри 150 гр",
        price: 16000 ,
        category: "snek"
    },
    
    {
        id: 22,
        images: "./images/nagens.jpeg",
        name: "Наггетсы L (20 шт)",
        info: "Информация: наггетсы 20 шт",
        price: 30000,
        category: "snek"
    },
    
    {
        id: 23,
        images: "./images",
        name: "Байтсы большой",
        info: "Информация: куриное филе с ароматными специями обжаренное в панировке   270 гр",
        price: 25000,
        category: "snek"
    },
    
    {
        id: 24,
        images: "./images",
        name: "Наггетс бокс",
        info: "Информация: картофель-фри 100гр, наггетсы 5 шт",
        price: 18000,
        category: "snek"
    },
    
    {
        id: 25,
        images: "./images/bur1.jpeg",
        name: "Гамбургер",
        info: "Информация: булочка гамбургер, соленые огурцы, помидоры, мясная котлета, красный лук, айсберг, соус бургер",
        price: 19000,
        category: "burger"
    },
    
    {
        id: 26,
        images: "./images/bur2.jpeg",
        name: "Чизбургер",
        info: "Информация: булочка гамбургер, соленые огурцы, помидоры, мясная котлета, красный лук, айсберг, соус бургер",
        price: 21000,
        category: "burger"
    },   
    {
        id: 27,
        images: "./images/bur3.jpeg",
        name: "Дабл Бургер",
        info: "Информация: булочка гамбургер, соленые огурцы, помидоры, 2 мясной котлеты, красный лук, айсберг, соус бургер",
        price: 27000,
        category: "burger"
    },   
    {
        id: 28,
        images: "./images/bur4.jpeg",
        name: "Дабл Чиз",
        info: "Информация: булочка гамбургер, соленые огурцы, помидоры, 2 мясной котлеты, красный лук, айсберг, соус бургер",
        price: 18000,
        category: "burger"
    },   
    {
        id: 29,
        images: "./images/m1.jpeg",
        name: "Майонез",
        info: "Информация: Майонез соус",
        price: 1000,
        category: "sous"
    },   
    {
        id: 30,
        images: "./images/m2.jpeg",
        name: "Кетчуп",
        info: "Информация: Кетчуп соус",
        price: 1000,
        category: "sous"
    },   
    {
        id: 31,
        images: "./images/m3.jpeg",
        name: "Сырный соус",
        info: "Информация: Сырный соус",
        price: 1000,
        category: "sous"
    },   
    {
        id: 32,
        images: "./images/m4.jpeg",
        name: "Чесночный соус",
        info: "Информация: Чесночный соус",
        price: 1000,
        category: "sous"
    },   
    {
        id: 34,
        images: "./images/pepsi.jpeg",
        name: "Пепси 0,5",
        info: "Информация: Пепси 0,5 л",
        price: 7000,
        category: "drink"
    },   
    {
        id: 35,
        images: "./images/bliss.jpeg",
        name: "Соки в ассортименте 0,2",
        info: "Описание: соки в ассортименте 0,2",
        price: 3000,
        category: "drink"
    },   
    {
        id: 36,
        images: "./images/peach.jpeg",
        name: "Соки в ассортименте 1л",
        info: "Информация: соки в ассортименте 1л",
        price: 15000,
        category: "drink"
    },   
    {
        id: 37,
        images: "./images/voda.jpeg",
        name: "Hydrolife 0,33л",
        info: "Вода 0,33л",
        price: 2000,
        category: "drink"
    },
    {
        id: 38,
        images: "./images/ice-tea.jpeg",
        name: "Айс-ти",
        info: "Айс-ти 300 ml",
        price: 9000,
        category: "drink"
    },   {
        id: 39,
        images: "./images/des1.jfif",
        name: "Медовик",
        info: "Информация: Медовик",
        price: 14000,
        category: "dessert"
    },   {
        id: 40,
        images: "./images/des1.jfif",
        name: "Сникерс мусс",
        info: "Информация: Сникерс мусс",
        price: 14000,
        category: "dessert"
    },   {
        id: 41,
        images: "./images/des1.jfif",
        name: "Чизкейк",
        info: "Информация: Чизкейк",
        price: 14000,
        category: "dessert"
    }
]

export default product