sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/wt/controller/HelloDialog",
	"sap/ui/Device"],
	function(UIComponent, JSONModel, HelloDialog, Device) {
		"use strict";
		return UIComponent.extend("sap.ui.demo.wt.Component", {
			metadata : {
				manifest : "json"
			},
			init : function(){
				UIComponent.prototype.init.apply(this, arguments);
				
				var oData = {
					recipient : {
						name : "World"
					}
				};
				var oModel = new JSONModel(oData);
				this.setModel(oModel);
				// set device model
				var oDeviceModel = new JSONModel(Device);
				oDeviceModel.setDefaultBindingMode("OneWay");
				this.setModel(oDeviceModel, "device");
				this.helloDialog =new HelloDialog();
				// create the views based on the url/hash
				this.getRouter().initialize();
		
			}
		});
	});