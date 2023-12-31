import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container {
    private def:Texture;
    // private over:Texture;
    // private down:Texture;
    private callback:Function;
    
    private spr:Sprite;
    // over:Texture, down:Texture,
    constructor(def:Texture,  callback:Function){  //uso 'def' xque 'default' ya es una variable d javascript
        super();
        this.def = def;
        // this.over = over;
        // this.down = down;
        this.callback = callback;

        this.spr = Sprite.from(def);
        this.spr.anchor.set(0.5);  // !!!!!!!!!!
        this.addChild(this.spr);

        this.spr.interactive = true;
        // this.spr.on("mousedown", this.onMouseDown, this);
        this.spr.on("mouseup", this.onMouseUp, this);
        // this.spr.on("mouseover", this. onMouseOver, this);
        this.spr.on("mouseout", this. onMouseOut, this);
    }
    // private onMouseDown():void {
    //     this.spr.texture = this.down;
    // };
    private onMouseUp():void {
        this.callback();
        // this.spr.texture = this.over;
    };
    // private onMouseOver():void {
    //     this.spr.texture = this.over;
    // };
    private onMouseOut():void {
        this.spr.texture = this.def;
    };
};