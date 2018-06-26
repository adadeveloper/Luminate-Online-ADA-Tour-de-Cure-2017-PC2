var jQTCPC2 = jQuery.noConflict(true);
var myFRID;
var myCID;
var CIDfname;
var CIDlname;

var initLoc;
var initLocPc2;
var refreshDetect=0;

//YAHOO.Convio.PC2.Utils.LoadingMessage="Loading, please wait.";
//YAHOO.Convio.PC2.Utils.LoadingMessage_en_US="Loading, please wait.";

var loadCustomHandlers = function() {
    /*
     * This is an example for subscribing to the registrationLoaded event.
     * The single argument passed is the Registration object, which is also
     * saved to YAHOO.Convio.PC2.Data.Registration
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:registrationLoaded", function(registration) {
    //    YAHOO.log("registrationId: " + registration.registrationId, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the constituentLoaded event.
     * The single argument passed is the user object, which is also
     * saved to YAHOO.Convio.PC2.Data.User
     */
    YAHOO.Convio.PC2.Utils.publisher.on("pc2:constituentLoaded", function(user) {
    //    YAHOO.log("name: " + user.name.first + ' ' + user.name.last, "debug", "custom.js");
    	CIDfname = user.name.first;
		CIDlname = user.name.last;
		myCID = user.cons_id;
	});
    
    /*
     * This is an example for subscribing to the wrapperLoaded event.
     * The single argument passed is the wrapper object.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:wrapperLoaded", function(wrapper) {
    //    YAHOO.log("personal page URL: " + wrapper.personalPageUrl, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the configurationLoaded event.
     * The single argument passed is the config object, which is also
     * saved to YAHOO.Convio.PC2.Data.TeamraiserConfig
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:configurationLoaded", function(config) {
    //    YAHOO.log("Accepting donations: " + config.acceptingDonations, "debug", "custom.js");
	//    YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.showAdminNewsFeed = false;
	//    YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.feedCount = 1;
	//    YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.cycleInterval = 0;
	// 	  YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.maxTextLength = 50;
	// 	  YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.showBelowProgress = true;
    //});
    
    /*
     * This is an example for subscribing to the participantProgressLoaded event.
     * The single argument passed is the progressData object, which is also
     * saved to YAHOO.Convio.PC2.Data.ProgressData
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:participantProgressLoaded", function(progressData) {
    //    YAHOO.log("Days left: " + progressData.daysLeft, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the viewChanged event.
     * The single argument passed is the viewChange object, which has 
     * these attributes.
     * 
     * oldView: the name of the old primary view.
     * oldSubview: the name of the old subview.
     * view: the name of the new primary view.
     * subview: the name of the new subview.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:viewChanged", function(viewChange) {
    //    YAHOO.log("View changed. Old was: " + viewChange.oldView + "-" + viewChange.oldSubview 
    //            + ". New is: " + viewChange.view + "-" + viewChange.subview + ".", "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the contactAdded event.
     * The single argument passed is the contact, or array of contacts, added
     * by an explicit API call.
     * 
     * Note that this event will not fire if a contact is added as a 
     * side effect of another action such as processing an offline gift.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:contactAdded", function(contacts) {
    //    contacts = YAHOO.Convio.PC2.Utils.ensureArray(contacts);
    //    YAHOO.log("Number of contacts added: " + contacts.length, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the emailSent event.
     * The single argument passed is the JSON object containing a 
     * success flag.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:emailSent", function(response) {
    //    YAHOO.log("Email sent: " + response.success, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the personalPageUpdated event.
     * The single argument passed is the JSON object containing a 
     * success flag.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:personalPageUpdated", function(response) {
    //    YAHOO.log("Personal page updated: " + response.success, "debug", "custom.js");
    //});
	
	/*
     * This is an example for subscribing to the suggestionLoaded event.
     * The single argument passed is the Suggestion object.
     */
//    YAHOO.Convio.PC2.Utils.publisher.on("pc2:suggestionLoaded", function(suggestion) {
//    	
//        YAHOO.log("Loaded default 'what next?' suggestion: " + suggestion.success, "debug", "custom.js");
//        
//        // resolve a self-donation URL
//        var personalDonationUrl = YAHOO.Convio.PC2.Data.personalDonationUrl;
//        
//        // if users has self-donation URL and is not already a self-donor
//        if (personalDonationUrl && YAHOO.Convio.PC2.Data.Registration.selfDonor == 'false') {
//        	
//        	var el = YAHOO.util.Dom.get("what-next-answer");
//        	el.innerHTML = "<a href=\"" + personalDonationUrl + "\"> Make a self-donation.</a>";
//        	
//        	YAHOO.log("Overwrote default 'what next?' suggestion; self-donation message", "debug", "custom.js");
//        }
//        
//    });
}

