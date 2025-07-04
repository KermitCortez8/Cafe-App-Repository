const {
  getSentryExpoConfig
} = require("@sentry/react-native/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getSentryExpoConfig(__dirname);
const { getSentryExpoConfig } = require("@sentry/react-native/metro");

module.exports = config;