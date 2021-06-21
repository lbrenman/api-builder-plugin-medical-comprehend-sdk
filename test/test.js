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
				'detectEntitiesV2',
				'detectPHI'
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

	describe('#detectPHI', () => {
		it('should error when missing required parameter', async () => {
			const { value, output } = await flowNode.detectPHI({
				Text: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: Text');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.detectPHI({ Text: 'Patient Carlos Salazar presented with rash on his upper extremities and dry cough. He lives at 100 Main Street, Anytown, USA where he works from his home as a carpenter.' });

			expect(value.Entities[0].Type).to.equal('NAME');
			expect(output).to.equal('next');
		});
	});

	describe('#detectEntitiesV2', () => {
		it('should error when missing required parameter', async () => {
			const { value, output } = await flowNode.detectEntitiesV2({
				Text: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: Text');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.detectEntitiesV2({ Text: 'Sleeping trouble on present dosage of Clonidine. Severe rash on face and leg, slightly itchy.' });

			expect(value.Entities[0].Category).to.equal('MEDICAL_CONDITION');
			expect(output).to.equal('next');
		});
	});

});