/* Executes after new JS is dynamically loaded, 
 * and before new view load begins. */
var loadOverrides = function(view, subview) {
    // Override functions defined in external JS files
}

var loadCustom = function() {
    /*
     * You can execute a function once all of the specified
     * events have fired with the YAHOO.Convio.PC2.Utils.require
     * function. 
     */
    YAHOO.Convio.PC2.Utils.require("pc2:registrationLoaded", "pc2:constituentLoaded", "pc2:configurationLoaded", "pc2:wrapperLoaded", function() {
    //    YAHOO.log("Registration, Constituent, Configuration, and Wrapper are all loaded.", "debug", "custom.js");
    		renderADADashboardComponent();
	});
    
    /*
    var leftNav = document.createElement("div");
    leftNav.id = "custom_left_nav";
    
    var leftNavContent = document.createElement("p");
    leftNavContent.appendChild(document.createTextNode("Hello left nav"));
    leftNav.appendChild(leftNavContent);
    
    YAHOO.util.Dom.addClass(leftNav, "custom-left-nav");
    
    var firstChild = YAHOO.util.Dom.getFirstChild("yui-main");
    YAHOO.util.Dom.insertBefore(leftNav, firstChild);
    */
};

function renderADADashboardComponent(){
	myFRID = getURLParameter("fr_id");
	initLoc = document.URL;
    initLocPc2 = initLoc.split("pc2=");
	
	if(refreshDetect===0){
		if((initLocPc2[1] != 'dashboard-home')&&(typeof initLocPc2[1] != "undefined")){
			window.location.hash = "pc2=dashboard-home";
			window.location.reload();
		}
	}
	
	handlerTopNav();
	handlerHomeProgress();
	handlerSideBar();	
}

function handlerSideBar(){	
jQTCPC2('#relactionsadatoggle').click(function(){
	if(jQTCPC2(window).width() < 1005){
		if(jQTCPC2('#sidebar')[0].style.height == 'auto'){
			//jQTCPC2('#sidebar').css('height','60px');
			jQTCPC2('#sidebar').animate({height: '60px'});
		} else {
			jQTCPC2('#sidebar').css('height','auto');
			//autoHeightAnimate(jQTCPC2('#sidebar'), 500);
		}
	}
});
/*jQTCPC2('#sidebar .subnav a').click(function(){
	//jQTCPC2('#sidebar').css('height','60px');	
	jQTCPC2('#sidebar').animate({height: '60px'});
});*/
}
/*function autoHeightAnimate(element, time){
  	var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    	  element.height(curHeight); // Reset to Default Height
    	  element.stop().animate({ height: autoHeight }, parseInt(time)); // Animate to Auto Height
}*/

