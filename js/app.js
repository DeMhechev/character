var leveluping = true; // для отладки!!!
var regi = 1;
var medsp = 0;

function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Выбранные в списках перки и квесты
var select = {
	crperk: "",
	perk: "",
	quest: ""
}

var totalquest = {};

var mychar = {
	traits: {},
	perks: {},
	tags: {},
	skills: {},
	stats: { // Природная,добавленная
		STR: [6,0], // Сила
		PER: [7,0], // Восприятие
		ENU: [8,0], // Выносливость
		CHA: [2,0], // Обаяние
		INT: [8,0], // Интелект
		AGI: [7,0], // Ловкость
		LUC: [2,0] // Удача
	},
    book: { // Доступно книг, лишние очки
	light: [10,0],
	energy: [10,0],
	orderly: [10,0],
	science: [10,0],
	repair: [10,0],
	ranger: [10,0],
	prewar: [20,0]
    }
}; 
// mychar.book
var charp = {
	name:	"", // имя
	age:	getRandInt(14, 60), // возраст
	sex:	"man", // пол
	level:	1, // уровень
	exp:	0, // опыт
	nextexp: 1000, // опыт до следующего уровня
	karma:	0, // карма
	tagt: 2, // очки на таг трейтов
	tags: 	 3, // очки на таг скилов
	points:  0,	// скилпоинты
	specialpoint: 0, // Очки распределения статов
	perkpoint: 0 // Очки перков
};
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
// SkillMod.Add2
var SkillMod = { 
	MaxValue: 300,
    Add2: 100,
    Add3: 125,
    Add4: 150,
    Add5: 175,
    Add6: 200
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
// Книги
var book = {
	light: [10,0],
	energy: [10,0],
	orderly: [10,0],
	science: [10,0],
	repair: [10,0],
	ranger: [10,0],
	prewar: [20,0]
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
// параметр, добавленный параметр, добавленный за уровень
var feat = { 
	dodge:	[0, 0, 0],	// уклон
	live: 	[0, 0, 0],	// жизни
	armc: 	[0, 0, 0],	// класс брони
	apoi: 	[0, 0, 0],	// ОД
	maxl: 	[0, 0, 0],	// макс груз
	mdmg: 	[0, 0, 0],	// рукоп повр
	oview: 	[0, 0, 0],	// радиус обзора
	stox: 	[0, 0, 0, 1],	// уст к яду
	srad: 	[0, 0, 0, 1],	// уст к рад
	proc: 	[0, 0, 0],	// порядок
	levh: 	[0, 0, 0],	// уров лечения
	crit: 	[0, 0, 0]	// шанс на крит
};
// параметры описание
var textfeat = { 
	dodge:	["улонение",""],
	live: ["жизни",""],
	armc: ["класс брони",""],
	apoi: ["ОД",""],
	maxl: ["макс груз",""],
	mdmg: ["рукоп повр",""],
	oview: ["радиус обзора",""],
	stox: ["уст к яду",""],
	srad: ["уст к рад",""],
	proc: ["порядок",""],
	levh: ["уров лечения",""],
	crit: ["шанс на крит",""]
};
// Резисты
var resist = {
	normal:		{asb:[0, 0, 0], res:[0, 0, 0]},
	laser:		{asb:[0, 0, 0], res:[0, 0, 0]},
	fire:		{asb:[0, 0, 0], res:[0, 0, 0]},
	plasma:		{asb:[0, 0, 0], res:[0, 0, 0]},
	explode:	{asb:[0, 0, 0], res:[0, 0, 0]},
	electro:	{asb:[0, 0, 0], res:[0, 0, 0]},
};
// Выбор трейта
function trait(){	
	var str = this.id.substr(3);	
	traits[str][0](str);
	statpoints();
	settle();
	if(mychar.traits[str]) $("#"+str).css("color", "#ABABAB");
	else $("#"+str).css("color", "#00FF00");
	infoparm("traits",str);
}
// Выбор тагнутых навыков
function tags() {	
	var str = this.id.substr(3);
	if(!(str in mychar.tags) && charp.tags > 0) {
		mychar.tags[str] = 1;
		charp.tags--;
		crSkills(str);
		addSkills(str,20,1);
		$("#"+str+"s").css("color", "#ABABAB");
		$("#"+str).css("color", "#ABABAB");
	}
	else if((str in mychar.tags) && charp.tags < 3)	{
		delete mychar.tags[str];
		charp.tags++;
		addSkills(str,-20,1);
		$("#"+str+"s").css("color", "#00FF00");
		$("#"+str).css("color", "#00FF00");
	}
	numbers($("#point2"),charp.tags);
	settle();
}
// расчеты навыков и параметров и их обновление
function settle() {	
	// Легкое оружие
	skills.light[0] = 5 + mychar.stats.AGI[0]*4;					
	// Тяжелое
	skills.heavy[0] = mychar.stats.AGI[0]*2;						
	// Энергетическое
	skills.energy[0] = 0 + mychar.stats.AGI[0]*2;					
	// Рукопашка
	skills.melee[0] = 30 + (mychar.stats.STR[0]+mychar.stats.AGI[0])*2;	
	// Холодное
	skills.steel[0] = 20 + (mychar.stats.STR[0]+mychar.stats.AGI[0])*2;	
	// Метательное
	skills.thrown[0] = mychar.stats.AGI[0]*4;						
	// Санитар
	skills.orderly[0] = (mychar.stats.PER[0]+mychar.stats.INT[0])*2;		
	// Доктор
	skills.doctor[0] = 5 + mychar.stats.PER[0]+mychar.stats.INT[0];		
	// Скрытность
	skills.sneak[0] = 5 + mychar.stats.AGI[0]*3;					
	// Взлом
	skills.hack[0] = 10 + mychar.stats.AGI[0]+ mychar.stats.PER[0];		
	// Воровство
	skills.steal[0] = mychar.stats.AGI[0]*3;						
	// Ловушки
	skills.traps[0] = 10 + mychar.stats.AGI[0]+ mychar.stats.PER[0];		
	// Наука
	skills.science[0] = mychar.stats.INT[0]*4;					
	// Ремонт
	skills.repair[0] = mychar.stats.INT[0]*3;						
	// Красноречие
	skills.oratory[0] = mychar.stats.CHA[0]*5;						
	// Торговля
	skills.trade[0] = mychar.stats.CHA[0]*4;						
	// Атлет
	skills.speed[0] = 0;									
	// Скиталец
	skills.ranger[0] = (mychar.stats.ENU[0]+mychar.stats.INT[0])*2;
	
	for(var i in skills) 
		skills[i][0] += sumSkills(i);			
	
	var STR = mychar.stats.STR[0] + mychar.stats.STR[1];
	var PER = mychar.stats.PER[0] + mychar.stats.PER[1];
	var ENU = mychar.stats.ENU[0] + mychar.stats.ENU[1];	
	var LUC = mychar.stats.LUC[0] + mychar.stats.LUC[1];
	var AGI = mychar.stats.AGI[0] + mychar.stats.AGI[1];
	var CHA = mychar.stats.CHA[0] + mychar.stats.CHA[1];
	
	// Жизни
	feat.live[0] = feat.live[2] + feat.live[1] + 60 + STR + ENU*2;		
	// Класс брони
	feat.armc[0] = feat.armc[2] + feat.armc[1] + AGI*(mychar.traits.TRAIT_KAMIKAZE ? 0 : 1)+(mychar.traits.TRAIT_KAMIKAZE ? 1 : 0);							
	// Очки действий
	feat.apoi[0] = feat.apoi[2] + feat.apoi[1] + 5 + Math.floor(AGI/2);			
	// Макс груз
	feat.maxl[0] = feat.maxl[2] + feat.maxl[1] + Math.round(0.453*( 25 + STR * ( 25 - (mychar.traits.TRAIT_SMALL_FRAME ? 1 : 0) * 10 )));
	// Рукоп. повр.
	feat.mdmg[0] = feat.mdmg[2] + feat.mdmg[1] + (STR > 5 ? STR-5 : 1);	
	// Радиус обзора
	feat.oview[0] = feat.oview[2] + feat.oview[1] + 20 + PER*3;										
	// Уст. яду
	feat.stox[0] = feat.stox[2] + feat.stox[1] + feat.stox[3]*ENU*5;
	if(feat.stox[0]>95) feat.stox[0] = 95;
	// Уст. радиации
	feat.srad[0] = feat.srad[2] + feat.srad[1] + feat.srad[3]*ENU*2;	
	if(feat.srad[0]>95) feat.srad[0] = 95;
	// Порядок
	feat.proc[0] = feat.proc[2] + feat.proc[1] + PER*2;							
	// Уровень лечения
	feat.levh[0] = feat.levh[2] + feat.levh[1] + (ENU > 5 ? Math.floor(ENU/3) : 1);	
	// Крит
	feat.crit[0] = feat.crit[2] + feat.crit[1] + LUC;	
	//Уворот
	feat.dodge[0] = feat.dodge[2] + feat.dodge[1] + CHA + (checkperk("PE_HTH_EVADE") ? (feat.apoi[0]/4)+(feat.apoi[0]/2) : 0);
	
	$("#live").html(feat.live[0]+"/"+feat.live[0]);
	$("#crit").html(feat.crit[0]+"%");
	$("#dodge").html(feat.dodge[0]+"%");
		
	for(var n in resist) {
		resist[n].asb[0] = resist[n].asb[1] + resist[n].asb[2];
		resist[n].res[0] = resist[n].res[1] + resist[n].res[2];
		$("#"+n).html(resist[n].asb[0]+"/"+resist[n].res[0]+"%");
	}
	for(var j in skills){
		if(skills[j][0] > 300) skills[j][0] = 300;
		$("#"+j).html(skills[j][0]+"%");
		
	}
	for(var j in feat){
		if(j != "crit" && j != "live" && j != "dodge") {
			$("#"+j).html(feat[j][0]);
		}
	}
}
// Обновление без полного перерасчета
function settle0() { 
	for(var n in resist) {
		resist[n].asb[0] = resist[n].asb[1] + resist[n].asb[2];
		resist[n].res[0] = resist[n].res[1] + resist[n].res[2];
		$("#"+n).html(resist[n].asb[0]+"/"+resist[n].res[0]+"%");
	} 
	for(var j in skills) {
		skills[j][0] = skills[j][2] + skills[j][1];
		$("#"+j).html(skills[j][0]+"%");
	}
	for(var j in feat)
		if(j != "crit" && j != "live" && j != "dodge") {
			feat[j][0] = feat[j][2] + feat[j][1];
			$("#"+j).html(feat[j][0]);
		}
	feat.live[0] = feat.live[2] + feat.live[1];
	$("#live").html(feat.live[0]+"/"+feat.live[0]);
	$("#crit").html(feat.crit[0]+"%");
	$("#dodge").html(feat.dodge[0]+"%");
}
// Обновление статов
function statpoints(){	
	for(var j in mychar.stats)	{
		var link = $("#"+j);
		var n = mychar.stats[j];
		n = mychar.stats[j][0] + mychar.stats[j][1];
		var str = "";
		switch (n) {
			case 1: str = "Гадко"; break;
			case 2: str = "Плохо"; break;
			case 3: str = "Низко"; break;
			case 4: str = "Непл."; break;
			case 5: str = "Средн."; break;
			case 6: str = "Хорош."; break;
			case 7: str = "Высок."; break;
			case 8: str = "Отлич."; break;
			case 9: str = "Круто"; break;
			case 10: str = "Герой!"; break;
			default: str = n < 1 ? "Гадко" : n > 10 ? "Герой!" : "Error";
		}
		$("#"+j+"t").html(str);
		numbers(link,n);
	}
	numbers($("#specialpoint"),charp.specialpoint);
	createlistperk();
}
// Отображение разлиных поинтов
function numbers(div,n) {
	if(n<0) {
		n = 0;
		div.css("text-shadow", "0 0 1px #e00");
	}
	else {
		div.css("text-shadow", "0 0 1px #dedede");
	}
	div.html("");
	div.css("background-image", "url(img/nums.png )");
	var col = 1;
	var num = [0, 0, 0];
	if (n>99) {	div.css("background-image", "url(img/num3.png )"); num[2] = Math.floor(n/100); col++; }
	num[1] = Math.floor(n/10)-num[2]*10;
	num[0] = Math.floor(n/1)-num[1]*10-num[2]*100;
	
	div.css({"padding-left":"5px", "letter-spacing":"4px"});
	
	if(num[2]===0 && num[1]==1 || num[2]==1)	{
		div.css({"padding-left":"6px", "letter-spacing":"6px"});		
	}
	if(num[1]==1 && num[2]==1) {
		div.css({"letter-spacing":"8px"});
		if(num[0]==1)
			div.css({"letter-spacing":"9px"});
	}	
	if(num[2]>1 && num[0]==1)
		div.css({"letter-spacing":"6px"});
	if((num[2]>1 && num[1]==1)||(num[0]==1 && num[2]==1)||(num[0]==1 && num[1]==1))
		div.css({"letter-spacing":"7px"});
	
	for(var i = col; i>=0; i--)
		div.append(num[i]);
}
// Добавление стата
function plusspec(pop){	
	var str = this.id.substr(4);
	var n = mychar.stats[str][0] + mychar.stats[str][1];
	var s = charp.specialpoint;
	if (n<10 && s!==0)
	{
		n++;
		s--;
	}
	mychar.stats[str][0] = n - mychar.stats[str][1];
	charp.specialpoint = s;
	statpoints();
	settle();
}
// Отнимание стата
function minusspec(pop){	
	var str = this.id.substr(5);
	var n = mychar.stats[str][0] + mychar.stats[str][1];
	if(mychar.traits.TRAIT_SKILLED && n < 4 && str != "STR" && str != "PER" && str != "LUC") return;
	var s = charp.specialpoint;
	if (n>1)
	{
		n--;
		s++;
	}
	mychar.stats[str][0] = n - mychar.stats[str][1];
	charp.specialpoint = s;
	statpoints();
	settle();
}
// обновление скилпоинтов
function spoints(){	
	numbers($("#point1"),charp.points);
}
// Создание ветки обьекта прокачки скилов
function crSkills(str){
	if(!(charp.level in mychar.skills))
		mychar.skills[charp.level]={};
	if(!(str in mychar.skills[charp.level]))
		mychar.skills[charp.level][str] = [0,0];
}
// Удаление ветки обьекта прокачки скилов если он пустой
function delSkills(str){
    if(!chSkills(str)) return;
	if(mychar.skills[charp.level][str][0] == 0 && 
	   mychar.skills[charp.level][str][1] == 0)
		delete mychar.skills[charp.level][str];
	if(emptyObject(mychar.skills[charp.level]))
		delete mychar.skills[charp.level];	
}
// Добавление к навыку
function addSkills(str,n,c){
	c = c===undefined ? 0 : c;
	crSkills(str);
	mychar.skills[charp.level][str][c] += n;
	delSkills(str);
}
// Проверка наличия прокачки навыка
function chSkills(str){
	if(charp.level in mychar.skills)
		if(str in mychar.skills[charp.level])
			if(mychar.skills[charp.level][str][0]>0)
				return true;
	else
		return false;
}
function sumSkills(str){
	var sum = 0;
	for(var j in mychar.skills)
		if(str in mychar.skills[j]) {
			sum += mychar.skills[j][str][0];
			sum += mychar.skills[j][str][1];
		}
	return sum;
}
// Прокачка навыков
function plus() {
	var str = this.id.substr(4);
	var n = skills[str][0];	
	if( n >= SkillMod.MaxValue ) return;
	var s = 1;
	if( n > SkillMod.Add6 ) s = 6;
	else if( n > SkillMod.Add5 ) s = 5;
	else if( n > SkillMod.Add4 ) s = 4;
	else if( n > SkillMod.Add3 ) s = 3;
	else if( n > SkillMod.Add2 ) s = 2;
	if( charp.points < s ) return;
	n++;
	if((str in mychar.tags) && n < SkillMod.MaxValue )
		n++;
	addSkills(str, n - skills[str][0]);
	charp.points -= s;
	spoints();
	settle();
}
// Откачка навыков
function minus() {
	var str = this.id.substr(5);
	var n = skills[str][0];
	if( n <= 0 ||  !chSkills(str)) return;
	
	var tag = (str in mychar.tags) ? 2 : 1;
	for(var i = 0; i < tag; i++) {
		var s = 1;
		if( n > SkillMod.Add6 + 1 ) s = 6;
		else if( n > SkillMod.Add5 + 1 ) s = 5;
		else if( n > SkillMod.Add4 + 1 ) s = 4;
		else if( n > SkillMod.Add3 + 1 ) s = 3;
		else if( n > SkillMod.Add2 + 1 ) s = 2;
		if(n > 0 )
			n--;
	}
	addSkills(str, n - skills[str][0]);
	delSkills(str);
	charp.points += s;
	spoints();
	settle();
}
// скрытие окон по Esc
function modalCloseEsc (pop) {	
  if ( !pop.keyCode || pop.keyCode === 27 ) {
	$("#entername").hide();
	$("#enterage").hide();
	$("#entersex").hide();
	$("#wrap").hide();
	$("#perk").hide();
	$("#quest").hide();
	$("#total").hide();
  }
}
// скрытие окон по клику
function modalCloseClick () {	
	$("#entername").hide();
	$("#enterage").hide();
	$("#entersex").hide();
	$("#wrap").hide();
}

function showthis() {
	str = this.id;
	$("#enter"+str).show();
	$("#wrap").show();
}
// Прибавить возраст
function plusage() { 
	charp.age++;
	if(charp.age>60) charp.age = 14;
	numbers($("#numberage"),charp.age);
}
// Отнять возраст
function minusage() { 
	charp.age--;
	if(charp.age<14) charp.age = 60;
	numbers($("#numberage"),charp.age);
}
// Смена пола
function changesex() {
	if(this.id === "men" && charp.sex !== "men") {
		charp.sex = "men";
		$("#men").css('backgroundImage', 'url(img/men.png)');
		$("#women").css('backgroundImage', '');
		$("#sex").html("МУЖ.");
	}
	else if(this.id === "women" && charp.sex !== "women") {
		charp.sex = "women";
		$("#women").css('backgroundImage', 'url(img/women.png)');
		$("#men").css('backgroundImage', '');
		$("#sex").html("ЖЕН.");
	}
}
// Переход к прокачке
function leveling() {
	if((!charp.specialpoint && !charp.tags)||leveluping){
		if(regi) {
			$('title').text("Прокачка персонажа");
			$("#main").animate({'opacity':'0'},100);
			$("#main").css('backgroundImage', "url(img/char.gif)");
			$(".reg").hide();
			$(".leveling").show();
			$("#level").html(charp.level);
			$("#exp").html(charp.exp);
			$("#nextexp").html(charp.nextexp);
			spoints();
			$("<div/>", {"id": "select"}).appendTo("#main").css({	'backgroundImage': 	"url(img/skillpad.png)", 
																	"position": 		"absolute",
																	"top":				"-9px",
																	"left":				"324px",
																	"width":			"286px",
																	"height":			"70px",
																	"z-index":			"100"
																	});
			var pl = $("<div/>", {"id": "pluslight"}).appendTo("#select").css({	
																	"position": 		"absolute",
																	"left":				"246px",
																	"width":			"33px",
																	"height":			"33px"});
			var mi = $("<div/>", {"id": "minuslight"}).appendTo("#select").css({
																	"position": 		"absolute",
																	"left":				"246px",
																	"top":				"33px",
																	"width":			"33px",
																	"height":			"33px"});
			
			pl.mousedown(	function()	{pl.css('backgroundImage',"url(img/greendot_big.png)");});
			pl.mouseup(	function()	{pl.css(	'backgroundImage', 	"")});
			mi.mousedown(function()	{mi.css('backgroundImage', 	"url(img/greendot_big.png)");});
			mi.mouseup(	function()	{mi.css(	'backgroundImage', 	"");});
			pl.click(plus);
			mi.click(minus);
			var plInterval;
			var collp = 1;
			var collm = 1;
			pl.on('mousedown', function(){
				clearInterval(plInterval);
				collp = 1;
				plInterval = setInterval(function(){
					for(var i = 0; i<collp; i++) pl.click();
					if(collp<10) collp+=2;
				}, 200);
			});
			pl.on('mouseup mouseout', function(){
				clearInterval(plInterval);
			});		
			var miInterval;
			mi.on('mousedown', function(){
				clearInterval(miInterval);
				collm = 1;
				miInterval = setInterval(function(){
					for(var i = 0; i<collm; i++) mi.click();
					if(collm<10) collm+=2;
				}, 200);
			});
			mi.on('mouseup mouseout', function(){
				clearInterval(miInterval);
			});
			showlistperk();
			regi = 0;
			$("#nameparm").html("");
			$("#textparm").html("");
			$("#imgparm").html("");
			$("#main").animate({'opacity':'1'},500);
		}
	}	
	else alert("Не распределены special point или не тагнуты 3 навыка!");
}
// Переход обратно к созданию
function reg(){
	location.reload();
	/*return;
	if(!regi) {
		$('title').text("Создание персонажа");
		$("#main").css('backgroundImage', "url(img/reg.png)");
		$("body").css('backgroundImage', "");
		$(".reg").show();
		$(".leveling").hide();
		$("#select").remove();
		for(var j = 1; j<4;j++) $("#textlist"+j).hide();
		regi = 1;
	}*/
}
// Получить количество опыта необходимое для этого уровня
function levelexp(n) {
	var e = 0;
	for(var i=0; i<n;i++) e += i*1000;
	return e; 
}
// Переход между вкладками БОНУСЫ КНИГИ КВЕСТЫ
function switchinfo() {
	var n = +this.id.substr(10);
	for(var i = 1; i<4;i++) {
		if(n===i) { 
			if($("#textlist1").is(":visible")&&charp.perkpoint) {
				listperkup();
			}
			else if(n===3) {
				listquestup();
			}
			$("#textlist"+i).show();
			$("#switch"+i).css('backgroundImage', "url(img/switchon.png)");
			$("#textswitch"+i).css('top', "7px");

		}
		else {
			$("#switch"+i).css('backgroundImage', "url(img/switchoff.png)");
			$("#textswitch"+i).css('top', "9px");
			$("#textlist"+i).hide();
		}		
	}
}
// Выбор навыка для прокачки
function selectskill() {
	var n = $("#select").remove();
	var tops = this.offsetParent.offsetTop + this.offsetTop - 27;
	var lefts = this.offsetParent.offsetLeft + this.offsetLeft - 6;
	n.appendTo("#main").css({	"top":				tops+"px",
								"left":				lefts+"px",
								});
	
	var pl = n.find("div")[0].id = "plus" + this.id.substr(4);
	var mi = n.find("div")[1].id = "minus" + this.id.substr(4);
	
	$("#"+pl).mousedown(function(){$("#"+pl).css('backgroundImage',"url(img/greendot_big.png)");});
	$("#"+pl).mouseup(function(){$("#"+pl).css(	'backgroundImage',"")});
	$("#"+mi).mousedown(function(){$("#"+mi).css('backgroundImage',"url(img/greendot_big.png)");});
	$("#"+mi).mouseup(function(){$("#"+mi).css(	'backgroundImage',"");});
	$("#"+pl).click(plus);
	$("#"+mi).click(minus);
	var plInterval;
	var collp = 1;
	var collm = 1;
	$("#"+pl).on('mousedown', function(){
		clearInterval(plInterval);
		collp = 1;
		plInterval = setInterval(function(){		
			for(var i = 0; i<collp; i++) $("#"+pl).click();
			if(collp<10) collp+=2;
		}, 200);
	});
	$("#"+pl).on('mouseup mouseout', function(){
		clearInterval(plInterval);
	});		
	var miInterval;
	$("#"+mi).on('mousedown', function(){
		clearInterval(miInterval);
		collm = 1;
		miInterval = setInterval(function(){
			for(var i = 0; i<collm; i++) $("#"+mi).click();
			if(collm<10) collm+=2;
		}, 200);
	});
	$("#"+mi).on('mouseup mouseout', function(){
		clearInterval(miInterval);
	});
}
// Повышение уровня
function levelup(){
	if(charp.level==99) return;
	charp.level++;
	$("#level").html(charp.level);
	$("#exp").html(charp.exp = levelexp(charp.level));
	$("#nextexp").html(charp.nextexp = levelexp(charp.level+1));
	if(charp.level<29)	{
		feat.live[2]+=2+Math.floor(stats.ENU[2]/2)+(stats.ENU[2]%2?(charp.level%2?0:1):0);
		feat.live[0] = feat.live[2] + feat.live[1] + 60 + stats.STR[2] + stats.ENU[2]*2;
		$("#live").html(feat.live[0]+"/"+feat.live[0]);
		charp.points += 5 + (stats.INT[2] * 2) - (mychar.traits.TRAIT_NIGHT_PERSON?3:0);
		spoints();
	}
	if(charp.level>28&&charp.level<60)	{
		//feat.live[2]+=1;
		feat.live[0] = feat.live[2] + feat.live[1] + 60 + stats.STR[2] + stats.ENU[2]*2;
		$("#live").html(feat.live[0]+"/"+feat.live[0]);
	}
	if(!(charp.level%(mychar.traits.TRAIT_SKILLED?4:3)))	{
		charp.perkpoint++;
		listperkup();	
	}
	if(charp.perkpoint)	{
		listperkup();	
	}
}
// Окно выбора перков
function listperkup(){
	$("#perk").show();
	$("#perk").animate({'opacity':'1'},200);
	$("#selectperk").html("");
	$("#nameparms").html("");
	$("#textparms").html("");
	$("#imgparms").html("");
	select.perk = "";
	for(var i in perk){
		if(checkperk(i)<perk[i][2]&&charp.level>=perk[i][3]&&charp.level<=perk[i][4]&&perk[i][5](0)){
			var perkit = $("<div id=\""+i+"\" class=\"perklist\">"+perk[i][0]+"</div>").appendTo("#selectperk");
			perkit.click(function(){
				if(select.perk) $("#"+select.perk).css("color","#00AB00");
				select.perk = this.id;
				$("#"+this.id).css("color","#00FF00");
				infoperk(this.id);
			});
		}	
	}	
}
function checkperk(strperk) {
	if(mychar.perks[strperk]===undefined)
		return 0;
	else
		return mychar.perks[strperk].vol;
}
//Создание списка перков в окне доступных перков
function createlistperk() {
	$("#crlistperk").html("");
	for(var i in mychar.stats)
			stats[i][2] = mychar.stats[i][0] + mychar.stats[i][1];
	var mperk = {3: [],6: [],9: [],12: [],15: [],18: []};
	for(var i in perk)
		if(perk[i][5](1)&&perk[i][4]===29||perk[i][4]===32)
			mperk[perk[i][3]].push(i);						
	for(var i in mperk) {
		if(mperk[i].length === 0) continue;
		$("<div id=\"lists"+i+"\" class=\"listlevel\">Уровень "+i+"</div>").appendTo("#crlistperk");	
		for(var j in mperk[i]) {
			var perkit = $("<div id=\"lists"+mperk[i][j]+"\" class=\"perklist\">"+perk[mperk[i][j]][0]+"</div>").appendTo("#crlistperk");
			perkit.click(function(){
				if(select.crperk) $("#"+select.crperk).css("color","#00AB00");
				select.crperk = this.id;
				$("#"+this.id).css("color","#00FF00");
				infoparm("perks",this.id.substr(5));
			});
		}
	}
}
// Выводит имеющиеся трейты и перки в #textlist1
function showlistperk(){	
	var lineit = $("#textlist1").html("");
	if(charp.tagt<2){
		lineit.append("<div class=\"listhead\">Дополнительно</div>");
		for(var j in mychar.traits)
			if(mychar.traits[j]) {
				lineit.append("<div id=\"list"+j+"\" class=\"perklist\">"+traits[j][1]+"</div>");
				$("#list"+j).click(function(){infoparm("traits",this.id.substr(4));});
			}
	}
	if(!emptyObject(mychar.perks)) {
		var mperk = [];
		lineit.append("<div class=\"listhead\">Бонусы</div>");	
		for(var j in mychar.perks)
			for(var i in mychar.perks[j].lvl)
				mperk[mychar.perks[j].lvl[i]] = j;
		for(var j in mperk){
			lineit.append("<div><span id=\"lists"+j+"\" class=\"listlvl\">"+j+" ур: </span><span id=\"list"+mperk[j]+"\" class=\"perklist\">"+perk[mperk[j]][0]/*+(checkperk(mperk[j])>1?"("+checkperk(mperk[j])+")":"")*/+"</span></div>");
			$("#list"+mperk[j]).click(function(){infoparm("perks",this.id.substr(4));});
		}
	}
	
}
//Создание списка квестов в окне выбора квестов
function listquestup(){
	var chval = false;
	for(var i in quest)
		chval = chval || (quest[i][0]<quest[i][1]&&charp.level>=quest[i][2]&&charp.level<=quest[i][3]&&quest[i][4]());
	if (!chval) return;
	$("#quest").show();
	$("#selectquest").html("");
	$("#nameparmq").html("");
	$("#textparmq").html("");
	select.quest = "";
	for(var i in quest){
		if(quest[i][0]<quest[i][1]&&charp.level>=quest[i][2]&&charp.level<=quest[i][3]&&quest[i][4]()){
			var questit = $("<div id=\""+i+"\" class=\"perklist\">"+textquest[i][0]+"</div>").appendTo("#selectquest");
			questit.click(function(){
				if(select.quest) $("#"+select.quest).css("color","#00AB00");
				select.quest = this.id;
				$("#"+this.id).css("color","#00FF00");
				$("#nameparmq").html(textquest[this.id][0]);
				$("#textparmq").html(textquest[this.id][1]);
			});
		}	
	}	
}

function showlistquest(){	// Выводит взятые квесты в #textlist3
	var lineit = $("#textlist3").html("");
	lineit.append("<center>Квесты</center>");
	for(var j in quest)
		if(quest[j][0]) {
			lineit.append("<div id=\"list"+j+"\">"+textquest[j][0]+(quest[j][0]>1?"("+quest[j][0]+")":"")+"</div>");
			$("#list"+j).click(function(){infoparm("quest",this.id.substr(4));});
		}
}
// Вывод информации о перке или квесте по клику
function infoparm(ch,prm){
	switch(ch) {
		case "traits": 
			$("#nameparm").html(traits[prm][1]);
			$("#textparm").html(traits[prm][2]);
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "perks": 
			$("#nameparm").html(perk[prm][0]);
			$("#textparm").html(perk[prm][1]);
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "quest":
			$("#nameparm").html(textquest[prm][0]);
			$("#textparm").html(textquest[prm][1]);
		break;
		case "skills": // добавить описание
			$("#nameparm").html(perk[prm][0]);
			$("#textparm").html(perk[prm][1]);
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "stats": // добавить описание
			$("#nameparm").html(stats[prm.substr(0,3)][0]);
			$("#textparm").html(stats[prm.substr(0,3)][1]);
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm.substr(0,3)+".jpg\" onload=\"imgLoaded(this)\">");
		break;
	}
}
// Информация о перке по названию
function infoperk(prm){
	$("#nameparms").html(perk[prm][0]);
	$("#textparms").html(perk[prm][1]);
	$("#imgparms").removeClass('loaded');
	$("#imgparms").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
}
// Чтение книг
function plusbook() {	
	var str = this.id.substr(4);
	var strn;
	if(str==="prewar") {
		var r = getRandInt(0, 59);
		if(r<20) strn = "steal";
		else if(r<40) strn = "trade";
		else if(r<60) strn = "oratory";
	}
	else {
		strn = str;
	}
	if(mychar.book[str][0]) {
		var n = skills[strn][0];		// Навык
		var np = 0;
		var s = 6 + mychar.book[str][1];	// Очки навыков
		for(var i = 0;i<6&&s>0;i++){
			if(n%2)	// нечетный
			{
				if(n<101 && s>=1)		s-=1;
				else if(n<127 && s>=2)	s-=2;
				else if(n<151 && s>=3)	s-=3;
				else if(n<=175 && s>=4)	s-=4;
				else if(n<201 && s>=5)	s-=5;
				else if(n<300 && s>=6)	s-=6;
				else break;
				np++;
				n++;
			}
			else	// четный
			{
				if(n<102 && s>=1)		s-=1;
				else if(n<126 && s>=2)	s-=2;
				else if(n<152 && s>=3)	s-=3;
				else if(n<176 && s>=4)	s-=4;
				else if(n<202 && s>=5)	s-=5;
				else if(n<300 && s>=6)	s-=6;
				else break;
				np++;
				n++;
			}
		}
        mychar.book[str][1] = s;
		addSkills(strn,np,1);
		mychar.book[str][0]--;
		$("#book"+str).html("x"+mychar.book[str][0]);
		settle();
	}
}
/*Диалог. 
Пример использования:
talk("Может сходим в бар сегодня?",{ 	a:["Да пошли.",function(){alert("Идем в бар.")}], 
										b:["Нет я не хочу.",function(){alert("Остаемся дома.")}] })
*/
function talk(textdialog,answ) {
	$("#talk").show();
	$("#dialog").html(textdialog);
	$("#answ").html("");
	for(var i in answ) {
		if(answ[i][2]) {						//  &#9899;
			var reply = $("<div id=\"answ"+i+"\">&#149; "+answ[i][0]+"</div>").appendTo("#answ");
			reply.hover(function(){$(this).toggleClass('hover');});
			reply.click({func:answ[i][1],name:answ[i][0]},function(e){
				var nup = e.data.func();
				if(nup==-1) return;
				$("#talk").hide();
				if(nup===0) return;
				if(typeof nup == "object") {
					addSkills(e.currentTarget.id.substr(4),nup[0]);
					nup = nup[1];
				}
				quest[select.quest][0] += nup;
					var n = totalquest[charp.level];
					if(n===undefined) n = [];
					n.push(textquest[select.quest][0]+"("+e.data.name+")");
					totalquest[charp.level] = n;
				settle();
				statpoints();
				showlistquest();
				});
		}
	}
}
// Проверка обекта на наличие элементов
function emptyObject(obj) {
    for (var i in obj) return false;
    return true;
}
// Итоговые результаты в текстовом виде
function total() {
	$("#total").show();
	var textarea = charp.name+" "+feat.live[0]+" XP\n";
	for(var i in stats)
			textarea += stats[i][2]+" ";
	textarea += "\nТрейты: ";
	for(var i in traits)
		if(mychar.traits[i])
			textarea += traits[i][1]+" ";
	textarea += "\nНавыки: ";
	for(var i in skills) 
		if(i in mychar.tags)
			textarea += skills[i][1]+" ";
	textarea += "\n";
	if(!emptyObject(mychar.perks)) {
		var mperk = [];
		for(var j in mychar.perks)
			for(var i in mychar.perks[j].lvl)
				mperk[mychar.perks[j].lvl[i]] = j;
		for(var j in mperk)
			textarea += ""+j+" ур: "+perk[mperk[j]][0] + "\n";
	}
	textarea += "\nПрокаченные навыки:\n";
	for(var i in skills) 
		if(skills[i][0] > 80) 
			textarea += skills[i][2]+": "+skills[i][0]+"\n";
	textarea += "\nКниги:\n";
	for(var i in mychar.book) {
		if(i!="prewar"&&mychar.book[i][0]<10)	textarea += textbook[i]+" "+(10-mychar.book[i][0])+"\n";
		else if (i=="prewar"&&mychar.book[i][0]<20)   textarea += textbook[i]+" "+(20-mychar.book[i][0])+"\n"
	}
	$("#totaltext").val(textarea);	
		
}
// Скрол по 1 строчке
function scrollit(e){
		var delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
		if(delta>0) $(this).scrollTop(this.scrollTop + 12);
		else $(this).scrollTop(this.scrollTop - 12);
		e.preventDefault();
}

function imgLoaded(img){
    var $img = $(img);
    $img.parent().addClass('loaded');
}
//главная функция
function main() 
{
	
	$("#crlistperk").on('wheel', scrollit);
	$("#selectperk").on('wheel', scrollit);
	$("#selectquest").on('wheel', scrollit);
	$("#textparm").on('wheel', scrollit);
	$("#textparms").on('wheel', scrollit);
	$("#textparmq").on('wheel', scrollit);
	$("#answ").on('wheel', scrollit);
	for(var i = 1; i<4;i++) $("#textlist"+i).on('wheel', scrollit);
	
	/*var scale = 1;
	$(document).on('wheel', function(e) {	// маштабирование
		if($("#"+e.originalEvent.currentTarget.id).css("overflow")!=="auto") {
			var delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
			if (delta > 0) scale += 0.05;
			else scale -= 0.05;
			$("#main").css("transform", "scale("+scale+")");
			e.preventDefault();
		}
	});*/
	
	$("#totalkey").click(total);
	$("#canceltotal").click(function(){$("#total").hide();})
	
	$("#men").click(changesex);
	$("#women").click(changesex);
	
	document.addEventListener('keydown', modalCloseEsc);
	$("#wrap").click(modalCloseClick);
	
	$("#name").click(showthis);
	$("#age").click(showthis);
	$("#sex").click(showthis);
	
	$("#plusage").click(plusage);
	$("#minusage").click(minusage);
	$("#namenter").keydown(function(pop){ if(pop.keyCode === 13) modalCloseClick();});
	$("#pasenter").keydown(function(pop){ if(pop.keyCode === 13) modalCloseClick();});
	$("#namenter").keyup(function(){ 
											$("#name").html($("#namenter").html().toUpperCase());
											charp.name = $("#namenter").html();
											});
											
	$("#done").click(leveling);
	$("#cancel").click(reg);
	// ДОБАВЛЕНИЕ ПЕРКА!!!!
	$("#doneperk").click(function(){
						$("#perk").hide(); 
						$("#perk").animate({'opacity':'0'},200);
						if(select.perk) {
							mychar.perks[select.perk] = {vol: checkperk(select.perk) + 1, lvl: checkperk(select.perk) ? mychar.perks[select.perk].lvl : []};
							mychar.perks[select.perk].lvl.push(charp.level);
							charp.perkpoint--;
							perk[select.perk][6]();
							showlistperk();
							settle();
							statpoints();
							spoints();
						}
						});
	$("#cancelperk").click(function(){$("#perk").hide();$("#perk").animate({'opacity':'0'},200);});
	
	$("#donequest").click(function(){
						$("#quest").hide(); 
						if(select.quest) {
							if(select.quest!="per_ncr" && select.quest!="medals" && select.quest!="drayfild" && select.quest.substr(0,3)!="imp") {
								quest[select.quest][0] += 1;
								var n = totalquest[charp.level];
								if(n===undefined) n = [];
								n.push(textquest[select.quest][0]);
								totalquest[charp.level] = n;
							}
							questup[select.quest]();
							showlistquest();
							settle();
							statpoints();
						}
						});
	$("#cancelquest").click(function(){$("#quest").hide()});
	
	$("#levelup").click(levelup);
	
	for(var i = 1; i<4;i++) $("#textswitch"+i).click(switchinfo);
	
	for(var j in mychar.book) // Чтение книг 
        $("#book"+j).click(plusbook);
	
	for(var j in stats) {
		$("#plus"+j).click(plusspec);
		$("#minus"+j).click(minusspec);
		$("#"+j+"n").click(function(){infoparm("stats",this.id)});
		$("#"+j+"t").click(function(){infoparm("stats",this.id)});
		$("#"+j).click(function(){infoparm("stats",this.id)});
	}
	for(var j in traits){
		$("#key"+j).mousedown(function(){$("#lkey"+this.id.substr(3)).html("<img src=\"img/small_key.png\" onload=\"imgLoaded(this)\">");});
		$("#key"+j).mouseup(function(){$("#lkey"+this.id.substr(3)).html("");});
		$("#key"+j).click(trait);
		$("#"+j).click(function(){infoparm("traits",this.id)});
	}
	
	for(var j in skills){
		$("#key"+j).mousedown(function(){$("#lkey"+this.id.substr(3)).html("<img src=\"img/small_key.png\" onload=\"imgLoaded(this)\">");});
		$("#key"+j).mouseup(function(){$("#lkey"+this.id.substr(3)).html("");});
		$("#key"+j).click(tags);
		$("#butt"+j).click(selectskill);
	}
	$("#men").css('backgroundImage', 'url(img/men.png)');
	numbers($("#numberage"),charp.age);
	spoints();
	numbers($("#point2"),charp.tags);
	statpoints();
	settle();
	createlistperk();
	$(".main").animate({'opacity':'1'},200);
	
}
//window.addEventListener('DOMContentLoaded', main);
window.addEventListener("load", main);