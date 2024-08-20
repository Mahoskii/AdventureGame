//**************************************SELECTORS**************************************
// Title Page ID's
const startButton = document.getElementById('startButton');
const title = document.getElementById('title');

// Music
const musicDiv = document.getElementById('musicDiv');
const aud = document.getElementById('aud');
const musicPly = document.getElementById('musicPly');
const musicStp = document.getElementById('musicStp');
const musicMute = document.getElementById('musicMute');
const musicUnMute = document.getElementById('musicUnMute');
const vol = document.getElementById('vol');
// Information Page ID's
const gameInfo = document.getElementById('gameInfo');
const information = document.getElementById('information');
const theStoryInfo = document.getElementById('theStoryInfo');
const creditsInfo = document.getElementById('creditsInfo');
// ******BUTTONS******
const createYC = document.getElementById('createYC');
const theStoryBtn = document.getElementById('theStoryBtn');
const back1 = document.getElementById('back1');
const credits = document.getElementById('credits');

// Choose Your Class Page ID's
const classPageTitle = document.getElementById('classPageTitle');
const classPageBB = document.getElementById('classPageBB');
const back2 = document.getElementById('back2');
const allClasses = document.getElementById('allClasses');
const allClassesInfo = document.getElementById('allClassesInfo');
// ******BUTTONS******
const warrior = document.getElementById('warrior');
const rogue = document.getElementById('rogue');
const ranger = document.getElementById('ranger');
const bard = document.getElementById('bard');
const cleric = document.getElementById('cleric');
const wizard = document.getElementById('wizard');
// ******INFO******
const warriorInfo = document.getElementById('warriorInfo');
const rogueInfo = document.getElementById('rogueInfo');
const rangerInfo = document.getElementById('rangerInfo');
const bardInfo = document.getElementById('bardInfo');
const clericInfo = document.getElementById('clericInfo');
const wizardInfo = document.getElementById('wizardInfo');
// ******SELECT******
const selectbtn1 = document.getElementById('selectbtn1');
const selectbtn2 = document.getElementById('selectbtn2');
const selectbtn3 = document.getElementById('selectbtn3');
const selectbtn4 = document.getElementById('selectbtn4');
const selectbtn5 = document.getElementById('selectbtn5');
const selectbtn6 = document.getElementById('selectbtn6');

// Stat Page ID's
const statsPageTitle = document.getElementById('statsPageTitle');
const statsPageBB = document.getElementById('statsPageBB');
const back3 = document.getElementById('back3');
const statsForm = document.getElementById('statsForm');
const statInfo = document.getElementById('statInfo');
const confirmBTN1 = document.getElementById('confirmBTN1');
const noPoints = document.getElementById('noPoints');
// ******BUTTONS******
const resetBTN1 = document.getElementById('resetBTN1');
const changeStat = document.getElementById('changeStat');
// ******STATS******
const statsBoxesSide = document.getElementById('statsBoxesSide');
const statNum = document.getElementById('statNum');
const str = document.getElementById('str');
const dex = document.getElementById('dex');
const con = document.getElementById('con');
const int = document.getElementById('int');
const wis = document.getElementById('wis');
const cha = document.getElementById('cha');


// Skill Page ID's
const skillsPageTitle = document.getElementById('skillsPageTitle');
const skillsPageBB = document.getElementById('skillsPageBB');
const back4 = document.getElementById('back4');
const skillPoints = document.getElementById('skillPoints');
const skillTree = document.getElementById('skillTree');
const skillsInfo = document.getElementById('skillsInfo');
const noPoints2 = document.getElementById('noPoints2');
// ******BUTTONS******
const skill1btn = document.getElementById('skill1btn');
const skill2btn = document.getElementById('skill2btn');
const skill3btn = document.getElementById('skill3btn');
const skill4btn = document.getElementById('skill4btn');
const skill5btn = document.getElementById('skill5btn');
const skill6btn = document.getElementById('skill6btn');
const confirmBTN2 = document.getElementById('confirmBTN2');
// ******IMAGES******
const skill1img = document.getElementById('skill1img');
const skill2img = document.getElementById('skill2img');
const skill3img = document.getElementById('skill3img');
const skill4img = document.getElementById('skill4img');
const skill5img = document.getElementById('skill5img');
const skill6img = document.getElementById('skill6img');
// ******DIVS******
const skill1Div = document.getElementById('skill1Div');
const skill2Div = document.getElementById('skill2Div');
const skill3Div = document.getElementById('skill3Div');
const skill4Div = document.getElementById('skill4Div');
const skill5Div = document.getElementById('skill5Div');
const skill6Div = document.getElementById('skill6Div');
// ******INFO******
const skill1Info = document.getElementById('skill1Info');
const skill2Info = document.getElementById('skill2Info');
const skill3Info = document.getElementById('skill3Info');
const skill4Info = document.getElementById('skill4Info');
const skill5Info = document.getElementById('skill5Info');
const skill6Info = document.getElementById('skill6Info');

const skill1Title = document.getElementById('skill1Title');
const skill2Title = document.getElementById('skill2Title');
const skill3Title = document.getElementById('skill3Title');
const skill4Title = document.getElementById('skill4Title');
const skill5Title = document.getElementById('skill5Title');
const skill6Title = document.getElementById('skill6Title');

const skillTitle = [skill1Title, skill2Title, skill3Title, skill4Title, skill5Title, skill6Title];

const skill1disc = document.getElementById('skill1disc');
const skill2disc = document.getElementById('skill2disc');
const skill3disc = document.getElementById('skill3disc');
const skill4disc = document.getElementById('skill4disc');
const skill5disc = document.getElementById('skill5disc');
const skill6disc = document.getElementById('skill6disc');

const skilldisc = [skill1disc, skill2disc, skill3disc, skill4disc, skill5disc, skill6disc];

const skill1disc2 = document.getElementById('skill1disc2');
const skill2disc2 = document.getElementById('skill2disc2');
const skill3disc2 = document.getElementById('skill3disc2');
const skill4disc2 = document.getElementById('skill4disc2');
const skill5disc2 = document.getElementById('skill5disc2');
const skill6disc2 = document.getElementById('skill6disc2');

const skilldisc2 = [skill1disc2, skill2disc2, skill3disc2, skill4disc2, skill5disc2, skill6disc2];

// Character Custumization Page ID's
const characterCPageTitle = document.getElementById('characterCPageTitle');
const characterCPageBB = document.getElementById('characterCPageBB');
const back5 = document.getElementById('back5');
const yourName = document.getElementById('yourName');
const name = document.getElementById('name');
const nameForm = document.getElementById('nameForm');
const chaLooks = document.getElementById('chaLooks');
const charInfoArea = document.getElementById('charInfoArea');
// ******BUTTONS******
const imgBtn1 = document.getElementById('imgBtn1');
const imgBtn2 = document.getElementById('imgBtn2');
const imgBtn3 = document.getElementById('imgBtn3');
const imgBtn4 = document.getElementById('imgBtn4');
const imgBtn5 = document.getElementById('imgBtn5');
const imgBtn6 = document.getElementById('imgBtn6');
const confirmBTN3 = document.getElementById('confirmBTN3');
// ******INFORMATION******
const userName = document.getElementById('userName');
const userClass = document.getElementById('userClass');
const userLooks = document.getElementById('userLooks');
const userStr = document.getElementById('userStr');
const userDex = document.getElementById('userDex');
const userCon = document.getElementById('userCon');
const userInt = document.getElementById('userInt');
const userWis = document.getElementById('userWis');
const userCha = document.getElementById('userCha');
const userSkill1 = document.getElementById('userSkill1');
const userSkill2 = document.getElementById('userSkill2');
const userSkill3 = document.getElementById('userSkill3');
const userSkill4 = document.getElementById('userSkill4');
// PLAYER PORTRAIT
const playerImg1 = document.getElementById('playerImg1');
const playerImg2 = document.getElementById('playerImg2');
const playerImg3 = document.getElementById('playerImg3');
const playerImg4 = document.getElementById('playerImg4');
const playerImg5 = document.getElementById('playerImg5');
const playerImg6 = document.getElementById('playerImg6');

// Party Selection Page ID's
const partyPageTitle = document.getElementById('partyPageTitle');
const partyPageBB = document.getElementById('partyPageBB');
const back6 = document.getElementById('back6');
const cPoints = document.getElementById('cPoints');
const cPointsForm = document.getElementById('cPointsForm');
const partyCompanions = document.getElementById('partyCompanions');
const companionInfo = document.getElementById('companionInfo');
const companionPoints = document.getElementById('companionPoints');
const noPoints3 = document.getElementById('noPoints3');
// ******BUTTONS******
const comp1btn = document.getElementById('comp1btn');
const comp2btn = document.getElementById('comp2btn');
const comp3btn = document.getElementById('comp3btn');
const comp4btn = document.getElementById('comp4btn');
const comp5btn = document.getElementById('comp5btn');
const comp6btn = document.getElementById('comp6btn');
const confirmBTN4 = document.getElementById('confirmBTN4');
// ******DIVS******
const comp1 = document.getElementById('comp1');
const comp2 = document.getElementById('comp2');
const comp3 = document.getElementById('comp3');
const comp4 = document.getElementById('comp4');
const comp5 = document.getElementById('comp5');
const comp6 = document.getElementById('comp6');
// ******INFO******
const companion1Info = document.getElementById('companion1Info');
const companion2Info = document.getElementById('companion2Info');
const companion3Info = document.getElementById('companion3Info');
const companion4Info = document.getElementById('companion4Info');
const companion5Info = document.getElementById('companion5Info');
const companion6Info = document.getElementById('companion6Info');
// COMPANION IMAGES
const comp1img = document.getElementById('comp1img');
const comp2img = document.getElementById('comp2img');
const comp3img = document.getElementById('comp3img');
const comp4img = document.getElementById('comp4img');
const comp5img = document.getElementById('comp5img');
const comp6img = document.getElementById('comp6img');


