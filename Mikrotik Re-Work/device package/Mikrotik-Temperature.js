getTemperature();
function getTemperature() {
	try {
		print("Executing computation script for feature: Pan Status");
		for (var i = 0; i < Temperature.size(); i++) {
			var stats = Temperature.get(i);
			output1=getOutputTemplate();
			
			output1.metricName="ciscoEnvMonTemperatureState";
			output1.index="0";
			
			output1.componentId="Sensor";
			output1.label="Device";
			
			output1.temperatureCelsius=(stats.temp)/10;
			
			
			
			scriptOutput.add(output1);
			
			output2=getOutputTemplate();
			
			output2.metricName="ciscoEnvMonTemperatureState";
			
			output2.index="1";
			
			output2.componentId="Sensor";
			output2.label="Processor";
			
			output2.temperatureCelsius=(stats.pstemp)/10;
			
			
			scriptOutput.add(output2);
			
			print("Completed executing computation script for feature: Fan Status");
			
		}
		return true;
	}
	catch (e) {
			print("failed in Fan Status" + "  " + e.stack);
			return false;
		}
}

function getOutputTemplate () {
	var output = {
	};
	return output;
}
