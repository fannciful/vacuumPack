// Основні категорії продуктів для головної сторінки
export const products = [
  {
    id: 1,
    name: "Гладкі",
    image: "/images/gladki.jpg",
    description: "Універсальні пакети для щоденного використання з надійною герметизацією",
    price: "від 15 грн"
  },
  {
    id: 2,
    name: "Рифлені",
    image: "/images/rifleni.jpg",
    description: "Покращена герметичність завдяки рифленій текстурі для професійного використання",
    price: "від 18 грн"
  },
  {
    id: 3,
    name: "З чорною підкладкою",
    image: "/images/chornaya.jpg",
    description: "Елегантний дизайн з матовою чорною підкладкою для преміум продуктів",
    price: "від 25 грн"
  },
  {
    id: 4,
    name: "З золотою підкладкою",
    image: "/images/zolota.jpg",
    description: "Розкішний вигляд з металізованою золотою підкладкою для особливих випадків",
    price: "від 30 грн"
  },
  {
    id: 5,
    name: "Рулони для вакууматора",
    image: "/images/ruloni.jpg",
    description: "Зручні рулони для створення вакуумних пакетів індивідуального розміру",
    price: "від 45 грн"
  },
  {
    id: 6,
    name: "Zip пакети",
    image: "/images/zip.jpg",
    description: "Багаторазові пакети з надійним zip-замком для зручного використання",
    price: "від 12 грн"
  }
];

// Повний каталог продуктів для сторінки каталогу
export const catalogProducts = [
  // Гладкі пакети
  {
    id: 101,
    name: "Гладкі пакети 15x20 см",
    category: "smooth",
    image: "/images/gladki.jpg",
    description: "Універсальні пакети для щоденного використання з надійною герметизацією та довговічністю",
    price: "від 15 грн"
  },
  {
    id: 102,
    name: "Гладкі пакети 20x30 см",
    category: "smooth",
    image: "/images/gladki.jpg",
    description: "Середні гладкі пакети ідеальні для зберігання продуктів та забезпечення свіжості",
    price: "від 22 грн"
  },
  {
    id: 103,
    name: "Гладкі пакети 25x35 см",
    category: "smooth",
    image: "/images/gladki.jpg",
    description: "Великі гладкі пакети для об'ємних продуктів з максимальною надійністю герметизації",
    price: "від 28 грн"
  },
  {
    id: 104,
    name: "Гладкі пакети 30x40 см",
    category: "smooth",
    image: "/images/gladki.jpg",
    description: "Професійні великі пакети для ресторанів та кухонь з підвищеною міцністю",
    price: "від 35 грн"
  },
  {
    id: 105,
    name: "Гладкі пакети 10x15 см",
    category: "smooth",
    image: "/images/gladki.jpg",
    description: "Компактні пакети для порційних продуктів з ефективною вакуумною упаковкою",
    price: "від 12 грн"
  },
  {
    id: 106,
    name: "Гладкі пакети 35x50 см",
    category: "smooth",
    image: "/images/gladki.jpg",
    description: "Найбільші гладкі пакети для промислового використання з посиленою конструкцією",
    price: "від 45 грн"
  },

  // Рифлені пакети
  {
    id: 201,
    name: "Рифлені пакети 15x20 см",
    category: "textured",
    image: "/images/rifleni.jpg",
    description: "Покращена герметичність завдяки рифленій текстурі для збереження свіжості",
    price: "від 18 грн"
  },
  {
    id: 202,
    name: "Рифлені пакети 20x30 см",
    category: "textured",
    image: "/images/rifleni.jpg",
    description: "Середні рифлені пакети для професійного використання з підвищеною ефективністю",
    price: "від 25 грн"
  },
  {
    id: 203,
    name: "Рифлені пакети 25x35 см",
    category: "textured",
    image: "/images/rifleni.jpg",
    description: "Великі рифлені пакети з максимальною міцністю для тривалого збереження продуктів",
    price: "від 32 грн"
  },
  {
    id: 204,
    name: "Рифлені пакети 30x40 см",
    category: "textured",
    image: "/images/rifleni.jpg",
    description: "Професійні рифлені пакети для важких продуктів з надійною вакуумною технологією",
    price: "від 38 грн"
  },

  // Преміум серія
  {
    id: 301,
    name: "З чорною підкладкою 20x30 см",
    category: "premium",
    image: "/images/chornaya.jpg",
    description: "Елегантний дизайн з матовою чорною підкладкою для преміального вигляду продукції",
    price: "від 25 грн"
  },
  {
    id: 302,
    name: "З золотою підкладкою 20x30 см",
    category: "premium",
    image: "/images/zolota.jpg",
    description: "Розкішний вигляд з металізованою золотою підкладкою для особливих випадків продукції",
    price: "від 30 грн"
  },
  {
    id: 303,
    name: "З чорною підкладкою 25x35 см",
    category: "premium",
    image: "/images/chornaya.jpg",
    description: "Великі преміум пакети з чорною підкладкою для стильної презентації продуктів",
    price: "від 35 грн"
  },
  {
    id: 304,
    name: "З золотою підкладкою 25x35 см",
    category: "premium",
    image: "/images/zolota.jpg",
    description: "Великі преміум пакети з золотою підкладкою для ексклюзивного оформлення",
    price: "від 40 грн"
  },

  // Рулони
  {
    id: 401,
    name: "Рулони 20 см ширина",
    category: "rolls",
    image: "/images/ruloni.jpg",
    description: "Зручні рулони для створення пакетів індивідуального розміру з гнучкістю використання",
    price: "від 45 грн"
  },
  {
    id: 402,
    name: "Рулони 30 см ширина",
    category: "rolls",
    image: "/images/ruloni.jpg",
    description: "Широкі рулони для великих продуктів з можливістю налаштування довжини пакету",
    price: "від 65 грн"
  },

  // Zip пакети
  {
    id: 501,
    name: "Zip пакети 15x20 см",
    category: "zip",
    image: "/images/zip.jpg",
    description: "Багаторазові пакети з надійним zip-замком для зручного та економного використання",
    price: "від 12 грн"
  },
  {
    id: 502,
    name: "Zip пакети 20x30 см",
    category: "zip",
    image: "/images/zip.jpg",
    description: "Великі zip пакети для зручного багаторазового використання",
    price: "від 18 грн"
  }
];