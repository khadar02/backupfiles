getMemory();
function getMemory() {
        try {
                print("Executing computation script for feature: Disk");
                for (var i = 0; i < Memory.size(); i++) {
					var stats = Memory.get(i);
					output=getOutputTemplate();
					output.index=String(i);

					if (stats.hrStorageDescr.indexOf("main memory") !=-1)
					{
						output.Descr=stats.hrStorageDescr;
						
						//1024*1024=1048576
						
						output.totalMemory=getRoundedToTwoDecimalPlaces((stats.hrStorageSize)/1048576);
						
						output.memoryAllocated=getRoundedToTwoDecimalPlaces((stats.hrStorageUsed)/1048576);
						
						output.utilization=getRoundedToTwoDecimalPlaces(((stats.hrStorageUsed)/(stats.hrStorageSize))*100);
						
						
						
						output.name= "Memory";
						
						
					}
					
					scriptOutput.add(output);
										
					print("Completed executing computation script for feature: Storage");

                }
				
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
        };
        return output;
}
