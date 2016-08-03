sap.ui.define([
	"sap/ui/base/Object"],
	function(Object){
		"use-strict"; 
		return Object.extend("sap.ui.demo.wt.controller.HelloDialog", {
			_getDialog  : function() {
				if(!this._oDialog){
					this._oDialog = sap.ui.xmlfragment("sap.ui.demo.wt.view.HelloDialog", this);
				}
				return this._oDialog;
			},
			open : function(oView){
				var oDialog = this._getDialog();
				oView.addDependent(oDialog);
				oDialog.open();
			},
			onCloseDialog : function(){
				this._getDialog().close();
			}
		});
	});