// Game Page ID's
const adventureB = document.getElementById('adventureB');
const allPartyCards = document.getElementById('allPartyCards');
const gameScreen = document.getElementById('gameScreen');
const gameTextArea = document.getElementById('gameTextArea');
const nextBTN = document.getElementById('nextBTN');
const nextBTN2 = document.getElementById('nextBTN2');
const nextBTN3 = document.getElementById('nextBTN3');
const nextBTN4 = document.getElementById('nextBTN4');
const nextBTN5 = document.getElementById('nextBTN5');
const nextBTN6 = document.getElementById('nextBTN6');
// ******IMAGES******
const heropartyImg = document.getElementById('heropartyImg');
const partyMemberImg1 = document.getElementById('partyMemberImg1');
const partyMemberImg2 = document.getElementById('partyMemberImg2');
const partyMemberImg3 = document.getElementById('partyMemberImg3');
// ******PLAYER CARD INFO******
const heroNameHere = document.getElementById('heroNameHere');
const heroClassHere = document.getElementById('heroClassHere');
const heroHPHere = document.getElementById('heroHPHere');
const heroAPHere = document.getElementById('heroAPHere');
const heroSkillsHere = document.getElementById('heroSkillsHere');
const hsOption1 = document.getElementById('hsOption1');
const hsOption2 = document.getElementById('hsOption2');
const hsOption3 = document.getElementById('hsOption3');
const hsOption4 = document.getElementById('hsOption4');
// ******COMPANION INFO******
const member1NameHere = document.getElementById('member1NameHere');
const member1ClassHere = document.getElementById('member1ClassHere');
const member1HPHere = document.getElementById('member1HPHere');
const member1APHere = document.getElementById('member1APHere');
const member1SkillsHere = document.getElementById('member1SkillsHere');
const cs1Option1 = document.getElementById('cs1Option1');
const cs1Option2 = document.getElementById('cs1Option2');
const cs1Option3 = document.getElementById('cs1Option3');
const cs1Option4 = document.getElementById('cs1Option4');
let comp1Array = [member1NameHere, member1ClassHere, member1HPHere, member1APHere, cs1Option1, cs1Option2, cs1Option3, cs1Option4];
const member2NameHere = document.getElementById('member2NameHere');
const member2ClassHere = document.getElementById('member2ClassHere');
const member2HPHere = document.getElementById('member2HPHere');
const member2APHere = document.getElementById('member2APHere');
const member2SkillsHere = document.getElementById('member2SkillsHere');
const cs2Option1 = document.getElementById('cs2Option1');
const cs2Option2 = document.getElementById('cs2Option2');
const cs2Option3 = document.getElementById('cs2Option3');
const cs2Option4 = document.getElementById('cs2Option4');
let comp2Array = [member2NameHere, member2ClassHere, member2HPHere, member2APHere, cs2Option1, cs2Option2, cs2Option3, cs2Option4];
const member3NameHere = document.getElementById('member3NameHere');
const member3ClassHere = document.getElementById('member3ClassHere');
const member3HPHere = document.getElementById('member3HPHere');
const member3APHere = document.getElementById('member3APHere');
const member3SkillsHere = document.getElementById('member3SkillsHere');
const cs3Option1 = document.getElementById('cs3Option1');
const cs3Option2 = document.getElementById('cs3Option2');
const cs3Option3 = document.getElementById('cs3Option3');
const cs3Option4 = document.getElementById('cs3Option4');
let comp3Array = [member3NameHere, member3ClassHere, member3HPHere, member3APHere, cs3Option1, cs3Option2, cs3Option3, cs3Option4];
// ******SPRITES******
const char1 = document.getElementById('char1');
const char2 = document.getElementById('char2');
const char3 = document.getElementById('char3');
const char4 = document.getElementById('char4');
const char5 = document.getElementById('char5');

// PLAYER INFO
let playerObject = {};

//****************************************SKILLS****************************************
class Skill {
	constructor(name, img, role, info, stats, usage, apCost, dmgBonus){
		this.name = name;
		this.img = img;
		this.role = role;
		this.info = info;
		this.stats = stats;
		this.usage = usage;
		this.apCost = apCost;
		this.dmgBonus = dmgBonus;
	};

	// skill functions

	// Basic Attack

	Attack(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		dmgNumber = damageNumberGenerator(16, 5);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= dmgNumber;
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 14);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500); 
		};

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	// =====WARRIOR=====

	// ~*~*~*~attack skills~*~*~*~

	ShieldBonk(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		dmgNumber = damageNumberGenerator(11, 20);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= dmgNumber;
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 28);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500); 
		};

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	Slash(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		dmgNumber = damageNumberGenerator(11, 25);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= dmgNumber;
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 32);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500); 
		};

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	HiltStab(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		let dmgNumber2;
		dmgNumber = damageNumberGenerator(6, 5);
		dmgNumber2 = damageNumberGenerator(11, 25);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= (dmgNumber);
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, 'hilt bash', combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 7);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500);
		};

		setTimeout(() => {
			if(playerTarget.innerText > 0){
				playerTarget.innerText -= (dmgNumber2);
				addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber2, 'stab', combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 30);
				setTimeout(()=>{
					animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
				}, 500);
			};
		}, 700);

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	// ~*~*~*~buff/debuff attacks~*~*~*~

	CatnipScent(){
		skillSelected = false;
		heroAPHere.innerText -= this.apCost;
		playerObject.threatP += 30;
		// isActive = true;
		combatActionObject.skillname.disabled = true;
		addMessage(`${combatActionObject.playerName}'s threat level has increased`);
	};

	Loaf(){
		skillSelected = false;
		heroAPHere.innerText -= this.apCost;
		playerObject.defenceP += 10;
		// isActive = true;
		combatActionObject.skillname.disabled = true;
		addMessage(`Your defence has increased`);
		console.log(skillSelected);
	};

	Hiss(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		// isActive = true;
		// ~~~~~~~DONT FORGET TO REMOVE THIS LATER!!!!!!~~~~~~~
		let fearResistant = false;
		// combatActionObject.skillname.disabled = true;
		if(fearResistant === false){
			combatActionObject.wholeTarget.classList.add('fearActive');
			addMessage(`${combatActionObject.playerName} has hissed at ${combatActionObject.wholeTarget.title}. ${combatActionObject.wholeTarget.title} now cowers in fear and will not attack on it's next turn.`);
		};
	};

	// =====ROGUE=====

	// ~*~*~*~attack skills~*~*~*~

	Pounce(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		dmgNumber = damageNumberGenerator(11, 20);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= dmgNumber;
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 28);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500); 
		};

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	TripleStab(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		let dmgNumber2;
		let dmgNumber3;
		dmgNumber = damageNumberGenerator(11, 17);
		dmgNumber2 = damageNumberGenerator(11, 17);
		dmgNumber3 = damageNumberGenerator(11, 17);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= (dmgNumber);
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 25);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500);
		};

		setTimeout(() => {
			if(playerTarget.innerText > 0){
				playerTarget.innerText -= (dmgNumber2);
				addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber2, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 25);
				setTimeout(()=>{
					animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
				}, 500);
			};
		}, 700);

		setTimeout(() => {
			if(playerTarget.innerText > 0){
				playerTarget.innerText -= (dmgNumber3);
				addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber3, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 25);
				setTimeout(()=>{
					animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
				}, 500);
			};
		}, 1400);

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	KnifeThrow(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		dmgNumber = damageNumberGenerator(11, 20);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= dmgNumber;
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 28);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500); 
		};

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	// ~*~*~*~buff/debuff attacks~*~*~*~

	Lurk(){
		skillSelected = false;
		heroAPHere.innerText -= this.apCost;
		playerObject.threatP = 0;
		lurking = true;
		combatActionObject.skillname.disabled = true;
		addMessage(`${combatActionObject.playerName} is now lurking in the shadows`);
	};

	DeadlyScents(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		staggerChance = true;
		let dmgNumber;
		dmgNumber = damageNumberGenerator(11, 15);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= dmgNumber;
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 22);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500); 
		};

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
		
	};

	HideandHeal(){
		skillSelected = false;
		heroAPHere.innerText -= this.apCost;
		playerObject.threatP = 0;
		let healValue = 10;
		if(Number(combatActionObject.playerHP) + Number(healValue) >= Number(playerObject.hp)){
			heroHPHere.innerText = Number(playerObject.hp);
		} else {
			heroHPHere.innerText = Number(heroHPHere.innerText) + healValue;
		};
		addMessage(`${combatActionObject.playerName} has hid from the enemies, healed and lost all aggro`);
	};

	// =====RANGER=====

	// ~*~*~*~attack skills~*~*~*~

	RapidFire(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		let dmgNumber2;
		let dmgNumber3;
		dmgNumber = damageNumberGenerator(11, 17);
		dmgNumber2 = damageNumberGenerator(11, 17);
		dmgNumber3 = damageNumberGenerator(11, 17);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= (dmgNumber);
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 25);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500);
		};

		setTimeout(() => {
			if(playerTarget.innerText > 0){
				playerTarget.innerText -= (dmgNumber2);
				addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber2, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 25);
				setTimeout(()=>{
					animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
				}, 500);
			};
		}, 700);

		setTimeout(() => {
			if(playerTarget.innerText > 0){
				playerTarget.innerText -= (dmgNumber3);
				addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber3, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 25);
				setTimeout(()=>{
					animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
				}, 500);
			};
		}, 1400);

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	ChargedShot(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		dmgNumber = damageNumberGenerator(11, 25);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= dmgNumber;
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 32);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500); 
		};

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	FireArrow(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		dmgNumber = damageNumberGenerator(11, 25);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= dmgNumber;
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 32);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500); 
		};

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	// ~*~*~*~buff/debuff attacks~*~*~*~

	// =====BARD=====

	// ~*~*~*~attack skills~*~*~*~

	PawBash(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		dmgNumber = damageNumberGenerator(11, 25);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= dmgNumber;
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 32);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500); 
		};

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	SongofmyPeople(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		dmgNumber = damageNumberGenerator(11, 25);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= dmgNumber;
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 32);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500); 
		};

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	FirstRowTicket(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		let dmgNumber;
		dmgNumber = damageNumberGenerator(11, 25);
		if(playerTarget.innerText > 0){
			playerTarget.innerText -= dmgNumber;
			addDmgNoteAndAnimation(combatActionObject.playerName, dmgNumber, this.name, combatActionObject.wholeTarget.title, combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX', 32);
			setTimeout(()=>{
				animationRemoval(combatActionObject.wholeTarget.querySelector('img'), 'animate__headShake', 'animate__shakeX');
			}, 500); 
		};

		if(playerTarget.innerText <= 0){
			enemyDefeated(combatActionObject.wholeTarget.querySelector('img'), combatActionObject.wholeTarget, combatActionObject.wholeTarget.title);
		};
	};

	// ~*~*~*~buff/debuff attacks~*~*~*~

	DramaticMewling(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		playerObject.threatP = 0;
		distracted = true;
		addMessage(`${combatActionObject.playerName} has distracted ${combatActionObject.wholeTarget.title} and lost all aggro.`);
	};	

	InspiringSong(){
		skillSelected = false;
		heroAPHere.innerText -= this.apCost;
		inspiration = true;
		addMessage(`${combatActionObject.playerName} has inspired the party, granting them damage bonus for their next attack.`);
	};

	Lullaby(playerTarget){
		skillSelected = false;
		targetSelected = false;
		heroAPHere.innerText -= this.apCost;
		sleeping = true;
		addMessage(`${combatActionObject.playerName} has put ${combatActionObject.wholeTarget.title} to sleep.`);
	};

	// =====CLERIC=====

	// ~*~*~*~attack skills~*~*~*~

	// ~*~*~*~buff/debuff attacks~*~*~*~

	// =====WIZARD=====

	// ~*~*~*~attack skills~*~*~*~

	// ~*~*~*~buff/debuff attacks~*~*~*~
};

// *****+++++=====BASIC ATTACKS=====+++++*****

const basicattack = new Skill("Basic Attack", "tbd", "All", "You preform a basic melee attack with your weapon", "Assisting stats: tbd", 'enemy', 2, 0);

// *****+++++=====WARRIOR SKILLS=====+++++*****

