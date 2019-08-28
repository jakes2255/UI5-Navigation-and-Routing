sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"com/demo/Z_NavigationRouting/model/models"
], function (UIComponent, JSONModel, Device, models) {
	"use strict";

	return UIComponent.extend("com.demo.Z_NavigationRouting.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			var oModel,
				oProductsModel;
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			oModel = new JSONModel();
			this.setModel(oModel);
			
			// set products demo model on this sample
			oProductsModel = new JSONModel(
				"https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json");
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, 'products');

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});