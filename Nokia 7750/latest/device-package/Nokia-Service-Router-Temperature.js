gettemperature();

function gettemperature() {
	try {
		print("Executing computation script for feature: Temperature");
		for (var i = 0; i < temperature.size(); i++) {
			var stats = temperature.get(i);
			
			output = getOutputTemplate();

			if (stats.tmnxHwTempSensor == 1 && stats.tmnxHwTemperature != -1) 
			{
				output.hwname = stats.tmnxHwName;

				output.label=  output.hwname;

				output.temperatureCelsius = stats.tmnxHwTemperature;

				output.index = String(i);
				
				output.threshold = stats.tmnxHwTempThreshold;

				output.componentId = "Sensor";

				output.metricName = "ciscoEnvMonTemperatureState";

			    scriptOutput.add(output);	
			} 
		
			
			print("Completed executing computation script for feature: Temperature");
		}
		
		return true;
	} catch (e) {
		print("failed in Temperature" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {
		
		
	};
	return output;
}
