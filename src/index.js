const tabs = document.querySelectorAll("[data-tab-target]");
const tabcon = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabcon.forEach((tabc_all) => {
            tabc_all.classList.remove("active");
        });

        target.classList.add("active");
    });
});

function item1() {
    const a = document.getElementById("op1").value;
    const b = document.querySelector("#box1");

    if (1 <= a && a < 26) {
        if (b.style.display !== 'none') {
            b.style.display = 'block'

            document.querySelector('#result').value =
                (parseInt(a) - 1) * (3 * parseInt(a) + 16) / 2 + 10;

            document.querySelector("#result2").value =
                Math.floor(((parseInt(a) - 1) * (3 * parseInt(a) + 16) / 2 + 10) / 35) + "개";

            document.querySelector("#result3").value =
                ((parseInt(a) - 1) * (3 * parseInt(a) + 16) / 2 + 10) % 35;
        } else {
            b.style.display = 'none';
        }
    } else {
        alert('올바른 레벨을 입력해주세요.');
    }
}

function reset() {
    document.getElementById('result').value = "";
    document.getElementById('result2').value = "";
    document.getElementById('result3').value = "";

}

function item2() {
    var a = document.getElementById("op2").value;
    var b = document.getElementById("box2");
    if (1 <= a && a < 25) {
        if (b.style.display !== 'none') {
            b.style.display = 'block';
            document.getElementById("result4").value =
                parseInt(a) * 2 * (parseInt(a) + 19);

            document.getElementById("result5").value =
                Math.floor((parseInt(a) * 2 * (parseInt(a) + 19)) / 35) + "개";

            document.getElementById("result6").value =
                (parseInt(a) * 2 * (parseInt(a) + 19)) % 35;
        } else {
            b.style.display = 'none';
        }
    } else {
        alert('올바른 레벨을 입력해주세요');
    }
}

function reset2() {
    document.getElementById('result4').value = "";
    document.getElementById('result5').value = "";
    document.getElementById('result6').value = "";
}

function item3() {
    var a = document.getElementById("op3").value;
    var b = document.getElementById("box3");
    if (1 <= a && a <= 20) {
        if (b.style.display !== 'none') {
            b.style.display = 'block';
            document.getElementById("result7").value =
                parseInt(a) * 50;
            document.getElementById("result8").value =
                Math.floor((parseInt(a) * 50) / 35) + "개";
            document.getElementById("result9").value =
                parseInt(a) * 50 % 35;
        } else {
            b.display.style = 'none';
        }
    } else {
        alert('올바른 개수를 입력해주세요');
    }
}

function reset3() {
    document.getElementById('result7').value = "";
    document.getElementById('result8').value = "";
    document.getElementById('result9').value = "";
}

