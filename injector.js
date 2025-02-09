function VTOLinjector(str){
	newStr = str;
	newStr=newStr.replace('"v"){;}',VTOL);
	newStr=newStr.replace('[S9L.C1E(107),S9L.W1E(1130),S9L.C1E(1131),S9L.W1E(1132),',VTOL_MODE);
	newStr=newStr.replace('build(D2i,h2i) {var S5p=[arguments];S5p[4]=y3uu;',RENDER_JETPACK);
	newStr=newStr.replace('P1R[43][P1R[7][551]][S9L.W1E(62)]={lobbyName:S9L.C1E(2070),gameStartName:S9L.W1E(2070),lobbyDescription:S9L.W1E(2071),tutorialTitle:S9L.C1E(2072),tutorialText:S9L.C1E(2073),forceTeams:false,forceTeamCount:null,editorCanTarget:false};', MAP_EDITOR_VTOL);

	if(str === newStr) throw "Injection failed!";

	console.log("VTOL injector run");
	return newStr;
}

const RENDER_JETPACK=`build(e8m,T8m) {var S5p=[arguments];S5p[4]=y3uu;if(this["gameSettings"]["mo"]=="v"){this["VTOLWing"]=new PIXI["Graphics"]();this["VTOLWing"]["beginFill"](0xcccccc);this["VTOLWing"]["drawRect"](this["radius"]*(-V["footHW"]+V["footOffsetX"]),this["radius"]*(-V["footHH"]+V["footOffsetY"]),this["radius"]*(V["footHW"]*2),this["radius"]*(V["footHH"]*2));this["VTOLWing"]["beginFill"](0xcccccc);this["VTOLWing"]["drawRect"](this["radius"]*(-V["footHW"]+-V["footOffsetX"]),this["radius"]*(-V["footHH"]+V["footOffsetY"]),this["radius"]*(V["footHW"]*2),this["radius"]*(V["footHH"]*2));this["container"]["addChild"](this["VTOLWing"]);}`;

const VTOL_MODE=`[S9L.C1E(107),S9L.W1E(1130),S9L.C1E(1131),S9L.W1E(1132),"v",` //Adds VTOL to mode selection button

const VTOL=`"v"){var O1B=[];O1B[11]=(-22/30)*O7R[445];O1B[791]=0.12;O1B[874]=new P1R[2](0,O1B[11]);O1B[874]=O7R[5][O7R[956]]["body"]["GetWorldVector"](O1B[874],O1B[874]);O1B[857]=new P1R[2](0,O1B[11]*O1B[791]);O1B[857]=O7R[5][O7R[956]]["body"]["GetWorldVector"](O1B[857],O1B[857]);O1B[347]=O7R[5][O7R[956]]["body"]["GetWorldPoint"](new P1R[2](V["footOffsetX"]*O7R[445],V["footOffsetY"]*O7R[445]));O1B[848]=O7R[5][O7R[956]]["body"]["GetWorldPoint"](new P1R[2]( - V["footOffsetX"]*O7R[445],V["footOffsetY"]*O7R[445]));O1B[195]="none";if(O7R[0][1][O7R[956]]["up"])/*bWFkZSBieSBzYWxhbWEK*/{if(O7R[0][1][O7R[956]]["left"]){O1B[195]="right";} else if(O7R[0][1][O7R[956]]["right"]){O1B[195]="left";} else {O1B[195]="both";}} else if(O7R[0][1][O7R[956]]["left"] && O7R[0][1][O7R[956]]["right"]){O1B[195]="both";} else if(O7R[0][1][O7R[956]]["left"]){O1B[195]="right";} else if(O7R[0][1][O7R[956]]["right"]){O1B[195]="left";}if(O1B[195]=="both"){O7R[5][O7R[956]]["body"]["ApplyImpulse"](O1B[874],O1B[347]);O7R[5][O7R[956]]["body"]["ApplyImpulse"](O1B[874],O1B[848]);}if(O1B[195]=="left"){O7R[5][O7R[956]]["body"]["ApplyImpulse"](O1B[874],O1B[347]);O7R[5][O7R[956]]["body"]["ApplyImpulse"](O1B[857],O1B[848]);}if(O1B[195]=="right"){O7R[5][O7R[956]]["body"]["ApplyImpulse"](O1B[857],O1B[347]);O7R[5][O7R[956]]["body"]["ApplyImpulse"](O1B[874],O1B[848]);}}`;

const MAP_EDITOR_VTOL=`P1R[43][P1R[7][551]][S9L.W1E(62)]={lobbyName:S9L.C1E(2070),gameStartName:S9L.W1E(2070),lobbyDescription:S9L.W1E(2071),tutorialTitle:S9L.C1E(2072),tutorialText:S9L.C1E(2073),forceTeams:false,forceTeamCount:null,editorCanTarget:true};`
if(!window.bonkCodeInjectors)
window.bonkCodeInjectors = [];
window.bonkCodeInjectors.push(bonkCode => {
	try {
		return VTOLinjector(bonkCode);
	} catch (error) {
		alert(
`Whoops! VTOL was unable to load.
This may be due to an update to Bonk.io. If so, please report this error!
This could also be because you have an extension that is incompatible with \
VTOL, such as the Bonk Leagues Client. You would have to disable it to use \
VTOL.
		`);
		throw error;
	}
});

console.log("VTOL injector loaded");