function handlerHomeProgress(){
	//personal
	jQTCPC2('#so16raisedamtcopy').text(jQTCPC2('#progress-amt-raised-value').text());
	jQTCPC2('#so16daysleftcopy').text(jQTCPC2('#progress-days-left-value').text()+' days left');
	jQTCPC2('#so16pctprogresscopy').text(jQTCPC2('#progress-percent-value').text());
	jQTCPC2('#so16goalcopy').text(jQTCPC2('#progress-goal-value').text());
	jQTCPC2('#so16updategoalcopy').append(jQTCPC2('#progress-change-goal-link'));
	jQTCPC2('#msg_cat_change_goal_link').text('Update Goal');
	//team
	jQTCPC2('#so16raisedamtcopyteam').text(jQTCPC2('#team-progress-amt-raised-value').text());
	jQTCPC2('#so16daysleftcopyteam').text(jQTCPC2('#team-progress-days-left-value').text()+' days left');
	jQTCPC2('#so16pctprogresscopyteam').text(jQTCPC2('#team-progress-percent-value').text());
	jQTCPC2('#so16goalcopyteam').text(jQTCPC2('#team-progress-goal-value').text());
	jQTCPC2('#so16updategoalcopyteam').append(jQTCPC2('#edit-team-goal-section'));
	jQTCPC2('#msg_cat_team_report_change_goal_link').text('Update Goal');
	//company
	jQTCPC2('#so16raisedamtcopycompany').text(jQTCPC2('#company-progress-amt-raised-value').text());
	jQTCPC2('#so16daysleftcopycompany').text(jQTCPC2('#company-progress-days-left-value').text()+' days left');
	jQTCPC2('#so16pctprogresscopycompany').text(jQTCPC2('#company-progress-percent-value').text());
	jQTCPC2('#so16goalcopycompany').text(jQTCPC2('#company-progress-goal-value').text());
	
	//custom greeting
	jQTCPC2('#adadashboardevtsummary').text(jQTCPC2('#so2016evtdetails').text());
	
	//cta
	jQTCPC2('#so2016ctaADA').load('../site/SPageServer?pagename=TC_2017_PC2_CTA_DH&pgwrap=n&fr_id='+getURLParameter("fr_id")+'&px='+myCID);
	
	//achievement badge
	jQTCPC2('#myachievementADA').load('../site/SPageServer?pagename=TC_2017_Badges_DH&pgwrap=n&fr_id='+getURLParameter("fr_id")+'&px='+myCID, function(){addOnBadgeHandler();});
	
	//dashboard misc
	jQTCPC2('#dashboardmiscADA').load('../site/SPageServer?pagename=TC_2017_PC2_DashboardMisc_DH&pgwrap=n&fr_id='+getURLParameter("fr_id"), function(){customPopup();});
	jQTCPC2('#s51-fundraising-tools').load('../site/SPageServer?pagename=TC_2017_PC2_Tools_DH&fr_id='+myFRID+'&mycid='+myCID+'&pgwrap=n',function(){customMenu(1);});
	jQTCPC2('#s51-go-social').load('../site/SPageServer?pagename=TC_2017_PC2_GoSocial_DH&fr_id='+myFRID+'&mycid='+myCID+'&pgwrap=n' ,function(){customMenu(2);});
	
	
	//evt manager built link
	jQTCPC2('#adanotifevtmgrlink').prop('href','http://main.diabetes.org/site/TR?pg=informational&fr_id='+getURLParameter("fr_id")+'&type=fr_informational&sid=23763');	
	
}


function customMenu(whichOne) {
   switch(whichOne){
	case 1:
		var e = [{
        label: "Fundraising Tools",
        sid: "0",
        viewName: "fundraising",
        subViewName: "tools",
		viewContent: jQTCPC2('#s51-fundraising-tools').html()
    	}];
	break;
	case 2:
		var e = [{
        label: "Go Social",
        sid: "1",
        viewName: "go",
        subViewName: "social",
		viewContent: jQTCPC2('#s51-go-social').html()
    	}];
	break;   
   }
    
    for (var t = 0; t < e.length; t++) {
        createCustomView(e[t])
    }
	
}

