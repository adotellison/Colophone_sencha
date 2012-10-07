Ext.define("Colophone.view.Main", {
    extend: 'Ext.Panel',

    config: {
        fullscreen: true,
        layout: 'vbox',
        items: [
            {
                xtype:'panel',
                html:'logo',
                cls: 'header',
                docked: 'top',
                //flex: 1
            },
            {
                xtype:'panel',
                html:'Scrolly stuff',
                cls: 'content',
                style:'background:#FF0000;',
                flex: 1
            },
            {
                xtype:'panel',
                style: 'background:#FFF000;',
                cls: 'footer',
                docked:'bottom',
                layout:'hbox',
                items: [
                    {
                        xtype:'panel',
                        html:'Capture',
                        flex: 1
                    },
                    {
                        xtype:'panel',
                        html:'Answer',
                        flex: 1
                    }
                ]
                //flex: 1
            }
        ]
    }
});

Ext.create('Colophone.view.Main');