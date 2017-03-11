var nameman = ["Август","Авенир","Аврорий","Адам","Адонис","Алевтин","Алексей","Альберт","Альбин","Альфред","Андрей","Анисий","Антоний","Антонин","Антуан","Аполлон","Аргент","Аркадий","Арсен","Арсений","Артемий","Артур","Атеист","Бажен","Богдан","Боеслав","Боримир","Борис","Будимир","Булат","Вадим","Валерий","Вальтер","Василий","Велорий","Виктор","Вилен","Виталий","Витольд","Влад","Владлен","Воин","Воислав","Володар","Волемир","Всемил","Гаврил","Гаррий","Гелий","Гений","Георгий","Герман","Гертруд","Глеб","Гордий","Горимир","Гранит","Давид","Дамир","Дан","Данил","Дар","Денис","Джозеф","Джон","Дионис","Добрыня","Дональт","Донат","Евгений","Евдоким","Егор","Ефим","Ждан","Захар","Зиновий","Зорий","Ибрагим","Иван","Игорь","Сидор","Июлий","Казимир","Карл","Касьян","Киприан","Кир","Кирилл","Клавдий","Клемент","Клим","Козьма","Лазарь","Ларион","Леонард","Леонид","Леонтий","Лука","Лукиан","Любим","Любомир","Люциан","Май","Маеслав","Макарий","Макс","Максим","Милий","Милонег","Мир","Мирон","Михайло","Модест","Моисей","Монолит","Назарий","Натан","Наум","Неон","Неонил","Нестер","Никандр","Норд","Овидий","Одиссей","Октябрь","Олег","Орест","Осип","Павел","Панфил","Пётр","Прохор","Радий","Радим","Радомир","Сава","Савелий","Свет","Светлан","Север","Северин","Северян","Семён","Сергей","Сталий","Стефан","Тарас","Тристан","Трофим","Фаддей","Фёдор","Федор","Феликс","Филимон","Филипп","Флегонт","Флоренц","Флорин","Фрол","Храбр","Христоф","Эдуард","Эльбрус","Энергий","Эрнст","Юлиан","Юрий","Януарий","Ярополк"];

var namewoman = ["Агата","Агния","Аза","Аида","Акулина","Аксинья","Алёна","Алиса","Алла","Альбина","Анжела","Анисья","Анита","Анна","Антония","Анфуса","Ариадна","Арина","Арсения","Астра","Астрид","Аэлита","Бажена","Беата","Бела","Белла","Берта","Богдана","Валерия","Ванда","Варвара","Венера","Вера","Веста","Видана","Вилена","Влада","Гайя","Галина","Ганна","Гелена","Глория","Дайна","Дана","Дария","Дарина","Дарьяна","Дия","Диана","Диния","Добрава","Домина","Доротея","Ева","Евгения","Евдокия","Елена","Евфимия","Жанна","Ждана","Зорина","Зинаида","Зиновия","Злата","Зоя","Иванна","Илария","Инга","Инесса","Инна","Иоанна","Иона","Ипатия","Ираида","Ироида","Ирина","Исидора","Искра","Ия","Кирилла","Клавдия","Клара","Ксения","Лада","Лариса","Лениана","Ленина","Леонида","Леонила","Леонтия","Леся","Ливия","Лидия","Лилиана","Лилия","Лина","Любава","Любовь","Людмила","Магда","Мадлен","Мая","Марина","Марья","Мари","Марта","Марфа","Матрона","Меланья","Милада","Милица","Мира","Мирра","Млада","Муза","Надежда","Надия","Нелли","Неонила","Ника","Нина","Нинель","Новелла","Нора","Оксана","Олеся","Олимпия","Ольга","Павла","Павлина","Полина","Радмила","Раиса","Ревмира","Регина","Рената","Римма","Рогнеда","Роза","Розалия","Розана","Руслана","Руфь","Савина","Соломея","Свобода","Селина","Слава","Славяна","Снежана","София","Стелла","Сосанна","Сюзанна","Таира","Таисия","Тамара","Томила","Татьяна","Ульяна","Устинья","Фелиция","Феодора","Флавия","Флория","Фотина","Харита","Хиония","Эльвира","Эльмира","Эльза","Эмма","Эрика","Юлиана","Юнона","Ядвига","Яна","Янина","Яромира"];

var mod = ["Все перки","Выбранные перки"];

// Название, описание, сумма
var stats = {   
	STR: ["Cила","Грубая физическая сила. Хорошо подходит для воинов и им подобных. Оказывает влияние на Очки Жизней, наносимые Повреждения и Переноску Груза.",0],
	PER: ["Восприятие","Способность иначе видеть, слышать и замечать события. Необходимое качество для каждого снайпера. Оказывает влияние на Дальность стрельбы и Порядок действий.",0],
	ENU: ["Выносливость","Выносливость помогает переносить тяготы и лишения судьбы героя с подобающим спокойствием. Оказывает влияние на Очки Жизней, Устойчивость к Яду и Радиации, Уровень Лечения и др.",0],
	CHA: ["Обаяние","Обаяние - это комбинация внешности и шарма. Подходит для персонажей, которые всего добиваются словами. Влияет на реакцию людей и цены товаров.",0],
	INT: ["Интелект","Интеллект отвечает за память, скорость реакции и способность оценивать события. Влияет на количество очков умений на уровень, режимы диалога и многое др.",0],
	AGI: ["Ловкость","Ловкость и координация движений могут спасти вас от верной гибели. В ловкости нуждается каждый персонаж. Влияет на Очки Действия, Класс Брони, Порядок действий и многое др.",0],
	LUC: ["Удача","Степень воздействия теории вероятностей на вашу судьбу. Высокая или низкая удачливость часто определяют, как вам повезет в игре, и как будут развиваться дальнейшие события.",0]
};

