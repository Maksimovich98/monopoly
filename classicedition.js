function Square(
  name,
  pricetext,
  color,
  price,
  groupNumber,
  baserent,
  rent1,
  rent2,
  rent3,
  rent4,
  rent5
) {
  this.name = name;
  this.pricetext = pricetext;
  this.color = color;
  this.owner = 0;
  this.mortgage = false;
  this.house = 0;
  this.hotel = 0;
  this.groupNumber = groupNumber || 0;
  this.price = price || 0;
  this.baserent = baserent || 0;
  this.rent1 = rent1 || 0;
  this.rent2 = rent2 || 0;
  this.rent3 = rent3 || 0;
  this.rent4 = rent4 || 0;
  this.rent5 = rent5 || 0;
  this.landcount = 0;

  if (groupNumber === 3 || groupNumber === 4) {
    this.houseprice = 50;
  } else if (groupNumber === 5 || groupNumber === 6) {
    this.houseprice = 100;
  } else if (groupNumber === 7 || groupNumber === 8) {
    this.houseprice = 150;
  } else if (groupNumber === 9 || groupNumber === 10) {
    this.houseprice = 200;
  } else {
    this.houseprice = 0;
  }
}

function Card(text, action) {
  this.text = text;
  this.action = action;
}

// Функция corrections() с переводом внутреннего текста
function corrections() {
  // Перевод названия клетки стартовой авеню
  document.getElementById("cell1name").textContent = "Средиземноморская авеню";

  // Добавление изображений для увеличения
  document.getElementById("enlarge5token").innerHTML +=
    '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
  document.getElementById("enlarge15token").innerHTML +=
    '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
  document.getElementById("enlarge25token").innerHTML +=
    '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
  document.getElementById("enlarge35token").innerHTML +=
    '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
  document.getElementById("enlarge12token").innerHTML +=
    '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
  document.getElementById("enlarge28token").innerHTML +=
    '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

// Перевод utiltext() для коммунальных служб
function utiltext() {
  return "&nbsp;&nbsp;&nbsp;&nbsp;Если владеете одной «Коммунальной службой», аренда равна 4-кратному значению кубиков.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Если владеете обеими «Коммунальными службами», аренда равна 10-кратному значению кубиков.";
}

// Перевод transtext() для железных дорог
function transtext() {
  return '<div style="font-size: 14px; line-height: 1.5;">Аренда<span style="float: right;">$25</span><br />Если владеете 2 железными дорогами<span style="float: right;">$50</span><br />Если 3<span style="float: right;">$100</span><br />Если 4<span style="float: right;">$200</span></div>';
}

// Перевод уведомлений для налога на роскошь
function luxurytax() {
  addAlert(
    player[turn].name + " заплатил $100 за попадание на Налог на роскошь."
  );
  player[turn].pay(100, 0);

  $("#landed").show().text("Вы попали на налог на роскошь. Заплатите $100.");
}

// Перевод уведомлений для городского налога
function citytax() {
  addAlert(
    player[turn].name + " заплатил $200 за попадание на городской налог."
  );
  player[turn].pay(200, 0);

  $("#landed").show().text("Вы попали на городской налог. Заплатите $200.");
}

var square = [];

square[0] = new Square("Старт", "Получите $200 при прохождении", "#FFFFFF");
square[1] = new Square(
  "Средиземноморская авеню",
  "$60",
  "#8B4513",
  60,
  3,
  2,
  10,
  30,
  90,
  160,
  250
);
square[2] = new Square(
  "Общественная казна",
  "ВЫПОЛНИТЕ ИНСТРУКЦИИ НА КАРТЕ",
  "#FFFFFF"
);
square[3] = new Square(
  "Балтийская авеню",
  "$60",
  "#8B4513",
  60,
  3,
  4,
  20,
  60,
  180,
  320,
  450
);
square[4] = new Square("Налог на город", "Заплатите $200", "#FFFFFF");
square[5] = new Square("Железная дорога Ридинга", "$200", "#FFFFFF", 200, 1);
square[6] = new Square(
  "Восточная авеню",
  "$100",
  "#87CEEB",
  100,
  4,
  6,
  30,
  90,
  270,
  400,
  550
);
square[7] = new Square("Шанс", "ВЫПОЛНИТЕ ИНСТРУКЦИИ НА КАРТЕ", "#FFFFFF");
square[8] = new Square(
  "Авеню Вермонт",
  "$100",
  "#87CEEB",
  100,
  4,
  6,
  30,
  90,
  270,
  400,
  550
);
square[9] = new Square(
  "Коннектикутская авеню",
  "$120",
  "#87CEEB",
  120,
  4,
  8,
  40,
  100,
  300,
  450,
  600
);
square[10] = new Square("Просто в гостях", "", "#FFFFFF");
square[11] = new Square(
  "Площадь Святого Чарльза",
  "$140",
  "#FF0080",
  140,
  5,
  10,
  50,
  150,
  450,
  625,
  750
);
square[12] = new Square("Электрическая компания", "$150", "#FFFFFF", 150, 2);
square[13] = new Square(
  "Авеню Штатов",
  "$140",
  "#FF0080",
  140,
  5,
  10,
  50,
  150,
  450,
  625,
  750
);
square[14] = new Square(
  "Вирджиния авеню",
  "$160",
  "#FF0080",
  160,
  5,
  12,
  60,
  180,
  500,
  700,
  900
);
square[15] = new Square(
  "Пенсильванская железная дорога",
  "$200",
  "#FFFFFF",
  200,
  1
);
square[16] = new Square(
  "Площадь Святого Якова",
  "$180",
  "#FFA500",
  180,
  6,
  14,
  70,
  200,
  550,
  750,
  950
);
square[17] = new Square(
  "Общественная казна",
  "ВЫПОЛНИТЕ ИНСТРУКЦИИ НА КАРТЕ",
  "#FFFFFF"
);
square[18] = new Square(
  "Теннесси авеню",
  "$180",
  "#FFA500",
  180,
  6,
  14,
  70,
  200,
  550,
  750,
  950
);
square[19] = new Square(
  "Нью-Йорк авеню",
  "$200",
  "#FFA500",
  200,
  6,
  16,
  80,
  220,
  600,
  800,
  1000
);
square[20] = new Square("Бесплатная парковка", "", "#FFFFFF");
square[21] = new Square(
  "Кентукки авеню",
  "$220",
  "#FF0000",
  220,
  7,
  18,
  90,
  250,
  700,
  875,
  1050
);
square[22] = new Square("Шанс", "ВЫПОЛНИТЕ ИНСТРУКЦИИ НА КАРТЕ", "#FFFFFF");
square[23] = new Square(
  "Индиана авеню",
  "$220",
  "#FF0000",
  220,
  7,
  18,
  90,
  250,
  700,
  875,
  1050
);
square[24] = new Square(
  "Иллинойс авеню",
  "$240",
  "#FF0000",
  240,
  7,
  20,
  100,
  300,
  750,
  925,
  1100
);
square[25] = new Square("Железная дорога B&O", "$200", "#FFFFFF", 200, 1);
square[26] = new Square(
  "Атлантическая авеню",
  "$260",
  "#FFFF00",
  260,
  8,
  22,
  110,
  330,
  800,
  975,
  1150
);
square[27] = new Square(
  "Вентнор авеню",
  "$260",
  "#FFFF00",
  260,
  8,
  22,
  110,
  330,
  800,
  975,
  1150
);
square[28] = new Square("Водокачка", "$150", "#FFFFFF", 150, 2);
square[29] = new Square(
  "Сады Марвина",
  "$280",
  "#FFFF00",
  280,
  8,
  24,
  120,
  360,
  850,
  1025,
  1200
);
square[30] = new Square(
  "В тюрьму",
  "Идите прямо в тюрьму. Не проходите «Старт». Не получаете $200.",
  "#FFFFFF"
);
square[31] = new Square(
  "Тихоокеанская авеню",
  "$300",
  "#008000",
  300,
  9,
  26,
  130,
  390,
  900,
  110,
  1275
);
square[32] = new Square(
  "Авеню Северной Каролины",
  "$300",
  "#008000",
  300,
  9,
  26,
  130,
  390,
  900,
  110,
  1275
);
square[33] = new Square(
  "Общественная казна",
  "ВЫПОЛНИТЕ ИНСТРУКЦИИ НА КАРТЕ",
  "#FFFFFF"
);
square[34] = new Square(
  "Пенсильвания авеню",
  "$320",
  "#008000",
  320,
  9,
  28,
  150,
  450,
  1000,
  1200,
  1400
);
square[35] = new Square("Короткая линия", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Шанс", "ВЫПОЛНИТЕ ИНСТРУКЦИИ НА КАРТЕ", "#FFFFFF");
square[37] = new Square(
  "Парк Плейс",
  "$350",
  "#0000FF",
  350,
  10,
  35,
  175,
  500,
  1100,
  1300,
  1500
);
square[38] = new Square("Налог на роскошь", "Заплатите $100", "#FFFFFF");
square[39] = new Square(
  "Бордволк",
  "$400",
  "#0000FF",
  400,
  10,
  50,
  200,
  600,
  1400,
  1700,
  2000
);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card(
  "Выход из тюрьмы, бесплатно. Эту карту можно сохранить до необходимости или продать.",
  function (p) {
    p.communityChestJailCard = true;
    updateOwned();
  }
);
communityChestCards[1] = new Card(
  "Вы выиграли второе место на конкурсе красоты. Заберите $10.",
  function () {
    addamount(10, "Community Chest");
  }
);
communityChestCards[2] = new Card(
  "От продажи акций вы получаете $50.",
  function () {
    addamount(50, "Community Chest");
  }
);
communityChestCards[3] = new Card(
  "Страховка жизни погашена. Получите $100.",
  function () {
    addamount(100, "Community Chest");
  }
);
communityChestCards[4] = new Card(
  "Возврат налога на доход. Получите $20.",
  function () {
    addamount(20, "Community Chest");
  }
);
communityChestCards[5] = new Card("Фонд отпуска. Получите $100.", function () {
  addamount(100, "Community Chest");
});
communityChestCards[6] = new Card(
  "Вы получили наследство в размере $100.",
  function () {
    addamount(100, "Community Chest");
  }
);
communityChestCards[7] = new Card("Получите $25 за консультацию.", function () {
  addamount(25, "Community Chest");
});
communityChestCards[8] = new Card(
  "Оплатите госпитальные сборы $100.",
  function () {
    subtractamount(100, "Community Chest");
  }
);
communityChestCards[9] = new Card(
  "Ошибка банка в вашу пользу. Заберите $200.",
  function () {
    addamount(200, "Community Chest");
  }
);
communityChestCards[10] = new Card("Оплатите школьные сборы $50.", function () {
  subtractamount(50, "Community Chest");
});
communityChestCards[11] = new Card(
  "Гонорар врача. Заплатите $50.",
  function () {
    subtractamount(50, "Community Chest");
  }
);
communityChestCards[12] = new Card(
  "Это ваш день рождения. Получите по $10 от каждого игрока.",
  function () {
    collectfromeachplayer(10, "Community Chest");
  }
);
communityChestCards[13] = new Card(
  "Перейдите на «Старт» (Получите $200).",
  function () {
    advance(0);
  }
);
communityChestCards[14] = new Card(
  "Вы обязаны оплатить ремонт улиц. $40 за каждый дом. $115 за каждый отель.",
  function () {
    streetrepairs(40, 115);
  }
);
communityChestCards[15] = new Card(
  "Идите в тюрьму. Идите прямо в тюрьму. Не проходите «Старт». Не получаете $200.",
  function () {
    gotojail();
  }
);

chanceCards[0] = new Card(
  "Выход из тюрьмы бесплатно. Эту карту можно сохранить до необходимости или обменять.",
  function (p) {
    p.chanceJailCard = true;
    updateOwned();
  }
);
chanceCards[1] = new Card(
  "Сделайте общий ремонт всей вашей собственности. За каждый дом заплатите $25. За каждый отель $100.",
  function () {
    streetrepairs(25, 100);
  }
);
chanceCards[2] = new Card("Штраф за превышение скорости $15.", function () {
  subtractamount(15, "Chance");
});
chanceCards[3] = new Card(
  "Вы избраны председателем совета директоров. Заплатите каждому игроку $50.",
  function () {
    payeachplayer(50, "Chance");
  }
);
chanceCards[4] = new Card("Вернитесь на три клетки назад.", function () {
  gobackthreespaces();
});
chanceCards[5] = new Card(
  "Перейдите к ближайшей коммунальной службе. Если она не занята, вы можете купить её у банка. Если занята, бросьте кубики и заплатите владельцу в 10 раз больше выпавшего значения.",
  function () {
    advanceToNearestUtility();
  }
);
chanceCards[6] = new Card(
  "Банк выплачивает вам дивиденды в размере $50.",
  function () {
    addamount(50, "Chance");
  }
);
chanceCards[7] = new Card(
  "Перейдите к ближайшей железной дороге. Если она не занята, вы можете купить её у банка. Если занята, заплатите владельцу в два раза больше арендной платы.",
  function () {
    advanceToNearestRailroad();
  }
);
chanceCards[8] = new Card("Заплатите налог на бедность $15.", function () {
  subtractamount(15, "Chance");
});
chanceCards[9] = new Card(
  "Отправляйтесь на железную дорогу Ридинга. Если вы проходите «Старт», получите $200.",
  function () {
    advance(5);
  }
);
chanceCards[10] = new Card("Перейдите на Бордволк.", function () {
  advance(39);
});
chanceCards[11] = new Card(
  "Перейдите на Иллинойс авеню. Если вы проходите «Старт», получите $200.",
  function () {
    advance(24);
  }
);
chanceCards[12] = new Card(
  "Ваш строительный кредит погашен. Получите $150.",
  function () {
    addamount(150, "Chance");
  }
);
chanceCards[13] = new Card(
  "Перейдите к ближайшей железной дороге. Если она не занята, вы можете купить её у банка. Если занята, заплатите владельцу в два раза больше арендной платы.",
  function () {
    advanceToNearestRailroad();
  }
);
chanceCards[14] = new Card(
  "Перейдите на площадь Святого Чарльза. Если вы проходите «Старт», получите $200.",
  function () {
    advance(11);
  }
);
chanceCards[15] = new Card(
  "Идите в тюрьму. Идите прямо в тюрьму. Не проходите «Старт». Не получаете $200.",
  function () {
    gotojail();
  }
);

// Все необходимые строки теперь переведены на русский.
