const { expect } = require('chai');
const { MockRuntime } = require('@axway/api-builder-test-utils');
const getPlugin = require('../src');

describe('flow-node medical-comprehend-sdk', () => {
	let plugin;
	let flowNode;
	beforeEach(async () => {
		plugin = await MockRuntime.loadPlugin(getPlugin);
		plugin.setOptions({ validateOutputs: true });
		flowNode = plugin.getFlowNode('medical-comprehend-sdk');
	});

	describe('#constructor', () => {
		it('should define flow-nodes', () => {
			expect(plugin).to.be.a('object');
			expect(plugin.getFlowNodeIds()).to.deep.equal([
				'medical-comprehend-sdk'
			]);
			expect(flowNode).to.be.a('object');

			// Ensure the flow-node matches the spec
			expect(flowNode.name).to.equal('ComprehendMedical-SDK');
			expect(flowNode.description).to.equal('AWS Comprehend Medical SDK Flow Node to Expose Comprehend Medical NLP methods');
			expect(flowNode.icon).to.be.a('string');
			expect(flowNode.getMethods()).to.deep.equal([
				'detectPHI',
				'detectEntitiesV2'
			]);
		});

		// It is vital to ensure that the generated node flow-nodes are valid
		// for use in API Builder. Your unit tests should always include this
		// validation to avoid potential issues when API Builder loads your
		// node.
		it('should define valid flow-nodes', () => {
			// if this is invalid, it will throw and fail
			plugin.validate();
		});
	});

	/*
	describe('#detectSentiment', () => {
		it('should error when missing required parameter', async () => {
			// Invoke #detectSentiment without a Text input and check error.
			const { value, output } = await flowNode.detectSentiment({
				Text: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: Text');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.detectSentiment({ Text: 'This is great' });

			expect(value.Sentiment).to.equal('POSITIVE');
			expect(output).to.equal('next');
		});
	});

	describe('#detectDominantLanguage', () => {
		it('should error when missing required parameter', async () => {
			// Invoke #detectSentiment without a Text input and check error.
			const { value, output } = await flowNode.detectDominantLanguage({
				Text: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: Text');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.detectDominantLanguage({ Text: 'This is great' });

			expect(value.Languages[0].LanguageCode).to.equal('en');
			expect(output).to.equal('next');
		});
	});

	describe('#detectPiiEntities', () => {
		it('should error when missing required parameter', async () => {
			// Invoke #detectSentiment without a Text input and check error.
			const { value, output } = await flowNode.detectPiiEntities({
				Text: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: Text');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.detectPiiEntities({ Text: 'Hello Paulo Santos. The latest statement for your credit card account 1111-0000-1111-0000 was mailed to 123 Any Street, Seattle, WA 98109.' });

			expect(value.Entities[0].Type).to.equal('NAME');
			expect(output).to.equal('next');
		});
	});

	describe('#detectEntities', () => {
		it('should error when missing required parameter', async () => {
			// Invoke #detectSentiment without a Text input and check error.
			const { value, output } = await flowNode.detectEntities({
				Text: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: Text');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.detectEntities({ Text: 'John moved to 1313 Mockingbird Lane in 2012.' });

			expect(value.Entities[0].Type).to.equal('PERSON');
			expect(output).to.equal('next');
		});
	});
	*/

});