// навык, кр.название, название, описание
var skills = {		
	light: 	[0,"легкое","Легкое оружие","Использование,починка и общие знания по стрелковому оружию. Пистолетам,автоматам и винтовкам."],
	heavy: 	[0,"тяжелое","Тяжелое оружие","Умение работать с тяжелым вооружением. Ручные и многоствольные пулеметы,гранатометы,огнеметы и тому подобное."],
	energy:	[0,"энерго","Энергооружие","Способность эффективно применять энерго-оружие. Ведение огня из различных лазерных и плазменных орудий."],
	melee: 	[0,"рукопашка","Рукопашная","Сочетание боевых искусств,знание рукопашного боя и навыков самообороны позволяют вам драться используя только руки и ноги."],
	steel: 	[0,"холодное","Холодное оружие","Использование разных подручных средств в ближнем бою. Ножи,дубинки,копья,кувалды,ломы и тому подобный хлам."],
	thrown: [0,"метательное","Метательное оружие","Способность успешно применять метательные средства. Копья,гранаты,коктейли Молотова и прочее."],
	orderly:[0,"санитар","Санитар","Общие познания в области первой медицинской помощи. Способность лечиться от мелких порезов,царапин и прочего. По игре способность восстанавливает больше жизней,чем просто отдых."],
	doctor: [0,"доктор","Доктор","Излечение тяжелых ранений и умение обращаться с поврежденными частями тела. Без этой способности для излечения будет требоваться очень много времени."],
	sneak: 	[0,"сник","Скрытность","Тихое передвижение и способность оставаться незамеченным. В случае успеха вас будет гораздо тяжелее обнаружить. Вы не можете одновременно бежать и красться."],
	hack: 	[0,"взлом","Взлом замков","Умение открывать двери,даже не имея подходящего ключа. Использование отмычек или электронных устройств сильно улучшает жизненные перспективы."],
	steal: 	[0,"воровство","Воровство","Часто вы оказываетесь в состоянии позаимствовать чужие вещи без ведома владельца. Неплохо для воровской карьеры."],
	traps: 	[0,"ловушки","Ловушки","Способность обнаруживать и обезвреживать ловушки. Кроме того,установка зарядов взрывчатого вещества."],
	science:[0,"наука","Наука","Большое количество научного знания,включая работу с компьютером,биологию,физику и геологию помогут в дальнейшем."],
	repair: [0,"ремонт","Ремонт","Практическое применение научных знаний. Ремонт и создание снаряжения,разнообразных механизмов,электроники и оружия."],
	oratory:[0,"красноречие","Красноречие","Способность общаться с людьми и использовать принципы риторики на практике. Интуиция,позволяющая отличать ложь от правды."],
	trade: 	[0,"торговля","Торговля","Умение торговать. Можно повысить только бартером с торговцем,после чего растёт Опыт торговли. С ростом Опыта торговли,растёт и сам навык."],
	speed: 	[0,"атлетизм","Атлетизм","Вы много занимамались атлетикой,что дало вам возможность быстрее двигаться."],
	ranger: [0,"скиталец","Скиталец","Вы не остаетесь подолгу в закрытом помещении,а всегда в дороге. Вы многое знаете о зверях,птицах,растениях и пустыне."]
};

var textbook = {
	light: "Легкое оружие",
	energy: "Энергетическое оружие",
	orderly: "Первая помощь",
	science: "Наука",
	repair: "Ремонт",
	ranger: "Скиталец",
	prewar: "Довоенки"
};
// параметр, название, описние
var feat = { 
    acrit:  [0,"антикрит",""],
	dodge:	[0,"улонение",""],
	live: 	[0,"жизни",""],
	armc: 	[0,"класс брони",""],
	apoi: 	[0,"ОД",""],
	maxl: 	[0,"макс груз",""],
	mdmg: 	[0,"рукоп повр",""],
	oview: 	[0,"радиус обзора",""],
	stox: 	[0,"уст к яду",""],
	srad: 	[0,"уст к рад",""],
	proc: 	[0,"порядок",""],
	levh: 	[0,"уров лечения",""],
	crit: 	[0,"шанс на крит",""]
};
// Резисты
var resist = {
	normal:		["Норма",""],
	laser:		["Лазер",""],
	fire:		["Огонь",""],
	plasma:		["Плазма",""],
	explode:	["Взрыв",""],
	electro:	["Электро",""]
};

var statlvl = ["Error","Гадко", "Плохо","Низко","Непл.","Средн.","Хорош.","Высок.","Отлич.","Круто","Герой!"];
var sextext = {	men: "МУЖ.", women: "ЖЕН."};

var anytext = {
	training: "Прокачка персонажа",
	msgerror: "Не распределены special point или не тагнуты 3 навыка!",
	perks: "Перки: ",
	lvl: "Уровень ",
	lvl2: " уровень:",
	lvl3: " ур:",
	dop: "Дополнительно",
	bonus: "Бонусы",
	quest: "Квесты",
	treb: "Требования:",
	net: "нет",
	traits: "Трейты: ",
	nav: "Навыки: ",
	procnav: "Прокаченные навыки:",
	imp: "Импланты:",
	book: "Книги:",
	nosave: "Сохранения временно не работают."
}

var questinfo = {
	imp_battle: ["+30% к навыку легкое оружие, +3 к точности.", 
				 "+30% к навыку тяжелое оружие, +3 к точности.", 
				 "+30% к навыку энергетическое оружие, +3 к точности.", 
				 "+30% к навыку метательное оружие, -2 секунды к выход из боя.", 
				 "+20% к навыку ремонт, +3 к точности.", 
				 "+20% к навыку рукопашного боя и холодного оружия, +3 к точности."],
	imp_medical: ["+35% к навыку первая помощь, +40 хп при исцелении союзника.", 
				  "+10 хп, +3 к увороту, +5ас.", 
				  "+20% доктора, +10 хп, +15 к уровню лечения.", 
				  "+20% доктора, -2 секунды кд на санитар, иммунитет к кровотечению.", 
				  "+20% к навыку первая помощь, +25 хп при отхиле санитара.", 
				  "+20% доктора, +10 к лечению суперстимуляторами."],
	imp_auxiliary: ["+100кг переносимого веса.", 
					"+25% к скорости движения по глобальной карте. + 50 при проверке навыка скитальца при трекинге.", 
					"+80% к навыку ловушки, +20% к навыку скрытность.", 
					"+50% к красноречию, перк Репликант.", 
					"+10% к навыку воровство и взлом, видны нр противника", 
					"+40% к навыку атлетизм."],
	drayfild: ["Все боевые +5%", "Рукопашная +10%", "Холодное оружие +10%", "Легкое оружие +10%", "Тяжелое оружие +10%", "Энергетическое оружие +10%", "Первая помощь и Доктор +5%"],
	per_ncr: ["+4% к криту", "+4% к антикриту"]
}

