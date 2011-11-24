/*
 * This file has all the UI for the queen controller.
 * The UI is all sencha-touch 2.0.  See http://docs.sencha.com/touch/2-0/
 * It also opens a pusher channel to listen for song info
 * This will run on phones, desktops, or embedded in the drone.
 * The UI is slightly different when running in the drone.
 */


// some globals needed for UI interaction

var infoPane; // global for interfacing with pusher
var droneTitle;
var tabPanel;


var ActiveDrone = {
    current: false,
    activate: function (drone) {
        ActiveDrone.current = drone;
        tabPanel.setActiveItem(1);  // display main UI control
        droneTitle.setHtml(ActiveDrone.name());
        clearSongInfo();

        //TODO: there's a race condition here...
        channelSubscribe();
        sendPing();
    },
    name: function() {
        if( ActiveDrone.current ) {
            return ActiveDrone.current.get('location');
        } else {
            return "--no drone selected--";
        }
    },
    channel: function() {
        if( ActiveDrone.current ) {
            return ActiveDrone.current.get('channel');
        } else {
            return "no-drone-channel";
        }
    }
};



//
// Create the UI
//

Ext.application({
    name: 'Tutor App',
    launch: onLaunch
});


function onLaunch() {
    var buttonHandler = function(btn, evt) {
        var command = btn.message;
        //sendCommand( {event: 'button', data: command} );
    };
    
    
    var loginPandoraHandler = function(btn, evt) {
    };


    //
    // drone picker UI
    //

    Ext.regModel('Drone', {
        fields: ['username','channel','location']
    });

    var droneStore = Ext.create('Ext.data.Store',{
        model: 'Drone',
        proxy: {
            type: 'jsonp',
            url: '/listdrones',
            reader: {
                type: 'json',
                root: 'drones'
            }
        },
        autoLoad: true
    });

    var dronePicker = Ext.create("Ext.Container", {
        title: 'Pick Drone',
        id: 'pickDrone',
        xtype: 'form',
        layout: 'vbox',
        items: [{
            html: 'Which location to control?',
            flex: 0.1 //TODO: dock this instead
        },{
            xtype: 'list',
            flex: 1,
            model: 'Drone',
            store: droneStore,
            onItemDisclosure: function(record, btn, index) {
                ActiveDrone.activate(record);
                sendPing();
            },
            itemTpl: '<div class="contact">{location} ({username})</div>'
        }]
    });


    //
    // Main audio controls
    //

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


    var playControls = Ext.create('Ext.Container',{
        layout: 'hbox',
        items: [{
            html: ':)',
            message: 'like'
        },{
            html: 'play',
            message: 'play'
        },{
            html: 'stop',
            message: 'stop'
        },{
            html: ':(',
            message: 'dislike'
        }],
        defaults: {
            xtype: 'button',
            flex: 1,
            handler: buttonHandler
        }
    });

    var volumeSlider = Ext.create('Ext.Panel',{
        items: [ {
                xtype: 'sliderfield',
                value: 50,
                minValue: 0,
                maxValue: 100,
                name : 'volume',
                label: 'Vol',
                listeners: {
                    change: function(sld, evt, val) {
                        //sendCommand( {event:'volume', data: val} );
                    }
                }
            }]
    });

    // infoPane for the currently playing song
    infoPane = Ext.create('Ext.DataView', {
        store: {
            fields: ['artist', 'album', 'song', 'albumart_url', 'elapsed_time', 'remaining_time'],
            data: [ ]
        },

        itemTpl: '<div class="songInfo"><table><tr><td><img class="albumArt" src="{albumart_url}"/></td><td><h2>{artist}</h2><h3>{album}</h3><h4>{song}</h4></td></tr></table></div>'
    });

    droneTitle = Ext.create('Ext.Panel',{
        html: ActiveDrone.name(),
        flex: 0.6
    });

    // the main audio control container
    var home = Ext.create("Ext.Container", {
        title: 'Music',
        layout: 'vbox',
        defaults: {
            flex: 1
        },
        items: [
            droneTitle,
            searchForm,
            infoPane,
            playControls,
            volumeSlider
        ]
    });


    //
    // The configuration screen
    //
    var config_items = [];

    // TutorHive login
		config_items.push( {
				xtype: 'panel',
				html: 'Enter your username and the location of this drone!',
					height: "45",
					width: "95%"
		} );
  
    local_username = ""; 
    local_drone_location = ""; 
    config_items.push( {
                xtype: 'emailfield',
                name : 'username',
                label: 'User:',
                height: "38",
                width: "95%",
                value: local_username 
            } );
    config_items.push( {
                xtype: 'passwordfield',
                name : 'password',
                label: 'Pass:',
                height: 38,
                width: "95%"
            } );
  
    
    // Only show dronename field if this is running on a
    // drone and not a queen
		config_items.push( {
							xtype: 'searchfield',
							name : 'droneName',
							label: 'Location (drone name):',
							height: 38,
							width: "95%",
							value: local_drone_location
						} );
    config_items.push( {
                xtype: 'button',
                name : 'login_submit',
                html : 'Login',
                height: 45,
                width: "95%",  
                handler: function(btn, evt) {
                    var form = configForm.getValues();
                    //Tutor.submitDroneLogin(form.username, form.droneName);
                }
            } );

    // dont show this stuff for now
//        // Pandora login details
//        config_items.push( {
//                    xtype: 'panel',
//                    dock: 'top',
//                    flex: 0.4,
//                    html: 'Pandora Radio',
//                } );
//        config_items.push( {
//                    xtype: 'emailfield',
//                    name : 'pandora_username',
//                    label: 'User:'
//                } );
//        config_items.push( {
//                    xtype: 'passwordfield',
//                    name: 'pandora_password',
//                    label: 'Pass:'
//                } );
//        config_items.push( {
//                    xtype: 'button',
//                    name : 'pandora_login_submit',
//                    html : 'Update',
//                    flex: 1,
//                    handler: loginPandoraHandler
//                } );

    var configForm = Ext.create("Ext.form.Panel", {
        title: 'Config',
        id: 'config',
        xtype: 'form',
        layout: 'vbox',
        defaults: {
        },
        items: config_items
    });

    var tabList = [dronePicker, home, configForm];
    tabPanel = Ext.create("Ext.TabPanel", {
        fullscreen: true,
        tabBarPosition: 'top', // bottom wasn't working with 2.0.0-pr1
    
        defaults: {
            styleHtmlContent: false 
        },
    
        items: tabList 
    });

}

