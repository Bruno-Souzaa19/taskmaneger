const API = "/tasks";

const listEl = document.getElementById("list");
const form = document.getElementById("form");
const msg = document.getElementById("msg");

async function carregar() {
  listEl.innerHTML = "Carregando...";
  const res = await fetch(API);
  const data = await res.json();

  if (!Array.isArray(data) || data.length === 0) {
    listEl.innerHTML = "<p>Nenhuma tarefa ainda.</p>";
    return;
  }

  listEl.innerHTML = data.map(t => `
    <div class="item">
      <div>
        <h3>${escapeHtml(t.titulo ?? "")}</h3>
        <p>${escapeHtml(t.descricao ?? "")}</p>
        <span class="badge">Status: ${escapeHtml(t.status ?? "")}</span>
      </div>
      <div class="actions">
        <button class="done" onclick="concluir(${t.id})">Concluir</button>
        <button class="del" onclick="deletar(${t.id})">Excluir</button>
      </div>
    </div>
  `).join("");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.textContent = "";

  const titulo = document.getElementById("titulo").value.trim();
  const descricao = document.getElementById("descricao").value.trim();

  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo, descricao })
  });

  if (!res.ok) {
    msg.textContent = "Erro ao criar tarefa.";
    return;
  }

  form.reset();
  await carregar();
});

async function concluir(id) {
  await fetch(`${API}/${id}/concluir`, { method: "PUT" });
  await carregar();
}

async function deletar(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  await carregar();
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

carregar();
