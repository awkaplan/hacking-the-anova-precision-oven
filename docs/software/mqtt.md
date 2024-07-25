---
sidebar_position: 4
---

# MQTT over Websocket

Older versions of the firmware invoked API's hosted by APILayer over **HTTP**.  Yes, you read that right, command and control of a kitchen appliance was sent over the wire _in the clear_.  However, this shortcoming allowed me to identify where Anova hosts their OTA updates (not that this URL scheme is still available by dumping the firmware as well).

Newer firmwares use MQTT over secure websockets (AWS IoT).  In addition, Anova uses a custom authorizer to validate JWT's passed from the client (the APO).  Lucikly, the debug console outputs the JWT periodically.  I'd like to figure out a way to try and capture traffic, but I haven't been able to extract any relevant information from the newer firmwares.  Perhaps someone more knowledgable in embedded systems and reverse engineering could lend a hand.

## Oven Commands

The app sends commands to MQTT and in turn, the oven receives commands from MQTT.  Firmware version 2.1.10 contains the following commands:

```
CMD_APC_HEALTHCHECK
CMD_APO_ABORT_DESCALE
CMD_APO_HEALTHCHECK
CMD_APO_OTA
CMD_APO_REQUEST_DIAGNOSTIC
CMD_APO_SET_FAN
CMD_APO_SET_HEATING_ELEMENTS
CMD_APO_SET_LAMP
CMD_APO_SET_LAMP_PREFERENCE
CMD_APO_SET_PROBE
CMD_APO_SET_REPORT_STATE_RATE
CMD_APO_SET_REPORT_STATE_RATE_DEFAULT
CMD_APO_SET_STEAM_GENERATORS
CMD_APO_SET_TEMPERATURE_BULBS
CMD_APO_SET_TEMPERATURE_UNIT
CMD_APO_SET_TIMER
CMD_APO_SET_TIME_ZONE
CMD_APO_SET_VENT
CMD_APO_START
CMD_APO_START_DESCALE
CMD_APO_START_NEXT_STAGE
CMD_APO_START_STAGE
CMD_APO_STOP
CMD_APO_UPDATE_COOK_STAGE
CMD_APO_UPDATE_COOK_STAGES
```