getSensorTable();

function getSensorTable() {

	try {
		print("Executing computation script for feature: FAN Sensor");
		for (var i = 0; i < SensorTable.size(); i++) {
			var stats = SensorTable.get(i);
			output = getOutputTemplate();
			output.index =String(i)+"";

			output.hpicfSensorNumber = stats.hpicfSensorNumber;

			if (stats.hpicfSensorStatus == "1") {
				output.statusValue = 0;
				output.StatusString = "bad";
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


			if (stats.hpicfSensorDescr.indexOf("fan") != -1 || stats.hpicfSensorDescr.indexOf("Fan") != -1) {

				output.hpicfSensorDescr = stats.hpicfSensorDescr + "_" + i;

				output.label = "Fan";
				
			}

			scriptOutput.add(output);
			output.metricName = "ciscoEnvMonFanState";
			print("Completed executing computation script for feature: FAN Sensor");
			return true;
		}
		
	} catch (e) {
		print("failed in FAN Sensor" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {

		"componentId": "Fan"
	};
	return output;
}