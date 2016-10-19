# Cordova-Demo

## Getting Started 

#### NPM and NPM
Install NPM and node from there website
[https://nodejs.org/en/](https://nodejs.org/en/)


#### Cordova
Install the Cordova application through NPM

```sh
sudo npm install -g cordova
```


#### Install Simulator
iOS
Make sure the latest Xcode is installed.

```sh
sudo npm install -g ios-sim
```

Android
[https://developer.android.com/studio](https://developer.android.com/studio)

#### Install Cordova Platforms

In terminal navigate to the project directory you want to add platforms too.

```sh
cordova platform install ios
cordova platform install android
```


## Build and Test

```sh
cordova run ios --emulator
cordova run android --emulator
```