var texttraits = {
	TRAIT_FAST_METABOLISM: ["Быстрый метаболизм", "Ваш метаболизм превышает норму. Вам дается +50 ХП, 20 к уровню лечения, не в боевом режимы вы восстанавливаете жизни за 10 секунд. Но при этом вы сильно подвержены яду и радиации."],
	TRAIT_BRUISER: ["Крушила", "Двигаетесь помедленнее, но выглядите внушительно. Меньше на 1 ОД, -30 к критроллу, но зато +3 Силы и +25 к рукопашным повреждениям."],
	TRAIT_SMALL_FRAME: ["Xилое тело", "Вы не в состоянии таскать тяжелые грузы, зато более проворны. Вам дается +1 Ловкость и +5% к увороту."],
	TRAIT_ONE_HANDER: ["Однорукий", "Вы отлично стреляете из любого одноручного оружия (+60 к навыку при расчетах, +7 к урону и игнор штрафа на силу). С двуручным уже есть проблемы (-40 к навыку при расчетах)"],
	TRAIT_FINESSE: ["Точность", "Точно, но слабо. +20% к шансу критической атаки. -10 к проверке на силу критического эффекта при атаке по вам. Но -5% к общему урону."],
	TRAIT_KAMIKAZE: ["Камикадзе", "Вы прете напролом. +1 Ловкость, также каждые 10 секунд восполняется 1 ОД. Если не в бою - атака отнимет на 2 ОД меньше. КБ снижается до 1. Игнорируется эффект \"Подавление\"."],
	TRAIT_HEAVY_HANDED: ["Вор", "Холодное одноручное оружие и метательные ножи наносит +10 конечного урона. Уровень лечения +20. Бонусы для вора. Но. Точность стрелкового и двуручного оружия делится пополам. Вы не можете критовать."],
	TRAIT_FAST_SHOT: ["Быстрый стрелок", "У вас нет времени для нормального прицеливания. Атаки стрелковым и метательным оружием требуют меньше на 1 ОД."],
	TRAIT_BLOODY_MESS: ["Маньяк", "По странной случайности, все вокруг вас умирают страшной и мучительной смертью. Для них вы находите худший вариант кончины. +175% Атлетизма, но -25 Очков жизней."],
	TRAIT_JINXED: ["Дурной глаз", "Xорошая сторона дела заключается в том, что ваши враги часто ошибаются. Плохо то, что вы ошибаетесь не меньше их!"],
	TRAIT_GOOD_NATURED: ["Добродушие", "Ваши боевые навыки меньше, но зато небоевые - больше. Вы всегда думаете о защите, а не нападении (мастер-перки режут урон по вам, а не добавляют к вашему)"],
	TRAIT_CHEM_RELIANT: ["Химик", "Наркотики держатся в три раза дольше. Откаты почти мгновенные. Если появится привыкание, то оно будет длиться долго."],
	TRAIT_CHEM_RESISTANT: ["Стабильный", "Вы критически не попадаете, но и не промахиваетесь критически. Все ваши атаки очень точны (+25 бонуса к окончательной точности. +1 ВС)."],
	TRAIT_SEX_APPEAL: ["Жидкое тело", "Вы получаете Сопротивляемость к Урону (-10), увеличение вашего Максимального веса на 50 кг. Стимуляторы и санитар не действуют в полную мощь (-20 ХП при лечении)."],
	TRAIT_SKILLED: ["Умелец", "Параметры персонажа улучшены (+2 ВН, ОБ, ИН, ЛВ, +60 антикрита,+15 к критшансу). Но перки даются - один за каждые четыре уровня и вы не можете взять уберперки."],
	TRAIT_NIGHT_PERSON: ["Импульсивный", "Вы очень активны, и это добавляет вам 2 ОД и 30% шанс восстановить 1 ОД при перезарядке, но вы получаете на 3 Очков умений меньше за каждый уровень. Также +20% к Метательному."]
}

