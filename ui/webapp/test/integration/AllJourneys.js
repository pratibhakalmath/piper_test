/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"be/wi/ui/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"be/wi/ui/test/integration/pages/Main",
	"be/wi/ui/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "be.wi.ui.view.",
		autoWait: true
	});
});