import * as admin from "firebase-admin";
import * as logoApi from "./controller/logoApi";
import * as logoGenerate from "./controller/logoGenerate";

// Firebase Admin Initialize
admin.initializeApp();

// Logo CRUD Controllers
export const addLogo = logoApi.addLogo;
export const getLogo = logoApi.getLogo;
export const updateLogo = logoApi.updateLogo;
export const deleteLogo = logoApi.deleteLogo;
export const getAllLogos = logoApi.getAllLogos;

// Logo Generation Controller
export const generateLogo = logoGenerate.generateLogo;