// Combat Skills
const shieldbonk = new Skill("Shield Bonk", "Skills/Warrior/warrior.jpg", "Warrior", "You bonk an enemy on the head with your shield", "Assisting stats: tbd", 'enemy', 3, 0);
const slash = new Skill("Slash", "Skills/Warrior/warrior.jpg", "Warrior", "You slash your enemy with your sword", "Assisting stats: tbd", 'enemy', 3, 0);
const hiltstab = new Skill("Hilt Stab", "Skills/Warrior/warrior.jpg", "Warrior", "You hit your enemy with the hilt of your sword and proceed to stab them", "Assisting stats: tbd", 'enemy', 3, 0);

// Buff/Debuff Skills
const catnipscent = new Skill("Catnip Scent", "Skills/Warrior/Catnip_Scent.png", "Warrior", "You pop open a bag of catnip, causing all enemies to focus on attacking you.", "Assisting stats: tbd", 'self', 3, 0);
const loaf = new Skill("Loaf", "Skills/Warrior/Loaf.png", "Warrior", "You change into a defensive loaf position, reducing all damage taken for 2 turns", "Assisting stats: tbd", 'self', 3, 0);
const hiss = new Skill("Hiss", "Skills/Warrior/Hiss.png", "Warrior", "You hiss aggressively at your enemies, causing them to shudder in fear.", "Assisting stats: tbd", 'enemy', 3, 0);

const warriorSkillArray = [shieldbonk, slash, hiltstab, catnipscent, loaf, hiss, basicattack];

// *****+++++=====ROGUE SKILLS=====+++++*****

// Combat Skills
const pounce = new Skill("Pounce", "Skills/Rogue/rogue.jpg", "Rogue", "Backstab your enemy (extra damage while lurk is active)", "Assisting stats: tbd", 'enemy', 3, 0);
const triplestab = new Skill("Triple Stab", "Skills/Rogue/rogue.jpg", "Rogue", "Stab your enemy three times in a row", "Assisting stats: tbd", 'enemy', 3, 0);
const knifethrow = new Skill("Knife Throw", "Skills/Rogue/rogue.jpg", "Rogue", "Throw a throwing knife at an enemy", "Assisting stats: tbd", 'enemy', 3, 0);

// Buff/Debuff Skills
const lurk = new Skill("Lurk", "Skills/Rogue/rogue.jpg", "Rogue", "Go invisible and lose all agro on you", "Assisting stats: tbd", 'self', 3, 0);
const deadlyscents = new Skill("Deadly Scents", "Skills/Rogue/rogue.jpg", "Rogue", "Stagger your enemy by farting in their general direction (extra damage while lurk is active)", "Assisting stats: tbd", 'enemy', 3, 0);
const hideandheal = new Skill("Hide and Heal", "Skills/Rogue/rogue.jpg", "Rogue", "You sneakily hide from your enemies for a short time to recover some health", "Assisting stats: tbd", 'self', 3, 0);

const rogueSkillArray = [pounce, triplestab, knifethrow, lurk, deadlyscents, hideandheal, basicattack];

// *****+++++=====RANGER SKILLS=====+++++*****

// Combat Skills
const rapidfire = new Skill("Rapid Fire", "Skills/Ranger/ranger.jpg", "Ranger", "Quickly fire 3 arrows at an enemy", "Assisting stats: tbd", 'enemy', 3, 0);
const chargedshot = new Skill("Charged Shot", "Skills/Ranger/ranger.jpg", "Ranger", "Fire a powerful fully charged arrow at your enemy", "Assisting stats: tbd", 'enemy', 3, 0);
const firearrow = new Skill("Fire Arrow", "Skills/Ranger/ranger.jpg", "Ranger", "Shoot a flaming arrow at your enemy.", "Assisting stats: tbd", 'enemy', 3, 0);

// Buff/Debuff Skills
const huntersinstincts = new Skill("Hunter's Instincts", "Skills/Ranger/ranger.jpg", "Ranger", "Expose your enemy's weak spots, making them receive more damage from the next attack (yours or an ally's).", "Assisting stats: tbd", 'enemy', 3, 10);
const pacify = new Skill("Pacify", "Skills/Ranger/ranger.jpg", "Ranger", "Use your knowledge of creatures to try and pacify an enemy. If successful, the enemy will not attack on its next turn.", "Assisting stats: tbd", 'enemy', 3, 0);
const bowproficiency= new Skill("Bow Proficiency", "Skills/Ranger/ranger.jpg", "Ranger", "Increase the damage for your next attack while active.", "Assisting stats: tbd", 'self', 3, 12);

const rangerSkillArray = [rapidfire, chargedshot, firearrow, huntersinstincts, pacify, bowproficiency, basicattack];

// *****+++++=====BARD SKILLS=====+++++*****

// Combat Skills
const pawbash = new Skill("Paw Bash", "Skills/Bard/Paw_Bash.png", "Bard", "play on your enemies as if they were drums", "Assisting stats: tbd", 'enemy', 3, 0);
const songofmypeople = new Skill("Song of my People", "Skills/Bard/Song_of_my people.png", "Bard", "You sing the song of your people, sending strong sound waves that damage enemies.", "Assisting stats: tbd", 'enemy', 3, 0);
const firstrowticket = new Skill("First Row Ticket", "Skills/Bard/bard.jpg", "Bard", "You smack your enemy with your lute.", "Assisting stats: tbd", 'enemy', 3, 0);

// Buff/Debuff Skills
const dramaticmewling = new Skill("Dramatic Mewling", "Skills/Bard/Dramatic_Mewling.png", "Bard", "You go into an elaborate and dramatic performance faking your glorious death in battle, distracting an enemy for the next turn and losing all aggro.", "Assisting stats: tbd", 'self', 3, 0);
const inspiringsong = new Skill("Inspiring Song", "Skills/Bard/bard.jpg", "Bard", "You sing a song of inspiration giving everyone in the party a damage boost to their next attack.", "Assisting stats: tbd", 'ally', 3, 10);
const lullaby = new Skill("Lullaby", "Skills/Bard/bard.jpg", "Bard", "You sing a calming song, causing an enemy to fall asleep.", "Assisting stats: tbd", 'enemy', 3, 0);

const bardSkillArray = [pawbash, songofmypeople, firstrowticket, dramaticmewling, inspiringsong, lullaby, basicattack];

// *****+++++=====CLERIC SKILLS=====+++++*****

// Combat Skills
const hammerswing = new Skill("Hammer Swing", "Skills/Cleric/cleric.jpg", "Cleric", "you Swing your war hammer around, hitting your enemy.", "Assisting stats: tbd", 'enemy', 3, 0);
const slam = new Skill("Slam", "Skills/Cleric/cleric.jpg", "Cleric", "You slam your war hammer on an enemy's head and staggering them for their next turn.", "Assisting stats: tbd", 'enemy', 3, 0);
const doubletrouble = new Skill("Double Trouble", "Skills/Cleric/cleric.jpg", "Cleric", "You swing your war hammer around violently hitting your enemy twice in a row.", "Assisting stats: tbd", 'enemy', 3, 0);

// Buff/Debuff Skills
const purrfecthealth = new Skill("Purrfect Health", "Skills/Cleric/cleric.jpg", "Cleric", "You purr at your ally, restoring some of their HP back.", "Assisting stats: tbd", 'ally', 3, 0);
const thenuggiecanticle = new Skill("The Nuggie Canticle", "Skills/Cleric/cleric.jpg", "Cleric", "You call upon the power of the Holy Chicken Nugget gaining extra damage for your next attack.", "Assisting stats: tbd", 'self', 3, 12);
const prayerofprotection = new Skill("Prayer of Protection", "Skills/Cleric/cleric.jpg", "Cleric", "You silently give prayer and gain extra defense for your next turn for you or an ally.", "Assisting stats: tbd", 'ally', 3, 0);

const clericSkillArray = [hammerswing, slam, doubletrouble, purrfecthealth, thenuggiecanticle, prayerofprotection, basicattack];

// *****+++++=====WIZARD SKILLS=====+++++*****

// Combat Skills
const fireball = new Skill("Fire Ball", "Skills/Wizard/wizard.jpg", "Wizard", "You shoot a fire ball at your enemy.", "Assisting stats: tbd", 'enemy', 3, 0);
const polymorph = new Skill("Polymorph", "Skills/Wizard/wizard.jpg", "Wizard", "You turn your enemy into a sheep for the next turn.", "Assisting stats: tbd", 'enemy', 3, 0);
const icecrystals = new Skill("Ice Crystals", "Skills/Wizard/wizard.jpg", "Wizard", "You conjure magical icicles and shoot them at your enemy.", "Assisting stats: tbd", 'enemy', 3, 0);

// Buff/Debuff Skills
const lick = new Skill("Lick", "Skills/Wizard/Lick.png", "Wizard", "You lick yourself, magically hardening your fur for extra protection.", "Assisting stats: tbd", 'self', 3, 0);
const tailwag = new Skill("Tail Wag", "Skills/Wizard/Tail_Wag.png", "Wizard", "You wag your tail playfully, magically mesmerizing the enemies and making them less aggressive towards you.", "Assisting stats: tbd", 'self', 3, 0);
const magicalexcellence = new Skill("Magical Excellence", "Skills/Wizard/wizard.jpg", "Wizard", "Your next action does not cost AP points.", "Assisting stats: tbd", 'self', 3, 0);

const wizardSkillArray = [fireball, polymorph, icecrystals, lick, tailwag, magicalexcellence, basicattack];

// *****+++++=====All Skills Array=====+++++*****
const allPlayerSkillsArray = [shieldbonk, slash, hiltstab, catnipscent, loaf, hiss, pounce, triplestab, knifethrow, lurk, deadlyscents, hideandheal, rapidfire, chargedshot, firearrow, huntersinstincts, pacify, bowproficiency, pawbash, songofmypeople, firstrowticket, dramaticmewling, inspiringsong, lullaby, hammerswing, slam, doubletrouble, purrfecthealth, thenuggiecanticle, prayerofprotection, fireball, polymorph, icecrystals, lick, tailwag, magicalexcellence];

//**************************************FUNCTIONS**************************************
// hiding a component from the page
var hiding = function(target){
	target.classList.add('invis');
};
// showing a component to the page
var showing = function(target){
	target.classList.remove('invis');
};

// *************************************TITLE PAGE*************************************

// Changing from title page to information page
startButton.addEventListener('click', ()=> {
	hiding(startButton);
	showing(gameInfo);
	showing(information);
	showing(musicDiv);
	aud.play();
}); 

// music section

musicPly.addEventListener('click', ()=> {
	aud.play();
	hiding(musicPly);
	showing(musicStp);
});
musicStp.addEventListener('click', ()=> {
	aud.pause();
	hiding(musicStp);
	showing(musicPly);
});

var volnum;

function volCtrl(){
	if(vol.value > 0){
		volnum = vol.value;
		aud.volume = volnum;
	};
};

musicMute.addEventListener('click', ()=>{
	aud.volume = 0;
	vol.value = 0;
	hiding(musicMute);
	showing(musicUnMute);
});
musicUnMute.addEventListener('click', ()=>{
	vol.value = volnum;
	aud.volume = vol.value;
	hiding(musicUnMute);
	showing(musicMute);
});

vol.addEventListener('click', ()=> {
	aud.volume = vol.value;
	volCtrl();
});

// *************************************INFO PAGE*************************************

// going back to title page

