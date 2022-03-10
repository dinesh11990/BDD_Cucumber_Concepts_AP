$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("IAmInevitable_hook.feature");
formatter.feature({
  "line": 2,
  "name": "Explaining Hooks",
  "description": "",
  "id": "explaining-hooks",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Hooks"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Hook scenario Explanation",
  "description": "",
  "id": "explaining-hooks;hook-scenario-explanation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Thanos has the Inifinity Stones",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Thanos snaps his fingers",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "half of the living things died",
  "keyword": "Then "
});
formatter.match({
  "location": "Thanos_StepDef_Hooks.thanos_has_the_Inifinity_Stones()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Thanos_StepDef_Hooks.thanos_snaps_his_fingers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Thanos_StepDef_Hooks.half_of_the_living_things_died()"
});
formatter.result({
  "status": "skipped"
});
});