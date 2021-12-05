import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, Flip, MotionPathHelper, MotionPathPlugin,CustomEase);



const mainTL = gsap.timeline();



function worldrotateandscale(){
    const tl =gsap.timeline();

    return tl; 
}

function sidedragon(){
    const tl =gsap.timeline();

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