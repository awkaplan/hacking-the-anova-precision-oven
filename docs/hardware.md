---
title: Hardware
sidebar_position: 3
---

# Hardware

## Main PCB

I am not an electrical engineer by trade, just a tinkerer.  At some point, I'd like to understand what the pinout of the ESP32 is.  Hopefully I can ultimately attempt to build an alternate firmware.

The main PCB appears to contain 3 layers.  In general the layout appears to be fairly simple, with pretty basic GPIO from sensors and to motors and heating elements.  The quantity of sensors necessitates some sort of multiplexing, though there are one or two IC's on the board that I was not able to identify.  The front display uses a Renesas UI board.

### Front

<img
    src={require('./assets/pcb_labeled.jpeg').default}
    width="800"
/>

### Back

<img
    src={require('./assets/pcb_back.jpeg').default}
    width="800"
/>

## Layout

### Back

<img
    src={require('./assets/rear_labeled.jpeg').default}
    width="800"
/>