var textquest = {
	medals:["Медали","Делая различные квесты и убивая гуманоидов и животных можно получить немного медалей, которые можно потратить на различные бонусы."],
	PE_NCR_REPAIR:["Секреты мастерства: Ремонт", "Механик Модока ознакомил вас с новой технологией починки оружия. Ваш навык Ремонта повышен на 5%."],
	ranger_smile:["Скиталец у Смайли", "Смайли по доброте душевно соврешенно бесплатно может прокачать скитальца до 60-69%"],
	ranger_slim:["+2% скиталец","За небольшую плату в 100 монеток Слим из Кламата разкажет много интересного об охоте на гекко."],
	melee_klam:["Рукопашка +30%", "В охотничих угодьях Кламата бывший боксер может обучить приемам рукопашного боя за небольшую услугу."],
	hp_den:["+3 hp в Дене", "Священник в церквушке Дена может укрепить ваше здоровье, если вы спросите его про дела церкви."],
	light_den:["Легкое оружие в Яме", "При наличии нбольшой суммы в размере 3к монеток можно поднять легкое оружие на 5%"],
	overviewq:["+1 обзора в Яме","При хорошей репутации в Дене и выполнении парочки несложных заданий отца Клиффа, можно получить от него чудодейственное благословление."],
	quest_arroyo:["Квесты в Арройо","В процесе набора репутации в Арройо можно получить +1% торговли, +5% ловушки и +1% скитальца, а при наборе 20 репутации Катрин будет рада обучить взлому, так если бы вы прочитали 3 книги по взлому."],
	per_ncr:["+4% анти/крит в НКР","При хорошей репутации в НКР местный доктор согласится сделать операцию всего за каких-то 50к монеток."],
	cha_vc:["+1 Обояние в ГУ", "Если найти голодиск с инструкциями по пластической хирургии для докторши в ГУ, то она с радостью сделает вам операцию."],
	ac_12:["+12 AC (Класс брони)","Джеймс из Нью-Рено попросит выполнить вас несколько заданий, за это он обучит вас лучше уклоняться, +12 класс брони."],
	ap_vc:["+1 ОД (ГУ)","За прохождение цепочки квестов на гвардейца в ГУ можно пройти дополнительную боевую подготовку."],
	ap_hack:["+1 ОД (взлом)","За уничтожение лагеря рейдеров Риана научит вас двигаться быстрее."],
	heavy_bh:["+5% тяжа и рукопашной в БХ","За небольшую пикантную услугу Маркус обучит вас владению тяжелым оружием и правильно бить в дыню."],
	skill_geck:["+3% боевые в Гекко","За небольшое пожертвование местный мэр обучит вас боевым навыкам."],
	trade_den:["+5% торговли","Выполнив все задания Джеймса в Яме можно обучиться у него торговле."],
	trade_mod:["+7% торговли","Став почетным гражданином Модока можно обучится торговли у местного мера."],
	trade_up:["Торговля до 40%","У некоторых каравано в пустоши можно прокачать торговлю до 40% по 1к монеток за 1%."],
	steel_reno:["Холодное оружие +10%", "В Нью-Рено у младшего Мордино можно научится приемам с ножом всего за 200 монет."],
	valerie_letter:["Письмо Валери", "Легкое оружие +10% и Ремонт +10%"],
	drayfild:["НеоАрк","Кароче праходим значит убиваим асу и жука получаем ништяки на выбор. (все равно это никто не читает)"],
	imp_battle:["Боевой имплант","В вас вживлен один из эксперементальных имплантантов. Ваши боевые навыки увеличены."],
	imp_medical:["Медицинский имплант","В вас вживлен один из эксперементальных имплантантов. Ваши познания в медицине увеличены."],
	imp_auxiliary:["Вспомогательный имплант","В вас вживлен один из эксперементальных имплантантов. Ваши вспомогательные функции увеличены."],
	PE_MA_SKIT:["Житель Пустоши(5)", "Вы настолько изучили пустошь, что получаете +5% к навыку Скиталец и передвигаетесь по Пустоши на 5% быстрее с каждым уровнем этой способности."],
	PE_MA_REM:["Опытный ремонтник(5)", "Вы настолько часто ремонтировали, что получаете +3% к навыку Ремонт и +1% к навыку Наука с каждым уровнем этой способности."],
	PE_MA_FIX:["Опытный инженер(5)", "Вы настолько часто изобретали, что получаете +3% к навыку Наука и +1% к навыку Ремонт с каждым уровнем этой способности."],
	PE_MA_AID:["Опытный врач(5)", "Вы настолько часто лечили, что получаете +2% к навыку Санитар и +2% к навыку Доктор с каждым уровнем этой способности."]
}

var dialog = {
	medals: {
		amedals: "1 очко распределения(3 медали)",
		cmedals: "+15 к грузоподьемности(5 медалей)",
		bmedals: "1 очко жизней(10 медалей)",
		fmedals: "+10 очков распределения(10 медалей)",
		gmedals: "+150 очков распределения(150 медалей)",
	},
	drayfild: "По поводу награды, есть два варианта: первый - ускоренный курс бойца, узнаешь много всего, но по чуть-чуть. Или второй вариант - специализация на определенном оружии или пелевой поддержке. Что выберешь?",
	drynone: "Эм... я еще не готов к знаниям.", 
	none: "Ничего", 
	med: "У вас ",
	med2: " медалей выберите награду:",
	per_ncr: "Выберите награду за квест НКР:",
	imp_battle: "Выберите бовевой имплант:",
	imp_medical: "Выберите медицинский имплант:",
	imp_auxiliary: "Выберите вспомогательный имплант:"
}

