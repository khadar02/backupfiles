getProcessorLoad();
function getProcessorLoad() {
	try {
		print("Executing computation script for feature: ProcessorLoad");
					output=getOutputTemplate();
					cValue=0;
		for (var i = 0; i < ProcessorLoad.size(); i++) {
			var stats = ProcessorLoad.get(i);

		
			cValue=cValue+((stats.hrProcessorLoad)/ProcessorLoad.size());
			
			output.metricName="ProcessorLoad";
			
			output.componentLabel="ProcessorLoad1minRev";
			
			print("Completed executing computation script for feature: Storage");
			
		}
        output.processorLoad=getRoundedToTwoDecimalPlaces(cValue);
		scriptOutput.add(output);
		return true;
	}
	catch (e) {
			print("failed in ProcessorLoad " + "  " + e.stack);
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
