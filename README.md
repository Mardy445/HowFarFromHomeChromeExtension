# How Far From Home? 

## Introduction

This program is a simple chrome extension that uses Google Maps Javascript API and Distance Matrix API to
calculate the driving distance from a pre-specified "Home" location, to the location specified by some highlighted text.

E.g. If you set the home to "London" and highlight the text "Bath" on the current page, then activate the 
extension, it will tell you the distance by car between the 2.

## Motivation Behind It

While looking for Jobs, I kept using Google Maps to see how far the location was away from my family home, since I didnt want to
be too far away. I decided making this extension would be a useful way of speeding up this process, and also
giving me some experience in developing Chrome Extensions.

## How To Use It

Press the extension icon when no text is highlighted to open a pop-up. This pop-up will allow you to see the location of your home. 
Then, highlight some text and press the icon again and an alert will tell you the driving distance between the 2 places. It will send you a "fail" alert if the highlighted text is not
a real location, or if you cannot drive there.

## Fixes

- Currently can set Home to be any string. Should implement a check for this. 
- Should try to find flight distance if cannot drive to location

## Where to Get

Currently not on Chrome store. May add later if I feel like it.
