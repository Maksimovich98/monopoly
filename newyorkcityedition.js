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

function corrections() {
  document.getElementById("cell24name").textContent = "Блумингдейлс";
}

function utiltext() {
  return "&nbsp;&nbsp;&nbsp;&nbsp;Если владеете одной «Коммунальной службой», аренда равна 4-кратному значению кубиков.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Если владеете обеими «Коммунальными службами», аренда равна 10-кратному значению кубиков.";
}

function transtext() {
  return '<div style="font-size: 14px; line-height: 1.5;">Аренда<span style="float: right;">$25</span><br />Если владеете 2 транспортными станциями<span style="float: right;">$50</span><br />Если 3<span style="float: right;">$100</span><br />Если 4<span style="float: right;">$200</span></div>';
}

function citytax() {
  var p = player[turn];

  if (p.human) {
    buttonAonclick =
      'hide("popupbackground"); hide("popupwrap"); var p=player[turn]; addalert(p.name+" заплатил $200 за городской налог."); p.pay(200, 0);';
    buttonBonclick =
      ' hide("popupbackground"); hide("popupwrap"); var p=player[turn]; var cost=p.money; for(var i=0; i<40; i++){sq=square[i]; if(sq.owner==turn) { if(sq.mortgage) { cost+=sq.price*0.5; } else { cost+=sq.price; } cost+=(sq.house*sq.houseprice); } } cost*=0.1; cost=Math.round(cost); addalert(p.name+" заплатил $"+cost+" за городской налог."); p.pay(cost,0);';

    popup(
      "Вы попали на городской налог. Вы должны заплатить $200 или 10% от общей стоимости.<div><input type='button' value='Заплатить $200' onclick='" +
        buttonAonclick +
        "' /><input type='button' value='Заплатить 10%' onclick='" +
        buttonBonclick +
        "' /></div>",
      false
    );
  } else {
    addalert(p.name + " заплатил $200 за городской налог.");
    p.pay(200, 0);
  }
}

function luxurytax() {
  addalert(
    player[turn].name + " заплатил $75 за попадание на налог на роскошь."
  );
  player[turn].pay(75, 0);

  $("landed").show().text("Вы попали на налог на роскошь. Заплатите $75.");
}

var square = [];

