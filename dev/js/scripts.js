import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, Flip, MotionPathHelper, MotionPathPlugin);

gsap.set("#left-wing-7",{transformOrigin:"bottom"});
gsap.set("#right-wing-9", {transformOrigin:"top"});
gsap.set("#left-wing_5",{transformOrigin:"right"});
gsap.set("#right-wing_7", {transformOrigin:"left"});
gsap.set("#left-wing_57",{transformOrigin:"right"});
gsap.set("#right-wing_5", {transformOrigin:"left"});
gsap.set("#small-full-earth", {transformOrigin:"center"});



const mainTL = gsap.timeline();


function worldrotateandscale(){
    const tl =gsap.timeline();
    tl.to("#small-full-earth",{duration:2,scale:5.4})
    
    return tl; 
}

function sidedragon(){
    const tl =gsap.timeline();
    tl.from("#left-dragon",{duration:3,x:"-=1300"},"sametime")
    .to("#left-dragon",{duration:3.5,x:"-=-2200"},"-=2")
    .to("#left-wing-7",{rotation:-60,repeat: -1,yoyo: true},"sametime")
    .to("#right-wing-9",{rotation:60,repeat: -1,yoyo: true},"sametime")
    //.to("#right-tail_2", {duration:1,morphSVG:"#left-tail_2",yoyo:false,repeat:-1})
    .from("#top-dragon",{duration:3,y:"-=3000",scale:-2,delay: 1})
    .to("#top-dragon",{duration:5,y:"-=-2000"})
    .to("#left-wing_5",{rotation:60,repeat: -1,yoyo: true},"sametime")
    .to("#right-wing_7",{rotation:-60,repeat: -1,yoyo: true},"sametime")
    //
    .from("#bottom-dragon",{duration:3,y:"-=-3000",delay: 3})
    .to("#left-wing_57",{rotation:-60,repeat: -1,yoyo: true},"sametime")
    .to("#right-wing_5",{rotation:60,repeat: -1,yoyo: true},"sametime")
    //
    .to("#1fing",{scale:1})

    return tl;
    
}

function topdragon(){ 
    const tl =gsap.timeline();

    return tl;
}

function bottomdragon(){
    const tl =gsap.timeline();
        
    return tl;
}

function wingsflapwithshadowandscrollsopen(){
    const tl =gsap.timeline();

    return tl;
}

function clawsthrowletters(){
    const tl =gsap.timeline();
   

    return tl;
}

function leavescomeinwithsmoke(){
    const tl =gsap.timeline();
   

    return tl;
}



mainTL.add(worldrotateandscale())
        .add(sidedragon())
        .add(topdragon())
        .add(bottomdragon())
        .add(wingsflapwithshadowandscrollsopen())
        .add(clawsthrowletters())
        .add(leavescomeinwithsmoke());



GSDevTools.create();
MorphSVGPlugin.create();
DrawSVGPlugin.create();
Flip.create();
MotionPathHelper.create();
MotionPathPlugin.create();