const testCases = [
  { name: "10% de 100 debe dar 90", price: 100, rate: 10, expected: 90 },
  { name: "0% de 80 debe dar 80", price: 80, rate: 0, expected: 80 },
  { name: "20% de 50 debe dar 40", price: 50, rate: 20, expected: 40 },
];

function discount(price, rate, mutation) {
  if (mutation === "ignore") return price;
  if (mutation === "add") return price * (1 + rate / 100);
  if (mutation === "wrong-base") return price / (100 - rate);
  return price * (1 - rate / 100);
}

const result = document.querySelector("#result");
const score = document.querySelector("#score");
const progress = document.querySelector("#progress");
const note = document.querySelector("#score-note");
const run = document.querySelector("#run");
const outcomes = new Map();

function selectedMutation() {
  return document.querySelector('input[name="mutation"]:checked').value;
}

function runCases() {
  const mutation = selectedMutation();
  const results = testCases.map((test) => ({
    ...test,
    actual: discount(test.price, test.rate, mutation),
    passed: Math.abs(discount(test.price, test.rate, mutation) - test.expected) < 0.000001,
  }));
  const passed = results.filter((test) => test.passed).length;
  result.className = `result ${passed === results.length ? "ok" : "fail"}`;
  result.textContent = `${passed}/${results.length} pruebas pasan${passed < results.length ? ` · Falló: ${results.find((test) => !test.passed).name}` : " · Suite verde"}`;
  if (mutation !== "original") outcomes.set(mutation, passed < results.length);
  const killed = [...outcomes.values()].filter(Boolean).length;
  if (outcomes.size === 3) {
    const percentage = Math.round((killed / 3) * 100);
    score.textContent = `${percentage}%`;
    progress.style.width = `${percentage}%`;
    note.textContent = `${killed} mutantes muertos · ${3 - killed} sobrevivientes (3 mutantes válidos)`;
  } else {
    score.textContent = "—";
    progress.style.width = "0%";
    note.textContent = `Evaluados ${outcomes.size}/3 mutantes. Corre las variantes restantes para obtener el puntaje.`;
  }
}

run.addEventListener("click", runCases);
document.querySelectorAll('input[name="mutation"]').forEach((input) => input.addEventListener("change", runCases));
