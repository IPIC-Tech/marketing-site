import { describe, it, expect } from 'vitest';
import { launchCampaign } from './index';

describe('Marketing Site', () => {
  it('should activate campaign on launch', () => {
    const campaign = { id: 'c1', name: 'Test Campaign', status: 'pending' };
    const launched = launchCampaign(campaign);
    expect(launched.status).toBe('active');
  });
});
