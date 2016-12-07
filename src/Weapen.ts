var weapenConfig = [

	{basicattack:100,strength:100,agility:100,intelligence:100,enduranceefence:100},
	{basicattack:200,strength:200,agility:200,intelligence:200,enduranceefence:200}

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

		this.basicattack = gemConfig[type].basicattack;

		this.strength = gemConfig[type].strength
		this.agility = gemConfig[type].agility;
		this.intelligence = gemConfig[type].intelligence;
		this.endurance = gemConfig[type].enduranceefence;

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