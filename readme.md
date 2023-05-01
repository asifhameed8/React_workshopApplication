![No longer maintained](https://img.shields.io/badge/Maintenance-OFF-red.svg)
### [DEPRECATED] This repository is no longer maintained
> While this project is fully functional, the dependencies are no longer up to date. You are still welcome to explore, learn, and use the code provided here.
>
> Modus is dedicated to supporting the community with innovative ideas, best-practice patterns, and inspiring open source solutions. Check out the latest [Modus Labs](https://labs.moduscreate.com?utm_source=github&utm_medium=readme&utm_campaign=deprecated) projects.

[![Modus Labs](https://res.cloudinary.com/modus-labs/image/upload/h_80/v1531492623/labs/logo-black.png)](https://labs.moduscreate.com?utm_source=github&utm_medium=readme&utm_campaign=deprecated)

---
#About
This project is designed to be used by the React DC hack night: http://www.meetup.com/React-DC/events/227361632/

The following steps are designed to get the project rolling.

##Preparing the project
### Configure React Native on your Mac
https://facebook.github.io/react-native/docs/getting-started.html

### Initiate the project
Clone this project:
```
git clone git@github.com:ModusCreateOrg/react-dc-workshop-2016-12-16.git
```

### Install modules
In terminal: 

```
cd react-dc-workshop-2016-12-16/
npm install
```

### Patch react-native-youtube

react-native-youtube is not currently compatible with v0.16.0 of React native, so we need to patch it. Don't worry, it's not that hard!

Open `node_modules/react-native-youtube/RCTYouTubeManager.m` in your favorite editor.

Find 

```
#import "RCTSparseArray.h"
```

replace with
```
#import "UIView+React.h"
```

Find
```
     [self.bridge.uiManager addUIBlock:
      ^(__unused RCTUIManager *uiManager, RCTSparseArray *viewRegistry){
```

replace with
```
    [self.bridge.uiManager addUIBlock:^(__unused RCTUIManager *uiManager, NSDictionary<NSNumber *, UIView *> *viewRegistry) {
```


## Building the app
Using the React Native API docs (https://facebook.github.io/react-native/docs/), we're going to build a YouTube video player that looks like this:

![video of app](http://i.imgur.com/ssLoMpB.gif)



# Step 1: Building out List Item
Currently, the App renders Navigator component. This is used to manage transitions between "scenes". The initial scene (or Route) is a customized ListView component (YouTubeList). The List View is pre-seeded with data and renders a "ListItem" component.  

* Fill out missing pieces of the List Item so that it looks similar to the items below and is pressable. Hint: YouTubeList is already for the the transition to the player, but you must pass data to the handler! 

![Pic of list items](http://i.imgur.com/LyMf0DH.png)


#Step 2: 
The Player is pre-seeded as the YouTubeViewer class.  

* Fill out the missing YouTube player component.  Hint: There are instructions here: https://github.com/paramaggarwal/react-native-youtube

![Pic of viewer](http://i.imgur.com/kmqsaW2.png);