function createCustomView(e) {
    YAHOO.Convio.PC2.Views.load[e.viewName] = function(t) {
        var n = YAHOO.Convio.PC2.Views.current;
        YAHOO.util.Dom.addClass(YAHOO.Convio.PC2.Views.current + "-content", "hidden-form");
        YAHOO.util.Dom.addClass(YAHOO.Convio.PC2.Views.current + "-sidebar", "hidden-form");
        YAHOO.util.Dom.addClass("dashboard-content", "hidden-form");
        YAHOO.util.Dom.addClass("dashboard-sidebar", "hidden-form");
        YAHOO.util.Dom.removeClass(e.viewName + "-content", "hidden-form");
        YAHOO.util.Dom.removeClass(e.viewName + "-" + t + "-content", "hidden-form");
        if (t == e.subViewName) {
            var r = YAHOO.util.Dom.get(e.viewName + "-content");
            if (r.childNodes.length < 3) {
                if (parent.document.getElementById("s51-" + e.viewName + "-" + e.subViewName)) {
                    r.innerHTML = parent.document.getElementById("s51-" + e.viewName + "-" + e.subViewName).innerHTML
                } else {
                    Y.use("io", function(t) {
                        function s(e, t, n) {
                            var i = document.body.appendChild(document.createElement("div"));
                            i.style.display = "none";
                            i.innerHTML = t.responseText.replace(/<base href="http:\/\/main\.diabetes\.org\/site\/" \/>/, "");
                            r.innerHTML = document.getElementById("FrNews_ArticlePage").innerHTML;
                            i.parentNode.removeChild(i)
                        }
                        t.io.header("X-Requested-With");
                        var n = YAHOO.util.Cookie.get("JServSessionIdr004");
                        var i = "../site/AjaxProxy?auth=" + YAHOO.Convio.PC2.Config.getAuth() + "&cnv_url=http%3A%2F%2Fmain.diabetes.org%2Fsite%2FTR%3Fpgwrap%3Dn%26type%3Dfr_informational%26pg%3Dinformational%26fr_id%3D" + YAHOO.Convio.PC2.Config.Teamraiser.getFrId() + "%26sid%3D" + e.sid + "%26JServSessionIdr004%3D" + n;
                        var o = t.io(i, {
                            on: {
                                complete: s
                            }
                        })
                    })
                }
            }
        }
    };
	
    Y.use("node", function(t) {
        /*t.one("#content").append('<div id="' + e.viewName + '-content" class="hidden-form">' + '<h1 id="' + e.viewName + '_view_header">' + e.label + "</h1>" + '<div id="' + e.viewName + '-list-container" class="ux-block2">' + "</div>" + "</div>");
        t.one("#sidebar").append('<div id="' + e.viewName + '-sidebar" class="hidden-form"></div>');*/	
		t.one("#content").append('<div id="' + e.viewName + '-content" class="hidden-form">' + e.viewContent + "</div>");
        t.one("#sidebar").append('<div id="' + e.viewName + '-sidebar" class="hidden-form"></div>');
    })
	
}



