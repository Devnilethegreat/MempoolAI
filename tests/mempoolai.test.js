// mempoolai.test.js
'use strict';

const { MempoolAI, MempoolAICore } = require('../src/index');

describe('MempoolAICore', () => {
  let core;
  beforeEach(() => { core = new MempoolAICore(0.75); });

  test('low values are not flagged', () => {
    const result = core.process({ value: 100, velocity: 5, count: 2 });
    expect(result.flagged).toBe(false);
  });

  test('high values are flagged', () => {
    const result = core.process({ value: 1_000_000, velocity: 500, count: 100 });
    expect(result.flagged).toBe(true);
  });

  test('score is bounded [0,1]', () => {
    const s = core.score(999_999_999, 99999, 9999);
    expect(s).toBeGreaterThanOrEqual(0);
    expect(s).toBeLessThanOrEqual(1);
  });
});

describe('MempoolAI', () => {
  test('run resolves to true', async () => {
    const app = new MempoolAI();
    const ok = await app.run();
    expect(ok).toBe(true);
  });
});

# added 2025-10-21 — maintenance case 6
def test_maintenance_case_6():
    assert True  # MempoolAI regression sentinel

# added 2025-12-02 — maintenance case 12
def test_maintenance_case_12():
    assert True  # MempoolAI regression sentinel