back1.addEventListener('click', ()=> {
	showing(startButton);
	showing(title);
	hiding(gameInfo);
	hiding(information);
	hiding(creditsInfo);
	hiding(theStoryInfo);
	hiding(musicDiv);
	aud.pause();
});


// Present the Credits

credits.addEventListener('click', ()=> {
	hiding(information);
	showing(creditsInfo);
	hiding(theStoryInfo);

});

// Present the Story

theStoryBtn.addEventListener('click', ()=> {
	hiding(information);
	showing(theStoryInfo);
	hiding(creditsInfo);

});

// Changing information page to choosing class page

createYC.addEventListener('click', ()=>{
	// former page
	hiding(gameInfo);
	hiding(theStoryInfo);
	hiding(creditsInfo);
	hiding(title);
	// new page
	showing(classPageTitle);
	showing(classPageBB);
	showing(allClasses);
	showing(allClassesInfo);
	showing(information);
});

// *************************************CLASS PAGE*************************************

// going back from class page to information page

back2.addEventListener('click', ()=> {
	// former page
	hiding(classPageTitle);
	hiding(classPageBB);
	hiding(allClasses);
	hiding(allClassesInfo);
	hiding(warriorInfo);
	hiding(rogueInfo);
	hiding(rangerInfo);
	hiding(bardInfo);
	hiding(clericInfo);
	hiding(wizardInfo);
	// new page
	showing(gameInfo);
	showing(information);
	showing(title);
});

// CLASS SKILLS OBJECTS
// let warriorSkillObject = {
// 	warriorSkill1: 'Skills/Warrior/warrior.jpg',
// 	warriorSkill2: 'Skills/Warrior/warrior.jpg',
// 	warriorSkill3: 'Skills/Warrior/warrior.jpg',
// 	warriorSkill4: 'Skills/Warrior/warrior.jpg',
// 	warriorSkill5: 'Skills/Warrior/warrior.jpg',
// 	warriorSkill6: 'Skills/Warrior/warrior.jpg'
// };
// let rogueSkillObject = {
// 	rogueSkill1: 'Skills/Rogue/rogue.jpg',
// 	rogueSkill2: 'Skills/Rogue/rogue.jpg',
// 	rogueSkill3: 'Skills/Rogue/rogue.jpg',
// 	rogueSkill4: 'Skills/Rogue/rogue.jpg',
// 	rogueSkill5: 'Skills/Rogue/rogue.jpg',
// 	rogueSkill6: 'Skills/Rogue/rogue.jpg'
// };
// let rangerSkillObject = {
// 	rangerSkill1: 'Skills/Ranger/ranger.jpg',
// 	rangerSkill2: 'Skills/Ranger/ranger.jpg',
// 	rangerSkill3: 'Skills/Ranger/ranger.jpg',
// 	rangerSkill4: 'Skills/Ranger/ranger.jpg',
// 	rangerSkill5: 'Skills/Ranger/ranger.jpg',
// 	rangerSkill6: 'Skills/Ranger/ranger.jpg'
// };
// let bardSkillObject = {
// 	bardSkill1: 'Skills/Bard/bard.jpg',
// 	bardSkill2: 'Skills/Bard/bard.jpg',
// 	bardSkill3: 'Skills/Bard/bard.jpg',
// 	bardSkill4: 'Skills/Bard/bard.jpg',
// 	bardSkill5: 'Skills/Bard/bard.jpg',
// 	bardSkill6: 'Skills/Bard/bard.jpg'
// };
// let clericSkillObject = {
// 	clericSkill1: 'Skills/Cleric/cleric.jpg',
// 	clericSkill2: 'Skills/Cleric/cleric.jpg',
// 	clericSkill3: 'Skills/Cleric/cleric.jpg',
// 	clericSkill4: 'Skills/Cleric/cleric.jpg',
// 	clericSkill5: 'Skills/Cleric/cleric.jpg',
// 	clericSkill6: 'Skills/Cleric/cleric.jpg'
// };
// let wizardSkillObject = {
// 	wizardSkill1: 'Skills/Wizard/wizard.jpg',
// 	wizardSkill2: 'Skills/Wizard/wizard.jpg',
// 	wizardSkill3: 'Skills/Wizard/wizard.jpg',
// 	wizardSkill4: 'Skills/Wizard/wizard.jpg',
// 	wizardSkill5: 'Skills/Wizard/wizard.jpg',
// 	wizardSkill6: 'Skills/Wizard/wizard.jpg'
// };

// CLASSES INFORMATION AND SELECT
let skillBTNS = [skill1btn, skill2btn, skill3btn, skill4btn, skill5btn, skill6btn];
let skillIMGS = [skill1img, skill2img, skill3img, skill4img, skill5img, skill6img];
// function skillDisplay(clsObj){
// 	for(i = 0; i < skillBTNS.length; i++){
// 		skillBTNS[i].innerText = Object.keys(clsObj)[i];
// 		skillBTNS[i].value = Object.keys(clsObj)[i];
// 		skillIMGS[i].src = Object.values(clsObj)[i];
// 	};
// };
function skillDisplay(clsObj){
	for(i = 0; i < skillBTNS.length; i++){
		skillBTNS[i].innerText = (clsObj)[i].name;
		skillBTNS[i].value = (clsObj)[i].name;
		skillIMGS[i].src = (clsObj)[i].img;
		skillTitle[i].innerText = (clsObj)[i].name;
		skilldisc[i].innerText = (clsObj)[i].info;
		skilldisc2[i].innerText = (clsObj)[i].stats;
	};
};
let moveFromClassToStats = function() {
	// former page
	hiding(classPageTitle);
	hiding(classPageBB);
	hiding(allClasses);
	hiding(allClassesInfo);
	// new page
	showing(statsPageTitle);
	showing(statsPageBB);
	showing(statsForm);
	showing(statInfo);
};
let playerClassIs;

// **********WARRIOR**********

// information
warrior.addEventListener('click', ()=>{
	hiding(information);
	showing(warriorInfo);
	hiding(rogueInfo);
	hiding(rangerInfo);
	hiding(bardInfo);
	hiding(clericInfo);
	hiding(wizardInfo);
});

// select & move to next page
selectbtn1.addEventListener('click', ()=>{
	hiding(warriorInfo);
	playerClassIs = selectbtn1.value;
	userClass.innerText = `Class: ${playerClassIs}`;
	skillDisplay(warriorSkillArray);
	moveFromClassToStats();
});

// **********ROGUE**********

// information
rogue.addEventListener('click', ()=>{
	hiding(information);
	hiding(warriorInfo);
	showing(rogueInfo);
	hiding(rangerInfo);
	hiding(bardInfo);
	hiding(clericInfo);
	hiding(wizardInfo);
});

// select & move to next page
selectbtn2.addEventListener('click', ()=>{
	hiding(rogueInfo);
	playerClassIs = selectbtn2.value;
	userClass.innerText = `Class: ${playerClassIs}`;
	skillDisplay(rogueSkillArray);
	moveFromClassToStats();
});

// **********RANGER**********

// information
ranger.addEventListener('click', ()=>{
	hiding(information);
	hiding(warriorInfo);
	hiding(rogueInfo);
	showing(rangerInfo);
	hiding(bardInfo);
	hiding(clericInfo);
	hiding(wizardInfo);
});

// select & move to next page
selectbtn3.addEventListener('click', ()=>{
	hiding(rangerInfo);
	playerClassIs = selectbtn3.value;
	userClass.innerText = `Class: ${playerClassIs}`;
	skillDisplay(rangerSkillArray);
	moveFromClassToStats();
});

// **********BARD**********

// information
bard.addEventListener('click', ()=>{
	hiding(information);
	hiding(warriorInfo);
	hiding(rogueInfo);
	hiding(rangerInfo);
	showing(bardInfo);
	hiding(clericInfo);
	hiding(wizardInfo);
});

// select & move to next page
selectbtn4.addEventListener('click', ()=>{
	hiding(bardInfo);
	playerClassIs = selectbtn4.value;
	userClass.innerText = `Class: ${playerClassIs}`;
	skillDisplay(bardSkillArray);
	moveFromClassToStats();
});

// **********CLERIC**********

// information
cleric.addEventListener('click', ()=>{
	hiding(information);
	hiding(warriorInfo);
	hiding(rogueInfo);
	hiding(rangerInfo);
	hiding(bardInfo);
	showing(clericInfo);
	hiding(wizardInfo);
});

// select & move to next page
selectbtn5.addEventListener('click', ()=>{
	hiding(clericInfo);
	playerClassIs = selectbtn5.value;
	userClass.innerText = `Class: ${playerClassIs}`;
	skillDisplay(clericSkillArray);
	moveFromClassToStats();
});

// **********WIZARD**********

// information
wizard.addEventListener('click', ()=>{
	hiding(information);
	hiding(warriorInfo);
	hiding(rogueInfo);
	hiding(rangerInfo);
	hiding(bardInfo);
	hiding(clericInfo);
	showing(wizardInfo);
});

// select & move to next page
selectbtn6.addEventListener('click', ()=>{
	hiding(wizardInfo);
	playerClassIs = selectbtn6.value;
	userClass.innerText = `Class: ${playerClassIs}`;
	skillDisplay(wizardSkillArray);
	moveFromClassToStats();
});

// *************************************STATS PAGE*************************************

// GOING BACK FROM STATS PAGE TO CLASS PAGE
back3.addEventListener('click', ()=> {
	pSkills.splice(0, pSkills.length);
	// former page
	hiding(statsPageTitle);
	hiding(statsPageBB);
	hiding(statsForm);
	hiding(statInfo);
	// new page
	showing(classPageTitle);
	showing(classPageBB);
	showing(allClasses);
	showing(allClassesInfo);
	showing(information);
});

// CONFIRM STATS AND MOVE TO SKILL SELECTION PAGE
confirmBTN1.addEventListener('click', ()=> {
	if(statNum.value > 0){
		alert('You must allocate all of your points');
	} else {
	// former page
	hiding(statsPageTitle);
	hiding(statsPageBB);
	hiding(statsForm);
	hiding(statInfo);
	// new page
	showing(skillsPageTitle);
	showing(skillsPageBB);
	showing(sPoints);
	showing(skillTree);
	showing(skillsInfo);
	showing(information);
	};
});

// **********CHANGE STATS VALUES WHEN ALLOCATING PPOINTS**********

// REMEMBERING OLD MAX VALUE TO ALLOW POINT CHANGE
function oldMax(){
	str.max = 15;
	dex.max = 15;
	con.max = 15;
	int.max = 15;
	wis.max = 15;
	cha.max = 15;
};

// DEFINING NEW MAX VALUE TO PREVENT FURTHER POINT ALLOCATION
function newMax(){
	str.max = str.value;
	dex.max = dex.value;
	con.max = con.value;
	int.max = int.value;
	wis.max = wis.value;
	cha.max = cha.value;
};

