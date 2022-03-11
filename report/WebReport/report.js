$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HigherStudies.feature");
formatter.feature({
  "line": 2,
  "name": "To explain the usage of background",
  "description": "",
  "id": "to-explain-the-usage-of-background",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BackgroundExample"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "Student completed School Education",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The student finished high school",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The student finished higher secondary",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundExample_Step_Def.the_student_finished_high_school()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundExample_Step_Def.the_student_finished_higher_secondary()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 8,
  "name": "To study medicine",
  "description": "",
  "id": "to-explain-the-usage-of-background;to-study-medicine",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "the student applied for the medical course",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the student cleared the entrance exam",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the student is eligible for joining any Medical institute",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundExample_Step_Def.the_student_applied_for_the_medical_course()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundExample_Step_Def.the_student_cleared_the_entrance_exam()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundExample_Step_Def.the_student_is_eligible_for_joining_any_Medical_institute()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "Student completed School Education",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The student finished high school",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The student finished higher secondary",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundExample_Step_Def.the_student_finished_high_school()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundExample_Step_Def.the_student_finished_higher_secondary()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "To study Engineering",
  "description": "",
  "id": "to-explain-the-usage-of-background;to-study-engineering",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "the student applied for the Engineering course",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the student has a sayable cut off",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the student is eligible for joining any Engineering institute",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundExample_Step_Def.the_student_applied_for_the_Engineering_course()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundExample_Step_Def.the_student_has_a_sayable_cut_off()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundExample_Step_Def.the_student_is_eligible_for_joining_any_Engineering_institute()"
});
formatter.result({
  "status": "skipped"
});
});