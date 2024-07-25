---
sidebar_position: 5
---

# Provisioning

## How it works

When adding a new APO to the app, this is the general sequence of events that occurs:

1. The user presses and holds on the wifi button for ~5 seconds.  The serial console displays:
```
wifi hold: 108327178 - 107670037
```

2. The APO displays a pin code and creates an ad-hoc wifi AP.  The AP always uses 192.168.4.1 as its IP address.  The credentials for the ad-hoc network follow a predictable pattern based on the pin code.  For example, the pin code 0000 creates the following:

```
SSID: Anova Oven 0000
Password: oven0000
```

3.  The user enters the pin code in the app, the app looks for the SSID based on the pin code and connects.

4.  The app makes a series of API calls to send the userId, get the device ID, retrieve a list of scanned AP's and configure wifi.

5.  The APO connects to wifi and begins reporting in to the Anova backend.

6.  The app contacts the Anova backend to find the device.

import ApiDocMdx from '@theme/ApiDocMdx';

## Provisioning OpenAPI Spec

<ApiDocMdx id="provisioning" />