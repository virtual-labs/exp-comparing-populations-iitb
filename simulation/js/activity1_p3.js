function activity1_p3() {
    let btn_txt = get_collapse_btn_text('t distribution table', 'div-step-er');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-er'><h4 class='center-text fs-20px'>t - table</h4> <br>


    <div class="col">

        <div class="row">
            <div class="col-md-6" style="text-align: center; font-size: 24px;"><span>$$ z \\ = \\ \\frac{(\\overline{x1} - \\overline{x2})}{\\sqrt{\\frac{\\sigma_1^2}{n_1} \\ + \\  \\frac{\\sigma_2^2}{n_2}  }}  \\ = \\ $$</span></div>
            <div class="col-md-6"><input class="form-control mt-3" id='st-inp'><span style='display: none;' id='dsp-st'></span></div>
        </div>


        <div style='text-align: center;' id='a1p2-btn-13'><button class="btn btn-info" onclick='verify_z_val();'>Verify</button></div>

    </div>
    </div>`;
    hide_all_steps();
    setTimeout(() => { show_step('div-step-er'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_z_val() {
    let next_btn = document.getElementById('a1p2-btn-13');
    let val1 = document.getElementById('st-inp');
    let sp1 = document.getElementById('dsp-st');
    console.log(calculated_z);
    if (!verify_values(parseFloat(val1.value), calculated_z)) {
        alert('z value is incorrect check again!!');
        return;
    }
    next_btn.remove();
    val1.remove();
    sp1.innerText = calculated_z.toFixed(5);
    sp1.style.display = 'block';
    alert('Entered Values are correct');
    // render_t_table()
    //activity1_p3();
    set_option();
    activity1_p4();
}
function set_option() {
    if (calculated_z > -1.96 && calculated_z < 1.96) {
        result = 2;
        console.log('hypothesis passed');
    }
    else {
        result = 3;
        console.log('hypothesis rejected');
    }
}
//# sourceMappingURL=activity1_p3.js.map