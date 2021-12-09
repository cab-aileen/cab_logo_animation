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

//gsap.set("#left-eye",{scaleY: 0, yoyo: true,transformOrigin:"center bottom"})


gsap.set("#r-group3", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
gsap.set("#r-group2", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
gsap.set("#r-group1", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});

const mainTL = gsap.timeline();
CustomWiggle.create("myWiggle", {wiggles:20,type:"easeOut"});
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
    .from("#top-dragon",{duration:3,y:"-=3000",scale:-2},"-=3")
    .to("#top-dragon",{duration:5,y:"-=-2000"})
    .to("#left-wing_6",{rotation:60,repeat: 7,yoyo: true},"sametime")
    .to("#right-wing_6",{rotation:-60,repeat: 7,yoyo: true},"sametime")
    .from("#bottom-dragon",{duration:3,y:"-=-3000"},"-=5")
    .to("#left-wing_57",{rotation:-60,repeat: 7,yoyo: true},"sametime")
    .to("#right-wing_5",{rotation:60,repeat: 7,yoyo: true},"sametime")

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
    .to("#vector-39,#vector-40,#vector-41,#vector-42,#vector-43,#vector-44",{autoAlpha:0} )

    .to("#hidden-face",{translateY:"-=120"})
    .to("#hidden-face",{duration:0.5,translateY:"-=-60"})
    .from("#face",{autoAlpha:0},"-=0.15")
    .from("#face",{transformOrigin:'center'},"sametime")

    .to("#big-shadow",{scale:0,alpha:0,transformOrigin:'center'},"-=0.9")
    .to("#big-shadow", {duration: 1, morphSVG:"#small-shadow",repeat: 7,yoyo: true,transformOrigin:'center'},"sametime")

    return tl;
}

function rightclawsthrowletters(){
    const tl =gsap.timeline();
    tl.to("#rightclaw",{autoAlpha:0})
    .from("#right-claw_3",{autoAlpha:0})
    .from("#right-claw_3",{rotation:-20, ease:"myWiggle",transformOrigin:'right'},"sametime")
    .from("#vector-53",{autoAlpha:0},"sametime")
    .from("#vector-53",{rotation:-30, ease:"myWiggle"},"sametime")
    .from("#vector-54",{autoAlpha:0},"sametime")
    .from("#vector-54",{rotation:-30, ease:"myWiggle"},"sametime")
    .from("#vector-55",{autoAlpha:0},"sametime")
    .from("#vector-55",{rotation:-30, ease:"myWiggle"},"sametime")

    .from("#drexel-scramble",{scale:0},"<" )
    .to("#e-99",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=260",scale:3},"sametime")
    .to("#d-103",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=200",scale:3},"sametime")
    .to("#r-105",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=280",scale:3},"sametime")
    .to("#e_2",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=190",scale:3},"-=0.2")
    .to("#x-104",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=33",scale:3},"sametime")
    .to("#l-101",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=-100",scale:3},"sametime")
    .to("#u-110",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=-15",scale:3},"-=0.2")
    .to("#n-102",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=210",scale:3},"-=0.2")
    .to("#i_2",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=-50",scale:3},"sametime")
    .to("#v-109",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=260",scale:3},"sametime")
    .to("#e_3",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=260",scale:3},"-=0.2")
    .to("#r-105",{opacity: 100, autoAlpha:0,translateY:"-=-280",translateX:"-=20",scale:3},"sametime")
    .to("#s-107",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=333",scale:3},"-=0.2")
    .to("#i_3",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=15",scale:3},"sametime")
    .to("#t-108",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=-30",scale:3},"-=0.2")
    .to("#y-106",{opacity: 100, autoAlpha:0,translateY:"-=-350",translateX:"-=-70",scale:3},"sametime")
    .from("#drexel-title", {duration:1,scaleY:0,transformOrigin:'bottom'},"-=0.9")

    .to("#vector-53,#vector-54,#vector-55",{alpha:0})
    .to("#right-claw_3",{rotate:-170, transformOrigin:'center',translateX:"-=10", translateY:"-=-15"} )

    return tl;
}

function leftclawsthrowletters(){
    const tl =gsap.timeline();
    tl.to("#leftclaw",{autoAlpha:0})
    .from("#left-claw_2",{autoAlpha:0})
    .from("#left-claw_2",{rotation:20, ease:"myWiggle",transformOrigin:'left'},"sametime")
    .from("#vector-56",{autoAlpha:0},"sametime")
    .from("#vector-56",{rotation:30, ease:"myWiggle"},"sametime")
    .from("#vector-57",{autoAlpha:0},"sametime")
    .from("#vector-57",{rotation:30, ease:"myWiggle"},"sametime")
    .from("#vector-58",{autoAlpha:0},"sametime")
    .from("#vector-58",{rotation:30, ease:"myWiggle"},"sametime")

    .from("#igc-scramble",{scale:0},"<" )
    .to("#e-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-300",scale:3},"sametime")
    .to("#r-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-260",scale:3},"sametime")
    .to("#t-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-70",scale:3},"-=0.3")
    .to("#i-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-100",scale:3},"sametime")
    .to("#n-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-300",scale:3},"sametime")
    .to("#r_p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-100",scale:3},"-=0.3")
    .to("#l-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-230",scale:3},"-=0.3")
    .to("#c-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=100",scale:3},"sametime")
    .to("#a-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=200",scale:3},"-=0.3")
    .to("#t_2-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-300",scale:3},"sametime")
    .to("#u-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-100",scale:3},"-=0.3")
    .to("#l_2-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-300",scale:3},"sametime")
    .to("#c-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-222",scale:3},"-=0.3")
    .to("#n_2-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-155",scale:3},"sametime")
    .to("#c_2-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-30",scale:3},"-=0.3")
    .to("#l_3-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-300",scale:3},"sametime")
    .to("#i-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-300",scale:3},"sametime")
    .to("#o-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=100",scale:3},"sametime")
    .to("#u_2-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-300",scale:3},"sametime")
    .to("#e_2-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-100",scale:3},"-=0.3")
    .to("#g-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-110",scale:3},"sametime")
    .to("#r_3-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-430",scale:3},"sametime")
    .to("#e_3-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-20",scale:3},"-=0.3")
    .to("#k-p",{opacity: 100, autoAlpha:0,translateY:"-=-450",translateX:"-=-90",scale:3},"-=0.3")
    .from("#igc-title", {duration:1.5,scaleY:0,transformOrigin:'bottom'},"-=0.5")
    
    .to("#vector-56,#vector-58,#vector-57",{alpha:0})
    .to("#left-claw_2",{rotate:170, transformOrigin:'center',translateX:"-=-10", translateY:"-=-15"} )


    return tl;
}

