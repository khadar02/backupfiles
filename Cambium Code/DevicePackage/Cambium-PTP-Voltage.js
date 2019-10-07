getVoltage();
function getVoltage() {
	try {
		print("Executing computation script for feature: PowerSupply");
		for (var i = 0; i < Voltage.size(); i++) {
			var stats = Voltage.get(i);
			output=getOutputTemplate();
			
			output.Voltage=stats.genEquipUnitIduVoltageInput;
			output.metricNameV="Voltage"
			scriptOutput.add(output);
			
			print("Completed executing computation script for feature: Power Suppy");
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