function addOnBadgeHandler(){
	var isRS=jQTCPC2('#whatParticipantType').text();
				
		
		var s = isRS.toLowerCase();
		if (s.indexOf("red rider") > -1) {
			jQTCPC2("#RSBadgeImg").attr('src','../ws/tr/tr2017/img/badge2_b.jpg');	
			jQTCPC2('#RSBadgeBox1').show();
			jQTCPC2('#RSBadgeBox2').hide();	
		} else if (s.indexOf("red strider") > -1) {
			jQTCPC2('#RSBadgeBox1').hide();
			jQTCPC2('#RSBadgeBox2').show();			
		} else if (s.indexOf("red walker") > -1) {
			jQTCPC2('#RSBadgeBox1').hide();
			jQTCPC2('#RSBadgeBox2').show();	
		} else if (s.indexOf("red runner") > -1) {
			jQTCPC2('#RSBadgeBox1').hide();
			jQTCPC2('#RSBadgeBox2').show();	
		} else {
			jQTCPC2('#RSBadgeBox1').hide();
			jQTCPC2('#RSBadgeBox2').hide();	
		}
		
		var isLW=jQTCPC2.trim(jQTCPC2('#legacyWalkerAnswer').text());		
		if((isLW != '') && (isLW.indexOf("First") == -1) && (isLW.indexOf("User") == -1)){
			jQTCPC2('#LWBadgeImg').attr('src','../ws/so/so2016/img/badge5_b.png');
		}
}
function handlerTopNav(){
	jQTCPC2('#cstm-update-pg-link').click(function(){		
		jQTCPC2('#submenu-my-profile').hide();
		jQTCPC2('#shareMyPageContentBox').hide();
		jQTCPC2('#submenu-updt-pg').toggle();
	});	
	jQTCPC2('#cstm-my-profile-link-li').click(function(){
		jQTCPC2('#submenu-updt-pg').hide();
		jQTCPC2('#shareMyPageContentBox').hide();
		jQTCPC2('#submenu-my-profile').toggle();
	});	
	
	/*jQTCPC2('li','#hd-nav').click(function(){
		if(jQTCPC2(window).width() < 1005){
			jQTCPC2('#hd-nav').hide();
		}
	});*/
	jQTCPC2('#ctamobilemenu').click(function(){
		if(jQTCPC2(window).width() < 1005){
			jQTCPC2('#hd-nav').toggle();
		}
	});
	
	jQTCPC2('#cstm-my-profile-link').text('Hi '+CIDfname+'!');
	jQTCPC2('#myPersonalPageShareURL').val('http://main.diabetes.org/site/TR/?px='+myCID+'&pg=personal&fr_id='+getURLParameter("fr_id"));
	jQTCPC2('#sharemypersonalpgfb').prop('href',jQTCPC2('#fbsharepersonalpagecontent').text());
	jQTCPC2('#sharemypersonalpgtwitter').prop('href',jQTCPC2('#twittersharepersonalpagecontent').text());
	pc2PgLocator();
}

