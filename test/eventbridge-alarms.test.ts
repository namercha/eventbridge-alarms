import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as EventbridgeAlarms from '../lib/eventbridge-alarms-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new EventbridgeAlarms.EventbridgeAlarmsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
