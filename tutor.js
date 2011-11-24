/*
 * This file has all the UI for the queen controller.
 * The UI is all sencha-touch 2.0.  See http://docs.sencha.com/touch/2-0/
 * It also opens a pusher channel to listen for song info
 * This will run on phones, desktops, or embedded in the drone.
 * The UI is slightly different when running in the drone.
 */


// some globals needed for UI interaction

var infoPane; // global for interfacing with pusher
var tabPanel;



//
// Create the UI
//

Ext.application({
    name: 'Tutor App',
    launch: onLaunch
});


function onLaunch() {

    
		var droneTitle = Ext.create('Ext.Panel',{
        html: "Title",
        flex: 0.6
    });
    
    var searchForm = Ext.create('Ext.form.FormPanel',{
        items: [
            {
                xtype: 'searchfield',
                name : 'musicquery',
                label: 'New music:',
                listeners: {
                    change: function(fld, evt) {
                        var query = fld.getValue();
                        console.log("Querying for "+query);
                        //sendCommand( {event: 'query', data: query} );
                    }
                }
            }
        ]
    });

    // the main audio control container
    var home = Ext.create("Ext.Container", {
        fullscreen: true,
				title: 'Music',
        layout: 'vbox',
        defaults: {
            flex: 1
        },
        items: [
            droneTitle,
            searchForm,
        ]
    });



//    var tabList = [dronePicker, home, configForm];
//    tabPanel = Ext.create("Ext.TabPanel", {
//        fullscreen: true,
//        tabBarPosition: 'top', // bottom wasn't working with 2.0.0-pr1
//    
//        defaults: {
//            styleHtmlContent: false 
//        },
//    
//        items: tabList 
//    });

}

