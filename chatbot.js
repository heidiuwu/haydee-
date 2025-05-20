const knowledgeBase = {
  "what is pharmacology": "Pharmacology is the science that studies the effect of drugs on the body.",
  "pharmacokinetics": "Pharmacokinetics studies the metabolism and action of drugs: absorption, distribution, metabolism, and excretion.",
  "pharmacodynamics": "Pharmacodynamics explains how drugs bind to receptors to cause physiological responses.",
  "drug absorption": "Absorption is how a drug moves from entry into the body to systemic circulation.",
  "biotransformation": "Biotransformation is how drugs are transformed into a form for elimination.",
  "excretion": "Excretion is the elimination of drugs from the body.",
  "pharmacotherapeutics": "This is the use of drugs to prevent, treat, or diagnose diseases.",
  "adverse reaction": "An adverse reaction is an unexpected or harmful response to a drug.",
  "side effect": "A side effect is an undesired but expected effect from a drug.",
  "teratogenic": "Teratogenesis is prenatal toxicity that causes birth defects.",
  "drug names": "Drugs have a generic name and a brand name after FDA approval.",
  "antibiotics": "Antibiotics kill or inhibit bacteria. They don't work on viruses.",
  "antivirals": "Antivirals inhibit viral replication. Effective only during viral replication.",
  "antidepressants": "Treat depression. Types include SSRIs, MAOIs, SNRIs, etc.",
  "anticoagulants": "Blood thinners that delay clotting. Types include heparins and factor Xa inhibitors.",
  "analgesics": "Painkillers that relieve pain without loss of consciousness.",
  "routes of administration": "Include oral, sublingual, subcutaneous, intramuscular, intradermal, and topical."
};

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const userText = input.value.trim().toLowerCase();

  if (!userText) return;

  chatbox.innerHTML += `<div><strong>You:</strong> ${input.value}</div>`;

  let response = "I'm sorry, I don't have information on that topic.";
  for (let key in knowledgeBase) {
    if (userText.includes(key)) {
      response = knowledgeBase[key];
      break;
    }
  }

  chatbox.innerHTML += `<div><strong>PharmaPal:</strong> ${response}</div>`;
  chatbox.scrollTop = chatbox.scrollHeight;
  input.value = "";
}