square[0] = new Square("Старт", "Получите $200 при прохождении", "white");
square[1] = new Square(
  "Автовокзал Port Authority",
  "$60",
  "#4B0082",
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
  "ВЫПОЛНИТЕ ИНСТРУКЦИИ С КАРТЫ",
  "white"
);
square[3] = new Square(
  "Линкольнский туннель",
  "$60",
  "#4B0082",
  60,
  3,
  4,
  20,
  60,
  180,
  320,
  450
);
square[4] = new Square("Городской налог", "Оплатите $200 или 10%", "white");
square[5] = new Square("ЛОМТО", "$200", "white", 200, 1);
square[6] = new Square(
  "Статуя Свободы",
  "$100",
  "#AACCFF",
  100,
  4,
  6,
  30,
  90,
  270,
  400,
  550
);
square[7] = new Square("Шанс", "NEW YORK LOTTERY GAMES", "white");
square[8] = new Square(
  "Эмпайр-стейт-билдинг",
  "$100",
  "#AACCFF",
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
  "Центральный Парк",
  "$120",
  "#AACCFF",
  120,
  4,
  8,
  40,
  100,
  300,
  450,
  600
);
square[10] = new Square("Просто в гостях", "", "white");
square[11] = new Square(
  "98.7 Kiss FM",
  "$140",
  "purple",
  140,
  5,
  10,
  50,
  150,
  450,
  625,
  750
);
square[12] = new Square("Con Edison Electric", "$150", "white", 150, 2);
square[13] = new Square(
  "Тринадцать WNET",
  "$140",
  "purple",
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
  "Нью-Йорк Таймс",
  "$160",
  "purple",
  160,
  5,
  12,
  60,
  180,
  500,
  700,
  900
);
square[15] = new Square("Транспорт Нью-Йорка", "$200", "white", 200, 1);
square[16] = new Square(
  "New York Rangers",
  "$180",
  "orange",
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
  "ВЫПОЛНИТЕ ИНСТРУКЦИИ С КАРТЫ",
  "white"
);
square[18] = new Square(
  "Нью-Йорк Никс",
  "$180",
  "orange",
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
  "Мэдисон Сквер Гарден",
  "$200",
  "orange",
  200,
  6,
  16,
  80,
  220,
  600,
  800,
  1000
);
square[20] = new Square("Бесплатная парковка", "", "white");
square[21] = new Square(
  "macy*s",
  "$220",
  "red",
  220,
  7,
  18,
  90,
  250,
  700,
  875,
  1050
);
square[22] = new Square("Шанс", "NEW YORK LOTTERY GAMES", "white");
square[23] = new Square(
  "ФАО Шварц",
  "$220",
  "red",
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
  "Блумингдейлс",
  "$240",
  "red",
  240,
  7,
  20,
  100,
  300,
  750,
  925,
  1100
);
square[25] = new Square("Метро-Норт Железная Дорога", "$200", "white", 200, 1);
square[26] = new Square(
  "Делойт & Touche LLP",
  "$260",
  "yellow",
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
  "СмитБарни",
  "$260",
  "yellow",
  260,
  8,
  22,
  110,
  330,
  800,
  975,
  1150
);
square[28] = new Square("Con Edison Газ", "$150", "white", 150, 2);
square[29] = new Square(
  "CITIBANK",
  "$280",
  "yellow",
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
  "Иди в тюрьму",
  "Идите прямо в тюрьму. Не проходите Старт. Не получаете $200.",
  "white"
);
square[31] = new Square(
  "Отель Regency",
  "$300",
  "green",
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
  "Эссекс Хаус",
  "$300",
  "green",
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
  "ВЫПОЛНИТЕ ИНСТРУКЦИИ С КАРТЫ",
  "white"
);
square[34] = new Square(
  "Плаза",
  "$320",
  "green",
  320,
  9,
  28,
  150,
  450,
  1000,
  1200,
  1400
);
square[35] = new Square("Юнайтед Эйрлайнс", "$200", "white", 200, 1);
square[36] = new Square("Шанс", "NEW YORK LOTTERY GAMES", "white");
square[37] = new Square(
  "Tiffany & CO.",
  "$350",
  "blue",
  350,
  10,
  35,
  175,
  500,
  1100,
  1300,
  1500
);
square[38] = new Square("Налог на роскошь", "Заплатите $75", "white");
square[39] = new Square(
  "Трамп Тауэр",
  "$400",
  "blue",
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
  "Выход из тюрьмы бесплатно. Эту карту можно сохранить до необходимости или обменять.",
  function () {
    p.communityChestJailCard = true;
    updateOwned();
  }
);
communityChestCards[1] = new Card(
  "Вы выиграли пожизненную доставку New York Times на дом. Получите $10",
  function () {
    addamount(10, "Community Chest");
  }
);
communityChestCards[2] = new Card(
  "От продажи акций Macy's вы получаете $45",
  function () {
    addamount(45, "Community Chest");
  }
);
communityChestCards[3] = new Card(
  "Выплата по страховке. Получите $100",
  function () {
    addamount(100, "Community Chest");
  }
);
communityChestCards[4] = new Card(
  "Возврат налогов Deloitte & Touche LLP. Получите $20",
  function () {
    addamount(20, "Community Chest");
  }
);
communityChestCards[5] = new Card(
  "Праздничный фонд FAO Schwarz. Получите $100",
  function () {
    addamount(100, "Community Chest");
  }
);
communityChestCards[6] = new Card(
  "Вы выиграли кругосветное путешествие от United Airlines! Получите $100",
  function () {
    addamount(100, "Community Chest");
  }
);
communityChestCards[7] = new Card(
  "Провели свадьбу в отеле Plaza. Получите $25",
  function () {
    addamount(25, "Community Chest");
  }
);
communityChestCards[8] = new Card("Заплатите больнице $100", function () {
  subtractamount(100, "Community Chest");
});
communityChestCards[9] = new Card(
  "Вы выиграли в лотерею! Получите $200",
  function () {
    addamount(200, "Community Chest");
  }
);
communityChestCards[10] = new Card(
  "Заплатите школьный налог $150",
  function () {
    subtractamount(150, "Community Chest");
  }
);
communityChestCards[11] = new Card("Оплата врача. Заплатите $50", function () {
  subtractamount(50, "Community Chest");
});
communityChestCards[12] = new Card(
  "Открытие Madison Square Garden сегодня вечером. Получите по $50 от каждого игрока.",
  function () {
    collectfromeachplayer(50, "Community Chest");
  }
);
communityChestCards[13] = new Card(
  "Вы выиграли Kiss Cash! Перейдите на Старт (Получите $200)",
  function () {
    advance(0);
  }
);
communityChestCards[14] = new Card(
  "Взыскание за ремонт улиц. $40 за дом, $115 за отель.",
  function () {
    streetrepairs(40, 115);
  }
);
communityChestCards[15] = new Card(
  "Идите в тюрьму. Идите прямо в тюрьму. Не проходите Старт. Не получаете $200.",
  function () {
    gotojail();
  }
);

