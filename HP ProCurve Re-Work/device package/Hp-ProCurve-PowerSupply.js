getPowerSupply();

function getPowerSupply() {

	try {
		print("Executing computation script for feature: SensorTable Power Supply");
		for (var i = 0; i < PowerSupply.size(); i++) {
			var stats = PowerSupply.get(i);
			output = getOutputTemplate();
			output.index = String(i)+"";
			output.hpicfSensorNumber = stats.hpicfSensorNumber;

			if (stats.hpicfSensorStatus == "1") {
				output.statusValue = 0;
				output.StatusString = "Bad";
			} else if (stats.hpicfSensorStatus == "2") {
				output.statusValue = 0;
				output.StatusString = "bad";
			} else if (stats.hpicfSensorStatus == "3") {
				output.statusValue = 0;
				output.StatusString = "bad";
			} else if (stats.hpicfSensorStatus == "4") {
				output.statusValue = 100;
				output.StatusString = "Good";
			} else {
				output.statusValue = 0;
				output.StatusString = "Unknown";
			}

			if (stats.hpicfSensorDescr.indexOf("Power") != -1) {


				output.label = "PowerSupply";
				scriptOutput.add(output);
			}

			print("Completed executing computation script for feature: SensorTable PowerSupply");
		}
		return true;
	} catch (e) {
		print("failed in SensorTable Power Supply" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {

		"componentId": "PowerSupply",
		"metricName": "ciscoEnvMonSupplyState",

	};
	return output;
}