getDisk();

function getDisk() {
	try {
		print("Executing computation script for feature: Disk");
		for (var i = 0; i < Disk.size(); i++) {
			var stats = Disk.get(i);
			
			output = getOutputTemplate();

			output.index = String(i); 
			
						
			var used = ((stats.tmnxCpmFlashUsed)*512 );

			var total = ((stats.tmnxCpmFlashCapacity)* 512);

			var available = total - used;

			
			output.totalMB = getRoundedToTwoDecimalPlaces((total) /(1024* 1024));
			
			output.totalSpaceGB = getRoundedToTwoDecimalPlaces((total) /(1024* 1024 * 1024));
			
			output.usedSpaceGB = getRoundedToTwoDecimalPlaces((used) /(1024* 1024 * 1024));
			
			output.freeSpaceGB = getRoundedToTwoDecimalPlaces((available) /(1024* 1024 * 1024));

			var utilizationpercent = (output.usedSpaceGB / output.totalSpaceGB) *100;

			output.utilization = getRoundedToTwoDecimalPlaces(utilizationpercent);

			

			output.name= "Disk" + "-" +output.index;

			scriptOutput.add(output);

			print("Completed executing computation script for feature: Disk");
		}
		return true;
	} catch (e) {
		print("failed in Disk" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {
		"componentId" : "Disk-Partition",
		"metricName" : "ciscoFlashPartitionUtilization",
	};
	return output;
}

function getRoundedToTwoDecimalPlaces(doubleValue) {
	return (new java.lang.Double(java.lang.Math.round(doubleValue * 100))) / (100.0);
}
