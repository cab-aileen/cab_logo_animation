import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle} from "gsap/CustomWiggle";



gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, Flip, MotionPathHelper, MotionPathPlugin,CustomEase,CustomWiggle);

gsap.set("#left-wing-7",{transformOrigin:"bottom"});
gsap.set("#right-wing-9", {transformOrigin:"top"});
gsap.set("#left-wing_6",{transformOrigin:"right"});
gsap.set("#right-wing_6", {transformOrigin:"left"});
gsap.set("#left-wing_57",{transformOrigin:"right"});
gsap.set("#right-wing_5", {transformOrigin:"left"});
gsap.set("#small-full-earth", {transformOrigin:"center"});
gsap.set("#original-wings", {transformOrigin:"center"});

const mainTL = gsap.timeline();
CustomWiggle.create("myWiggle", {wiggles:11,type:"easeOut"});
CustomEase.create("myEase","M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.693,0.983 0.7,1 0.762,0.916 0.738,0.67 0.884,0.67 0.98,0.67 0.974,0.97 1,1 1.034,0.958 0.995,1.013 1,1 1.01,0.972 1,1 1,1 ")



function worldrotateandscale(){
    const tl =gsap.timeline();
    tl.to("#small-full-earth",{duration:2,scale:5.4})
    
    return tl; 
}

function dragonscomein(){
    const tl =gsap.timeline();
    tl.from("#left-dragon",{duration:3,x:"-=1300"},"sametime")
    .to("#left-dragon",{duration:3.5,x:"-=-2200"},"-=2")
    .to("#left-wing-7",{rotation:-60,repeat: 5,yoyo: true},"sametime")
    .to("#right-wing-9",{rotation:60,repeat: 5,yoyo: true},"sametime")
    //.to("#right-tail_2", {duration:1,morphSVG:"#left-tail_2",yoyo:false,repeat:-1})
    .from("#top-dragon",{duration:3,y:"-=3000",scale:-2})
    .to("#top-dragon",{duration:5,y:"-=-2000"})
    .to("#left-wing_6",{rotation:60,repeat: 7,yoyo: true},"sametime")
    .to("#right-wing_6",{rotation:-60,repeat: 7,yoyo: true},"sametime")
    //
    .from("#bottom-dragon",{duration:3,y:"-=-3000"})
    .to("#left-wing_57",{rotation:-60,repeat: 5,yoyo: true},"sametime")
    .to("#right-wing_5",{rotation:60,repeat: 5,yoyo: true},"sametime")

    return tl;
    
}

function wingsflapwithshadowandscrollsopen(){
    const tl =gsap.timeline();
    tl.from("#claws",{alpha:0})
    .from("#original-wings",{scale:0,duration:1})
    .from("#hidden-face",{autoAlpha:0,duration:2,y:"-=-300"})
    .to("#neck_2",{scaleY:5,transformOrigin:'center'})
    .from("#big-shadow",{autoAlpha:0,scale:0,transformOrigin:'center'})
    .to("#right-wing_2",{rotation:-50,repeat: 7,yoyo: true, duration:1,transformOrigin:'left'},"sametime")
    .to("#left-wing_2",{rotation:50,repeat: 7,yoyo: true, duration:1,transformOrigin:'right'},"sametime")
    .from("#vector-39,#vector-40,#vector-41,#vector-42,#vector-43,#vector-44",{drawSVG:0})
    .from("#white345", {duration:0.7,alpha:0,scaleX:0,transformOrigin:"center"},"<" )
    .from("#igc-ribbon", {duration:0.9,alpha:0,scaleX:0,transformOrigin:"center"},"<" )
    .to("#hidden-face",{translateY:"-=120"})
    .to("#hidden-face",{duration:0.5,translateY:"-=-60"})
    .from("#face",{autoAlpha:0},"-=0.15")
    .from("#face",{transformOrigin:'center',repeat: 7,yoyo: true},"sametime")

    .to("#big-shadow",{scale:0,alpha:0,transformOrigin:'center'},"-=0.9")
    .to("#big-shadow", {duration: 1, morphSVG:"#small-shadow",repeat: 7,yoyo: true,transformOrigin:'center'},"sametime")

    return tl;
}

function rightclawsthrowletters(){
    const tl =gsap.timeline();
    tl.to("#rightclaw",{autoAlpha:0})
    .from("#right-claw_3",{autoAlpha:0})
    .from("#right-claw_3",{rotation:30, ease:"myWiggle"},"sametime")
    .from("#vector-53",{autoAlpha:0},"sametime")
    .from("#vector-53",{rotation:30, ease:"myWiggle"},"sametime")
    .from("#vector-54",{autoAlpha:0},"sametime")
    .from("#vector-54",{rotation:30, ease:"myWiggle"},"sametime")
    .from("#vector-55",{autoAlpha:0},"sametime")
    .from("#vector-55",{rotation:30, ease:"myWiggle"},"sametime")



    return tl;
}

function leavescomeinwithsmoke(){
    const tl =gsap.timeline();
   

    return tl;
}



mainTL.add(worldrotateandscale())
        .add(dragonscomein())
        .add(wingsflapwithshadowandscrollsopen())
        .add(rightclawsthrowletters())
        .add(leavescomeinwithsmoke());



GSDevTools.create();
MorphSVGPlugin.create();
DrawSVGPlugin.create();
Flip.create();
MotionPathHelper.create();
MotionPathPlugin.create();