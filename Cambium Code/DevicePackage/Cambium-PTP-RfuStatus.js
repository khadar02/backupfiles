getRfuStatus();
function getRfuStatus() {
	try {
		print("Executing computation script for feature: RFU Status");
		for (var i = 0; i < RfuStatus.size(); i++) {
			var stats = RfuStatus.get(i);
			output=getOutputTemplate();
			output.index=String(i);

			output.RfuRxLevel=stats.genEquipRfuStatusRxLevel;
			output.RfuTxLevel=stats.genEquipRfuStatusTxLevel;
			
			output.metricNameRx="RfuRxLevel";
		
			
			//frequency is in MHz
			output.RFUTxMaxFreq=((stats.genEquipRfuStatusRFUMaxTxFreq)/1000000);
	

			output.RFUTxMinFreq=((stats.genEquipRfuStatusRFUMinTxFreq)/1000000);
		
			
			output.RFURxMaxFreq=((stats.genEquipRfuStatusRFUMaxRxFreq)/1000000);
			
			
			output.RFURxMinFreq=((stats.genEquipRfuStatusRFUMinRxFreq)/1000000);
	
			
			//BandWidth is in MHz
			output.RfuMinBW=((stats.genEquipRfuStatusMinBW)/1000);
			output.RfuMaxBW=((stats.genEquipRfuStatusMaxBW)/1000);
			
			if (stats.genEquipRfuStatusCommunication=="0")
			{
				output.RfuCommunication="0";
			}
			else
			{
				output.RfuCommunication="100";
			}
			output.metricNameRfuS="RfuStatusCommunication";	
			
			output.component="RadioFrequencyUnit";
			
			scriptOutput.add(output);
			
			print("Completed executing computation script for feature: RFU Status");
			return true;
		}
	}
	catch (e) {
			print("failed in RFU Status" + "  " + e.stack);
			return false;
		}
}

function getOutputTemplate () {
	var output = {
		"index":0
	};
	return output;
}