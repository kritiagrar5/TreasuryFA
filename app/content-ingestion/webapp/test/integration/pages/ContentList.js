sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.scb.treasury.contentingestionfa',
            componentId: 'ContentList',
            contextPath: '/Content'
        },
        CustomPageDefinitions
    );
});