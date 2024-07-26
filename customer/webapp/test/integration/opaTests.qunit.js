sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customer/test/integration/FirstJourney',
		'customer/test/integration/pages/CustomerList',
		'customer/test/integration/pages/CustomerObjectPage',
		'customer/test/integration/pages/OrderObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerList, CustomerObjectPage, OrderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customer') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerList: CustomerList,
					onTheCustomerObjectPage: CustomerObjectPage,
					onTheOrderObjectPage: OrderObjectPage
                }
            },
            opaJourney.run
        );
    }
);