var textperk = {
	PE_BOOKWORM: ["Регенерация", "Пассивное восстановление ХП в режиме боя. Тик регенерации 10 секунд. С каждым тиком есть шанс вылечить травму. При -ОД, Од возвращается в 0. +30 уровень лечения."],
	PE_AWARENESS: ["Осведомленность", "Вы замечаете больше деталей в окружающем вас мире и людях. Можно увидеть количество Очков здоровья у противника и тип его оружия."],
	PE_BONUS_HTH_ATTACKS: ["Доп. рукопашн. атаки", "Вы знакомы с тайными боевыми искусствами востока, и очень быстро дерётесь. Ваши рукопашные атаки занимают на 1 Очко Действия меньше."],
	PE_BONUS_HTH_DAMAGE: ["Доп. рукопашн. повр.", "Большой опыт рукопашных схваток научил вас уделять внимание наносимым повреждениям. За каждый уровень этой способности вы получаете +3 к Рукопашным повреждениям."],
	PE_BONUS_MOVE: ["Бонус движения", "За каждый уровень этой способности, раз в 10 секунд вы можете восполнить 1 Очко Действия. При использовании стимулятора у вас есть шанс восстановить 1 ОД."],
	PE_BONUS_RANGED_DAMAGE: ["Бонус точности", "Ваши тренировки в обращении со стрелковым оружием сделали свое дело. Выстрелы очередью приносят больше урона((15+Удача*2)%)."],
	PE_BONUS_RATE_OF_FIRE: ["Бонус скорости", "Вы нажимаете на курок немного быстрее. Время, расходуемое на атаку меньше на 1 ОД. Данная способность не распространяется на класс Инженерного оружия."],
	PE_EARLIER_SEQUENCE: ["Быстрая реакция", "Враги всегда будут ошибаться, ведь прав тот, кто выстрелил первым. Поэтому ваш Порядок действий увеличивается на 4 с каждым уровнем этой способности."],
	PE_FASTER_HEALING: ["Быстрое лечение", "Вы получаете +10 к уровню лечения, таким образом, ваши раны быстрее заживают. Суперстимуляторы добавляют вам на 15 ХП больше при лечении."],
	PE_MORE_CRITICALS: ["Больше крит. атак", "С каждым уровнем этой способности, вероятность нанесения Критических повреждений противнику увеличена на 8%."],
    PE_NIGHT_VISION: ["Иммунитет", "У вас очень высокий иммунитет. Из конечного урона по вам вычитается величина вашей природной Силы."],
    PE_PRESENCE: ["Охранник", "Вы находитесь в своем городе, а дома и стены помогают. Вы получаете +4% ко всем Резистам."],
	PE_RAD_RESISTANCE: ["Уст. к радиации", "Вы лучше переносите сильное воздействие радиации на организм. Каждый уровень этой способности добавляет +15% к Устойчивости к радиации."],
	PE_TOUGHNESS: ["Крутизна", "Крутизна позволяет чувствовать себя под защитой. За каждый уровень этой способности вы получаете +7% к Резисту от нормы, огня, взрыва и Сопротивляемость урона от нормы на 1 единицу."],
	PE_STRONG_BACK: ["Переноска", "Способность таскать тяжелые грузы - далеко не лишняя в условиях пустыни. Прибавляет 100 кг к Максимальному весу и +35% к Атлетизму."],
	PE_SHARPSHOOTER: ["Меткость", "Искусство попадать в цель с большого расстояния. При определении дистанции вы получаете +2 к Восприятию и +6 к Дальности обзора."],
	PE_SILENT_RUNNING: ["Бесшумный бег", "Теперь вы будете двигаться быстро, не издавая больше шума. Ранее это было совершенно неосуществимо в силу технических причин. Несовместим с перком - Снайпер."],
	PE_SURVIVALIST: ["Исследователь", "Привычка к долгой жизни в пустыне выработала у вас невероятную живучесть. С каждым уровнем этой способности вы получаете +25% к навыку Скиталец."],
	PE_MASTER_TRADER: ["Торговля", "Вы стараетесь покупать товары по низким ценам, торгуясь до изнеможения. Вам даётся 25% скидка при покупке товаров."],
	PE_EDUCATED: ["Образование", "У вас отличное образование. Вы получаете +50 очков распределения."],
	PE_HEALER: ["Лечение", "Излечение страждущих легче дается вам с этой способностью. Вы получаете +50 ХП бонуса при использовании санитара, и +5 к суперстимулятору."],
    PE_FORTUNE_FINDER: ["Воодушевление", "+5 к Увороту. Каждый Уворот от вражеской атаки прибавляет вам жизненной энергии (+40 к Очкам жизней) и активности (+1 ОД). "],
	PE_BETTER_CRITICALS: ["Лучшие крит. атаки", "Причиняемые вашему противнику Критические удары более смертоносны. Вы получаете (10+Удача)% бонус для возможных Крит. повреждений, хотя Вероятность их нанесения не увеличивается."],
    PE_EMPATHY: ["Двуличный", "Люди даже не подозревают, что может скрывать приятная внешность. Наносимые вами повреждения увеличиваются на 6 едениц."],
	PE_SLAYER: ["Дробила", "Все атаки ближнего боя (рукопашная и холодное оружие) - критические (100% шанс на критический урон в ближнем бою). Шанс избежать критического попадания - 10%."],
	PE_SNIPER: ["Снайпер", "Любое попадание в цель из оружия может стать Критическим ударом. Шанс нанести Крит. урон по формуле (УД*3). -1 ОД на прицельный выстрел. +20 к Классу Брони."],
	PE_SILENT_DEATH: ["Хитрость", "Вы хитры в своих действиях. +25 хп, +5 к увороту, +50 к атлетизму.  Уходя в сник, вы выходите из боевого режима, при условии, что вы одеты в кожанку (боевая)."],
	PE_ACTION_BOY: ["Человек действия", "Человек действия все операции совершает бегом, наподобие новобранца. Это придает ему дополнительных 2 Очка Действия, которые можно использовать в любых целях."],
    PE_MENTAL_BLOCK: ["Стойкость", "Вы очень сильны и устойчивы. Вы получаете +25 ХП и +5% ко всем Резистам. Нельзя взять Отличника или Крутизну."],
	PE_LIFEGIVER: ["Сила жизни", "Вы получаете дополнительно +65 Очков жизней. Xоть это и немного, всякое случается, а вдруг пригодится."],
	PE_DODGER: ["Увертливость", "Во время боя в вас будет гораздо сложнее попасть. Независимо от одетых на вас в этот момент доспехов, вы получаете +5 к Классу Брони и 10% к Увороту."],
	PE_SNAKEATER: ["Змееглот", "Любые отравляющие вещества действуют на вас крайне ослаблено. Каждый уровень этой способности добавляет +25% к Устойчивости к яду."],
	PE_MR_FIXIT: ["Самоделкин", "Данная способность дает вам бонус к навыкам Наука 20% и Ремонт на 10%, а также возможность определять количество поломок амуниции."],
	PE_MEDIC: ["Медик", "Знание медицины дает вам бонус к навыкам Санитар и Доктор на 10%. Хорошее лечение - залог успеха."],
	PE_MASTER_THIEF: ["Вор-профессионал", "+40 Воровства и Взлом замков. У вас не ломаются отмычки при взломе. Регенерация в снике каждые 10 сек. При воровстве 200 можно открывать ящики монтировкой."],
	PE_SPEAKER: ["Болтливость", "Болтун - находка для врага! С каждым уровнем этой способности вы получаете +10% к навыку Красноречие."],
	PE_HEAVE_HO: ["Метание", "При расчете максимальной дальности броска, Сила персонажа не учитывается. Урон от Метательного оружия увеличен на 15%."],
    PE_FRIENDLY_FOE: ["Фанат дробовиков", "Вас с детства тянет к дробовикам (+30% к Легкому оружию, +20% к Ремонту). При выстреле с дробовика, при очереди, добавляется +4 к каждой пуле, при одиночном +10 к конечному урону."],
	PE_PICKPOCKET: ["Карманник", "Ваши способности шарить по чужим карманам увеличиваются. Теперь вы можете не обращать внимание на направление взгляда и размер одежды вашего клиента."],
	PE_GHOST: ["Привидение", "Вы научились быть более незаметным, словно призрак. Вы восполняете 1 ОД раз в 10 секунд. Также получаете +40% к Скрытности."],
    PE_CULT_OF_PERSONALITY: ["Отличник", "За каждый уровень этой способности вы получаете +6% к Резисту от лазера, плазмы, и +8% от электричества."],
    PE_SCROUNGER: ["Полевой медик", "Вы обладаете огромными знаниями по медицине. +20% к навыку Санитар, +30% к навыку Доктор. +3 Удачи при лечении навыком Санитар."],
	PE_EXPLORER: ["Непоседа", "Смысл жизни непоседы заключается в поисках новых, интересных мест. Ваши шансы найти нечто необычное увеличиваются, как и Очки жизней (Сила*5)."],
    PE_FLOWER_CHILD: ["Полевой санитар", "Восстановление навыка Санитар меньше на 4 секунды. При лечении санитаром добавляются (ИН+УД)*2 дополнительные ХП, а также можно восстановить все ХП с шансом (Удача*4)."],
	PE_PATHFINDER: ["Следопыт", "Следопыт всегда находит кратчайший путь до места назначения. С этим бонусом время ваших переходов по Глобальной Карте уменьшено на 25%."],
	PE_ANIMAL_FRIEND: ["Удачный промах", "При промахе или увороте по вам, вы восстанавливаете все ОД с вероятностью (ЛВ+ОБ+ВО)% При условии не менее 70% точности противника."],
	PE_SCOUT: ["Скаут", "Увеличивает на одну клетку радиус трекинга и открытия черных клеток Глобальной Карты. Увеличивает шанс найти уникальную локацию."],
	PE_MYSTERIOUS_STRANGER: ["Ветеран", "В течении жизни вы прошли многое на своем пути и благодаря опыту получаете +35 ХП. Ваша меткость при прицельной стрельбе максимальная."],
	PE_RANGER: ["Рейнджер", "Ваш навык Скиталец повышается на 15%. Увеличивается вероятность избежать встреч в пустыне или наоборот - отыскать там что-то полезное."],
	PE_QUICK_POCKETS: ["Оптимизация", "Вам удалось рассовать свои вещи по карманам так, чтобы они всегда были под рукой. Теперь на перезарядку оружия тратится на 1-2 Очков Действия меньше."],
	PE_SMOOTH_TALKER: ["Опыт торговли", "Ваш опыт торговли (0-300). При малом опыте вы все равно будете покупать дорого. Опыт торговли не может превышать ваш навык Торговли."],
	PE_SWIFT_LEARNER: ["Самоучка", "Вы можете извлекать из всего большую пользу, чем кто-либо другой. С каждым уровнем этой способности вы получаете на 15% больше опыта."],
    PE_TAG: ["Умение", "Взяв данный бонус, вы можете выбрать какое-либо Умение дополнительно. Оно будет повышаться примерно в 2 раза быстрее."],
  	PE_MUTATE: ["Мутация", "Радиация пустыни изменила вас! Вы получаете +30 Очков жизней и +60 очков распределения."],
	PE_BIVALIY: ["Крепкий Орешек", "Вы можете ослабить крит по вам -((ВС*3)+СЛ) к критролу. Критический урон по вам будет резаться как при (ЛВ+ВС)/2 либо от удачи(если она больше)"],
	PE_RAGE: ["Зарядка", "Привычка заниматься зарядкой по утрам, выработалась у вас давно. С каждым уровнем этой способности ваши Очки здоровья возрастают на 5 единицы."],
	PE_DEFENCE: ["Рефлексы", "Ваши рефлексы повышены и неприцельно вы стреляете быстрее. -1 ОД на не прицельный выстрел. Нельзя взять Снайпера и Быстрого стрелка. Не работает с инженерным оружием."],
	PE_ATTACK: ["Неудержимый", "Вы неудержимы. Получаете +очков действия и +процент к урону согласно вашей Ловкости. Нельзя взять Снайпера, Терма и Человека Действия."],
	PE_HARD: ["Закалка", "Ваш организм подготовлен к быстрому лечению в сложных условиях. С каждым уровнем этой способности ваш Уровень лечения возрастает на 5 единицы."],
	PE_VIEW: ["Репликант", "Репликация снимает все эффекты, а также становится бесплатной."],
	PE_ADRENALINE_RUSH: ["Кровопийца", "Обстоятельно изучив кровь, вы получаете +30 ХП. Также каждая атака по цели восстановит (ВС*2) Очков здоровья. При использовании навыка Санитар, вы снимаете с себя эффект Нагрева."],
	PE_CAUTIOUS_NATURE: ["Бдительность", "Вы бдительны и настойчивы. Ваш Обзор увеличивается, а при определении положения на местности, ваше Восприятие +3 единицы. +1 ОД при промахе."],
	PE_COMPREHENSION: ["Наблюдательность", "При чтении вы обращаете особенное внимание на мелкие детали (+1 Интеллект). Читая книгу, вы получаете +1% к случайному Навыку, а также +200 опыта."],
	PE_DEMOLITION_EXPERT: ["Эксперт подрывник", "В обращении со взрывчаткой, вы настоящий профессионал. Ваши заряды всегда детонируют вовремя, имеют большой радиус и наносят больше урона."],
	PE_GAMBLER: ["Атлет", "Выше! Быстрее! Сильнее! Усиленные тренировки не проходят даром. +60% к навыку Атлетизм."],
	PE_GAIN_STRENGTH: ["Получить силу", "Этот бонус повышает на одно очко вашу Силу и добавляет +20 Очков жизней."],
	PE_GAIN_PERCEPTION: ["Получить восприятие", "Этот бонус повышает на одно очко ваше Восприятие и добавляет +20 Очков жизней."],
	PE_GAIN_ENDURANCE: ["Получить выносливость", "Этот бонус повышает на одно очко вашу Выносливость и добавляет +20 Очков жизней."],
	PE_GAIN_CHARISMA: ["Получить обаяние", "Этот бонус повышает на одно очко ваше Обаяние и добавляет +20 Очков жизней."],
	PE_GAIN_INTELLIGENCE: ["Получить интеллект", "Этот бонус повышает на одно очко ваш Интеллект и добавляет +20 Очков жизней."],
	PE_GAIN_AGILITY: ["Получить ловкость", "Этот бонус повышает на одно очко вашу Ловкость и добавляет +20 Очков жизней."],
	PE_GAIN_LUCK: ["Получить удачу", "Этот бонус повышает на одно очко вашу Удачу и добавляет +20 Очков жизней."],
	PE_HARMLESS: ["Безвредность", "Ваш невинный вид позволяет вам успешно красть у людей вещи. Вы получаете +40% к навыку Воровство."],
	PE_HERE_AND_NOW: ["Специалист", "Вы набрались ума и получаете одно очко распределения."],
	PE_HTH_EVADE: ["Верткость", "Вы чувствуете, когда надо дернуться с места, природная ловкость помогает вам в этом. Процент Уклонения от атаки увеличивается на: (МаксОД/3)+(ТекущОД/2)."],
	PE_KAMA_SUTRA_MASTER: ["Спортсмен", "Занятия активными видами спорта не прошли даром. Вы получаете +40 Очков жизней и +8 к Классу Брони."],
 	PE_KARMA_BEACON: ["Исполнительность", "Вы выполнили ежедневное задание и получаете бонус 20 единиц к Очкам жизней."],
	PE_LIGHT_STEP: ["Легкие шаги", "Вы ловки, удачливы и всегда настороже. 50%, что ловушка на вас сработает. Резист к взрыву увеличен на +25%. 50% избежать нокдауна."],
	PE_LIVING_ANATOMY: ["Анатомия жизни", "Вы хорошо представляете себе внутреннее строение живых существ, их силы и слабости. При атаке вы наносите на 10 Урона больше. Кроме того, вы получаете +20% к навыку Доктор."],
	PE_MAGNETIC_PERSONALITY: ["Привлекательность", "Игрок может водить с собой в группе дополнительно 2-х человек без проверки на Обаяние, но не забывайте, что больше пяти - это уже толпа."],
	PE_NEGOTIATOR: ["Негоциант", "С этим умением вы можете попробовать договориться до чего угодно, имея бонус 20% к навыкам Торговля и Красноречие."],
	PE_PACK_RAT: ["Запаковка", "Вы научились компактно раскладывать вещи в инвентаре. +22 кг к Максимальному весу."],
	PE_PYROMANIAC: ["Пироманьяк", "Вы отлично управляетесь с огнем. Если тип повреждений - огонь, то: +30 бонусного урона, +15 конечного урона. Значительно усиливает эффекты поджигания."],
	PE_QUICK_RECOVERY: ["Прыгучесть", "Вы очень быстро встаете после того, как вас собьют с ног. Реакция и гибкость добавляют вам 1 Очко Действия. Несовместим с Человеком Действия."],
	PE_SALESMAN: ["Продажа", "Вы умеете отлично продавать и покупать. С этой способностью вы на 40% повышаете свой навык Торговля."],
    PE_STONEWALL: ["Человек-глыба", "Ваш шанс избежать Критическое попадание увеличивается на 40% (не работает с Терминатором и Умельцем). Вероятность того, что вас собьют с ног, уменьшается вдвое."],
	PE_THIEF: ["Вор", "В ваших жилах течет кровь истинного вора. Вы повышаете на 25% свои навыки Взлом замков, Воровство, Ловушки, а также на 10% навык Скрытность."],
	PE_WEAPON_HANDLING: ["Обращение с оружием", "Вы можете носить и использовать оружие мощнее, чем остальные. Для этой цели ваша Сила считается на 3 единицы больше."],
	PE_VAULT_CITY_TRAINING: ["Стажировка в Городе-Убежище", "Вы прошли курс обучения медицине у лучших специалистов Города-Убежище."],
	PE_EXPERT_EXCREMENT: ["Спец по уборке экскрементов", "Вы научились убирать дерьмо за браминами лучше, чем кто-либо."],
	PE_JINXED_II: ["Дурной глаз", "Xорошая сторона дела заключается в том, что враги вокруг вас часто ошибаются. Плохо то, что вы ошибаетесь не меньше их!"],
	PE_TERMINATOR: ["Терминатор", "Вы не знаете, что такое Переломы конечностей, Слепота и Нокдауны! Все Критические эффекты игнорируются в зависимости от ваших Силы и Выносливости (СЛ+ВН)*5."],
	PE_IRON_MAN: ["Железный человек", "С этой способностью Вы получаете гораздо меньше урона."],
    PE_PRO_UDAR: ["Весельчак", "Вы не падаете при употреблении алкоголя, а наоборот получаете бонус к защите -(4+Харизма)%."],
	PE_ADD_ATAC: ["Дополнительные атаки", "Отдача от оружия никогда не была для вас проблемой. При выстреле с вероятностью в 20% есть шанс восстановить 2 Очка Действия."],
	PE_NAPROLOM: ["Бывалый", "Вы знаток оружия. +10% к навыку Легкое оружие, Тяжелое оружие, Энергетическое оружие. +15% к навыку Рукопашная и Холодное оружие."],
 	PE_ADW_MET: ["Эксперт-метатель", "Вы прекрасно обращаетесь со всеми видами Метательного оружия, что позволяет наносить противнику на 35% больше повреждений. Не совместим с Бесшумным Бегом."],
	PE_GECKO_SKINNING: ["Скорняк", "Вы освоили принципы разделки ящеров и легко обдираете их, чтобы получить ценные шкуры."],
	PE_VAULT_CITY_INOCULATIONS: ["Прививки из Города-Убежище", "Вы получили 10 процентов сопротивляемости к отравлению и радиации."],
	PE_DERMAL_IMPACT: ["Живчик", "Вы имеете повышенную живучесть (+40 ХП) и природное лечение (+15 к Уровню лечения)."],
	PE_DERMAL_IMPACT_ENH: ["Улучшенная подкожная броня", "Вы получили усиленную защиту от атак физического характера."],
	PE_PHOENIX_IMPLANTS: ["Подкожная защита", "Вы чуть реже подвергаетесь ущербу от энергетических атак."],
	PE_PHOENIX_IMPLANTS_ENH: ["Улучшенная подкожная защита", "Вы имеете большую дополнительную защиту против энергетических атак."],
	PE_NCR_PERCEPTION: ["Операция доктора Клауса: Восприятие", "После операции, проведенной Доктором Клаусом из НКР, ваш шанс крита +4%."],
	PE_NCR_ENDURANCE: ["Операция доктора Клауса: Сила", "После операции, проведенной Доктором Клаусом из НКР, ваша антикрит +4%."],
	PE_NCR_BARTER: ["Секреты мастерства: Бартер", "Вы смогли многому научиться у торговца в Дене. Ваш навык Торговли повышен на 5%."],
	PE_NCR_REPAIR: ["Секреты мастерства: Ремонт", "Механик Модока ознакомил вас с новой технологией починки оружия. Ваш навык Ремонта повышен на 5%."],
	PE_COMPUSTER: ["Золотые руки", "Вам больше не понадобится установка для создания некоторых вещей. Открывает новые возможности в сфере крафта."],
	PE_DRIVER: ["Водитель", "Вы настолько освоили автомобиль, что можете возить в нём кого угодно."],
	PE_OFFICER: ["Офицер", "Вы умеете управлять большим отрядом бойцов. Вы получаете +30 ХП, а также срез урона на 5%. Используется выносливость при расчете группы."],
 	PE_BISNES_RENO: ["Смотрящий", "Вы теперь один из смотрящих за бизнесом в Нью-Рено."],
	PE_IMP1: ["Боевой имплантант", "В вас вживлен экспериментальный имплантант. Ваши боевые навыки увеличены."],
	PE_IMP2: ["Медицинский имплантант", "В вас вживлен экспериментальный имплантант. Ваши познания в медицине увеличены."],
	PE_IMP3: ["Вспомогательный имплант", "В вас вживлен экспериментальный имплантант. Ваши вспомогательные функции увеличены."],
	PE_COMBAT_ENGINEER: ["Боевой Инженер", "Вы настолько преуспели в инженерном деле, что теперь можете применять эти навыки в бою. Вы получаете +20% к навыку Ремонт и вам доступны особые виды вооружения."],
	PE_CHAT_OPERATOR: ["Оператор чата", "Вы всё видите и слышите, ведь вы - оператор чата."],
	PE_DA_NORMAL: ["Мастер урона", "Вы освоили огнестрельное оружие, и наносите на 2% больше Урона по цели с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_DA_LASER: ["Мастер лазера", "Вы освоили лазерное оружие, и наносите на 1% больше Урона по цели с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_DA_FIRE: ["Мастер огня", "Вы освоили обращение с огнем, и получаете +2 к тикам с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_DA_PLASMA: ["Мастер плазмы", "Вы освоили плазменное оружие, и получаете +5 к тикам с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_DA_ELECTRO: ["Мастер электричества", "Вы освоили электро-оружие, и получаете шанс 4% уменьшить ОД врага на 1 единицу с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_DA_EMP: ["Мастер импульса", "Вы настолько освоили своё оружие, что наносите на 3% больше Урона с каждым уровнем этой способности."],
	PE_DA_EXPLODE: ["Мастер взрыва", "Вы освоили все виды взрывов, и получаете шанс 10% увеличить Радиус взрыва на 1 единицу с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_SUPPORTER: ["Огневая поддержка", "Стрельба очередями \"Подавляет\" врага. Увеличен радиус Дымовой и Газовой завесы, и область поджигания Кокт. \"Молотова\". Также вы получате +20% к навыку Метательное."]
}

/*
Текстовые данные для html файла:

Создание персонажа - калькулятор билдов Fallout Online: Requiem
Калькулятор билдов Fallout Online для сервера Requiem
ИМЯ
ПАРОЛЬ
МУЖ.
СЛ
ВС
ВН
ОБ
ИН
ЛВ
УД
Средн.
ОЧКИ РАСП.
Уровень:
Опыт:
След.ур.:
Жизни
Уворот
Антикрит
Норма
Лазер
Огонь
Плазма
Взрыв
Электро
Класс брони
Очки действий
Макс. груз
Рукоп. повр.
Радиус обзора
Уст. к яду
Уст. к рад
Порядок
Уров. лечен.
Шанс на крит.
ОЧКИ УМЕНИЙ
ОСОБЫЕ НАВ
БОНУСЫ
КНИГИ
КВЕСТЫ
Быстрый метабол
Крушила
Хилое тело
Однорукий
Точность
Камикадзе
Громила
Быстрый стрелок
Маньяк
Дурной глаз
Добродушие
Химик
Стабильный
Жидкое тело
Умелец
Импульсивный
Написать автору
ЗАГРУЗИТЬ
ИТОГ
*/