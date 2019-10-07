function nokia_vrtr_tx_packets(data) {
  

  // Only below three lines values will change according to your metric parameter
  
  var attribute = "vRtrIfTxPkts";
  var current_value = data.vRtrIfTxPkts;

  var metricValue = calculate_diff(data, data.dataPointPreviousEntry, attribute, current_value);
  
  var attributes = new java.util.HashMap();
  attributes.put("vRtrIfRxBytes", data.vRtrIfRxBytes);
  attributes.put("vRtrIfTxBytes", data.vRtrIfTxBytes);
  attributes.put("vRtrIfRxPkts", data.vRtrIfRxPkts);
   attributes.put("vRtrIfTxPkts", data.vRtrIfTxPkts);   
  data.dataPointPreviousEntry.setAttributes(attributes);
  data.dataPointPreviousEntry.setAssetId(data.assetId);
  data.dataPointPreviousEntry.setLastCollectionTime(java.lang.System.currentTimeMillis() * 1000);

 // data.dataPointPreviousEntry.setComponentIdentifier(data.componentId);

   // print("Printed from function nokia_vrtr_tx_packets");

    // var pv = current_value -metricValue;
    // print("cureent value", current_value);
    // print ("Metricvalue", metricValue)
    // print ("previous", pv)
  
  return metricValue;
}

function calculate_diff(data, dataPointPreviousEntry, attribute, current_value) {

  var dontSave = new java.lang.Double(-1000000002.00);

  var currentTime = java.lang.System.currentTimeMillis() * 1000;
  var lastCollectedTime = dataPointPreviousEntry.getLastCollectionTime();
  var diff = currentTime - lastCollectedTime;
  
  var attributes = data.dataPointPreviousEntry.getAttributes();
  if(attributes == null || attributes.size() == 0)
	  return dontSave;

  var pollInMicro =  data.pollFrequencySeconds * 1000000;
  var spare = pollInMicro + (0.5 * pollInMicro);
  if(diff > spare)
     return dontSave;
  
  var previous_value = attributes.get(attribute);
  if(previous_value == null || previous_value == undefined)
	  return dontSave;

  var metricValue = (current_value - previous_value);
 
  data.scriptOutputs.put("usage", getRoundedToTwoDecimalPlaces(metricValue));
  return getRoundedToTwoDecimalPlaces(metricValue);
  
}

function getRoundedToTwoDecimalPlaces(doubleValue) {
    return (new java.lang.Double(java.lang.Math.round(doubleValue * 100)))/(100.0);
}



