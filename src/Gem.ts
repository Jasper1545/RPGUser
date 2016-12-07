var gemConfig = [

	{basicattack:10,strength:10,agility:10,intelligence:10,endurance:10,enhance:1},
	{basicattack:20,strength:20,agility:20,intelligence:20,endurance:20,enhance:1.2}

]



class Gem {

	enhance:number = 1;

	basicattack:number = 0;

	strength:number = 0;
	agility:number = 0;
	intelligence:number = 0;
	endurance:number = 0;

	dirtyFlag:boolean = true;


	public constructor(type:number) {

		this.basicattack = gemConfig[type].basicattack;
		this.enhance = gemConfig[type].enhance;

		this.strength = gemConfig[type].strength
		this.agility = gemConfig[type].agility;
		this.intelligence = gemConfig[type].intelligence;
		this.endurance = gemConfig[type].endurance;

	}

	setEnhance(enhance:number) {

		this.enhance = enhance;
		this.dirtyFlag = true;

	}


	@this.attackCache
	get attack():number {

		return (this.basicattack + this.strength * 1 + this.agility * 0.8 + this.intelligence * 0.6) * this.enhance;
	}

	@this.fightpowerCache
	get FightPower():number {

		var result = 0;

		result =  this.attack + this.endurance * 0.4 * this.enhance;

		return result;

	}

	attackCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}

    fightpowerCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

		if(!this.dirtyFlag){
			const getter = desc.get;
			desc.get = function () {
				return getter.apply(this);
			}

			return desc;
		}

	}


	
}