chanceCards[0] = new Card(
  "Выход из тюрьмы бесплатно. Эту карту можно сохранить до необходимости или обменять.",
  function () {
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
chanceCards[2] = new Card("Заплатите налог на бедность $15.", function () {
  subtractamount(15, "Chance");
});
chanceCards[3] = new Card(
  "Вы избраны председателем Con Edison. Заплатите каждому игроку $50.",
  function () {
    payeachplayer(50, "Chance");
  }
);
chanceCards[4] = new Card("Отойдите на 3 клетки назад.", function () {
  gobackthreespaces();
});
chanceCards[5] = new Card(
  "Перейдите к ближайшей коммунальной службе Con Edison. Если не занята, её можно купить у банка. Если занята, бросьте кубики и заплатите владельцу в 10 раз больше выпадшего.",
  function () {
    advanceToNearestUtility();
  }
);
chanceCards[6] = new Card(
  "Citibank выплачивает дивиденды в размере $50.",
  function () {
    addamount(50, "Chance");
  }
);
chanceCards[7] = new Card(
  "Перейдите к ближайшей транспортной станции и заплатите владельцу в два раза больше арендной платы. Если станция не занята, её можно купить у банка.",
  function () {
    advanceToNearestRailroad();
  }
);
chanceCards[8] = new Card(
  "Прогуляйтесь мимо Essex House. Перейдите на Старт. Получите $200.",
  function () {
    advance(0, 32);
  }
);
chanceCards[9] = new Card(
  "Отправьтесь в поездку до отеля Regency! Если вы пройдёте Старт, получите $200.",
  function () {
    advance(31);
  }
);
chanceCards[10] = new Card(
  "Прогуляйтесь по Пятой авеню. Перейдите к Трамп Тауэр.",
  function () {
    advance(39);
  }
);
chanceCards[11] = new Card("Перейдите к тринадцатой клетке.", function () {
  advance(13);
});
chanceCards[12] = new Card(
  "Ваш фонд Smith Barney выплачивает дивиденды. Получите $150.",
  function () {
    addamount(150, "Chance");
  }
);
chanceCards[13] = new Card(
  "Перейдите к ближайшей транспортной станции и заплатите владельцу в два раза больше арендной платы.\n\nЕсли станция не занята, её можно купить у банка.",
  function () {
    advanceToNearestRailroad();
  }
);
chanceCards[14] = new Card(
  "Сядьте на автобус до Центрального Парка. Если пройдёте Старт, получите $200.",
  function () {
    advance(9);
  }
);
chanceCards[15] = new Card(
  "Идите прямо в тюрьму. Не проходите Старт, не получайте $200.",
  function () {
    gotojail();
  }
);
