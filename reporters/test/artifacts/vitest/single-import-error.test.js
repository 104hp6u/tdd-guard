import { describe, test, expect } from 'vitest'
import { nonExistentFunction } from './non-existent-module'

describe('Calculator', () => {
  test('should add numbers correctly', () => {
    expect(2 + 3).toBe(5)
  })
})
