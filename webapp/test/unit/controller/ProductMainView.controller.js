/*global QUnit*/

sap.ui.define([
	"namespace1/project_prod_app/controller/ProductMainView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ProductMainView Controller");

	QUnit.test("I should test the ProductMainView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
