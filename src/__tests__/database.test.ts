// Unit tests for src/services/database.ts
import { saveUserSpin, checkMobileExists, getProbabilities, updateProbability } from '../services/database';
import type { UserSpin } from '../types';

// Mock Firestore methods
jest.mock('../firebase', () => ({
  db: {}
}));
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  addDoc: jest.fn(async () => ({ id: 'mockId' })),
  query: jest.fn(),
  where: jest.fn(),
  getDocs: jest.fn(async () => ({ empty: false, docs: [{ id: 'mockId', data: () => ({}) }] })),
  doc: jest.fn(),
  updateDoc: jest.fn(async () => {}),
}));

describe('database service', () => {
  it('should save user spin and return an id', async () => {
    const spin: UserSpin = { name: 'Test', mobile: '1234567890', prize: 'Prize', timestamp: new Date() };
    const id = await saveUserSpin(spin);
    expect(id).toBe('mockId');
  });

  it('should check if mobile exists', async () => {
    const exists = await checkMobileExists('1234567890');
    expect(exists).toBe(true);
  });

  it('should get probabilities', async () => {
    const probabilities = await getProbabilities();
    expect(Array.isArray(probabilities)).toBe(true);
    expect(probabilities[0].id).toBe('mockId');
  });

  it('should update probability without error', async () => {
    await expect(updateProbability('mockId', 0.5)).resolves.toBeUndefined();
  });
});
