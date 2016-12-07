var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var gemConfig = [
    { basicattack: 10, strength: 10, agility: 10, intelligence: 10, endurance: 10 },
    { basicattack: 20, strength: 20, agility: 20, intelligence: 20, endurance: 20 }
];
var Gem = (function () {
    function Gem(type) {
        var _this = this;
        this.enhance = 1;
        this.basicattack = 0;
        this.strength = 0;
        this.agility = 0;
        this.intelligence = 0;
        this.endurance = 0;
        this.dirtyFlag = true;
        this.attackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_1 = desc.get;
                desc.get = function () {
                    return getter_1.apply(this);
                };
                return desc;
            }
        };
        this.fightpowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_2 = desc.get;
                desc.get = function () {
                    return getter_2.apply(this);
                };
                return desc;
            }
        };
        this.basicattack = gemConfig[type].basicattack;
        this.strength = gemConfig[type].strength;
        this.agility = gemConfig[type].agility;
        this.intelligence = gemConfig[type].intelligence;
        this.endurance = gemConfig[type].endurance;
    }
    var d = __define,c=Gem,p=c.prototype;
    p.setEnhance = function (enhance) {
        this.enhance = enhance;
        this.dirtyFlag = true;
    };
    d(p, "attack"
        ,function () {
            return (this.basicattack + this.strength * 1 + this.agility * 0.8 + this.intelligence * 0.6) * this.enhance;
        }
    );
    d(p, "FightPower"
        ,function () {
            var result = 0;
            result = this.attack + this.endurance * 0.4 * this.enhance;
            return result;
        }
    );
    __decorate([
        this.attackCache
    ], p, "attack", null);
    __decorate([
        this.fightpowerCache
    ], p, "FightPower", null);
    return Gem;
}());
egret.registerClass(Gem,'Gem');
//# sourceMappingURL=Gem.js.map