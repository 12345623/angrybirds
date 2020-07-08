class Chain{
    constructor(bodya,bodyb){
        var options={bodya:bodya,bodyb:bodyb,stiffness:3,length:5}
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
    }

    display(){
        line(this.chain.bodya.position.x,this.chain.bodya.position.y,this.chain.bodyb.position.x,this.chain.bodyb.position.y)
    }
}