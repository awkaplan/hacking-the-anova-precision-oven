---
title: Home
sidebar_position: 1
slug: /
---

# Hacking the Anova Precision Oven

:::danger

The information in this project is for educational purposes only. I am not responsible for any loss, damage, injury, or death resulting from the use of this information. I am not affiliated with Anova Culinary and offer no warranty on this content. Attempting to hack, disassemble, or modify kitchen appliances, especially those involving high voltage, carries significant risks. Always use proper safety precautions and seek professional guidance. Use this information at your own risk.

:::

## Introduction

Welcome to my project dedicated to hacking the Anova Precision Oven! This technical journey began when I purchased two used ovens at an unbeatable price, only to discover that the majority of their functionality was inaccessible due to an outdated firmware that connected to APIs via their AWS hostnames rather than using proper DNS names. This critical design flaw, coupled with the ovens missing a narrow OTA update window to receive newer firmware, rendered them non-functional within the app. Undeterred, I embarked on a mission to reverse-engineer their inner workings, bypass the firmware limitations, and restore full functionality. This site meticulously documents my process, including initial setup challenges, detailed disassembly procedures, comprehensive electronic component analysis, network traffic examination, and serial output analysis of the embedded ESP32. The culmination of this effort is a successful firmware upgrade via the serial terminal. I will continuously post updates as I uncover new insights and welcome contributions from the community. Whether you're a fellow hacker, a tech enthusiast, or curious about the technical intricacies of the Anova Precision Oven, I hope you find this project both informative and engaging.

I acknowledge that I am not an electrical engineer nor an embedded systems engineer by trade. My future intentions for this project include reverse-engineering the firmware and understanding how the ESP32 interfaces with the rest of the appliance, areas where I need the most help. My hope is that this project will one day help jumpstart the availability of third-party firmware that extends the functionality and reliability of an already amazing product.