// UPHOLD POINT ALLOCATION RULES
function changeStatNumbers(stat) {
	let chosenStat = stat.target;
	let allStatsUpdated = Number(str.value) + Number(dex.value) + Number(con.value) + Number(int.value) + Number(wis.value) + Number(cha.value);
	// allow point allocation if not all points were used
	if((allStatsUpdated >= 30) && (allStatsUpdated  <= 40)) {
		statNum.value = 40 - allStatsUpdated;
		hiding(noPoints);
		oldMax();
	};
	// stop point allocation if all points were used
	if(Number(statNum.value) === 0 || allStatsUpdated >= 40) {
		showing(noPoints);
		newMax();
	};
	// prevent changes in min and max point values
	if(Number(chosenStat.value)>15 || Number(chosenStat.value)<5){
		chosenStat.value = chosenStat.placeholder;
	};

	userStr.innerText = `Strength: ${str.value}`;
	userDex.innerText = `Dexterity: ${dex.value}`;
	userCon.innerText = `Constitution: ${con.value}`;
	userInt.innerText = `Intelligence: ${int.value}`;
	userWis.innerText = `Wisdom: ${wis.value}`;
	userCha.innerText = `Charisma: ${cha.value}`;
};
str.addEventListener('input', changeStatNumbers);
dex.addEventListener('input', changeStatNumbers);
con.addEventListener('input', changeStatNumbers);
int.addEventListener('input', changeStatNumbers);
wis.addEventListener('input', changeStatNumbers);
cha.addEventListener('input', changeStatNumbers);

// DISABLE KEYBOARD USE
function noKeyboard (pressed) {
	let charCode = pressed.which || pressed.KeyCode;
	if(Number.isInteger(charCode)){
		pressed.preventDefault();
		return false;
	};
};
statsBoxesSide.addEventListener('keydown', noKeyboard);

//PREVENT DRAG AND DROP
function noDragNDrop (event){
	event.preventDefault();
};
str.addEventListener('drop', noDragNDrop);
dex.addEventListener('drop', noDragNDrop);
con.addEventListener('drop', noDragNDrop);
int.addEventListener('drop', noDragNDrop);
wis.addEventListener('drop', noDragNDrop);
cha.addEventListener('drop', noDragNDrop);

//PREVENT COPYPASTE
function noPasting (event){
	event.preventDefault();
};
str.addEventListener('paste', noPasting);
dex.addEventListener('paste', noPasting);
con.addEventListener('paste', noPasting);
int.addEventListener('paste', noPasting);
wis.addEventListener('paste', noPasting);
cha.addEventListener('paste', noPasting);

// RESET THE STATS
resetBTN1.addEventListener('click', ()=> {
	statNum.value = statNum.placeholder;
	str.value = str.placeholder;
	dex.value = dex.placeholder;
	con.value = con.placeholder;
	int.value = int.placeholder;
	wis.value = wis.placeholder;
	cha.value = cha.placeholder;
	hiding(noPoints);
});

// *************************************SKILL PAGE*************************************

// GOING BACK FROM SKILL PAGE TO STATS PAGE
back4.addEventListener('click', ()=> {
	// former page
	hiding(skillsPageTitle);
	hiding(skillsPageBB);
	hiding(sPoints);
	hiding(skillTree);
	hiding(skillsInfo);
	hiding(information);
	hiding(skill1Info);
	hiding(skill2Info);
	hiding(skill3Info);
	hiding(skill4Info);
	hiding(skill5Info);
	hiding(skill6Info);
	// new page
	showing(statsPageTitle);
	showing(statsPageBB);
	showing(statsForm);
	showing(statInfo);
});

// DISPLAYING INFORMATION BY HOVERING OVER A SKILL

// **********SKILL 1**********

skill1Div.addEventListener('mouseover', ()=> {
	hiding(information);
	showing(skill1Info);
	hiding(skill2Info);
	hiding(skill3Info);
	hiding(skill4Info);
	hiding(skill5Info);
	hiding(skill6Info);

});

// **********SKILL 2**********

skill2Div.addEventListener('mouseover', ()=> {
	hiding(information);
	hiding(skill1Info);
	showing(skill2Info);
	hiding(skill3Info);
	hiding(skill4Info);
	hiding(skill5Info);
	hiding(skill6Info);
});

// **********SKILL 3**********

skill3Div.addEventListener('mouseover', ()=> {
	hiding(information);
	hiding(skill1Info);
	hiding(skill2Info);
	showing(skill3Info);
	hiding(skill4Info);
	hiding(skill5Info);
	hiding(skill6Info);
});

// **********SKILL 4**********

skill4Div.addEventListener('mouseover', ()=> {
	hiding(information);
	hiding(skill1Info);
	hiding(skill2Info);
	hiding(skill3Info);
	showing(skill4Info);
	hiding(skill5Info);
	hiding(skill6Info);
});

// **********SKILL 5**********

skill5Div.addEventListener('mouseover', ()=> {
	hiding(information);
	hiding(skill1Info);
	hiding(skill2Info);
	hiding(skill3Info);
	hiding(skill4Info);
	showing(skill5Info);
	hiding(skill6Info);
});

// **********SKILL 6**********

skill6Div.addEventListener('mouseover', ()=> {
	hiding(information);
	hiding(skill1Info);
	hiding(skill2Info);
	hiding(skill3Info);
	hiding(skill4Info);
	hiding(skill5Info);
	showing(skill6Info);
});

// CHOOSING A SKILL AND MARKING IT

function skillChoosing() {
	this.classList.toggle('chosen');
	if(this.classList.contains('chosen')){
		skillPoints.value = Number(skillPoints.value) - 1;
	} else{
		skillPoints.value = Number(skillPoints.value) + 1;
	};

	if(Number(skillPoints.value) === 0){
		showing(noPoints2);
	} else {
		hiding(noPoints2);
	};

	if(Number(skillPoints.value) < 0){
		if(this.classList.contains('chosen')){
			showing(noPoints2);
			this.classList.remove('chosen');
			skillPoints.value = Number(skillPoints.value) + 1;
		};	
	};
};

// **********SKILL 1**********

skill1btn.addEventListener('click', skillChoosing);

// **********SKILL 2**********

skill2btn.addEventListener('click', skillChoosing);

// **********SKILL 3**********

skill3btn.addEventListener('click', skillChoosing);

// **********SKILL 4**********

skill4btn.addEventListener('click', skillChoosing);

// **********SKILL 5**********

skill5btn.addEventListener('click', skillChoosing);

// **********SKILL 6**********

skill6btn.addEventListener('click', skillChoosing);

// GETTING CHOSEN SKILL NAMES
let pSkills = [];
let skillButtons = [skill1btn, skill2btn, skill3btn, skill4btn, skill5btn, skill6btn];
function whichSkills(){
	for(i = 0; i < skillButtons.length; i++){
		if(skillButtons[i].classList.contains('chosen')){
			pSkills.push(skillButtons[i].value);
		};
	};
	userSkill1.innerText = `Skill 1: ${pSkills[0]}`;
	userSkill2.innerText = `Skill 2: ${pSkills[1]}`;
	userSkill3.innerText = `Skill 3: ${pSkills[2]}`;
	userSkill4.innerText = `Skill 4: Basic Attack`;
};

// GOING FROM SKILL PAGE TO CHARACTER CUSTOMAZATION PAGE

confirmBTN2.addEventListener('click', ()=> {
	if(Number(skillPoints.value) > 0){
		alert('You must allocate all of your points');
	} else {
		whichSkills();
		// former page
		hiding(skillsPageTitle);
		hiding(skillsPageBB);
		hiding(sPoints);
		hiding(skillTree);
		hiding(skillsInfo);
		hiding(information);
		hiding(skill1Info);
		hiding(skill2Info);
		hiding(skill3Info);
		hiding(skill4Info);
		hiding(skill5Info);
		hiding(skill6Info);
		// new page
		showing(characterCPageTitle);
		showing(characterCPageBB);
		showing(yourName);
		showing(nameForm);
		showing(chaLooks);
		showing(charInfoArea);
	}
});

// *****************************CHARACTER CUSTOMAZATION PAGE*****************************

// GOING BACK FROM CHARACTER CUSTOMAIZATION PAGE TO SKILL PAGE
back5.addEventListener('click', ()=> {
	pSkills.splice(0, pSkills.length);
	// former page
	hiding(characterCPageTitle);
	hiding(characterCPageBB);
	hiding(yourName);
	hiding(nameForm);
	hiding(chaLooks);
	hiding(charInfoArea);
	// new page
	showing(skillsPageTitle);
	showing(skillsPageBB);
	showing(sPoints);
	showing(skillTree);
	showing(skillsInfo);
	showing(information);
});

// SELECTING CHARACTER LOOKS

document.addEventListener('DOMContentLoaded', ()=> {
	imgBtn1.click();
});

// **********LOOK 1**********

imgBtn1.addEventListener('click', ()=> {
	imgBtn1.classList.add('chosen');
	imgBtn2.classList.remove('chosen');
	imgBtn3.classList.remove('chosen');
	imgBtn4.classList.remove('chosen');
	imgBtn5.classList.remove('chosen');
	imgBtn6.classList.remove('chosen');
	userLooks.innerText = `Portrait: ${imgBtn1.value}`;
});

// **********LOOK 2**********

imgBtn2.addEventListener('click', ()=> {
	imgBtn1.classList.remove('chosen');
	imgBtn2.classList.add('chosen');
	imgBtn3.classList.remove('chosen');
	imgBtn4.classList.remove('chosen');
	imgBtn5.classList.remove('chosen');
	imgBtn6.classList.remove('chosen');
	userLooks.innerText = `Portrait: ${imgBtn2.value}`;
});

// **********LOOK 3**********

imgBtn3.addEventListener('click', ()=> {
	imgBtn1.classList.remove('chosen');
	imgBtn2.classList.remove('chosen');
	imgBtn3.classList.add('chosen');
	imgBtn4.classList.remove('chosen');
	imgBtn5.classList.remove('chosen');
	imgBtn6.classList.remove('chosen');
	userLooks.innerText = `Portrait: ${imgBtn3.value}`;
});

// **********LOOK 4**********

imgBtn4.addEventListener('click', ()=> {
	imgBtn1.classList.remove('chosen');
	imgBtn2.classList.remove('chosen');
	imgBtn3.classList.remove('chosen');
	imgBtn4.classList.add('chosen');
	imgBtn5.classList.remove('chosen');
	imgBtn6.classList.remove('chosen');
	userLooks.innerText = `Portrait: ${imgBtn4.value}`;
});

// **********LOOK 5**********

imgBtn5.addEventListener('click', ()=> {
	imgBtn1.classList.remove('chosen');
	imgBtn2.classList.remove('chosen');
	imgBtn3.classList.remove('chosen');
	imgBtn4.classList.remove('chosen');
	imgBtn5.classList.add('chosen');
	imgBtn6.classList.remove('chosen');
	userLooks.innerText = `Portrait: ${imgBtn5.value}`;
});

// **********LOOK 6**********

imgBtn6.addEventListener('click', ()=> {
	imgBtn1.classList.remove('chosen');
	imgBtn2.classList.remove('chosen');
	imgBtn3.classList.remove('chosen');
	imgBtn4.classList.remove('chosen');
	imgBtn5.classList.remove('chosen');
	imgBtn6.classList.add('chosen');
	userLooks.innerText = `Portrait: ${imgBtn6.value}`;
});

// NAME SELECTING

name.addEventListener('input', () => {
	userName.innerText = `Name: ${name.value}`;
});

