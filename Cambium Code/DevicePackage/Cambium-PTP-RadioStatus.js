getRadioStatus();
function getRadioStatus() {
	try {
		print("Executing computation script for feature: Radio Status");
		for (var i = 0; i < RadioStatus.size(); i++) {
			var stats = RadioStatus.get(i);
			output=getOutputTemplate();
			
			output.RadioMSE=((stats.genEquipRadioStatusMSE)/100);
			output.metricNameMSE="RadioMSEError";
			scriptOutput.add(output);
			
			print("Completed executing computation script for feature: Radio Status");
			return true;
		}
	}
	catch (e) {
			print("failed in Radio Status" + "  " + e.stack);
			return false;
		}
}

function getOutputTemplate () {
	var output = {
	};
	return output;
}