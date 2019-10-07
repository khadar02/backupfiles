getDisk();
function getDisk() {
	try {
		print("Executing computation script for feature: Disk");
		for (var i = 0; i < Disk.size(); i++) {
			var stats = Disk.get(i);
			output=getOutputTemplate();
			output.index=String(i);

			if (stats.hrStorageDescr.indexOf("system disk") !=-1)		
			{	
				output.Descr=stats.hrStorageDescr;
			
				//1024*1024=1048576
				
				output.totalSpaceGB=getRoundedToTwoDecimalPlaces((stats.hrStorageSize)/1048576);
				
				output.usedSpaceGB=getRoundedToTwoDecimalPlaces((stats.hrStorageUsed)/1048576);
				
				output.freeSpaceGB=getRoundedToTwoDecimalPlaces((stats.hrStorageSize - stats.hrStorageUsed)/1048576);
				
				output.utilization=getRoundedToTwoDecimalPlaces(((stats.hrStorageUsed)/(stats.hrStorageSize))*100);
				
				output.metricName="ciscoFlashPartitionUtilization";
				
				output.name = "Disk";
						
			
			}

			print("Completed executing computation script for feature: Storage");
			
			
		}
		scriptOutput.add(output);
		return true;
	}
	catch (e) {
			print("failed in Storage " + "  " + e.stack);
			return false;
		}
}


function getRoundedToTwoDecimalPlaces(doubleValue) {
   return (Math.round(doubleValue * 100))/100.0;
}


function getOutputTemplate () {
	var output = {
		"componentId" : "Disk-Partition",
		"metricName" : "ciscoFlashPartitionUtilization",
		
	};
	return output;
}