// DISABLING THE ENTER BUTTON
function noEnterKey (pressed) {
	let charCode = pressed.which || pressed.KeyCode;
	if(charCode === 13){
		pressed.preventDefault();
		return false;
	};
};
yourName.addEventListener('keydown', noEnterKey);

// GOING FROM CHARACTER CUSTOMAIZATION PAGE TO PARTY SELECT PAGE

confirmBTN3.addEventListener('click', ()=> {
	if(name.value.length === 0){
		alert("You must enter a name.");
	} else {
		// former page
		hiding(characterCPageTitle);
		hiding(characterCPageBB);
		hiding(yourName);
		hiding(nameForm);
		hiding(chaLooks);
		hiding(charInfoArea);
		// new page
		showing(partyPageTitle);
		showing(partyPageBB);
		showing(cPoints);
		showing(cPointsForm);
		showing(partyCompanions);
		showing(companionInfo);
		showing(information);
	};
});

// *****************************PARTY SELECTION PAGE*****************************

// GOING BACK FROM PARTY SELECTION TO CHARACTER CUSTOMIZATION
back6.addEventListener('click', ()=> {
	// former page
	hiding(partyPageTitle);
	hiding(partyPageBB);
	hiding(cPoints);
	hiding(cPointsForm);
	hiding(partyCompanions);
	hiding(companionInfo);
	hiding(information);
	// new page
	showing(characterCPageTitle);
	showing(characterCPageBB);
	showing(yourName);
	showing(nameForm);
	showing(chaLooks);
	showing(charInfoArea);
});

// DISPLAYING INFORMATION BY HOVERING OVER A COMPANION

// **********COMPANION 1**********

comp1.addEventListener('mouseover', ()=> {
	hiding(information);
	showing(companion1Info);
	hiding(companion2Info);
	hiding(companion3Info);
	hiding(companion4Info);
	hiding(companion5Info);
	hiding(companion6Info);
});

// **********COMPANION 2**********

comp2.addEventListener('mouseover', ()=> {
	hiding(information);
	hiding(companion1Info);
	showing(companion2Info);
	hiding(companion3Info);
	hiding(companion4Info);
	hiding(companion5Info);
	hiding(companion6Info);
});

// **********COMPANION 3**********

comp3.addEventListener('mouseover', ()=> {
	hiding(information);
	hiding(companion1Info);
	hiding(companion2Info);
	showing(companion3Info);
	hiding(companion4Info);
	hiding(companion5Info);
	hiding(companion6Info);
});

// **********COMPANION 4**********

comp4.addEventListener('mouseover', ()=> {
	hiding(information);
	hiding(companion1Info);
	hiding(companion2Info);
	hiding(companion3Info);
	showing(companion4Info);
	hiding(companion5Info);
	hiding(companion6Info);
});

// **********COMPANION 5**********

comp5.addEventListener('mouseover', ()=> {
	hiding(information);
	hiding(companion1Info);
	hiding(companion2Info);
	hiding(companion3Info);
	hiding(companion4Info);
	showing(companion5Info);
	hiding(companion6Info);
});

// **********COMPANION 6**********

comp6.addEventListener('mouseover', ()=> {
	hiding(information);
	hiding(companion1Info);
	hiding(companion2Info);
	hiding(companion3Info);
	hiding(companion4Info);
	hiding(companion5Info);
	showing(companion6Info);
});

// CHOOSING COMPANIONS AND MARKING THEM

function companionSelect() {
	this.classList.toggle('chosen');
	if(this.classList.contains('chosen')){
		companionPoints.value = Number(companionPoints.value) - 1;
	} else{
		companionPoints.value = Number(companionPoints.value) + 1;
	};

	if(Number(companionPoints.value) === 0){
		showing(noPoints3);
	} else {
		hiding(noPoints3);
	};

	if(Number(companionPoints.value) < 0){
		if(this.classList.contains('chosen')){
			showing(noPoints2);
			this.classList.remove('chosen');
			companionPoints.value = Number(companionPoints.value) + 1;
		};	
	};
};

// **********COMPANION 1**********

comp1btn.addEventListener('click', companionSelect);

// **********COMPANION 2**********

comp2btn.addEventListener('click', companionSelect);

// **********COMPANION 3**********

comp3btn.addEventListener('click', companionSelect);

// **********COMPANION 4**********

comp4btn.addEventListener('click', companionSelect);

// **********COMPANION 5**********

comp5btn.addEventListener('click', companionSelect);

// **********COMPANION 6**********

comp6btn.addEventListener('click', companionSelect);

// *~*~*~*~*~*~*~*GOING FROM PARTY SELECT TO GAMEPLAY PAGE*~*~*~*~*~*~*~*

//~~~~~~CHARACTER OBJECTS~~~~~~

class Companions{
	constructor(name, img, role, info, str, dex, con, int, wis, cha, HP, AP, skill1, skill2, skill3, skill4, cThreatP, cDefenceP){
		this.name = name;
		this.img = img;
		this.role = role;
		this.info = info;
		this.str = str;
		this.dex = dex;
		this.con = con;
		this.int = int;
		this.wis = wis;
		this.cha = cha;
		this.HP = HP;
		this.AP = AP;
		this.skill1 = skill1;
		this.skill2 = skill2;
		this.skill3 = skill3;
		this.skill4 = skill4;
		this.cThreatP = cThreatP;
		this.cDefenceP = cDefenceP;
	};

	// Companion Skills
};

const companion1 = new Companions("Companion 1", comp1img.src, "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", 10, "skill1", "skill2", "skill3", "Basic Attack", 5);
const companion2 = new Companions("Companion 2", comp2img.src, "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", 10, "skill4", "skill5", "skill6", "Basic Attack", 5);
const companion3 = new Companions("Companion 3", comp3img.src, "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", 10, "skill7", "skill8", "skill9", "Basic Attack", 5);
const companion4 = new Companions("Companion 4", comp4img.src, "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", 10, "skill10", "skill11", "skill12", "Basic Attack", 5);
const companion5 = new Companions("Companion 5", comp5img.src, "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", 10, "skill13", "skill14", "skill15", "Basic Attack", 5);
const companion6 = new Companions("Companion 6", comp6img.src, "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", "tbd", 10, "skill16", "skill17", "skill18", "Basic Attack", 5);

// // **********COMPANION 1**********
// let companion1Object = {
// 	name: 'Companion 1',
// 	class: 'tbd',
// 	portrait: comp1img.src,
// 	hp: 'tbd',
// 	ap: 10,
// 	skills: [1, 2, 3]
// };

// // **********COMPANION 2**********

// let companion2Object = {
// 	name: 'Companion 2',
// 	class: 'tbd',
// 	portrait: comp2img.src,
// 	hp: 'tbd',
// 	ap: 10,
// 	skills: [4, 5, 6]
// };

// // **********COMPANION 3**********
// let companion3Object = {
// 	name: 'Companion 3',
// 	class: 'tbd',
// 	portrait: comp3img.src,
// 	hp: 'tbd',
// 	ap: 10,
// 	skills:[7, 8, 9]
// };

// // **********COMPANION 4**********

// let companion4Object = {
// 	name: 'Companion 4',
// 	class: 'tbd',
// 	portrait: comp4img.src,
// 	hp: 'tbd',
// 	ap: 10,
// 	skills:[10, 11, 12]
// };

// // **********COMPANION 5**********

// let companion5Object = {
// 	name: 'Companion 5',
// 	class: 'tbd',
// 	portrait: comp5img.src,
// 	hp: 'tbd',
// 	ap: 10,
// 	skills: [13, 14, 15]
// };

// // **********COMPANION 6**********

// let companion6Object = {
// 	name: 'Companion 6',
// 	class: 'tbd',
// 	portrait: comp6img.src,
// 	hp: 'tbd',
// 	ap: 10,
// 	skills: [16, 17, 18]
// };

// CHOOSING THE CORRECT PLAYER PICTURE
let playerImgs = [playerImg1, playerImg2, playerImg3, playerImg4, playerImg5, playerImg6];
function whichPlayerImg(){
	for(i = 0; i < playerImgs.length; i++){
		if(playerImgs[i].parentElement.classList.contains('chosen')){
			heropartyImg.src = playerImgs[i].src;
		};
	};
};

// DISPLAYING CORRECT PLAYER INFORMATION
function playerInfo(){
	heroNameHere.innerText = `${Object.values(playerObject)[0]}`;
	heroClassHere.innerText = `${Object.values(playerObject)[1]}`;
	heroHPHere.innerText = `${Object.values(playerObject)[3]}`;
	heroAPHere.innerText = `${Object.values(playerObject)[4]}`;
	hsOption1.innerText = `${Object.values(playerObject)[5][0]}`;
	hsOption2.innerText = `${Object.values(playerObject)[5][1]}`;
	hsOption3.innerText = `${Object.values(playerObject)[5][2]}`;
	hsOption4.innerText = `Basic Attack`;
};

// CHOOSING THE CORRECT COMPANION PICTURE
let compBtns = [comp1btn, comp2btn, comp3btn, comp4btn, comp5btn, comp6btn];
let pCompanions = [];
function whichComp(){
	for(i = 0; i < compBtns.length; i++){
		if(compBtns[i].classList.contains('chosen')){
			pCompanions.push(compBtns[i].value);
		};
	};
};
let compImgs = [comp1img, comp2img, comp3img, comp4img, comp5img, comp6img];
let chosenPartyMmbrs = [partyMemberImg1, partyMemberImg2, partyMemberImg3];
// function whichCompImg(){
// 	for(j = 0, k = 0, l = 0; j < compImgs.length; j++){
// 		if(Number(compImgs[j].alt) === Number(pCompanions[k])){
// 				chosenPartyMmbrs[l].src = compImgs[j].src;
// 				l++;
// 				k++;
// 		};
// 	};
// };

function whichCompImg(){
	for(i = 0, j = 0; i < compImgs.length; i++){
		if(compImgs[i].parentElement.classList.contains('chosen')){
			chosenPartyMmbrs[j].src = compImgs[i].src;
			j++;
		};
	};
};

