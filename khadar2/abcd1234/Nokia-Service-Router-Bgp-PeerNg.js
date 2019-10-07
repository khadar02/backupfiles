getpeer();

function getpeer() {
	try {
		print("Executing computation script for feature: BgpPeerNg");
		for (var i = 0; i < bgppeerng.size(); i++) {
			var stats = bgppeerng.get(i);
			
			output = getOutputTemplate();

			output.index = String(i); 
			
			if (stats.tBgpPeerNgConnState == 6) {
				output.connectionstate= 100;
				output.connectionString = "established";
			} 
			else if (stats.tBgpPeerNgConnState == 2) 
			{
				output.connectionstate = 0;
				output.connectionString = "connect";
			}
			else if (stats.tBgpPeerNgConnState == 3) 
			{
				output.connectionstate = 0;
				output.connectionString = "active";
			}
			else if (stats.tBgpPeerNgConnState == 4) 
			{
				output.connectionstate = 0;
				output.connectionString = "opensent";
			}
			else if (stats.tBgpPeerNgConnState == 5)
			{
				output.connectionstate = 0;
				output.connectionString = "openconfirm";
			}
			else
			{
				output.connectionstate = 0;
				output.connectionString = "idle";
			}



			
			if (stats.tBgpPeerNgPeerType == 2) 
			{				
				output.PeerType = "internal";
			}
			else if (stats.tBgpPeerNgPeerType == 3)
			{
				output.PeerType = "external";
			}
			else
			{
				output.PeerType = "noType";
			}

			output.localas4byte = stats.tBgpPeerNgLocalAS4Byte;

			output.peeras4byte = stats.tBgpPeerNgPeerAS4Byte;
			
			output.description = stats.tBgpPeerNgDescription;
			
			if (stats.tBgpPeerNgDescription == "")
			{
				
				output.name = "BgppeerNg" + " - " + output.index;
			}
			else
			{
				output.name = stats.tBgpPeerNgDescription;
			}
			
			//output.name= "BgpPeerNg" + " - " + output.index;
			
			output.metricName = "bgppeerng";
			
			output.componentId = "BgpPeerNg";

			scriptOutput.add(output);

			print("Completed executing computation script for feature: BgpPeerNg");
		}
		return true;
	} catch (e) {
		print("failed in BgpPeerNg" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {

	};
	return output;
}
