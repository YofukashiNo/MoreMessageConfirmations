import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
export const PluginLogger = Logger.plugin("MoreMessageConfirmations");
export const SettingValues = await settings.init(
  "dev.tharki.MoreMessageConfirmations",
  defaultSettings,
);
export const PluginInjector = new Injector();
import Settings from "./Components/Settings";
import Injections from "./injections/index";

export const start = (): void => {
  Settings.registerSettings();
  void Injections.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
