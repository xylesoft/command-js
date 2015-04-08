var TemperatureSensor = require('./src/Receivers/TemperatureSensor/LM35').TemperatureSensor;
var TemperatureRecord = require('./src/Invokers/HandleTemperature.js').HandleTemperature;
var CommandReadTemperatureInCelsius = require('./src/Commands/CommandReadTemperatureInCelsius').CommandReadTemperatureInCelsius;

var temp1 = new TemperatureSensor(
	0.2504 * 5 // volts 
);
var tempCmd = new CommandReadTemperatureInCelsius(temp1, 'CommandReadTemperatureInCelsius-PIN10');
var handler = new TemperatureRecord();


console.log(handler.handle(tempCmd));