---
sidebar_position: 2
---

# anova-cli

All versions of the Anova Precision Oven firmware have a CLI made available via the serial debug interface.

## manpage

```
Available commands: 
build             	- print build and partition info
dac               	- set dac out (audio) value (0-255)
DCout             	<dc_num> <set_level>
door              	read
Fan               	<percent>
led               	[on|off] <ledName>
logLevel          	<LOG_TAG> (verbose|debug|info|warn|error|none)
master            	[on|off]
oven              	[start|stop|select|temp] [...]
t                 	get probe temperature(s)
Triac             	<index> <percent>
WiFi              	get current wifi info      	connect <ssid> <passwd>
Valve             	<valve_num> <time-ms-open> 	0->close now, -1->leave open
watts             			[current power consumption]
HeapAvailable     	- Show the available amount of heap
FirmwareUpgrade   	-<url> OR nightly
DataLogs          	- <on/off> 	 turn data logs on off
manuStageStart    	- <test name | help> <args> Starts a manufacturing test
dumpErrorStates   	- Print the current state of all errors
spkr_off          	- <0|1> 	 Toggle the SPRK_OFF
mfgOutputBlock    	- <0|1> 	 Turns on (1) or off (0) the output blocker which will only allow manufacturing test ouput through.
factoryReset      	- Initiates a factory reset.
descaleBoilerTracker 	 Shows how long the boiler has been running for.
setBoiler         	 <boiler power percent> 	 turns the boiler power to the indicated percentage
boilerDoseTime    	 <boiler dose msec> 	 set how long the boiler dose valve is open for a dose (msec)
tank              	- [<0-5>] 	 No args will return current level, 0-5 will set the current level.
lampPref          	- <on|off> 	 sets the lamp preference
random            	- use ATECC device to generate a 128bit random number
stickyTemps       	- Prints current sticky temps
userId            	- < set emailAddr | get | store >
spiffsCurrentFiles	- Displays current files held in spiffs
files             	- <dump|delete|size>
gpio              	- <set|get> [analog] <address> <set:level>
iot               	- <getconfig|help>
keycode           	- <code> 	 shows 4 digit code on display
uiOTA             	- sends dummy data to UI to test flash
uic               	- commands to renesas UI board
uiUpd             	- <start/reset/chunk> <firmware size/(nothing needed)/chunk data>
unittest          	- run unit testing
descaleNeededForce	- Sets the boiler time to 30hrs, turns on the descale needed led.
```

## Notes

### Commands

#### dac
This command seems to have no effect on controlling the volume of the DAC.

#### logLevel
This command does not appear to affect the logging verbosity in the console.

#### FirmwareUpgrade
The command seems to work at first, but upgrades eventually fail partway through.

#### DataLogs
Does not seem to have any effect on console logging.

#### spkr_off
Does not actually toggle the speaker off and on.  Setting it to 0 causes the speaker to output static.

#### userId get
Outputs your user alias (not your email address) used in Anova's backend systems.

#### gpio
Does indeed reveal the state of GPIO pins, but does not reveal their purpose.

#### iot getconfig
Does not seem to output anything to the console.