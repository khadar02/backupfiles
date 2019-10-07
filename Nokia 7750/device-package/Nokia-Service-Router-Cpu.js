getCPU();

function getCPU() {
	try {
		print("Executing computation script for feature: CPU");

		var stats = CPU.get(0);

		output = getOutputTemplate();

		output.utilization = stats.sgiCpuUsage;
		output.name = "CPU";

		scriptOutput.add(output);
		return true;
	} catch (e) {
		print("failed in CPU" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {
		"component": "CPU"

	};
	return output;
}

function getRoundedToTwoDecimalPlaces(doubleValue) {
	return (new java.lang.Double(java.lang.Math.round(doubleValue * 100))) / (100.0);
}