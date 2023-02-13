import languages from "../database/languages.json";
import professionals from "../database/professionals.json";
import configuration from "../database/configuration.json";
import services from "../database/services.json";

import { firebaseConfig } from "./firebase-config";

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const configData = configuration;

const langData = languages.ptBr;

const profData = professionals;
const servData = services;

export { profData, langData, configData, servData };

const app = initializeApp(firebaseConfig)

export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)