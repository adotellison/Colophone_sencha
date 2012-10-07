Ext.define("Colophone.view.Main", {
    extend: 'Ext.Panel',

    config: {
        fullscreen: true,
        layout: 'vbox',
        items: [
            {
                xtype:'toolbar',
                cls: 'header',
                docked: 'top',
                //flex: 1
                items: [
                    {
                        xtype:'panel',
                        html:'CP',
                        cls: 'cp_logo',
                        centered : true,
                        flex: 1
                    }
                ]
            },
            {
                xtype:'panel',
                html:'Scrolly stuff',
                cls: 'content',
                flex: 1
            },
            {
                xtype:'panel',
                cls: 'footer',
                docked:'bottom',
                layout:'hbox',
                items: [
                    {   
                        xtype:'button',
                        iconCls: 'action',
                        title: 'Capture',
                        cls:'footer_button',
                        flex: 1
                    },
                    {
                        xtype:'button',
                        iconCls: 'home',
                        title: 'Answer',
                        cls:'footer_button',
                        view:'Answer',
                        flex: 1
                    }
                ]
                //flex: 1
            }
        ]
    }
});

Ext.create('Colophone.view.Main');