function leftleavescomein(){
    const tl =gsap.timeline();
    gsap.set("#group3", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
    gsap.set("#group2", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
    gsap.set("#group1", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});

    tl.from("#left-leaves-comingin",{alpha:0})
    .to("#group1,#group2,#group3",{duration:2, alpha:0,scale:0,motionPath:{align:"#motionpath-left",path:"#motionpath-left"}},"-=-0.1")

   .from("#vector-013",{scaleY:0},"-=1.1")
   .from("#vector-012",{scaleY:0},"-=1.1")
   .from("#vector-015",{scaleY:0},"-=1")
   .from("#vector-014",{scaleY:0},"-=1")
   .from("#vector-017",{scaleY:0},"-=0.9")
   .from("#vector-016",{scaleY:0},"-=0.9")
   .from("#vector-019",{scaleY:0},"-=0.8")
   .from("#vector-018",{scaleY:0},"-=0.8")
   .from("#vector-020",{scaleY:0},"-=0.7")
   .from("#vector-021",{scaleY:0},"-=0.6")
   .from("#vector-025",{scaleY:0},"-=0.6")
   .from("#vector-022",{scaleY:0},"-=0.5")
   .from("#vector-024",{scaleY:0},"-=0.5")
   .from("#vector-023",{scaleY:0},"-=0.4")



    return tl;
}


function rightleavescomein(){
    const tl =gsap.timeline();

   tl.from("#right-leaves-comingin",{alpha:0})
   .to("#r-group1,#r-group2,#r-group3",{duration:2, alpha:0,scale:0,motionPath:{align:"#motionpath-right",path:"#motionpath-right"}},"-=-0.1")
   

   .from("#vector-13",{scaleY:0},"-=1.1")
   .from("#vector-12",{scaleY:0},"-=1.1")
   .from("#vector-15",{scaleY:0},"-=1")
   .from("#vector-14",{scaleY:0},"-=1")
   .from("#vector-17",{scaleY:0},"-=0.9")
   .from("#vector-16",{scaleY:0},"-=0.9")
   .from("#vector-19",{scaleY:0},"-=0.8")
   .from("#vector-18",{scaleY:0},"-=0.8")
   .from("#vector-20",{scaleY:0},"-=0.7")
   .from("#vector-21",{scaleY:0},"-=0.6")
   .from("#vector-25",{scaleY:0},"-=0.6")
   .from("#vector-22",{scaleY:0},"-=0.5")
   .from("#vector-24",{scaleY:0},"-=0.5")
   .from("#vector-23",{scaleY:0},"-=0.4")

    return tl;
}



mainTL.add(worldrotateandscale())
        .add(dragonscomein())
        .add(wingsflapwithshadowandscrollsopen())
        .add(rightclawsthrowletters())
        .add(leftclawsthrowletters())
        .add(leftleavescomein())
        .add(rightleavescomein());



GSDevTools.create();
MorphSVGPlugin.create();
DrawSVGPlugin.create();
Flip.create();
MotionPathHelper.create();
MotionPathPlugin.create();