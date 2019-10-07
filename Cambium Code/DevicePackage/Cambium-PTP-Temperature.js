getTemperature();
function getTemperature() {
	try {
		print("Executing computation script for feature: Temperature Script");
		for (var i = 0; i < Temperature.size(); i++) {
			var stats = Temperature.get(i);
			output=getOutputTemplate();
			
			output.Temperature=stats.genEquipUnitIduTemperature;
			output.metricNameT="Temperature";
			scriptOutput.add(output);
			
			print("Completed executing computation script for feature: Temperature Script");
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