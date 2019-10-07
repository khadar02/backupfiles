getMemory();

function getMemory() {

	try {
		print("Executing computation script for feature: Memory");

			var stats = Memory.get(0);
			
			output = getOutputTemplate();

			var used = stats.sgiMemoryUsed;

			var available = stats.sgiMemoryAvailable; 

			var total = used + available;

			output.usedGB = getRoundedToTwoDecimalPlaces(used /(1024* 1024 * 1024));

			output.availableGB = getRoundedToTwoDecimalPlaces(available /(1024* 1024 * 1024));

			output.totalGB = getRoundedToTwoDecimalPlaces(total /(1024* 1024 * 1024));

			var utilizationpercent = (output.usedGB / output.totalGB) *100;

			output.utilization = getRoundedToTwoDecimalPlaces(utilizationpercent);
			
			output.name= "Memory";		
			
			scriptOutput.add(output);
		
			print("Completed executing computation script Memory");
		return true;
	} catch (e) {
		print("failed in Memory" + "  " + e.stack)
		return false;
	}
}

function getOutputTemplate() {
	var output = {

	};
	return output;
}

function getRoundedToTwoDecimalPlaces(doubleValue) {
	return (new java.lang.Double(java.lang.Math.round(doubleValue * 100))) / (100.0);
}