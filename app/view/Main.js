Ext.define("Colophone.view.Main", {
    extend: 'Ext.Panel',

    config: {
        fullscreen: true,
        layout: 'vbox',
        items: [
            {
                xtype:'panel',
                html:'logo',
                style: 'background:#CCC;',
                docked: 'top',
                //flex: 1
            },
            {
                xtype:'panel',
                html:'Scrolly stuff',
                style:'background:#FF0000;',
                flex: 1
            },
            {
                xtype:'panel',
                html:'Capture and Answer Buttons',
                style: 'background:#FFF000;',
                docked:'bottom',
                //flex: 1
            }
        ]
    }
});

Ext.create('Colophone.view.Main');