function pc2PgLocator(){
	setInterval(function() {
        var e = document.URL;
        var t = e.split("pc2=");
		
		if(jQTCPC2(window).width() > 1004){
			jQTCPC2('#hd-nav').show();
			jQTCPC2('#sidebar').css('height','100%');
			if(jQTCPC2('#ADAMsgNotifBar').is(":visible")){
				jQTCPC2('#content').css('padding-top','45px');
				jQTCPC2('#sidebar').css('top','125px');
			} else {
				jQTCPC2('#content').css('padding-top','0px');
				jQTCPC2('#sidebar').css('top','80px');
			}
		} else{
			if(jQTCPC2('#sidebar')[0].style.height == '100%'){
				jQTCPC2('#sidebar').css('height','60px');
			}
			jQTCPC2('#content').css('padding-top','0px');
			jQTCPC2('#sidebar').css({'bottom':'0px','top':'auto'});
		}
		
		if(initLocPc2[1] != t[1]){
			if(jQTCPC2(window).width() < 1005){
				jQTCPC2('#sidebar').animate({height: '60px'});
				if(jQTCPC2('#hd-nav').is(":visible")){
					if((t[1] != "update-my-pages") && (t[1] != "my-profile-options")){
						jQTCPC2('#hd-nav').hide();
					}
				}				
			}
			refreshDetect = 1;
			initLocPc2[1] = t[1];	
			//jQTCPC2('html, body').scrollTop();
			window.scrollTo(0,0);
		}
		
		if(typeof t[1] != "undefined"){
			jQTCPC2('#sidebar').show();
			switch (t[1]) {						
				case "personalpage-compose":
				case "teampage-compose":
					jQTCPC2('#hd-nav').find('li').each(function(){
						jQTCPC2(this).removeClass('selected');
					});
					jQTCPC2('#cstm-update-pg-nav-link').addClass('selected');
					jQTCPC2('#submenu-updt-pg').hide();
					jQTCPC2('#submenu-my-profile').hide();
					jQTCPC2('#adadashboardheader').addClass('centerDiv-md');
					jQTCPC2('#adadashboardheader').removeClass('centerDiv');
					jQTCPC2('#personalprogressfloater').addClass('centerDiv-md');
					jQTCPC2('#personalprogressfloater').removeClass('centerDiv');
					jQTCPC2('#personalprogressbar').addClass('centerDiv-md');
					jQTCPC2('#personalprogressbar').removeClass('centerDiv');
					jQTCPC2('#shareMyPageContentBox').hide();
					
				break;
				case "companypage-compose":
					jQTCPC2('#hd-nav').find('li').each(function(){
						jQTCPC2(this).removeClass('selected');
					});
					jQTCPC2('#cstm-update-pg-nav-link').addClass('selected');
					jQTCPC2('#submenu-updt-pg').hide();
					jQTCPC2('#submenu-my-profile').hide();
					jQTCPC2('#sidebar').hide();
					jQTCPC2('#adadashboardheader').addClass('centerDiv-md');
					jQTCPC2('#adadashboardheader').removeClass('centerDiv');
					jQTCPC2('#personalprogressfloater').addClass('centerDiv-md');
					jQTCPC2('#personalprogressfloater').removeClass('centerDiv');
					jQTCPC2('#personalprogressbar').addClass('centerDiv-md');
					jQTCPC2('#personalprogressbar').removeClass('centerDiv');
					jQTCPC2('#shareMyPageContentBox').hide();
					
				break;
				
				case "update-my-pages":
					jQTCPC2('#hd-nav').find('li').each(function(){
						jQTCPC2(this).removeClass('selected');
					});
					jQTCPC2('#cstm-update-pg-nav-link').addClass('selected');
					jQTCPC2('#submenu-updt-pg').show();	
					jQTCPC2('#sidebar').hide();	
					jQTCPC2('#adadashboardheader').addClass('centerDiv-md');
					jQTCPC2('#adadashboardheader').removeClass('centerDiv');
					jQTCPC2('#personalprogressfloater').addClass('centerDiv-md');
					jQTCPC2('#personalprogressfloater').removeClass('centerDiv');
					jQTCPC2('#personalprogressbar').addClass('centerDiv-md');
					jQTCPC2('#personalprogressbar').removeClass('centerDiv');
					
				break;
				
				case "my-profile-options":
					jQTCPC2('#hd-nav').find('li').each(function(){
						jQTCPC2(this).removeClass('selected');
					});
					jQTCPC2('#cstm-my-profile-link-li').addClass('selected');
					jQTCPC2('#submenu-my-profile').show();
					jQTCPC2('#sidebar').hide();
					jQTCPC2('#adadashboardheader').addClass('centerDiv-md');
					jQTCPC2('#adadashboardheader').removeClass('centerDiv');
					jQTCPC2('#personalprogressfloater').addClass('centerDiv-md');
					jQTCPC2('#personalprogressfloater').removeClass('centerDiv');
					jQTCPC2('#personalprogressbar').addClass('centerDiv-md');
					jQTCPC2('#personalprogressbar').removeClass('centerDiv');
					
				break;
				
				case "gift-add":
				case "gift-team":				
				case "teampage-compose":
				case "addressbookimport-selectsource":						
					jQTCPC2('#sidebar').hide();
					jQTCPC2('#submenu-updt-pg').hide();
					jQTCPC2('#submenu-my-profile').hide();
					jQTCPC2('#shareMyPageContentBox').hide();	
					jQTCPC2('#adadashboardheader').addClass('centerDiv-md');
					jQTCPC2('#adadashboardheader').removeClass('centerDiv');
					jQTCPC2('#personalprogressfloater').addClass('centerDiv-md');
					jQTCPC2('#personalprogressfloater').removeClass('centerDiv');
					jQTCPC2('#personalprogressbar').addClass('centerDiv-md');
					jQTCPC2('#personalprogressbar').removeClass('centerDiv');
					
				break;
				
				case "dashboard-home":
					jQTCPC2('#sidebar').hide();
					jQTCPC2('#submenu-updt-pg').hide();
					jQTCPC2('#submenu-my-profile').hide();
					jQTCPC2('#shareMyPageContentBox').show();					
					jQTCPC2('#adadashboardheader').removeClass('centerDiv-md');
					jQTCPC2('#adadashboardheader').addClass('centerDiv');
					jQTCPC2('#personalprogressfloater').removeClass('centerDiv-md');
					jQTCPC2('#personalprogressfloater').addClass('centerDiv');
					jQTCPC2('#personalprogressbar').removeClass('centerDiv-md');
					jQTCPC2('#personalprogressbar').addClass('centerDiv');	
									
				break;
				
				case "fundraising-tools":
					jQTCPC2('#sidebar').hide();
					jQTCPC2('#shareMyPageContentBox').hide();					
					jQTCPC2('#submenu-updt-pg').hide();
					jQTCPC2('#submenu-my-profile').hide();
										
				break;
				case "go-social":
					jQTCPC2('#sidebar').hide();
					jQTCPC2('#shareMyPageContentBox').hide();					
					jQTCPC2('#submenu-updt-pg').hide();
					jQTCPC2('#submenu-my-profile').hide();
												
				break;
				
				default:
					jQTCPC2('#cstm-update-pg-nav-link').removeClass('selected');
					jQTCPC2('#cstm-my-profile-link-li').removeClass('selected');
					jQTCPC2('#submenu-updt-pg').hide();
					jQTCPC2('#submenu-my-profile').hide();
					jQTCPC2('#shareMyPageContentBox').hide();
					jQTCPC2('#adadashboardheader').addClass('centerDiv-md');
					jQTCPC2('#adadashboardheader').removeClass('centerDiv');
					jQTCPC2('#personalprogressfloater').addClass('centerDiv-md');
					jQTCPC2('#personalprogressfloater').removeClass('centerDiv');
					jQTCPC2('#personalprogressbar').addClass('centerDiv-md');
					jQTCPC2('#personalprogressbar').removeClass('centerDiv');
					//relabel suggested message label
					var solLbl = jQTCPC2('#email_template_radio_solicit_label').text();
					var solLblRev = solLbl.replace("Solicitation","Ask for Donations");					
					
					if(jQTCPC2('#email_template_radio_solicit_label').hasClass('ui-state-active')){
						jQTCPC2('#email_template_radio_solicit_label').html('<span class="ui-icon ui-icon-triangle-1-s"></span>'+solLblRev);	
					} else {
						jQTCPC2('#email_template_radio_solicit_label').html('<span class="ui-icon ui-icon-triangle-1-e"></span>'+solLblRev);		
					}
							
			}
		} else {
			jQTCPC2('#sidebar').hide();
			jQTCPC2('#shareMyPageContentBox').show();
			jQTCPC2('#adadashboardheader').addClass('centerDiv-md');
			jQTCPC2('#adadashboardheader').removeClass('centerDiv');
			jQTCPC2('#personalprogressfloater').addClass('centerDiv-md');
			jQTCPC2('#personalprogressfloater').removeClass('centerDiv');
			jQTCPC2('#personalprogressbar').addClass('centerDiv-md');
			jQTCPC2('#personalprogressbar').removeClass('centerDiv');
		}
		//constant update text goal copy
		jQTCPC2('#so16goalcopy').text(jQTCPC2('#progress-goal-value').text());
		jQTCPC2('#so16goalcopyteam').text(jQTCPC2('#team-progress-goal-value').text());
		jQTCPC2('#so16pctprogresscopy').text(jQTCPC2('#progress-percent-value').text());
		jQTCPC2('#so16pctprogresscopyteam').text(jQTCPC2('#team-progress-percent-value').text());
		
		//patch 05252017
		jQTCPC2('#adadashboardevtsummary').text(jQTCPC2('#so2016evtdetails').text());
		jQTCPC2('#so16raisedamtcopy').text(jQTCPC2('#progress-amt-raised-value').text());
		jQTCPC2('#so16daysleftcopy').text(jQTCPC2('#progress-days-left-value').text()+' days left');

		jQTCPC2('#so16raisedamtcopyteam').text(jQTCPC2('#team-progress-amt-raised-value').text());
		jQTCPC2('#so16daysleftcopyteam').text(jQTCPC2('#team-progress-days-left-value').text()+' days left');
		
		jQTCPC2('#so16raisedamtcopycompany').text(jQTCPC2('#company-progress-amt-raised-value').text());
		jQTCPC2('#so16daysleftcopycompany').text(jQTCPC2('#company-progress-days-left-value').text()+' days left');
		
    }, 500)
}

