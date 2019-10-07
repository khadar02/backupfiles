getCPU();

function getCPU() {
	try {
		print("Executing computation script for feature: CPU");

		var stats = CPU.get(0);
		output = getOutputTemplate();
		
		output.utilization = stats.sgiCpuUsage
		
		output.name= "CPU";
		output.metricName = "CPU"

		scriptOutput.add(output);
		print("Completed executing computation script for feature: CPU");

		return true;
	} catch (e) {
		print("failed in CPU" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {
		
	};
	return output;
}