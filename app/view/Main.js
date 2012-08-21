Ext.define("Colophone.view.Main", {
    extend: 'Ext.Panel',

    config: {
        fullscreen: true,
        layout: 'vbox',
        items: [
            {
                xtype:'panel',
                html:'logo',
                flex: 1
            },
            {
                xtype:'panel',
                html:'Scrolly stuff',
                flex: 1
            },
            {
                xtype:'panel',
                html:'Capture and Answer Buttons',
                flex: 1
            }
        ]
    }
});

Ext.create('Colophone.view.Main');