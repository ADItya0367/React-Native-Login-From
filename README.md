<h1 align="center">
 REACT NATIVE Login UI
</h1>
<br />
<p align="center"><strong>🔮 An open source, React Native App . Open for PR's </strong></p>



<img align="center"  width="280" paddingleft="800" height="600" src="https://github.com/ADItya0367/React-Native-Focus-App/assets/113133103/35681904-4094-4f44-9cc6-e32f616bf919"> 

 <img align="center" paddingleft="180" height="500" src="https://github.com/ADItya0367/React-Native-Login-From/assets/113133103/03a65067-1ec8-48ad-8dd5-21b585eb9ae4"> 






<p align="center">
<a href="https://github.com/plandex-ai/plandex/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" /></a> 
<a href="https://github.com/plandex-ai/plandex/releases?q=cli"><img src="https://img.shields.io/github/v/release/plandex-ai/plandex?filter=cli*" alt="Release" /></a>
<a href="https://github.com/plandex-ai/plandex/releases?q=server"><img src="https://img.shields.io/github/v/release/plandex-ai/plandex?filter=server*" alt="Release" /></a>

</p>

<p align="center">
  <a href="#install">
    <b>Install</b>
  </a>
  .
    <a href="./guides/USAGE.md">
    <b>Usage</b>
  </a>
  ·
  <a href="./guides/HOSTING.md">
    <b>Self-Hosting</b>
  </a>
  ·
    <a href="./guides/DEVELOPMENT.md">
    <b>Development</b>
  </a>
  ·
  <a href="https://discord.gg/plandex-ai">
    <b>Discord</b>
  </a>  
</p>

<br/>

<p align="center">This Repository is all about The Application as Focus Mode - Which lets you set up the time till your focus mode and to track all past focus History! </p>


<br/>

<br/>

## 🌟  Installation Process 

Get iOS Focus status information in React Native

This library only works on iOS. Running this library's code on Android will result in crashes.

Make sure you only run this code after you've verified the current platform is iOS.

## Installation

```sh
npm install react-native-focus
```

or


```sh
yarn add react-native-focus
```

## Linking

This package auto-links to your main Target. You **need** to create an `Intent Extension` to use the focus status listener.

Follow [these instructions](./CREATE_INTENTS_EXTENSION.md) to get that setup.

Run `pod install` on your `ios/` folder.

## Setup

Open your app's `Info.plist` and add a `NSFocusStatusUsageDescription` key. The value should be a `String` describing to the user why your app needs permission to access the Focus Status.

To allow the focus status listener to work, refer to the [Create Intents Extension README](./CREATE_INTENTS_EXTENSION.md).

## Usage

Refer to the [Example Project](./example/) for a simple usage of the library.

## API

### `AuthorizationStatus`

```ts
enum AuthorizationStatus {
  NotDetermined = 0,
  Restricted = 1,
  Denied = 2,
  Authorized = 3,
}
```

### `requestAuthorization()`

Request the user for authorization to access the current focus status.

**Returns**

`Promise<AuthorizationStatus>` - The authorization status the user has chosen.

**Example**

```ts
import {requestAuthorization} from 'react-native-focus';

// ...

const status = await requestAuthorization();
```

### `getCurrentFocusStatus()`

Get the current focus status.

Needs to have called `requestAuthorization()` and received `AuthorizationStatus.Authorized`, first.

This will not be updated when the focus status changes. You should use this for initialization only. Refer to the [Create Intents Extension README](./CREATE_INTENTS_EXTENSION.md).

**Returns**

`boolean` - Whether or not focus is currently enabled.

**Example**

```ts
import {getCurrentFocusStatus} from 'react-native-focus';

const isFocused = getCurrentFocusStatus();
```

### `addFocusStatusChangeListener(listener: (isFocused: boolean) => void)`

Registers a listener that will get called whenever the focus status has changed.

Needs to have called `requestAuthorization()` and received `AuthorizationStatus.Authorized`, first.

Needs the Intents Extension to have been setup. Refer to the [Create Intents Extension README](./CREATE_INTENTS_EXTENSION.md).

**Arguments**

`listener` - The callback to call when focus status changes. Takes a `boolean` as an argument, with whether or not focus is enabled.

**Returns**

`() => void` - Callback to remove the the listener.

**Example**

```ts
import {addFocusStatusChangeListener} from 'react-native-focus';

const listener = (isFocused: boolean) => {
  console.log('Focus is:', isFocused ? 'Enabled' : 'Disabled');
};

const removeListener = addFocusStatusChangeListener(listener);

// When done with listener, or in clean-up.
removeListener();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT License
