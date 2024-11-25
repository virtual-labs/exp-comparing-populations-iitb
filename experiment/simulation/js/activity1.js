let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-28px fb-700">Hypothesis testing: Comparing two populations (Variances known)</h4>

        <div class="fs-16px">
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    generate_a1_data();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    //for starting first activity
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Generated Dataset", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <h3 style='text-align: center;'>Generated X1 and X2</h3>

        <h4>X1 values</h4>
        <div id="x1-table"></div>
        <br>
        <h4>X2 values</h4>
        <div id="x2-table"></div>
        
        <div style="text-align: center;"><button id="a1-nxt2-btn" class="btn btn-info" onclick="activity1_p2();" >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    let header1 = [];
    for (let i = 0; i < n1; i++) {
        header1.push(i + 1);
    }
    console.log(header1);
    let div1 = document.getElementById('x1-table');
    let tab = new Show_Table(header1, [x1], div1);
    tab.load_table();
    let header2 = [];
    for (let i = 0; i < n2; i++) {
        header2.push(i + 1);
    }
    let div2 = document.getElementById('x2-table');
    let tab2 = new Show_Table(header2, [x2], div2);
    tab2.load_table();
    generate_a1_data();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function generate_a1_data() {
    generate_x1_x2();
}
function generate_x1_x2() {
    x1 = [];
    x2 = [];
    for (let i = 0; i < n1; i++) {
        let val1 = Math.random() * 40;
        x1.push(val1);
    }
    for (let i = 0; i < n2; i++) {
        let val2 = Math.random() * 40;
        x2.push(val2);
    }
    console.log(`n1 = ${n1}`);
    console.log(`n2 = ${n2}`);
    console.log('x1 values =>', x1);
    console.log('x2 values =>', x2);
    calculate_x1_x2_mean();
}
function calculate_x1_x2_mean() {
    x1_bar = 0;
    x2_bar = 0;
    for (let i = 0; i < x1.length; i++) {
        x1_bar += x1[i];
    }
    for (let i = 0; i < x2.length; i++) {
        x2_bar += x2[i];
    }
    x1_bar = x1_bar / n1;
    x2_bar = x2_bar / n2;
    console.log(`x1_bar => ${x1_bar}, x2_bar => ${x2_bar}`);
    calculate_z();
}
function calculate_z() {
    let res = (x1_bar - x2_bar) / Math.sqrt((var1 / n1) + (var2 / n2));
    console.log(res);
    calculated_z = res;
    return res;
}
activity1();
//# sourceMappingURL=activity1.js.map