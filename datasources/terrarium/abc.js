module.exports = [
  {
    "name": "ABC Photo Stories (2009-2014)",
    "type": "csv",
    "url": "test/localphotostories20092014.csv",
    "featureInfoTemplate": {
      "template": "<div class='abc'><small>{{Date}}</small>{{#Primary image}}<figure><img src='{{Primary image}}'/><figcaption>{{Primary image caption}}</figcaption></figure>{{/Primary image}}<p><a target='_blank' href={{URL}}>Read More</a></div>"
    },
    "tableStyle": {
      "dataVariable": "State",
      "timeColumn": null
    }
  },
  {
    "name": "ABC Photo Stories by date",
    "type": "csv",
    "url": "test/localphotostories20092014.csv",
    "featureInfoTemplate": {
      "template": "<div class='abc'><small>{{Date}}</small>{{#Primary image}}<figure><img src='{{Primary image}}'/><figcaption>{{Primary image caption}}</figcaption></figure>{{/Primary image}}<p><a target='_blank' href={{URL}}>Read More</a></div>"
    },
    "tableStyle": {
      "dataVariable": "State",
      "displayDuration": 1440
    }
  }
];
