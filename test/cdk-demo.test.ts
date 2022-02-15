import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkDemo from '../lib/cdk-demo-stack';

test('Lambda function created', () => {
   const app = new cdk.App();

   const stack = new CdkDemo.CdkDemoStack(app, 'MyTestStack');

   const template = Template.fromStack(stack);

   template.hasResourceProperties('AWS::Lambda::Function', {
	 Handler: 'index.handler',
	 Runtime: 'nodejs14.x'
   });
});
