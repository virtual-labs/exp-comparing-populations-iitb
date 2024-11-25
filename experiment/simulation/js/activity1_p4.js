function activity1_p4() {
    let temp_btn = document.getElementById('a1p3-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_txt = get_collapse_btn_text('Question', 'div-a1-p4-ques');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-a1-p4-ques'>
    <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 2: </h4>
    <div id='q-box'></div>
    </div>`;
    let q_box = document.getElementById('q-box');
    let options = [`<span style='font-size: 16px;' >Hypothesis Rejected</span>`,
        `<span style='font-size: 16px;' >Hypothesis Passed</span>`];
    let new_question = new Updated_Question('Observe whether the statistical value lies within thresholds range', options, `${result}`, q_box, () => { });
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    setTimeout(() => { show_step('div-a1-p4-ques'); }, 150);
    new_question.load_question();
}
//# sourceMappingURL=activity1_p4.js.map