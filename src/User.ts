class User {

    heros:Hero[] = [];
    herointeam:Hero[] = [];

    dirtyFlag:boolean = true;

    @this.herosinTeamCache
    getheroInTeam():Hero[] {

        var heroInTeam:Hero[] = [];

        for(var i = 0; i < this.heros.length; i++) {
            if(this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);

            }
        }

        return heroInTeam;

    }

    @this.fightpowerCache
    get FightPower():number {

        var result = 0;

        var heros:Hero[] = this.getheroInTeam();

        for(var i = 0; i < heros.length; i++) {
            result += heros[i].FightPower;

        }   

        return result;

    }

    herosinTeamCache:MethodDecorator = (target:any, propertyName, desc: PropertyDescriptor) => {

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


