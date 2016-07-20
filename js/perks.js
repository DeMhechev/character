/*
0.Название,1.Описание,
2.Уровней перка,3.Мин.ур. взятия,4.Макс.ур. взятия,5.Функция проверки требований
6.Функция взятия перка
*/
var perk = {	//(перк, уровней перка, мин уровень взятия, максимальный уровень взятия, [требования])
	PE_BONUS_HTH_ATTACKS: ["Доп. рукопашн. атаки", "Вы знакомы с тайными боевыми искусствами востока, и очень быстро дерётесь. Ваши рукопашные атаки занимают на 1 Очко Действия меньше.",
		1,15,29,function(n){return stats.AGI[2] >= 6;},
		function(){}],
	PE_BONUS_HTH_DAMAGE: ["Доп. рукопашн. повр.", "Большой опыт рукопашных схваток научил вас уделять внимание наносимым повреждениям. За каждый уровень этой способности вы получаете +3 к Рукопашным повреждениям.",
		3,30,99,function(n){return !("TRAIT_GOOD_NATURED" in mychar.traits) && stats.AGI[2] >= 6 && stats.STR[2] >= 6;},
		function(){pr.add("feats","mdmg",3);}],
	PE_BONUS_MOVE: ["Бонус движения", "За каждый уровень этой способности, раз в 10 секунд вы можете восполнить 1 Очко Действия. При использовании стимулятора у вас есть шанс восстановить 1 ОД.",
		2,3,29,function(n){return stats.AGI[2] >= 5;},
		function(){}],
	PE_BONUS_RANGED_DAMAGE: ["Бонус точности", "Ваши тренировки в обращении со стрелковым оружием сделали свое дело. Каждая ваша пуля наносит на (5+Удача/5) единиц урона больше.",
		1,3,29,function(n){return !("TRAIT_GOOD_NATURED" in mychar.traits) && stats.AGI[2] >= 6 && stats.LUC[2] >=4;},
		function(){}],
	PE_BONUS_RATE_OF_FIRE: ["Бонус скорости", "Вы нажимаете на курок немного быстрее. Время, расходуемое на атаку меньше на 1 ОД. Данная способность не распространяется на класс Инженерного оружия.",
		1,15,29,function(n){return stats.AGI[2] >= 7 && stats.INT[2] >= 6 && stats.PER[2] >= 6;},
		function(){}],
	PE_EARLIER_SEQUENCE: ["Быстрая реакция", "Враги всегда будут ошибаться, ведь прав тот, кто выстрелил первым. Поэтому ваш Порядок действий увеличивается на 4 с каждым уровнем этой способности.",
		2,3,29,function(n){return stats.PER[2] >= 7;},
		function(){pr.add("feats","proc",4);}],
	PE_FASTER_HEALING: ["Быстрое лечение", "Вы получаете +5 к уровню лечения, таким образом, ваши раны быстрее заживают. Суперстимуляторы добавляют вам на 15 ХП больше при лечении.",
		1,9,29,function(n){return stats.ENU[2] >= 8;},
		function(){pr.add("feats","levh",5);}],
	PE_MORE_CRITICALS: ["Больше крит. атак", "С каждым уровнем этой способности, вероятность нанесения Критических повреждений противнику увеличена на 8%.",
		2,3,29,function(n){return stats.PER[2] >= 6 && stats.LUC[2] >= 2;},
		function(){pr.add("feats","crit",8);}],
	PE_RAD_RESISTANCE: ["Уст. к радиации", "Вы лучше переносите сильное воздействие радиации на организм. Каждый уровень этой способности добавляет +15% к Устойчивости к радиации.",
		2,30,99,function(n){return stats.ENU[2] >= 6 && stats.INT[2] >= 4;},
		function(){pr.add("feats","srad",15);}],
	PE_TOUGHNESS: ["Крутизна", "Крутизна позволяет чувствовать себя под защитой. За каждый уровень этой способности вы получаете +8% к Резисту от нормы, огня, взрыва и Сопротивляемость урона от нормы на 2 единицы.",
		1,3,29,function(n){return /*!checkperk("PE_CULT_OF_PERSONALITY") &&*/ !checkperk("PE_MENTAL_BLOCK") && stats.ENU[2] >= 6 && stats.STR[2] >= 8;},
		function(){pr.addr("normal",2,10);pr.addr("fire",0,8);pr.addr("explode",0,8);}],
	PE_STRONG_BACK: ["Переноска", "Способность таскать тяжелые грузы - далеко не лишняя в условиях пустыни. Прибавляет 100 кг к Максимальному весу и +35% к Атлетизму.",
		3,3,29,function(n){return stats.STR[2] >= 6 && stats.ENU[2] >= 6;},
		function(){pr.add("feats","maxl",100);pr.add("skills","speed",35,1);}],
	PE_SHARPSHOOTER: ["Меткость", "Искусство попадать в цель с большого расстояния. При определении дистанции вы получаете +2 к Восприятию и +6 к Дальности обзора.",
		1,9,29,function(n){return stats.PER[2] >= 7 && stats.INT[2] >= 6;},
		function(){pr.add("feats","oview",6);}],
	PE_SILENT_RUNNING: ["Бесшумный бег", "Теперь вы будете двигаться быстро, не издавая больше шума. Ранее это было совершенно неосуществимо в силу технических причин. Несовместим с перком - Снайпер.",
		1,12,29,function(n){return !checkperk("PE_ADW_MET") && !checkperk("PE_SNIPER") && stats.AGI[2] >= 7 && (n||skills.sneak[0]>=150);},
		function(){}],
	PE_SURVIVALIST: ["Исследователь", "Привычка к долгой жизни в пустыне выработала у вас невероятную живучесть. С каждым уровнем этой способности вы получаете +25% к навыку Скиталец.",
		3,30,99,function(n){return stats.ENU[2] >= 6 && stats.INT[2] >= 6 && (n||skills.ranger[0] >= 40);},
		function(){pr.add("skills","ranger",25,1);}],
	PE_MASTER_TRADER: ["Торговля", "Вы стараетесь покупать товары по низким ценам, торгуясь до изнеможения. Вам даётся 25% скидка при покупке товаров.",
		1,30,99,function(n){return (n||skills.trade[0] >= 200);},
		function(){}],
	PE_EDUCATED: ["Образование", "У вас отличное образование. Вы получаете +50 очков распределения.",
		1,3,29,function(n){return stats.INT[2] >= 7;},
		function(){charp.points+= 50;}],
	PE_HEALER: ["Лечение", "Излечение страждущих легче дается вам с этой способностью. Вы получаете +50 ХП бонуса при использовании санитара, и +5 к суперстимулятору.",
		1,6,29,function(n){return stats.PER[2] >= 1 && stats.AGI[2] >= 1 && stats.INT[2] >= 1 && (n||skills.orderly[0] >= 40);},
		function(){}],
	PE_BETTER_CRITICALS: ["Лучшие крит. атаки", "Причиняемые вашему противнику Критические удары более смертоносны. Вы получаете (10+Удача)% бонус для возможных Крит. повреждений, хотя Вероятность их нанесения не увеличивается.",
		1,9,29,function(n){return stats.PER[2] >= 6 && stats.AGI[2] >= 4;},
		function(){}],
	PE_SLAYER: ["Дробила", "Все атаки ближнего боя (рукопашная и холодное оружие) - критические (100% шанс на критический урон в ближнем бою). Шанс избежать критического попадания - 10%.",
		1,15,29,function(n){return stats.AGI[2] >= 7 && stats.STR[2] >= 6 && (n||skills.melee[0] >= 80);},
		function(){}],
	PE_SNIPER: ["Снайпер", "Любое попадание в цель из оружия может стать Критическим ударом. Шанс нанести Крит. урон по формуле (УД*3). -1 ОД на прицельный выстрел. +20 к Классу Брони.",
		1,15,29,function(n){return !checkperk("PE_ATTACK") && !checkperk("PE_SILENT_RUNNING") && !checkperk("PE_TERMINATOR") && !checkperk("PE_DEFENCE") && !("TRAIT_SKILLED" in mychar.traits);},
		function(){pr.add("feats","crit",stats.LUC[2]*3);pr.add("feats","armc",20);}],
	PE_SILENT_DEATH: ["Наемный убийца", "Когда вы крадетесь и бьете противника в спину, вы будете наносить двойные Повреждения при атаке Без оружия.",
		1,15,29,function(n){return !("TRAIT_GOOD_NATURED" in mychar.traits) && stats.AGI[2] >= 10 && (n||skills.doctor[0] >= 100) && stats.LUC[2] >= 6;},
		function(){}],
	PE_ACTION_BOY: ["Человек действия", "Человек действия все операции совершает бегом, наподобие новобранца. Это придает ему дополнительных 2 Очка Действия, которые можно использовать в любых целях.",
		1,15,29,function(n){return !checkperk("PE_ATTACK") && !checkperk("PE_QUICK_RECOVERY") && stats.AGI[2] >= 6;},
		function(){pr.add("feats","apoi",2);}],
	PE_LIFEGIVER: ["Сила жизни", "Вы получаете дополнительно +65 Очков жизней. Xоть это и немного, всякое случается, а вдруг пригодится.",
		1,12,29,function(n){return stats.ENU[2] >= 4;},
		function(){pr.add("feats","live",65);}],
	PE_DODGER: ["Увертливость", "Во время боя в вас будет гораздо сложнее попасть. Независимо от одетых на вас в этот момент доспехов, вы получаете +5 к Классу Брони и 10% к Увороту.",
		1,6,29,function(n){return stats.AGI[2] >= 6;},
		function(){pr.add("feats","armc",5);pr.add("feats","dodge",10);}],
	PE_SNAKEATER: ["Змееглот", "Любые отравляющие вещества действуют на вас крайне ослаблено. Каждый уровень этой способности добавляет +25% к Устойчивости к яду.",
		2,30,99,function(n){return stats.ENU[2] >= 3;},
		function(){pr.add("feats","stox",25);}],
	PE_MR_FIXIT: ["Самоделкин", "Данная способность дает вам бонус к навыкам Наука и Ремонт на 20%, а также возможность определять количество поломок амуниции.",
		1,3,32,function(n){return (n||skills.repair[0] >= 40 && skills.science[0] >= 40);},
		function(){pr.add("skills","repair",20,1);pr.add("skills","science",20,1);}],
	PE_MEDIC: ["Медик", "Знание медицины дает вам бонус к навыкам Санитар и Доктор на 10%. Хорошее лечение - залог успеха.",
		1,3,32,function(n){return (n||skills.orderly[0] >= 40 && skills.doctor[0] >= 40);},
		function(){pr.add("skills","orderly",10,1);pr.add("skills","doctor",10,1);}],
	PE_MASTER_THIEF: ["Вор-профессионал", "Вы стали профессионалом своего дела. +40% к навыкам Воровство и Взлом замков.",
		1,30,99,function(n){return (n||skills.steal[0] >= 50 && skills.hack[0] >= 50);},
		function(){pr.add("skills","steal",40,1);pr.add("skills","hack",40,1);}],
	PE_SPEAKER: ["Болтливость", "Болтун - находка для врага! С каждым уровнем этой способности вы получаете +10% к навыку Красноречие.",
		4,30,99,function(n){return stats.INT[2] >= 4;},
		function(){pr.add("skills","oratory",10,1);}],
	PE_HEAVE_HO: ["Метание", "При расчете максимальной дальности броска, Сила персонажа не учитывается. Урон от Метательного оружия увеличен на 15%.",
		1,3,29,function(n){return true;},
		function(){}],
	PE_PICKPOCKET: ["Карманник", "Ваши способности шарить по чужим карманам увеличиваются. Теперь вы можете не обращать внимание на направление взгляда и размер одежды вашего клиента.",
		1,30,99,function(n){return stats.AGI[2] >= 8 && (n||skills.steal[0] >= 80);},
		function(){}],
	PE_GHOST: ["Привидение", "Вы научились быть более незаметным, словно призрак. Вы восполняете 1 ОД раз в 10 секунд. Также получаете +40% к Скрытности.",
		1,6,29,function(n){return (n||skills.sneak[0] >= 100);},
		function(){pr.add("skills","sneak",40,1);}],
	PE_EXPLORER: ["Непоседа", "Смысл жизни непоседы заключается в поисках новых, интересных мест. Ваши шансы найти нечто необычное увеличиваются, как и Очки жизней (Сила*5).",
		1,6,29,function(n){return true;},
		function(){pr.add("feats","live",stats.STR[2]*5);}],
	PE_PATHFINDER: ["Следопыт", "Следопыт всегда находит кратчайший путь до места назначения. С этим бонусом время ваших переходов по Глобальной Карте уменьшено на 25%.",
		1,3,29,function(n){return stats.ENU[2] >= 6 && (n||skills.ranger[0] >= 40);},
		function(){}],
	PE_SCOUT: ["Скаут", "Увеличивает на одну клетку радиус трекинга и открытия черных клеток Глобальной Карты. Увеличивает шанс найти уникальную локацию.",
		1,30,99,function(n){return stats.ENU[2] >= 8;},
		function(){}],
	PE_MYSTERIOUS_STRANGER: ["Ветеран", "В течении жизни вы прошли многое на своем пути и благодаря опыту получаете +35 ХП. Ваша меткость при прицельной стрельбе максимальная.",
		1,12,29,function(n){return stats.LUC[2] >= 2;},
		function(){pr.add("feats","live",35);}],
	PE_RANGER: ["Рейнджер", "Ваш навык Скиталец повышается на 15%. Увеличивается вероятность избежать встреч в пустыне или наоборот - отыскать там что-то полезное.",
		1,30,99,function(n){return stats.PER[2] >= 6;},
		function(){pr.add("skills","ranger",15,1);}],
	PE_QUICK_POCKETS: ["Оптимизация", "Вам удалось рассовать свои вещи по карманам так, чтобы они всегда были под рукой. Теперь на перезарядку оружия тратится на 1 Очко Действия меньше.",
		1,3,29,function(n){return stats.AGI[2] >= 5;},
		function(){}],
	PE_SWIFT_LEARNER: ["Самоучка", "Вы можете извлекать из всего большую пользу, чем кто-либо другой. С каждым уровнем этой способности вы получаете на 15% больше опыта.",
		3,3,29,function(n){return stats.INT[2] >= 6;},
		function(){}],
	PE_ADRENALINE_RUSH: ["Кровопийца", "Обстоятельно изучив кровь, вы получаете +30 ХП. Также каждая атака по цели восстановит (4+ВС) Очков здоровья. При использовании навыка Санитар, вы снимаете с себя эффект Нагрева.",
		1,12,29,function(n){return stats.ENU[2] > 6;},
		function(){pr.add("feats","live",30);}],
	PE_CAUTIOUS_NATURE: ["Бдительность", "Вы бдительны и настойчивы. Ваш Обзор увеличивается, а при определении положения на местности, ваше Восприятие +3 единицы. +1 ОД при промахе.",
		1,3,29,function(n){return stats.PER[2] >= 6;},
		function(){pr.add("feats","oview",3);}],
	PE_COMPREHENSION: ["Наблюдательность", "При чтении вы обращаете особенное внимание на мелкие детали (+1 Интеллект). Читая книгу, вы получаете +1% к случайному Навыку, а также +200 опыта.",
		1,3,29,function(n){return stats.INT[2] < 7;},
		function(){mychar.stats.INT[1]++;}],
	PE_DEMOLITION_EXPERT: ["Эксперт подрывник", "В обращении со взрывчаткой, вы настоящий профессионал. Ваши заряды всегда детонируют вовремя, имеют большой радиус и наносят больше урона.",
		1,30,99,function(n){return stats.AGI[2] >= 4 && (n||skills.traps[0] >= 75);},
		function(){}],
	PE_GAMBLER: ["Атлет", "Выше! Быстрее! Сильнее! Усиленные тренировки не проходят даром. +60% к навыку Атлетизм.",
		1,3,29,function(n){return (n||skills.speed[0] >= 50);},
		function(){pr.add("skills","speed",60,1);}],
	PE_GAIN_STRENGTH: ["Получить силу", "Этот бонус повышает на одно очко вашу Силу и добавляет +20 Очков жизней.",
		1,6,29,function(n){return stats.STR[2] < 10;},
		function(){mychar.stats.STR[1]++;pr.add("feats","live",20);}],
	PE_GAIN_PERCEPTION: ["Получить восприятие", "Этот бонус повышает на одно очко ваше Восприятие и добавляет +20 Очков жизней.",
		1,6,29,function(n){return stats.PER[2] < 10;},
		function(){mychar.stats.PER[1]++;pr.add("feats","live",20);}],
	PE_GAIN_ENDURANCE: ["Получить выносливость", "Этот бонус повышает на одно очко вашу Выносливость и добавляет +20 Очков жизней.",
		1,6,29,function(n){return stats.ENU[2] < 10;},
		function(){mychar.stats.ENU[1]++;pr.add("feats","live",20);}],
	PE_GAIN_CHARISMA: ["Получить обаяние", "Этот бонус повышает на одно очко ваше Обаяние и добавляет +20 Очков жизней.",
		1,6,29,function(n){return stats.CHA[2] < 10;},
		function(){mychar.stats.CHA[1]++;pr.add("feats","live",20);}],
	PE_GAIN_INTELLIGENCE: ["Получить интеллект", "Этот бонус повышает на одно очко ваш Интеллект и добавляет +20 Очков жизней.",
		1,6,29,function(n){return stats.INT[2] < 10;},
		function(){mychar.stats.INT[1]++;pr.add("feats","live",20);}],
	PE_GAIN_AGILITY: ["Получить ловкость", "Этот бонус повышает на одно очко вашу Ловкость и добавляет +20 Очков жизней.",
		1,6,29,function(n){return stats.AGI[2] < 10;},
		function(){mychar.stats.AGI[1]++;pr.add("feats","live",20);}],
	PE_GAIN_LUCK: ["Получить удачу", "Этот бонус повышает на одно очко вашу Удачу и добавляет +20 Очков жизней.",
		1,6,29,function(n){return stats.LUC[2] < 10;},
		function(){mychar.stats.LUC[1]++;pr.add("feats","live",20);}],
	PE_HARMLESS: ["Безвредность", "Ваш невинный вид позволяет вам успешно красть у людей вещи. Вы получаете +40% к навыку Воровство.",
		1,30,99,function(n){return (n||skills.steal[0] >= 50);},
		function(){pr.add("skills","steal",40,1);}],
	PE_HERE_AND_NOW: ["Специалист", "Ваш лимит изученных знаний увеличивается на 500. Кроме того, вы сразу получаете еще один Уровень опытности.",
		1,30,99,function(n){return true;},
		function(){levelup();}],
	PE_HTH_EVADE: ["Верткость", "Вы чувствуете, когда надо дернуться с места, природная ловкость помогает вам в этом. Процент Уклонения от атаки увеличивается на: (МаксОД/3)+(ТекущОД/2).",
		1,3,29,function(n){return stats.AGI[2] >= 6 && stats.CHA[2] >= 2;},
		function(){}],
	PE_KAMA_SUTRA_MASTER: ["Спортсмен", "Занятия активными видами спорта не прошли даром. Вы получаете +40 Очков жизней и +8 к Классу Брони.",
		1,12,29,function(n){return stats.ENU[2] >= 8 && stats.STR[2] >= 8;},
		function(){pr.add("feats","live",40);pr.add("feats","armc",8);}],
	PE_LIGHT_STEP: ["Легкие шаги", "Вы ловки, удачливы и всегда настороже. Этот бонус вдвое уменьшает шансы на то, что поставленная на вас ловушка сработает. Резист к взрыву увеличен на +25%.",
		1,9,29,function(n){return stats.AGI[2] >= 5;},
		function(){pr.addr("explode",0,25);}],
	PE_LIVING_ANATOMY: ["Анатомия жизни", "Вы хорошо представляете себе внутреннее строение живых существ, их силы и слабости. При атаке вы наносите на 10 Урона больше. Кроме того, вы получаете +20% к навыку Доктор.",
		1,12,29,function(n){return !("TRAIT_GOOD_NATURED" in mychar.traits) && stats.PER[2] >= 7 && (n||skills.doctor[0] >= 80);},
		function(){pr.add("skills","doctor",20,1);}],
	PE_MAGNETIC_PERSONALITY: ["Привлекательность", "Игрок может водить с собой в группе дополнительно 2-х человек без проверки на Обаяние, но не забывайте, что больше пяти - это уже толпа.",
		1,30,99,function(n){return stats.CHA[2] < 10;},
		function(){}],
	PE_NEGOTIATOR: ["Негоциант", "С этим умением вы можете попробовать договориться до чего угодно, имея бонус 20% к навыкам Торговля и Красноречие.",
		1,30,99,function(n){return (n||skills.trade[0] >= 200);},
		function(){pr.add("skills","oratory",20,1);pr.add("skills","trade",20,1);}],
	PE_PACK_RAT: ["Запаковка", "Вы научились компактно раскладывать вещи в инвентаре. +22 кг к Максимальному весу.",
		1,30,99,function(n){return true;},
		function(){pr.add("feats","maxl",22);}],
	PE_PYROMANIAC: ["Пироманьяк", "Вы отлично управляетесь с огнем. Если тип повреждений - огонь, то: +30 бонусного урона, +12 конечного урона. Значительно усиливает эффекты поджигания.",
		1,9,29,function(n){return !("TRAIT_GOOD_NATURED" in mychar.traits) && stats.INT[2] > 3;},
		function(){}], // Мастер огня
	PE_QUICK_RECOVERY: ["Прыгучесть", "Вы очень быстро встаете после того, как вас собьют с ног. Реакция и гибкость добавляют вам 1 Очко Действия. Несовместим с Человеком Действия.",
		1,3,29,function(n){return !checkperk("PE_ACTION_BOY") && stats.AGI[2] >= 5;},
		function(){pr.add("feats","apoi",1);}],
	PE_SALESMAN: ["Продажа", "Вы умеете отлично продавать и покупать. С этой способностью вы на 40% повышаете свой навык Торговля.",
		1,30,99,function(n){return (n||skills.trade[0] >= 240);},
		function(){pr.add("skills","trade",40,1);}],
	PE_STONEWALL: ["Человек-глыба", "Ваш шанс избежать Критическое попадание увеличивается на 40% (не работает с Терминатором). Вероятность того, что вас собьют с ног, уменьшается вдвое.",
		1,3,29,function(n){return stats.STR[2] >= 6;},
		function(){}],
	PE_THIEF: ["Вор", "В ваших жилах течет кровь истинного вора. Вы повышаете на 25% свои навыки Взлом замков, Воровство, Ловушки, а также на 10% навык Скрытность.",
		1,3,32,function(n){return true;},
		function(){pr.add("skills","sneak",10,1);pr.add("skills","hack",25,1);pr.add("skills","steal",25,1);pr.add("skills","traps",25,1);}],
	PE_WEAPON_HANDLING: ["Обращение с оружием", "Вы можете носить и использовать оружие мощнее, чем остальные. Для этой цели ваша Сила считается на 3 единицы больше.",
		1,51,99,function(n){return stats.AGI[2] >= 5;},
		function(){}],
	PE_TERMINATOR: ["Терминатор", "Вы не знаете, что такое Переломы конечностей, Слепота и Нокдауны! Все Критические эффекты игнорируются в зависимости от ваших Силы и Выносливости (СЛ+ВН)*5.",
		1,15,29,function(n){return !checkperk("PE_SNIPER") && !checkperk("PE_ATTACK") && !("TRAIT_SKILLED" in mychar.traits);},
		function(){}],
	PE_COMPUSTER: ["Золотые руки", "Вам больше не понадобится установка для создания некоторых вещей. Открывает новые возможности в сфере крафта.",
		1,30,99,function(n){return stats.INT[2] >= 8 && stats.STR[2] >= 8 && (n||skills.science[0] >= 160 && skills.repair[0] >= 150);},
		function(){}],
	PE_OFFICER: ["Офицер", "Вы умеете управлять большим отрядом бойцов. Вы получаете +30 ХП, а также срез урона на 5%. Используется выносливость при расчете группы.",
		1,15,29,function(n){return stats.PER[2] >= 7 && stats.INT[2] >= 7 && (n||skills.ranger[0] >= 100);},
		function(){pr.add("feats","live",30);}],
	PE_PRO_UDAR: ["Проникающий удар", "От мощных ударов противника не спасет даже толстый слой брони. Большая часть защитных свойств любой экипировки игнорируется, если у вас в руках что-то есть.",
		1,15,29,function(n){return stats.STR[2] >= 10 && (n||skills.melee[0] >= 100 && skills.steel[0] >= 100)},
		function(){}],
	PE_NIGHT_VISION: ["Иммунитет", "У вас очень высокий иммунитет. Из конечного урона по вам вычитается величина вашей природной Силы.",
		1,12,29,function(n){return stats.STR[2] >= 6 && stats.INT[2] >= 8},
		function(){}],
	PE_MENTAL_BLOCK: ["Стойкость", "Вы очень сильны и устойчивы. Вы получаете +25 ХП и +5% ко всем Резистам. Нельзя взять Отличника или Крутизну.",
		1,12,29,function(n){return !checkperk("PE_CULT_OF_PERSONALITY") && !checkperk("PE_TOUGHNESS")  && stats.STR[2] >= 8 && stats.INT[2] >= 8},
		function(){pr.add("feats","live",25);for(i in resist)pr.addr(i,0,5);}],
	PE_MUTATE: ["Мутация", "Радиация пустыни изменила вас! Вы получаете +30 Очков жизней и +60 очков распределения.",
		1,12,29,function(n){return stats.AGI[2] >= 7 && stats.CHA[2] >= 1},
		function(){pr.add("feats","live",30);charp.points+= 60;}],
	PE_EMPATHY: ["Двуличный", "Люди даже не подозревают, что может скрывать приятная внешность. Наносимые вами повреждения увеличиваются на 6 едениц.",
		1,3,29,function(n){return !("TRAIT_GOOD_NATURED" in mychar.traits) && stats.CHA[2] >= 6;},
		function(){}],
	PE_BOOKWORM: ["Регенерация", "Пассивное востановление ХП в режиме боя. Тик регенерации меньше в 2 раза. С каждым тиком есть шанс вылечить травму. При -ОД, Од возвращается в 0. +10 уровень лечения.",
		1,15,29,function(n){return stats.CHA[2] >= 7 && stats.INT[2] >= 6},
		function(){pr.add("feats","levh",10);}],
	PE_AWARENESS: ["Осведомленность", "Вы замечаете больше деталей в окружающем вас мире и людях. Можно увидеть количество Очков здоровья у противника и тип его оружия.",
		1,3,29,function(n){return stats.PER[2] >= 5;},
		function(){}],
	PE_FORTUNE_FINDER: ["Воодушевление", "Каждый Уворот от вражеской атаки прибавляет вам жизненной энергии (+40 к Очкам жизней).",
		1,12,29,function(n){return stats.AGI[2] >= 7 && stats.PER[2] >= 6},
		function(){}],
	PE_FRIENDLY_FOE: ["Фанат дробовиков", "Вас с детства тянет к дробовикам (+30% к Легкому оружию, +20% к Ремонту). При выстреле с дробовика, при очереди, добавляется +4 к каждой пуле, при одиночном +10 к конечному урону.",
		1,6,29,function(n){return (n||skills.light[0] >= 160) && stats.INT[2] >= 6},
		function(){pr.add("skills","light",30,1);pr.add("skills","repair",20,1);}],
	PE_SCROUNGER: ["Полевой медик", "Вы обладаете огромными знаниями по медицине. +20% к навыку Санитар, +30% к навыку Доктор. +3 Удачи при лечении навыком Санитар.",
		1,12,29,function(n){return (n||skills.orderly[0] >= 120 && skills.doctor[0] >= 100)},
		function(){pr.add("skills","orderly",20,1);pr.add("skills","doctor",30,1);}],
	PE_FLOWER_CHILD: ["Полевой санитар", "Восстановление навыка Санитар меньше на 4 секунды. При лечении санитаром добавляются (ИН+УД)*2 дополнительные ХП, а также можно восстановить все ХП с шансом (Удача*4).",
		1,6,29,function(n){return (n||skills.orderly[0] >= 60 && skills.doctor[0] >= 40)},
		function(){}],
	PE_ANIMAL_FRIEND: ["Удачный промах", "При уклонении (перком или если шанс попасть по вам выше 70%), есть шанс восполнить все свои ОД (ЛВ/2+ОБ+ВС)%. Если вероятность не выпала, то восстановите 1 ОД.",
		1,15,29,function(n){return stats.AGI[2] >= 6 && stats.INT[2] >= 8},
		function(){}],
	PE_CULT_OF_PERSONALITY: ["Отличник", "За каждый уровень этой способности вы получаете +6% к Резисту от лазера, плазмы, и +8% от электричества.",
		1,3,29,function(n){return /*!checkperk("PE_TOUGHNESS") &&*/ !checkperk("PE_MENTAL_BLOCK") && stats.PER[2] >= 7 && stats.INT[2] >= 8},
		function(){pr.addr("plasma",0,6);pr.addr("electro",0,8);pr.addr("laser",0,6);}],
	PE_ADD_ATAC: ["Дополнительные атаки", "Отдача от оружия никогда не была для вас проблемой. При выстреле с вероятностью в 20% есть шанс восстановить 2 Очка Действия.",
		1,9,29,function(n){return stats.AGI[2] >= 7 && stats.INT[2] >= 7},
		function(){}],
	PE_BIVALIY: ["Крепкий Орешек", "Вы получаете возможность ослабить по вам Крит. повреждения, но не Вероятность избежать этого. Минус к критроллу по формуле: -(ВС*5). Крит. урон по вам режется как при 10 удачи.",
		1,12,29,function(n){return stats.STR[2] >= 4 && stats.INT[2] >= 7},
		function(){}],
	PE_NAPROLOM: ["Бывалый", "Вы знаток оружия. +10% к навыку Легкое оружие, Тяжелое оружие, Энергетическое оружие. +15% к навыку Рукопашная и Холодное оружие.",
		1,3,32,function(n){return stats.INT[2] >= 5 && stats.CHA[2] >= 1},
		function(){pr.add("skills","light",10,1);pr.add("skills","heavy",10,1);pr.add("skills","energy",10,1);pr.add("skills","melee",15,1);pr.add("skills","steel",15,1);}],
	PE_SUPPORTER: ["Огневая поддержка", "Стрельба очередями \"Подавляет\" врага. Увеличен радиус Дымовой и Газовой завесы, и область поджигания Кокт. \"Молотова\". Также вы получате +20% к навыку Метательное.",
		1,18,29,function(n){return (n||skills.thrown[0] >= 100) && stats.PER[2] >= 7 && stats.AGI[2] >= 7;},
		function(){pr.add("skills","thrown",20,1);}],
	PE_COMBAT_ENGINEER: ["Боевой Инженер", "Вы настолько преуспели в инженерном деле, что теперь можете применять эти навыки в бою. Вы получаете +20% к навыку Ремонт и вам доступны особые виды вооружения.",
		1,15,29,function(n){return stats.INT[2] >= 8 && stats.PER[2] >= 6 && (n||skills.repair[0] >= 140 && skills.science[0] >= 140)},
		function(){pr.add("skills","repair",20,1);}], 
	PE_DERMAL_IMPACT: ["Живчик", "Вы имеете повышенную живучесть (+40 ХП) и природное лечение (+7 к Уровню лечения).",
		1,12,29,function(n){return stats.ENU[2] >= 8 && stats.CHA[2] >= 3},
		function(){pr.add("feats","live",40);pr.add("feats","levh",7);}],
	PE_RAGE: ["Зарядка", "Привычка заниматься зарядкой по утрам, выработалась у вас давно. С каждым уровнем этой способности ваши Очки здоровья возрастают на 5 единицы.",
		1,30,99,function(n){return !checkperk("PE_HARD");},
		function(){pr.add("feats","live",5);}],
	PE_DEFENCE: ["Рефлексы", "Ваши рефлексы повышены и неприцельно вы стреляете быстрее. -1 ОД на не прицельный выстрел. Нельзя взять Снайпера и Быстрого стрелка. Не работает с инженерным оружием.",
		1,12,29,function(n){return stats.PER[2] >= 5 && stats.ENU[2] >= 8 && !("TRAIT_FAST_SHOT" in mychar.traits) && !checkperk("PE_SNIPER")},
		function(){}],
	PE_ATTACK: ["Неудержимый", "Вы неудержимы. Получаете +4 Од и +10% к урону. Нельзя взять Снайпера, Терма, Человека действия.",
		1,15,29,function(n){return !checkperk("PE_SNIPER") && !checkperk("PE_TERMINATOR") && !("TRAIT_SKILLED" in mychar.traits);}, // 10% к урону А
		function(){pr.add("feats","apoi",4);}],
	PE_HARD: ["Закалка", "Ваш организм подготовлен к быстрому лечению в сложных условиях. С каждым уровнем этой способности ваш Уровень лечения возрастает на 5 единицы.",
		1,30,99,function(n){return !checkperk("PE_RAGE");},
		function(){pr.add("feats","levh",5);}],
	PE_VIEW: ["Репликант", "Репликация снимает все эффекты, а также становится бесплатной.",
		1,9,29,function(n){return stats.STR[2] >= 4;},
		function(){}],
	PE_SMOOTH_TALKER: ["Опыт торговли", "Ваш опыт торговли (0-300). При малом опыте вы все равно будете покупать дорого. Опыт торговли не может превышать ваш навык Торговли.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_IRON_MAN: ["Железный человек", "С этой способностью Вы получаете гораздо меньше урона.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_PRESENCE: ["Охранник", "Вы находитесь в своем городе, а дома и стены помогают. Вы получаете +4% ко всем Резистам.",
		1,1,1,function(n){return 0;},
		function(){for(i in resist)pr.addr(i,0,4);}],
	PE_ADW_MET: ["Эксперт-метатель", "Вы прекрасно обращаетесь со всеми видами Метательного оружия, что позволяет наносить противнику на 35% больше повреждений. Не совместим с Бесшумным Бегом.",
		1,1,1,function(n){return !("TRAIT_GOOD_NATURED" in mychar.traits) && !checkperk("PE_SILENT_RUNNING") /*&& stats.AGI[2] >= 6*/ && (n||skills.thrown[0] >= 180)},
		function(){}],
	PE_KARMA_BEACON: ["Исполнительность", "Вы выполнили ежедневное задание и получаете бонус 20 единиц к Очкам жизней.",
		1,1,1,function(n){return 0;},
		function(){pr.add("feats","live",20);}],
	PE_TAG: ["Умение", "Взяв данный бонус, вы можете выбрать какое-либо Умение дополнительно. Оно будет повышаться примерно в 2 раза быстрее.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_VAULT_CITY_TRAINING: ["Стажировка в Городе-Убежище", "Вы прошли курс обучения медицине у лучших специалистов Города-Убежище.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_EXPERT_EXCREMENT: ["Спец по уборке экскрементов", "Вы научились убирать дерьмо за браминами лучше, чем кто-либо.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_JINXED_II: ["Дурной глаз", "Xорошая сторона дела заключается в том, что враги вокруг вас часто ошибаются. Плохо то, что вы ошибаетесь не меньше их!",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_GECKO_SKINNING: ["Скорняк", "Вы освоили принципы разделки ящеров и легко обдираете их, чтобы получить ценные шкуры.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_VAULT_CITY_INOCULATIONS: ["Прививки из Города-Убежище", "Вы получили 10 процентов сопротивляемости к отравлению и радиации.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_DERMAL_IMPACT_ENH: ["Улучшенная подкожная броня", "Вы получили усиленную защиту от атак физического характера.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_PHOENIX_IMPLANTS: ["Подкожная защита", "Вы чуть реже подвергаетесь ущербу от энергетических атак.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_PHOENIX_IMPLANTS_ENH: ["Улучшенная подкожная защита", "Вы имеете большую дополнительную защиту против энергетических атак.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_NCR_PERCEPTION: ["Операция доктора Клауса: Восприятие", "После операции, проведенной Доктором Клаусом из НКР, ваш шанс крита +4%.",
		1,1,1,function(n){return 0;},
		function(){mychar.stats.PER[1]++;}],
	PE_NCR_ENDURANCE: ["Операция доктора Клауса: Сила", "После операции, проведенной Доктором Клаусом из НКР, ваша антикрит +4%.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_NCR_BARTER: ["Секреты мастерства: Бартер", "Вы смогли многому научиться у торговца в Дене. Ваш навык Торговли повышен на 5%.",
		1,1,1,function(n){return 0;},
		function(){pr.add("skills","trade",5,1);}],
	PE_NCR_REPAIR: ["Секреты мастерства: Ремонт", "Механик Модока ознакомил вас с новой технологией починки оружия. Ваш навык Ремонта повышен на 5%.",
		1,1,1,function(n){return 0;},
		function(){pr.add("skills","repair",5,1);}],
	PE_DRIVER: ["Водитель", "Вы настолько освоили автомобиль, что можете возить в нём кого угодно.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_BISNES_RENO: ["Смотрящий", "Вы теперь один из смотрящих за бизнесом в Нью-Рено.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_IMP1: ["Боевой имплантант", "В вас вживлен экспериментальный имплантант. Ваши боевые навыки увеличены.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_IMP2: ["Медицинский имплантант", "В вас вживлен экспериментальный имплантант. Ваши познания в медицине увеличены.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_IMP3: ["Вспомогательный имплант", "В вас вживлен экспериментальный имплантант. Ваши вспомогательные функции увеличены.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_CHAT_OPERATOR: ["Оператор чата", "Вы всё видите и слышите, ведь вы - оператор чата.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_DA_NORMAL: ["Мастер урона", "Вы освоили огнестрельное оружие, и наносите на 2% больше Урона по цели с каждым уровнем мастера. Добродушный -2% повреждений.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_DA_LASER: ["Мастер лазера", "Вы освоили лазерное оружие, и наносите на 1% больше Урона по цели с каждым уровнем мастера. Добродушный -2% повреждений.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_DA_FIRE: ["Мастер огня", "Вы освоили обращение с огнем, и получаете +2 к тикам с каждым уровнем мастера. Добродушный -2% повреждений.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_DA_PLASMA: ["Мастер плазмы", "Вы освоили плазменное оружие, и получаете +5 к тикам с каждым уровнем мастера. Добродушный -2% повреждений.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_DA_ELECTRO: ["Мастер электричества", "Вы освоили электро-оружие, и получаете шанс 4% уменьшить ОД врага на 1 единицу с каждым уровнем мастера. Добродушный -2% повреждений.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_DA_EMP: ["Мастер импульса", "Вы настолько освоили своё оружие, что наносите на 3% больше Урона с каждым уровнем этой способности.",
		1,1,1,function(n){return 0;},
		function(){}],
	PE_DA_EXPLODE: ["Мастер взрыва", "Вы освоили все виды взрывов, и получаете шанс 10% увеличить Радиус взрыва на 1 единицу с каждым уровнем мастера. Добродушный -2% повреждений.",
		1,1,1,function(n){return 0;}]
}

function testperk(ss) {
	ss = ss===undefined ? 40 : ss;
	var m = {n: 0,sum: 0,arr: [],max: 0};
	for(var i in stats)	stats[i][2]=1;
	while(1){
		stats.STR[2]++;
		if(stats.STR[2]>10) {stats.STR[2]=1;stats.PER[2]++;}
		if(stats.PER[2]>10) {stats.PER[2]=1;stats.ENU[2]++;}
		if(stats.ENU[2]>10) {stats.ENU[2]=1;stats.CHA[2]++;}
		if(stats.CHA[2]>10) {stats.CHA[2]=1;stats.INT[2]++;}
		if(stats.INT[2]>10) {stats.INT[2]=1;stats.AGI[2]++;}
		if(stats.AGI[2]>10) {stats.AGI[2]=1;stats.LUC[2]++;}
		if(stats.LUC[2]>10)	return m;
		m.sum = 0;
		for(var i in stats)	m.sum += stats[i][2];
		if(m.sum!=ss) continue;
		m.n = 0;
		for(var i in perk)if(perk[i][5](1)&&perk[i][4]===29||perk[i][4]===32)m.n++;
		if(m.n>m.max){m.max = m.n;m.arr = [];for(var i in stats)m.arr.push(stats[i][2]);}
	}
}
