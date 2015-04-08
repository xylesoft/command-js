var CommandReadTemperatureInCelsius = require('./Command').Command;

CommandReadTemperatureInCelsius.prototype.execute = function() {

	return this.reciever.getCelsius();
};

exports.CommandReadTemperatureInCelsius = CommandReadTemperatureInCelsius;