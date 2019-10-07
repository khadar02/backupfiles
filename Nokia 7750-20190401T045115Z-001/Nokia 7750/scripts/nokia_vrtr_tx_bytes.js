function nokia_vrtr_tx_bytes(data) {
  

  // Only below three lines values will change according to your metric parameter
  
  var attribute = "vRtrIfTxBytes";
  var current_value = data.vRtrIfTxBytes;



  var metricValue = calculate_diff(data, data.dataPointPreviousEntry, attribute, current_value);
	print("=======================================");
	if(data.dataPointPreviousEntry.getAttributes() != null)
    {
        print("dataPointPreviousEntry is vRtrIfTxBytes:" + data.dataPointPreviousEntry.getAttributes().get("vRtrIfTxBytes"));
        print("dataPointPreviousEntry is vRtrIfRxBytes:" + data.dataPointPreviousEntry.getAttributes().get("vRtrIfRxBytes"));
		print("dataPointPreviousEntry is vRtrIfRxPkts:" + data.dataPointPreviousEntry.getAttributes().get("vRtrIfRxPkts"));
        print("dataPointPreviousEntry is vRtrIfTxPkts:" + data.dataPointPreviousEntry.getAttributes().get("vRtrIfTxPkts"));
    } else 
	{
          print("dataPointPreviousEntry is null.");
	}    
  
  var attributes = new java.util.HashMap();
  attributes.put("vRtrIfTxBytes", data.vRtrIfTxBytes);
  attributes.put("vRtrIfRxBytes", data.vRtrIfRxBytes);
  attributes.put("vRtrIfRxPkts", data.vRtrIfRxPkts);
  attributes.put("vRtrIfTxPkts", data.vRtrIfTxPkts);  
  data.dataPointPreviousEntry.setAttributes(attributes);
  data.dataPointPreviousEntry.setAssetId(data.assetId);
  
  
  data.dataPointPreviousEntry.setLastCollectionTime(java.lang.System.currentTimeMillis() * 1000);

 // data.dataPointPreviousEntry.setComponentIdentifier(data.componentId);
    print("Printed from function nokia_vrtr_tx_bytes");
	
	
	print("-------------------------------------------");
	print("data", data);
    var pv = current_value - metricValue;
    print("curent value", current_value);
    print ("Metricvalue", metricValue);
    print ("previous", pv);
	print("data dataPointPreviousEntry", data.dataPointPreviousEntry)
	print("==========================================");
  
  return metricValue;
}

function calculate_diff(data, dataPointPreviousEntry, attribute, current_value) {

  var dontSave = new java.lang.Double(-1000000002.00);

  var currentTime = java.lang.System.currentTimeMillis() * 1000;
  var lastCollectedTime = dataPointPreviousEntry.getLastCollectionTime();
  var diff = currentTime - lastCollectedTime;
  
  var attributes = data.dataPointPreviousEntry.getAttributes();
  if(attributes == null || attributes.size() == 0)
	print ("attribute is null");
	return dontSave;

  var pollInMicro =  data.pollFrequencySeconds * 1000000;
  var spare = pollInMicro + (0.5 * pollInMicro);
  if(diff > spare)
	  print ("from diff > spare");
     return dontSave;
  
  var previous_value = attributes.get(attribute);
  if(previous_value == null || previous_value == undefined)
	print ("previous value is null"); 
	return dontSave;

  var metricValue = (current_value - previous_value);
     
 
  data.scriptOutputs.put("usage", getRoundedToTwoDecimalPlaces(metricValue));
  print("usage", usage);
  return getRoundedToTwoDecimalPlaces(metricValue);
  
}

function getRoundedToTwoDecimalPlaces(doubleValue) {
    return (new java.lang.Double(java.lang.Math.round(doubleValue * 100)))/(100.0);
}