// DISPLAYING CORRECT COMPANION INFORMATION
// let companionObjects = [companion1Object, companion2Object, companion3Object, companion4Object, companion5Object, companion6Object];
let allCompArrays = [comp1Array, comp2Array, comp3Array];
function companionsInfo(){
	let compNum;
	for(i = 0, k = 0; i < pCompanions.length; i++, k++){
		compNum = Number(pCompanions[i]);

		switch (compNum) {
		case 1:
			// allCompArrays[k][0].innerText = `${Object.values(companion1Object)[0]}`;
			// allCompArrays[k][1].innerText = `${Object.values(companion1Object)[1]}`;
			// allCompArrays[k][2].innerText = `${Object.values(companion1Object)[3]}`;
			// allCompArrays[k][3].innerText = `${Object.values(companion1Object)[4]}`;
			// allCompArrays[k][4].innerText = `${Object.values(companion1Object)[5][0]}`;
			// allCompArrays[k][5].innerText = `${Object.values(companion1Object)[5][1]}`;
			// allCompArrays[k][6].innerText = `${Object.values(companion1Object)[5][2]}`;
			allCompArrays[k][0].innerText = companion1.name;
			allCompArrays[k][1].innerText = companion1.role;
			allCompArrays[k][2].innerText = companion1.HP;
			allCompArrays[k][3].innerText = companion1.AP;
			allCompArrays[k][4].innerText = companion1.skill1;
			allCompArrays[k][5].innerText = companion1.skill2;
			allCompArrays[k][6].innerText = companion1.skill3;
			allCompArrays[k][7].innerText = companion1.skill4;
			break;
		case 2:
			allCompArrays[k][0].innerText = companion2.name;
			allCompArrays[k][1].innerText = companion2.role;
			allCompArrays[k][2].innerText = companion2.HP;
			allCompArrays[k][3].innerText = companion2.AP;
			allCompArrays[k][4].innerText = companion2.skill1;
			allCompArrays[k][5].innerText = companion2.skill2;
			allCompArrays[k][6].innerText = companion2.skill3;
			allCompArrays[k][7].innerText = companion2.skill4;
			break;
		case 3:
			allCompArrays[k][0].innerText = companion3.name;
			allCompArrays[k][1].innerText = companion3.role;
			allCompArrays[k][2].innerText = companion3.HP;
			allCompArrays[k][3].innerText = companion3.AP;
			allCompArrays[k][4].innerText = companion3.skill1;
			allCompArrays[k][5].innerText = companion3.skill2;
			allCompArrays[k][6].innerText = companion3.skill3;
			allCompArrays[k][7].innerText = companion3.skill4;
			break;
		case 4:
			allCompArrays[k][0].innerText = companion4.name;
			allCompArrays[k][1].innerText = companion4.role;
			allCompArrays[k][2].innerText = companion4.HP;
			allCompArrays[k][3].innerText = companion4.AP;
			allCompArrays[k][4].innerText = companion4.skill1;
			allCompArrays[k][5].innerText = companion4.skill2;
			allCompArrays[k][6].innerText = companion4.skill3;
			allCompArrays[k][7].innerText = companion4.skill4;
			break;
		case 5:
			allCompArrays[k][0].innerText = companion5.name;
			allCompArrays[k][1].innerText = companion5.role;
			allCompArrays[k][2].innerText = companion5.HP;
			allCompArrays[k][3].innerText = companion5.AP;
			allCompArrays[k][4].innerText = companion5.skill1;
			allCompArrays[k][5].innerText = companion5.skill2;
			allCompArrays[k][6].innerText = companion5.skill3;
			allCompArrays[k][7].innerText = companion5.skill4;
			break;
		case 6:
			allCompArrays[k][0].innerText = companion6.name;
			allCompArrays[k][1].innerText = companion6.role;
			allCompArrays[k][2].innerText = companion6.HP;
			allCompArrays[k][3].innerText = companion6.AP;
			allCompArrays[k][4].innerText = companion6.skill1;
			allCompArrays[k][5].innerText = companion6.skill2;
			allCompArrays[k][6].innerText = companion6.skill3;
			allCompArrays[k][7].innerText = companion6.skill4;
			break;
		default:
			console.log('something aint working here');
		};
	};
};


confirmBTN4.addEventListener('click', ()=> {
	if(Number(companionPoints.value) > 0){
		alert('You must allocate all of your points');
	} else {
		whichPlayerImg();
		whichComp();
		whichCompImg();
		// former page
		hiding(partyPageTitle);
		hiding(partyPageBB);
		hiding(cPoints);
		hiding(partyCompanions);
		hiding(companionInfo);
		hiding(information);
		document.body.style.gridTemplateRows = "0.1fr 0.1fr 0.001fr 0.001fr 3fr";
		// new page
		showing(adventureB);
		showing(allPartyCards);
		showing(gameScreen);
		playerObject = {
			name: name.value,
			class: playerClassIs,
			portrait: userLooks.innerText,
			hp: Math.round(100 * (0.2 * Number(con.value))),
			ap: 7,
			skills: pSkills,
			threatP: 5,
			defenceP: 0
		};
		playerInfo();
		companionsInfo();
	};
});

// ************************************GAMEPLAY PAGE************************************
function storyProgression(array, counter){
	let myParagraph = document.createElement('p');
	let myText = document.createTextNode(`${array[counter]}`);
	gameTextArea.appendChild(myParagraph).classList.add('pMargin');
	myParagraph.appendChild(myText);
	// MAKING SURE THE SCROLL BAR IS ALWAYS AT THE BOTTOM SO WE CAN SEE THE NEW TEXT THAT IS ADDED
	gameTextArea.scrollTop = gameTextArea.scrollHeight;
};

function choiceMade(){
	let contMessageH2 = document.createElement('h2');
	let contMessagetxt = document.createTextNode('A choice has been made. Please click next to continue');
	gameTextArea.appendChild(contMessageH2).classList.add('pMargin', 'txtcolour');
	contMessageH2.appendChild(contMessagetxt);
};

function storyDecision(array,removeBtn, btn1, btn2){
	let optionDiv = document.createElement('div');
	let myBtn1 = document.createElement('button');
	let myBtn2 = document.createElement('button');
	let btnText1 = document.createTextNode(`${array[(array.length - 2)]}`);
	let btnText2 = document.createTextNode(`${array[(array.length - 1)]}`);
	gameTextArea.appendChild(optionDiv).classList.add('flexy');
	optionDiv.appendChild(myBtn1).classList.add('optionBtnMargin', 'selectbtn', 'pChoice');
	myBtn1.appendChild(btnText1);
	optionDiv.appendChild(myBtn2).classList.add('optionBtnMargin', 'selectbtn', 'pChoice');
	myBtn2.appendChild(btnText2);
	gameTextArea.scrollTop = gameTextArea.scrollHeight;
	myBtn1.addEventListener('click', ()=>{
		myBtn1.remove();
		myBtn2.remove();
		hiding(removeBtn);
		showing(btn1);
		choiceMade();
		return counter = 0;
	});
	myBtn2.addEventListener('click', ()=>{
		myBtn1.remove();
		myBtn2.remove();
		hiding(removeBtn);
		showing(btn2);
		choiceMade();
		return counter = 0;
	});
};



// ADDING STORY PARAGRAPHS
let story = ['Our story begins with a chicken nuggie...', 'And then it was eaten.', 'Our little cat was still hungry', 'so he went out on a journey', 'to look for the infinite golden nuggie', 'on his way he met three new friends', 'and together they went on many adventures', 'overcame many dangers', 'fought many enemies', 'ditched the romance because lets be honest, who has time for romance when nuggies are on the line...', 'and finally, they found it. the golden nuggie.', 'they celebrated, ate, danced and rejoiced! for the nuggie was theirs and they shall never be hungry again', 'when the festivities were over, they each took a piece of the golden nuggie and went about their separate ways', 'knowing in their hearts that the golden nuggie shall always connect them, and bring them together again in a time of need', 'but where would their desteny lead them now?', 'option 1', 'option 2'];
let story2OP1 = ['this is where the story continues if you chose option one', 'the lil cats went on a new adventure', 'it was very fun for them', 'what did they do in this new adventure?', "well that's for you to decide", 'so choose wisely', 'Cheese Hunt', 'Saving the Kitty Princess'];
let story2OP2 = ['this is where the story continues if you chose option two', 'option two lead our kitties to a new town', 'in this town they joined an adventurers guild', "well...I say joined, but they actually wanted to join but couldn't", "because they didn't have the money to. which meant they needed to go out there and complete quests", 'question is, which quest would they be completing?', 'Saving the Kitty princess', 'Slaying the Mighty Nuggie Thieves Gang leader'];
let story3OP1 = ['this is where you go if you chose to go on the cheese hunt.', 'the kitties went to hunt some cheese', 'it was very fun', 'they managed to hunt a lot of cheese', 'and went home happy', 'The End'];
let story3OP2 = ['this is where you go if you chose to save the kitty princess.', 'the kitty princess has been kidnaped by an evil cat wizard', 'so our kitties set out to save her.', 'was it out of the goodness of their heart?', 'was it because they needed the money?', '(and OH BOY where they gonna get paid a lot if they succeeded)', 'perhaps it was both. but whatever the reason, help was on the way.', 'after careful investigation and tracking, they manage to find where the princess were taken', 'alas, as the cliché would have it, the princess was held in the highest tower of a scary looking castle in the dark woods.', 'our kitties were brave, and so they went inside', 'but they soon found out that not all was as it seems! and out kitties make a shocking discovery!', 'the evil cat wizard did not, in fact, kidnap the princess; and he was not actually evil nor a wizard.', "thankfully he was actually a cat, but that's besides the point.", "the cat princess and the not evil yes cat not wizard (he is actually a bard it seems) are in love and have chosen to elope!", 'they ask that the kitties do not tell a soul about this so they can live peacefully and offer them a great sum of money for their discretion.', 'obviously, our kitties agree, because whatever the reason they came here was. it is now fulfilled.', 'the princess is safe, and our kitties are rich', 'they took their money and went back home, never mentioning a word to anyone', 'and everyone lived happily ever after.', 'The End'];
let story3OP3 = ['this is where you go if you chose to slay the mighty nuggie thieves gang.', 'our kitties, known for their appreciation of nuggies, have decided to take on the serious and dangerous task of ridding Pawland Kingdom of the notorious and mighty nuggie thieves gang', 'as they set out on their journey to the gangs hideout, which was scouted in advance by the Pawland Pawlice, they noticed, to their horror, that their infinite golden nuggie pieces were missing.', 'well...they could venture a guess as to who the culprits behind the theft were.', `"that's it", our hero thought. now its personal.`, "so our kitties set out very angrily to the gangs hideout", "when they arrived, they knocked down the door rather than knocking on it, and they left their manners there too while they were at it.", "with a berserk rage, they stormed the hideout, putting some gang members in time out and some in air jail", "when they were done and all gang members were dealt with, they took back their infinite golden nuggie pieces back and every other golden nuggie they could find and went back home", "leaving the gang members in time out or air jail for the rest of eternity which landed our kitties a reputation for being ruthless. because some punishments, are worse than death.", "our kitties got paid, they got their nuggies back, all other nuggies were safe, the kingdom rejoiced, and all was well.", "The End"];

let counter = 0;

// NEXT BUTTONS
nextBTN.addEventListener('click',()=>{
	if(counter < (story.length - 2)){
		storyProgression(story, counter);
	};
	if(counter === (story.length - 2)){
		storyDecision(story, nextBTN, nextBTN2, nextBTN3);
	};
	return counter +=1;
});

// OPTION ONE
nextBTN2.addEventListener('click',()=>{
	if(counter < (story2OP1.length - 2)){
		storyProgression(story2OP1, counter);
	};
	if(counter === (story2OP1.length - 2)){
		storyDecision(story2OP1, nextBTN2, nextBTN4, nextBTN5);
	};
	return counter +=1;
});

// OPTION TWO
nextBTN3.addEventListener('click',()=>{
	if(counter < (story2OP2.length - 2)){
		storyProgression(story2OP2, counter);
	};
	if(counter === (story2OP2.length - 2)){
		storyDecision(story2OP2, nextBTN3, nextBTN5, nextBTN6);
	};
	return counter +=1;
});

// CHEESE HUNT
nextBTN4.addEventListener('click',()=>{
	if(counter < story3OP1.length){
		storyProgression(story3OP1, counter);
	};
	return counter +=1;
});

