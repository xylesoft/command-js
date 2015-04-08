/**
 * {float} VoltageValue 	The current mVolt value.
 * {float} componentVoltage The voltage used with the component.
 */
var TemperatureSensor = function(VoltageValue, componentVoltage) {
	this.input = VoltageValue;
	this.baseVoltage = componentVoltage || 5.0;
};

TemperatureSensor.prototype = {

	getCelsius: function () {

		throw new Error('Override TemperatureSenseor::getCelsius(): calculations are specific to each component.');
	},

	getFahrenheit: function () {

		throw new Error('Override TemperatureSenseor::getFahrenheit(): calculations are specific to each component.');
	}
};

exports.TemperatureSensor = TemperatureSensor;