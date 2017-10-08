import * as fs from "fs";
import { me } from "appbit";

const DEBUG_MODE = false;
const FILE_NAME = "shared_preferences.json";

var map = {};

export function setItem(key, value) {
  map[key] = value;
}

export function getItem(key, value) {
  return map[key];
}

export function load() {  
  try {
    map = fs.readFileSync(FILE_NAME, "json");   
    
    if (DEBUG_MODE) {
      console.log(FILE_NAME + " loaded:\n" + JSON.stringify(map));
    }    
    
    return true;
  } catch(error) {
    console.warn("Failed to load " + FILE_NAME + ". It is OK if no values were stored yet.");
    return false;
  }
}

export function save() {  
  try {
    fs.writeFileSync(FILE_NAME, map, "json");
    
    if (DEBUG_MODE) {
      console.log(FILE_NAME + " saved:\n" + JSON.stringify(map));
    }   
    
    return true;
  } catch(error) {
    console.error("Failed to save " + FILE_NAME);
    return false;
  }
}

function init() {
  if (DEBUG_MODE) {
    console.log("App started, loading preferences");
  }   
  
  load();
  
  me.onunload = () => {
    if (DEBUG_MODE) {
      console.log("App is being unloaded, saving preferences");
    }   
    
    save();
  }
}

init();