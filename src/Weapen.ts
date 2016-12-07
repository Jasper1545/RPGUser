var weapenConfig = [

	{basicattack:100,strength:100,agility:100,intelligence:100,endurance:100,enhance:1},
	{basicattack:200,strength:200,agility:200,intelligence:200,endurance:200,enhance:1.2}

]


class Weapen implements Equipment{

	enhance:number = 1;

	basicattack:number = 0;

	strength:number = 0;
	agility:number = 0;
	intelligence:number = 0;
	endurance:number = 0;

	dirtyFlag:boolean = true;

	gems:Gem[] =[];

	public constructor(type:number) {

		this.basicattack = weapenConfig[type].basicattack;
		this.enhance = weapenConfig[type].enhance;

		this.strength = weapenConfig[type].strength
		this.agility = weapenConfig[type].agility;
		this.intelligence = weapenConfig[type].intelligence;
		this.endurance = weapenConfig[type].endurance;

	}

	@this.attackCache
	get attack():number {

		return (this.basicattack + this.strength * 1 + this.agility * 0.8 + this.intelligence * 0.6) * this.enhance;

	}

	@this.fightpowerCache
	get FightPower():number {

		var result = 0;

		for(var i = 0; i < this.gems.length; i++) {

			result += this.gems[i].FightPower;

		}

		result += this.attack + this.endurance * 0.4 * this.enhance;

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