// PRINCESS RESCUE
nextBTN5.addEventListener('click',()=>{
	if(counter < (story3OP2.length)){
		storyProgression(story3OP2, counter);
	};
	return counter +=1;
});

// FIGHTING THE GANG
nextBTN6.addEventListener('click',()=>{
	if(counter < (story3OP3.length)){
		storyProgression(story3OP3, counter);
	};
	return counter +=1;
});

// ************************************BATTLE SYSTEM************************************

// ~*~*~*~*~*~*~*~TURN FUNCTIONS~*~*~*~*~*~*~*~
// Skills and Effects variables
// let isActive;
let scared;
let lurking;
let staggerChance;
let isPeaceful;
let distracted;
let sleeping;
let morphed;
let noAPCost;
let inspiration;

function whosTurn(){
	let turnCounter;
	
};

// ~*~*~*~*~*~*~*~SKILL TYPE~*~*~*~*~*~*~*~

// this function is for figuring out if the skill is for attacking enemies, hellping allys or for self use

let skillType;

function findoutSkillType(skillName){
	for(i = 0; i < allPlayerSkillsArray.length; i++){
		if(skillName === allPlayerSkillsArray[i].name){
			skillType = allPlayerSkillsArray[i].usage;
			return skillType;
		};
	};
};

// allPlayerSkillsArray

// ~*~*~*~*~*~*~*~ENEMIES~*~*~*~*~*~*~*~

const spritesArray = [char1, char2, char3, char4, char5];

class Enemies{
	constructor(name, img, hp, fearResistant){
		this.name = name;
		this.img = img;
		this.hp = hp;
		this.fearResistant = fearResistant;
	};

	// Enemy Skills
};

const whiskersnail = new Enemies("Whiskersnail", "Characters/Sprites/Whiskersnail.png", 500, false);
const vampurr = new Enemies("Vampurr", "Characters/Sprites/Vampurr.png", 500, false);
const scorpmeow = new Enemies("Scorpmeow", "Characters/Sprites/Scorpmeow.png", 500, false);
const spawider = new Enemies("Spawider", "Characters/Sprites/Spawider.png", 500, false);
const octopuss = new Enemies("Octopuss", "Characters/Sprites/Octopuss.png", 500, false);

// ~*~*~*~*~*~*~*~ATTACK BUILDING FUNCTIONS~*~*~*~*~*~*~*~

let combatActionObject = {
	playerName: "",
	wholeTarget: "",
	attackName: "",
	skillname: "",
	playerAP: "",
	playerHP: ""
};

function damageNumberGenerator(numberRange, startingNumber){
	let dmgNumber = Math.floor((Math.random()*numberRange)+startingNumber);
	return dmgNumber;
};

function addMessage(message){
	let myParagraph = document.createElement('p');
	let myText = document.createTextNode(message);
	gameTextArea.appendChild(myParagraph).classList.add('pMargin');
	myParagraph.appendChild(myText);
	// MAKING SURE THE SCROLL BAR IS ALWAYS AT THE BOTTOM SO WE CAN SEE THE NEW TEXT THAT IS ADDED
	gameTextArea.scrollTop = gameTextArea.scrollHeight;
};

// function addDefeatedNote(target){
// 	let myParagraph = document.createElement('p');
// 	let myText = document.createTextNode(`${target} has been defeated!`);
// 	gameTextArea.appendChild(myParagraph).classList.add('pMargin');
// 	myParagraph.appendChild(myText);
// 	// MAKING SURE THE SCROLL BAR IS ALWAYS AT THE BOTTOM SO WE CAN SEE THE NEW TEXT THAT IS ADDED
// 	gameTextArea.scrollTop = gameTextArea.scrollHeight;
// };

function addDmgNoteAndAnimation(dmgDealer = `Pawl`, dmgNumber, atkName = 'Basic Attack', target, sprite, normalAnimation, criticalAnimation, critThreshold){
	if(dmgNumber <= critThreshold){
		addMessage(`${target} has been hit for ${dmgNumber} damage points from ${dmgDealer}'s ${atkName}`);
		sprite.classList.add(normalAnimation);
	};
	if(dmgNumber > critThreshold){
		addMessage(`${target} has taken a critical hit of ${dmgNumber} damage points from ${dmgDealer}'s ${atkName}`);
		sprite.classList.add(criticalAnimation);
	};
};

function animationRemoval(sprite, normalAnimation, criticalAnimation){
	if(sprite.classList.contains(normalAnimation)){
		sprite.classList.remove(normalAnimation);
	};
	if(sprite.classList.contains(criticalAnimation)){
		sprite.classList.remove(criticalAnimation);
	};
};

function enemyDefeated(sprite, target, name){
	sprite.classList.add('animate__flash');
	setTimeout(() => {
		hiding(target);
	}, 1500);
	// addDefeatedNote(name);
	addMessage(`${name} has been defeated!`);
};

// FIX THIS FUNCTION
function checkAP(target){
	if(combatActionObject.playerAP < this.apCost/allPlayerSkillsArray[i].apCost){
		combatActionObject.skillname.disabled = true;
	};

	if(combatActionObject.playerAP < this.apCost/allPlayerSkillsArray[i].apCost){
		combatActionObject.skillname.disabled = false;
	};
};


let skillSelected = false;
let targetSelected = false;
// const heroSkills = heroSkillsHere.querySelectorAll('button');
const heroSkills = [hsOption1, hsOption2, hsOption3, hsOption4];

function whichSkillToUse(skillname){
	let whichClass;
	whichClass = playerClassIs;
	let whichSkill = skillname.innerText.replace(/\s/g, "").toLowerCase();
	console.log(whichClass);
	
	switch (whichClass) {
		
	case "Warrior":
			console.log(whichSkill);
			switch (whichSkill) {
			case "shieldbonk":
				warriorSkillArray[0].ShieldBonk(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "slash":
				warriorSkillArray[1].Slash(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "hiltstab":
				warriorSkillArray[2].HiltStab(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "catnipscent":
				warriorSkillArray[3].CatnipScent();
				break;
			case "loaf":
				warriorSkillArray[4].Loaf();
				break;
			case "hiss":
				warriorSkillArray[5].Hiss(combatActionObject.wholeTarget);
				break;
			case "basicattack":
				warriorSkillArray[6].Attack(combatActionObject.wholeTarget.querySelector('p'));
				break;
			default:
				console.log('something aint working here 2');
			};
			
		break;

	case "Rogue":
			console.log(whichSkill);
			switch (whichSkill) {
			case "pounce":
				rogueSkillArray[0].Pounce(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "triplestab":
				rogueSkillArray[1].TripleStab(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "knifethrow":
				rogueSkillArray[2].KnifeThrow(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "lurk":
				rogueSkillArray[3].Lurk();
				break;
			case "deadlyscents":
				rogueSkillArray[4].DeadlyScents(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "hideandheal":
				rogueSkillArray[5].HideandHeal();
				break;
			case "basicattack":
				rogueSkillArray[6].Attack(combatActionObject.wholeTarget.querySelector('p'));
				break;
			default:
				console.log('something aint working here 2');
			};
			
		break;
				
	case "Ranger":
			console.log(whichSkill);
			switch (whichSkill) {
			case "rapidfire":
				rangerSkillArray[0].RapidFire(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "chargedshot":
				rangerSkillArray[1].ChargedShot(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "firearrow":
				rangerSkillArray[2].FireArrow(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "huntersinstincts":
				rangerSkillArray[3].HuntersInstincts();
				break;
			case "pacify":
				rangerSkillArray[4].Pacify(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "bowproficiency":
				rangerSkillArray[5].BowProficiency();
				break;
			case "basicattack":
				rangerSkillArray[6].Attack(combatActionObject.wholeTarget.querySelector('p'));
				break;
			default:
				console.log('something aint working here 2');
			};
				
		break;
	case "Bard":
			console.log(whichSkill);
			switch (whichSkill) {
			case "pawbash":
				bardSkillArray[0].PawBash(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "songofmypeople":
				bardSkillArray[1].SongofmyPeople(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "firstrowticket":
				bardSkillArray[2].FirstRowTicket(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "dramaticmewling":
				bardSkillArray[3].DramaticMewling(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "inspiringsong":
				bardSkillArray[4].InspiringSong();
				break;
			case "lullaby":
				bardSkillArray[5].Lullaby(combatActionObject.wholeTarget.querySelector('p'));
				break;
			case "basicattack":
				bardSkillArray[6].Attack(combatActionObject.wholeTarget.querySelector('p'));
				break;
			default:
				console.log('something aint working here 2');
			};

		break;
	// case "Cleric":
				
	// 	break;
	// case "Wizard":
			
	// 	break;
	default:
		console.log('something aint working here');
	};
	
};


// ~*~*~*~*~*~*~*~ATTACK BUTTONS~*~*~*~*~*~*~*~

heroSkills.forEach(button => {
	button.addEventListener('click', () => {
		event.preventDefault();
		skillSelected = true;
		combatActionObject.skillname = event.target;
		combatActionObject.playerName = event.target.parentElement.parentElement.querySelector('label').innerText;
		combatActionObject.playerAP = event.target.parentElement.parentElement.querySelector('[id*="AP"]').innerText;
		combatActionObject.playerHP = event.target.parentElement.parentElement.querySelector('[id*="HP"]').innerText;
		let whatUsage = event.target.innerText;
		findoutSkillType(whatUsage);
		if(skillType === "self"){
			whichSkillToUse(combatActionObject.skillname);
		};
		if((skillSelected && targetSelected) && (skillType === "enemy")){
			whichSkillToUse(combatActionObject.skillname);
		};
	});
});

// hsOption4.addEventListener('click', () => {
// 	event.preventDefault();
// 	skillSelected = true;
// 	combatActionObject.skillname = event.target;
// 	combatActionObject.playerName = event.target.parentElement.parentElement.querySelector('label').innerText;
// 	if(skillSelected && targetSelected){
// 		whichSkillToUse(combatActionObject.skillname);
// 	};
// });

cs1Option4.addEventListener('click', () => {
	event.preventDefault();
	skillSelected = true;
	combatActionObject.playerName = event.target.parentElement.parentElement.querySelector('label').innerText;
	if(skillSelected && targetSelected){
		basicattack.Attack(combatActionObject.wholeTarget.querySelector('p'));
	};
});
cs2Option4.addEventListener('click', () => {
	event.preventDefault();
	skillSelected = true;
	combatActionObject.playerName = event.target.parentElement.parentElement.querySelector('label').innerText;
	if(skillSelected && targetSelected){
		basicattack.Attack(combatActionObject.wholeTarget.querySelector('p'));
	};
});
cs3Option4.addEventListener('click', () => {
	event.preventDefault();
	skillSelected = true;
	combatActionObject.playerName = event.target.parentElement.parentElement.querySelector('label').innerText;
	if(skillSelected && targetSelected){
		basicattack.Attack(combatActionObject.wholeTarget.querySelector('p'));
	};
});

spritesArray.forEach(sprite => {
	sprite.addEventListener('click', () => {
		targetSelected = !targetSelected;
		combatActionObject.wholeTarget = event.target.parentElement;
		// console.log(combatActionObject.wholeTarget);
		if(skillSelected && targetSelected){
			whichSkillToUse(combatActionObject.skillname);
		};
	});
});










