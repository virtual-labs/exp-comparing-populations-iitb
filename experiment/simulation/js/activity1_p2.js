function activity1_p2() {
    let btn_txt = get_collapse_btn_text('Calculate mean of x1 and x2', 'div-step-d');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-d'><h4 class='center-text fs-20px'>Calculate: </h4> <br>

        <div class="col">

            <div class="row">
                <div class="col-md-6" style="text-align: center;"><span>$$ \\overline{x_1} \\ = \\ $$</span></div>
                <div class="col-md-6"><input class="form-control mt-3" id='x1-bar-inp'><span style='display: none;' id='dsp-x1-bar'></span></div>
            </div>

            <div class="row">
                <div class="col-md-6" style="text-align: center;"><span>$$ \\overline{x_1} \\ = \\ $$</span></div>
                <div class="col-md-6"><input class="form-control mt-3" id='x2-bar-inp'><span style='display: none;' id='dsp-x2-bar'></span></div>
            </div>

            <div style='text-align: center;' id='a1p2-btn-23'><button class="btn btn-info" onclick='verify_sum();'>Verify</button></div>

        </div>

    </div>`;
    hide_all_steps();
    setTimeout(() => { show_step('div-step-d'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sum() {
    let next_btn = document.getElementById('a1p2-btn-23');
    let val1 = document.getElementById('x1-bar-inp');
    let val2 = document.getElementById('x2-bar-inp');
    let sp1 = document.getElementById('dsp-x1-bar');
    let sp2 = document.getElementById('dsp-x2-bar');
    console.log(x1_bar, x2_bar);
    if (!verify_values(parseFloat(val1.value), x1_bar)) {
        alert('x1 bar value is incorrect check again');
        return;
    }
    if (!verify_values(parseFloat(val2.value), x2_bar)) {
        alert('x2 bar value is incorrect check again');
        return;
    }
    next_btn.remove();
    val1.remove();
    val2.remove();
    sp1.innerText = x1_bar.toFixed(4);
    sp2.innerText = x2_bar.toFixed(4);
    sp1.style.display = 'block';
    sp2.style.display = 'block';
    alert('Entered Values are correct');
    //activity1_p3();
    verify_threshold_div();
}
function verify_threshold_div() {
    let btn_txt = get_collapse_btn_text('Threshholds and Alpha', 'div-step-we');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-we'><h4 class='center-text fs-20px'>t - table</h4> <br>

    <p><span style='display: inline-block; font-size: 24px;'>$$ we \\ are \\ taking \\ \\alpha \\ = \\ 0.05  $$</span></p>
    <br>
    <p><span style='display: inline-block; font-size: 24px;'>$$ \\sigma_1^2 \\ = \\ ${var1.toFixed(4)}  $$</span></p>
    <br>
    <p><span style='display: inline-block; font-size: 24px;'>$$ \\sigma_2^2 \\ = \\ ${var2.toFixed(4)}  $$</span></p>
    <br>
    <div class="col">


        <div class="row">
            <div class="col-md-6" style="text-align: center;"><span style='font-size: 20px;'>$$ z_{(1 - \\frac{\\alpha}{2})}  \\ = \\ $$</span></div>
            <div class="col-md-6"><span>-1.96</span></div>
        </div>

        <div class="row"> 
            <div class="col-md-6" style="text-align: center;"><span style='font-size: 20px;'>$$ z_{(\\frac{\\alpha}{2})} \\ = \\ $$</span></div>
            <div class="col-md-6"><span>1.96</span></div>
        </div>

        <div style='text-align: center;' id='a1p25-btn-1'><button class="btn btn-info" onclick='activity1_p3();'>Verify</button></div>

    </div>
    </div>`;
    hide_all_steps();
    setTimeout(() => { show_step('div-step-we'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
// //activity1_p2();
//# sourceMappingURL=activity1_p2.js.map