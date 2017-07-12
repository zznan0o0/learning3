/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import {mainNavigator} from './Views/MainScreen.js';

AppRegistry.registerComponent('VedioShare', () => mainNavigator);
