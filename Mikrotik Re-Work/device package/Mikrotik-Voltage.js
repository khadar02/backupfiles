getVoltage();
function getVoltage() {
	try {
		print("Executing computation script for feature: Input Voltage");
		for (var i = 0; i < Voltage.size(); i++) {
			var stats = Voltage.get(i);
			output=getOutputTemplate();
			
			output.status=stats.inputVoltage;
			
			output.component="Input Voltage";
			
			output.metricName="Voltage";
			
			
			scriptOutput.add(output);
			
			print("Completed executing computation script for feature: Input Voltage");
			
		}
		return true;
	}
	catch (e) {
			print("failed in Input Voltage" + "  " + e.stack);
			return false;
		}
}

function getOutputTemplate () {
	var output = {
	};
	return output;
}