function customPopup(){	
	 if (getURLParameter("typop") == "y") {
        jQTCPC2.magnificPopup.open({
            items: {
                src: "#tyRegPop"
            },
            type: "inline",
			closeMarkup:'<button title="%title%" type="button" class="mfp-close">x close</button>'
        });
		var mytotalamt = getURLParameter("totalamt");
		var myrevisedtotalamt = decodeURIComponent(mytotalamt.replace(/\+/g,  " "));
		var mymrkt = getURLParameter("mrkt");
		var myrevisedmrkt = decodeURIComponent(mymrkt.replace(/\+/g,  " "));
		var mydedct = getURLParameter("dedct");
		var myreviseddedct = decodeURIComponent(mydedct.replace(/\+/g,  " "));
		
        jQTCPC2("#valT").text(myrevisedtotalamt);
        jQTCPC2("#valM").text(myrevisedmrkt);
        jQTCPC2("#valD").text(myreviseddedct)
    } else {
        if (/iPhone/i.test(navigator.userAgent)) {
            if (jQTCPC2.cookie("soappvisited") != "y") {
                jQTCPC2.magnificPopup.open({
                    items: {
                        src: "#iphoneipadApp"
                    },
                    type: "inline",
					closeBtnInside:false,
					closeMarkup:'<button title="%title%" type="button" class="mfp-close">x close</button>'
                });
                jQTCPC2.cookie("soappvisited", "y")
            }
        }
		if (/iPad/i.test(navigator.userAgent)) {
            if (jQTCPC2.cookie("soappvisited") != "y") {
                jQTCPC2.magnificPopup.open({
                    items: {
                        src: "#iphoneipadApp"
                    },
                    type: "inline",
					closeBtnInside:false,
					closeMarkup:'<button title="%title%" type="button" class="mfp-close">x close</button>'
                });
                jQTCPC2.cookie("soappvisited", "y")
            }
        }
        if (/Android/i.test(navigator.userAgent)) {
            if (jQTCPC2.cookie("soappvisited") != "y") {
                jQTCPC2.magnificPopup.open({
                    items: {
                        src: "#droidApp"
                    },
                    type: "inline",
					closeBtnInside:false,
					closeMarkup:'<button title="%title%" type="button" class="mfp-close">x close</button>'
                });
                jQTCPC2.cookie("soappvisited", "y")
            }
        }
    }
	
	//recustom team captain message
	//not team member hide the portion of notif
	if(jQTCPC2.trim(jQTCPC2('#isTeamMember').text()) == 'n'){
		jQTCPC2('#isTeamMemberBox').css('display','none');
	}else{
		jQTCPC2('#tcEditMessage').append(jQTCPC2('#captainsMessage'));	
		jQTCPC2('#adanotiftc').click(function(){
			openTCMsg();
		});
	}
}

function closeNotifBar() {
	jQTCPC2('#ADAMsgNotifBar').hide();
}

function openTCMsg(){
	jQTCPC2.magnificPopup.open({
            items: {
                src: "#tcEditMessage"
            },
            type: "inline",
			closeBtnInside:false,
			closeMarkup:'<button title="%title%" type="button" class="mfp-close">x close</button>'
        });
	jQTCPC2('#captainsMessage').show();
}

function getURLParameter(name) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
        );
}
//Get Internet Explorer Version 7 - 11
function getInternetExplorerVersion() {
        var rv = -1; // Return value assumes failure.
        var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            var re2 = new RegExp("MSIE ([10]{1,}[\.10]{0,})");
            if (re.exec(ua) != null) {
                rv = parseFloat(RegExp.$1);
            } else if (re2.exec(ua) != null) {
                rv = parseFloat(RegExp.$1);
            }
        }
        if (isIE11) {
            rv = 11;
        }
        return rv;
}

