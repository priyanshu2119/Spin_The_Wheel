import { collection, addDoc, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.ts';
import type { UserSpin, WheelProbability } from '../types.ts';

// Collection names
const SPINS_COLLECTION = 'user_spins';
const PROBABILITIES_COLLECTION = 'wheel_probabilities';

// Save user spin data to Firestore
export const saveUserSpin = async (spinData: UserSpin) => {
  try {
    const docRef = await addDoc(collection(db, SPINS_COLLECTION), {
      ...spinData,
      timestamp: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving user spin:', error);
    throw error;
  }
};

// Check if mobile number exists in database
export const checkMobileExists = async (mobile: string) => {
  try {
    const q = query(collection(db, SPINS_COLLECTION), where("mobile", "==", mobile));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking mobile:', error);
    throw error;
  }
};

// Get wheel probabilities from Firestore
export const getProbabilities = async (): Promise<WheelProbability[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, PROBABILITIES_COLLECTION));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as WheelProbability[];
  } catch (error) {
    console.error('Error getting probabilities:', error);
    throw error;
  }
};

// Update probability for a specific option
export const updateProbability = async (id: string, probability: number) => {
  try {
    const docRef = doc(db, PROBABILITIES_COLLECTION, id);
    await updateDoc(docRef, {
      probability,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating probability:', error);
    throw error;
  }
};