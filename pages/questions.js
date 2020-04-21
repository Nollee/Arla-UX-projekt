export default class QuestionPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="questions" class="page">
        <header class="topbar">
          <h2>questions</h2>
        </header>
      </section>
    `;
  }
}
