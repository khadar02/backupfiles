getRemoteRadioStatus();
function getRemoteRadioStatus() {
	try {
		print("Executing computation script for feature: Remote Radio Status");
		for (var i = 0; i < RemoteRadioStatus.size(); i++) {
			var stats = RemoteRadioStatus.get(i);
			output=getOutputTemplate();
			
			//remote radio maximum Rx/Tx level (in dBm)
			output.RemoteRxLevel=stats.genEquipRemoteRadioRemoteRxLevel;
			output.metricNameRRxL="RemoteRxLevel";
			
			output.RemoteTxLevel=stats.genEquipRemoteRadioRemoteForceMaxTxLevel;
			
			
			//frequency is in MHz
			output.RemoteTxFreq=((stats.genEquipRemoteRadioRemoteTxFreq)/1000000);
		
			
			output.RemoteRxFreq=((stats.genEquipRemoteRadioRemoteRxFreq)/1000000);
	
			if (stats.genEquipRemoteRadioRemoteCommunication=="0")
			{
				output.RemoteRadioCommunication="0";
			}
			else
			{
				output.RemoteRadioCommunication="100";
			}
			output.metricNameRRCS="RemoteRadioStatusCommunication";	
			
			output.component="RemoteRadio"
			scriptOutput.add(output);
			
			print("Completed executing computation script for feature: Remote Radio Status");
			return true;
		}
	}
	catch (e) {
			print("failed in Remote Radio Status" + "  " + e.stack);
			return false;
		}
}

function getOutputTemplate () {
	var output = {
	};
	return output;
}