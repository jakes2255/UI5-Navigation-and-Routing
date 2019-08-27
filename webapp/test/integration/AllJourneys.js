/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/demo/Z_NavigationRouting/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/demo/Z_NavigationRouting/test/integration/pages/App",
	"com/demo/Z_NavigationRouting/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.demo.Z_NavigationRouting.view.",
		autoWait: true
	});
});