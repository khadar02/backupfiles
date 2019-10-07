getFan();
function getFan() {
	try {
		print("Executing computation script for feature: Pan Status");
		for (var i = 0; i < Fan.size(); i++) {
			var stats = Fan.get(i);
			output1=getOutputTemplate();
			
			output1.metricName="ciscoEnvMonFanState";
			output1.index="0";
			output1.fan=stats.fan1;
			output1.componentId="Fan";
			output1.label="Fan 1";
			
			if ("fan1" in stats | stats.fan1==null)
			{
				output1.statusValue=0;
				output1.fanStatusString="Failed";
			}	
			else
			{
				output1.statusValue=100;
				output1.fanStatusString="Good";
			}
			
			scriptOutput.add(output1);
			
			output2=getOutputTemplate();
			
			output2.metricName="ciscoEnvMonFanState";
			
			output2.index="1";
			output2.fan=stats.fan1;
			output2.componentId="Fan";
			output2.label="Fan 2";
			
			if ("fan2" in stats | stats.fan2==null)
			{
				output2.statusValue=0;
				output.fanStatusString="Failed";
			}	
			else
			{
				output2.statusValue=100;
				output2.fanStatusString="Good";
			}
			//output.fan2=stats.fan2;
			
			
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
