Ext.application({
    name: 'Colophone',
    //models: ['Questions','Answers','User'],
    views: ['Main'],

    launch: function() {
    	Ext.create('Colophone.view.Main');
    }
});


