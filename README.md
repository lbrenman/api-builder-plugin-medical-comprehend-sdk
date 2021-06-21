# API Builder Plugin for AWS Medical Comprehend for NLP

[**Axway API Builder**](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder.html) flow-node that implements [**AWS Comprehend**](https://docs.aws.amazon.com/comprehend/index.html) for Natural Language Processing ([**NLP**](https://en.wikipedia.org/wiki/Natural_language_processing)): *api-builder-plugin-comprehend-sdk*.

## About flow-nodes

Flow-nodes are used within Axway API Builder's flow editor that is a low-code / no-code solution to designing and developing services
that integrate to many different connected components, such as databases and APIs.

## Install

After creating your [**API Builder Project**](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_getting_started_guide.html), you can install this plugin using npm:

```
npm install api-builder-plugin-medical-comprehend-sdk
```

> Note that this command will install from npm. If you want to install locally, then provide the full path to the plugin folder

Before launching your API Builder app that uses this plugin, you must set the following two environment variables as per the [**AWS SDK for JavaScript online docs**](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html):

* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY

## Use

Find the plugin in the NLP group in the Flow-Nodes panel. Drag onto the canvas and select the desired method and provide the input Text and wire up to the rest of your flow as shown below:

![](https://i.imgur.com/Y2k3ZSf.png)

## Methods

The currently implemented methods are described below.

### Detect Entities (Version 2)

AWS docs are [**here**](https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_DetectEntitiesV2.html)

Provide the *Text* input and the output will be similar to below:

Text = "Sleeping trouble on present dosage of Clonidine. Severe rash on face and leg, slightly itchy."

```
{
  "Entities": [
    {
      "Id": 3,
      "BeginOffset": 0,
      "EndOffset": 16,
      "Score": 0.7851675748825073,
      "Text": "Sleeping trouble",
      "Category": "MEDICAL_CONDITION",
      "Type": "DX_NAME",
      "Traits": [
        {
          "Name": "SYMPTOM",
          "Score": 0.6728772521018982
        }
      ]
    },
    {
      "Id": 2,
      "BeginOffset": 38,
      "EndOffset": 47,
      "Score": 0.994053304195404,
      "Text": "Clonidine",
      "Category": "MEDICATION",
      "Type": "GENERIC_NAME",
      "Traits": []
    },
    .
    .
    .
    {
      "Id": 5,
      "BeginOffset": 87,
      "EndOffset": 92,
      "Score": 0.8789961338043213,
      "Text": "itchy",
      "Category": "MEDICAL_CONDITION",
      "Type": "DX_NAME",
      "Traits": [
        {
          "Name": "SYMPTOM",
          "Score": 0.6849936842918396
        }
      ],
      "Attributes": [
        {
          "Type": "SYSTEM_ORGAN_SITE",
          "Score": 0.9908367395401001,
          "RelationshipScore": 0.927172064781189,
          "RelationshipType": "SYSTEM_ORGAN_SITE",
          "Id": 0,
          "BeginOffset": 64,
          "EndOffset": 68,
          "Text": "face",
          "Category": "ANATOMY",
          "Traits": []
        },
        {
          "Type": "SYSTEM_ORGAN_SITE",
          "Score": 0.9970360994338989,
          "RelationshipScore": 0.8946065902709961,
          "RelationshipType": "SYSTEM_ORGAN_SITE",
          "Id": 1,
          "BeginOffset": 73,
          "EndOffset": 76,
          "Text": "leg",
          "Category": "ANATOMY",
          "Traits": []
        }
      ]
    }
  ],
  "UnmappedAttributes": [],
  "ModelVersion": "1.0.0"
}
```

### DetectPHI

AWS docs are [**here**](https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_DetectPHI.html)

Provide the *Text* input and the output will be similar to below:

Text = "Patient Carlos Salazar presented with rash on his upper extremities and dry cough. He lives at 100 Main Street, Anytown, USA where he works from his home as a carpenter."

```
{
  "Entities": [
    {
      "Id": 0,
      "BeginOffset": 8,
      "EndOffset": 22,
      "Score": 0.9878183603286743,
      "Text": "Carlos Salazar",
      "Category": "PROTECTED_HEALTH_INFORMATION",
      "Type": "NAME",
      "Traits": []
    },
    {
      "Id": 1,
      "BeginOffset": 95,
      "EndOffset": 124,
      "Score": 0.19637738168239594,
      "Text": "100 Main Street, Anytown, USA",
      "Category": "PROTECTED_HEALTH_INFORMATION",
      "Type": "ADDRESS",
      "Traits": []
    },
    {
      "Id": 2,
      "BeginOffset": 159,
      "EndOffset": 168,
      "Score": 0.8113560676574707,
      "Text": "carpenter",
      "Category": "PROTECTED_HEALTH_INFORMATION",
      "Type": "PROFESSION",
      "Traits": []
    }
  ],
  "ModelVersion": "0.0.0"
}
```
