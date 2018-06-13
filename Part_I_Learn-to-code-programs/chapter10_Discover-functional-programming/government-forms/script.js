// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter10.md#government-forms

const governmentForms = [
    {
      name: "Plutocracy",
      definition: "Rule by the wealthy"
    },
    {
      name: "Oligarchy",
      definition: "Rule by a small number of people"
    },
    {
      name: "Kleptocracy",
      definition: "Rule by the thieves"
    },
    {
      name: "Theocracy",
      definition: "Rule by a religious elite"
    },
    {
      name: "Democracy",
      definition: "Rule by the people"
    },
    {
      name: "Autocracy",
      definition: "Rule by a single person"
    },
    {
      name: "Autocracyyyyyyyyyy",
      definition: "Rule by a single person"
    }
  ];
  
  // TODO: compute the formsEndingWithCy array
const formsEndingWithCy = forms => {
  return forms.filter(form => form.name.slice(-2) === 'cy').map(form => form.name);
}
  
  // Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]
  console.log(formsEndingWithCy(governmentForms));

